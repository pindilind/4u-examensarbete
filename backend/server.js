const fs = require('fs');
const express = require ('express');
const app = express();
const cors = require('cors');
const port = 3005;

app.use(cors());
app.use(express.json());

//hämtar alla produkter
app.get("/", (req, res) => {
  let raw = fs.readFileSync("./database/productDB2.json") //hämtar url till jsonfil
  let productList = JSON.parse(raw)
  res.json(Object.values(productList));
  /* res.json(productList)  */
});


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
    console.log('Server listen on ${PORT}');
})