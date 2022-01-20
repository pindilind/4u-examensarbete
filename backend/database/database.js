const fs = require('fs.promises');

// TODO: implement error handling and correct sync/async

const getDatabase = async () => {
  const raw = await fs.readFile('./userDB.json');
  return JSON.parse(raw);
}

const saveDatabase = async (database) => {
  return await fs.writeFile(
    './userDB.json',
    JSON.stringify(database, null, 2)
  );
}

module.exports = {getDatabase, saveDatabase};


/* const fs = require('fs.promises');

const getProducts = async () => {
  const raw = await fs.readFile('./productDB.json');
  console.log(raw)
  return JSON.parse(raw);
};

const getProducts2 = async () => {
  const raw = await fs.readFile('./productDB2.json');
  console.log(raw)
  return JSON.parse(raw);
}

const getProductCategory = async () => {
  const raw = await fs.readFile('./categoryDB.json');
  console.log(raw)
  return JSON.parse(raw);
}

const getUsers = async () => {
  const raw = await fs.readFile('./userDB.json');
  console.log(raw)
  return JSON.parse(raw);
}

const saveProducts = async (productDB) => {
  return await fs.writeFile(
    './productDB.json',
    JSON.stringify(productDB, null, 2)
  );

}

module.exports = { getProducts2, getProductCategory, saveProducts }; */