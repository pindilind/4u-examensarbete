require('dotenv').config('.env');
const argon2 = require('argon2');

const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(secretKey)
const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');

const port = 3005;

app.use(cors());
app.use("/", express.json('public'));
app.use("/images", express.static('images'));

// Hämtar alla produkter
app.get("/products", (req, res) => {
  let raw = fs.readFileSync("./database/productDB.json") //hämtar url till jsonfil
  let productList = JSON.parse(raw)
  res.json(Object.values(productList));
  /* res.json(productList)  */
});

// Hämtar ut produktkategorier
app.get("/categories", (req, res) => {
  let raw = fs.readFileSync("./database/categoryDB.json") //hämtar url till jsonfil
  let productCategoryList = JSON.parse(raw)
  res.json(Object.values(productCategoryList));
  /* res.json(productCategoryList) */
});

// Hämtar ut User
app.get('/users', async (req, res) => {
  // Hämtar
  let raw = fs.readFileSync("./database/userDB.json") //hämtar url till jsonfil
  console.log(raw)
  let userList = JSON.parse(raw);

  // Kollar om det finns ett ID
  if (req.query.id) {
    const user = userList[req.query.id]

    // Skickar svar till frontend ( 1 användare )
    res.json(user)

  } else {

    // Lämnar tillbaka svar ( hela listan med användare )
    res.json(Object.values(userList));
    console.log(userList);

  }

});

// Skapar kunden 
app.post('/users/create', async (req, res) => {

  try {
    let raw = fs.readFileSync("./database/userDB.json") //hämtar url till jsonfil
    let userData = JSON.parse(raw)
    console.log(userData)

    let newUser;

    // Kollar om det finns en body i requesten
    if (req.body) {
      newUser = req.body;
    } else {
      res.status(500);
      return;
    }

    // check that username is not already in use
    /*   if (!checkUserNameAvailable(req.body.userName)) {
  
        res.status(500).send({ message: 'Username is not available' })
        return;
      } */

    // Hashar lösenordet
    const hash = await argon2.hash(req.body.password);
    console.log(hash)

    // Lägger till ny kund i databasen
    userData.highestId++;
    userData[userData.highestId] = {
      id: userData.highestId,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      userName: req.body.userName,
      hashedPassword: hash,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    };
    console.log(userData)

    // Skickar ett OK meddekande till respons
    fs.writeFileSync("./database/userDB.json", JSON.stringify(userData));
    res.json({
      message: `customer \'${userData.highestId}\' created.`,
      customerCreated: true
    });

  } catch (err) {
    console.error(err)
    res.status(500).json(false)
  }

});


// Loggar in kunden
app.post('/users/login', async (req, res) => {

  let raw = fs.readFileSync("./database/userDB.json") //hämtar url till jsonfil
  let userData = JSON.parse(raw)
  console.log(userData)

  for (const user of Object.values(userData)) {

    // Hitta rätt user
    if (user.userName === req.body.userName) {
      const hashVerified = await argon2.verify(
        user.hashedPassword, req.body.password
      );

      // Kollar lösenordet
      if (hashVerified) {

        res.json({
          customerLogin: true,
          user,
        });
      } else {
        res.json({
          customerLogin: false,
          message: "Login failed"
        });
      }

      // Gå INTE igenom resten av kunderna
      return;
    }
  }

  // User name not found
  res.json({ message: "Login failed" });

})

// Hämtar filen från "orders.json" - se även i server.post/verify

app.get('/orders', async (req, res) => {

  let raw = fs.readFileSync('database/ordersDB.json')
  console.log(raw)
  let orderList = JSON.parse(raw);
  res.json(orderList);

})
// TEST verify
app.post('/session/createPayment', async (req, res) => {
  
  let buyEvents;
  if (req.body) {
    buyEvents = req.body;
    console.log(buyEvents)
  } else {
    res.status(500);
    return;
  }
  // let buyEvents = req.body;
  let cartToStripe = [];

  for (let i = 0; i < buyEvents.length; i++) {
    console.log(buyEvents[i]);
  }

 /*  buyEvents.forEach((buyEvent) => {
    let lineItem = {
      description: buyEvent.description,
      price_data: {
        currency: "sek",
        product_data: {
          name: buyEvent.productTitle
        },
        unit_amount: buyEvent.price,
      },
      quantity: buyEvent.quantity,
  }; */
  /* cartToStripe.push(lineItem);
   
  
  return lineItem;
  }) */
  
  /* buyEvents.map(
    let lineItem = {
        description: buyEvent.description,
        price_data: {
          currency: "sek",
          product_data: {
            name: buyEvent.productTitle
          },
          unit_amount: buyEvent.price,
        },
        quantity: buyEvent.quantity,
    };
    cartToStripe.push(lineItem);
    
  ); */
  

  let orderDate = new Date().toLocaleString();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cartToStripe,
    mode: "payment",
    customer: req.sessionId,
    metadata: {
      date: orderDate,  
    },
    success_url: 'http://localhost:3000/succsessPage?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: "http://localhost:3000/cancelPage",
  });
  res.status(200).json({ id: session.id })
});
// Varifierar köpet 
/* app.post('/session/verify', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.body.sessionId)
  if (session.payment_status === 'paid') {

    const key = session.payment_intent;

    const raw = fs.readFileSync('./database/ordersDB.json')
    const orderList = JSON.parse(raw)
    console.log(orderList)

    if (!orderList[key]) {
      orderList[key] = {
        amount: session.amount_total,
        customerId: session.customer,
        customerEmail: session.customer_details.email,
        metadata: session.metadata 
      }
      res.status(200).json({ paid: true })
      fs.writeFileSync('./database/ordersDB.json', JSON.stringify(orderList))
    } else {
      res.status(200).json({ error: "Order already exist" })
    }
  } else {
    res.status(200).json({ paid: false })
  }
})  */


// Ny session skapas
/* app.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ['card'],
    line_items: req.body.line_items,
    mode: "payment",

    success_url: 'http://localhost:3000/succsessPage?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: "http://localhost:3000/cancelPage",
  });

  res.status(200).json({ id: session.id })
})  */

// Implementerar 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something is broken.');
});

// Implementerar 404 error route
app.use(function (req, res, next) {
  res.status(404).send('Sorry we could not find that.');
});

// Visar vilken port som körs
app.listen(port, () => {
  console.log('Server listen on PORT: ' + port);
})