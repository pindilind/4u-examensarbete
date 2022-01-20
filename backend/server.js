require('dotenv').config('.env');
/* const database = require('./database/userDB.json'); */

const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(secretKey)
const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3005;

app.use(cors());
app.use('/', express.json('public'));

//Hämtar alla produkter
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/productDB2.json") //hämtar url till jsonfil
  let productList = JSON.parse(raw)
  res.json(Object.values(productList));
  /* res.json(productList)  */
});

//Hämtar ut produktkategorier
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/categoryDB.json") //hämtar url till jsonfil
  let productCategoryList = JSON.parse(raw)
  res.json(Object.values(productCategoryList));
  /* res.json(productCategoryList)  */
});

//Hämtar ut User
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/userDB.json") //hämtar url till jsonfil
  console.log(raw)
  let userList = JSON.parse(raw)
  res.json(Object.values(userList));
  /* res.json(productCategoryList)  */


  /* let userList; */

 /*  // check that there is a body in request
  if (req.body) {
    userList = req.body;
  } else {
    // TODO: is this the rigth status?
    res.status(500);
    return;
  }
  /* // get database
  const db = await database.getDatabase();
 
  // check that username is not already in use
 /*  if (!checkUserNameAvailable(db, req.body.userName)) {
    // TODO: is this the rigth status?
    res.status(500).send({ message: 'Username is not available' })
    return;
  } */

  /* const hash = await argon2.hash(req.body.password); */

  // add new customer to database
  /* customersHighestId++;
  customers[customersHighestId] = {
    id: customersHighestId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    userName: req.body.userName,
    /* hashedPassword: hash, */
   /*  email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    cart: []
  }; /* */


});
 
//Förberett för att lägga in nya produkter
/* app.post('/', (req, res) => {
  try {
    let raw = fs.readFileSync("./database/productDB2.json")
    let newProductInput = JSON.parse(raw)
    newProductInput.push(req.body)
    fs.writeFileSync("./database/productDB2.json", JSON.stringify(newProductInput))
    res.json(true)
  } catch (err) {
    console.error(err)
    res.status(500).json(false)
  }
  console.log(req.body)
}); */

// Hämtar filen från "products.json" - se även i server.post/verify
app.get('/api/admin/orders', async (req, res) => {

  const raw = fs.readFileSync('ordersDB.json')
  const orderListDB = JSON.parse(raw)
  res.json(orderListDB)
})



//Varifierar köpet 
app.post('/session/verify', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.body.sessionId)
    if (session.payment_status === 'paid') {

      const key = session.payment_intent;

      const raw = fs.readFileSync('./database/ordersDB.json')
      const orderListDB = JSON.parse(raw)
      console.log(orderListDB)

        if (!orderListDB[key]) {
          orderListDB[key] = {
            amount: session.amount_total,
            customerId: session.customer,
            customerEmail: session.customer_details.email,
            metadata: session.metadata
                    
          }
          res.status(200).json({ paid: true })
          fs.writeFileSync('./database/ordersDB.json', JSON.stringify(orderListDB))
        } else {
          res.status(200).json({ error: "Order already exist" })
        }
    } else {
      res.status(200).json({ paid: false })
    }
})


// Ny session skapas
app.post('/create-checkout-session', async (req, res) => {

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ['card'],
    line_items: req.body.line_items,
    mode: "payment",

    success_url: 'http://localhost:3000/checkOutOk?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: "http://localhost:3000/",
  });
  
  res.status(200).json({ id: session.id })
})

// Implement 500 error route
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something is broken.');
});

// Implement 404 error route
app.use(function (req, res, next) {
  res.status(404).send('Sorry we could not find that.');
});

// Visar vilken port som körs
app.listen(port, () => {
  console.log('Server listen on PORT: ' + port);
})
