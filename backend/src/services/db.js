const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const schemas = {
  users: fs.readFileSync(path.join(__dirname, '../sampleSchemas/users.sql'), 'utf-8'),
  products: fs.readFileSync(path.join(__dirname, '../sampleSchemas/products.sql'), 'utf-8'),
  orders: fs.readFileSync(path.join(__dirname, '../sampleSchemas/orders.sql'), 'utf-8'),
};

function getSchema(key) {
  return schemas[key] || schemas.users;
}

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(path.join(__dirname, '../../database/db.sqlite'));
    db.all(query, [], (err, rows) => {
      db.close();
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

module.exports = { executeQuery, getSchema };
