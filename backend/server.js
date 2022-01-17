const fs = require('fs');
const express = require ('express');
const app = express();
const cors = require('cors');
const port = 3005;

app.use(cors());
app.use('/', express.json('public'));

//hämtar alla produkter
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/productDB2.json") //hämtar url till jsonfil
  let productList = JSON.parse(raw)
  res.json(Object.values(productList));
  /* res.json(productList)  */
});

//hämtar ut produktkategorier
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/categoryDB.json") //hämtar url till jsonfil
  let productCategoryList = JSON.parse(raw)
  res.json(Object.values(productCategoryList));
  /* res.json(productCategoryList)  */
});

//hämtar ut User
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/userDB.json") //hämtar url till jsonfil
  let userList = JSON.parse(raw)
  res.json(Object.values(userList));
  /* res.json(productCategoryList)  */
});

//förberett för att lägga in nya produkter
app.post('/', (req,res) => {
  try {
    let raw = fs.readFileSync("./database/productDB2.json")
    let newProductInput = JSON.parse(raw)
    newProductInput.push(req.body)
    fs.writeFileSync("./database/productDB2.json", JSON.stringify(newProductInput))
    res.json(true)
  } catch(err) {
    console.error(err)
    res.status(500).json(false)
  }
  console.log(req.body)
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

app.listen(port, () => {
    console.log('Server listen on PORT: ' + port);
})