const fs = require('fs.promises');

const getProducts = async () => {

  const raw = await fs.readFile('./productDB.json');

  return JSON.parse(raw);

}

const saveProducts = async (productDB) => {

  return await fs.writeFile(

    './productDB.json',

    JSON.stringify(productDB, null, 2)

  );

}

module.exports = {getProducts, saveProducts};