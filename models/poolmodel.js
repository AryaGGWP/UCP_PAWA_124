const db = require('../database/db');

// Get All Pools
exports.getAllPools = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM datakolamrenang';
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// Create a New Pool
exports.createPool = (poolData) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO datakolamrenang (name, price) VALUES (?, ?)';
    const { name, price } = poolData;
    db.query(sql, [name, price], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Update a Pool by ID
exports.updatePool = (id, poolData) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE datakolamrenang SET name = ?, price = ? WHERE id = ?';
    const { name, price } = poolData;
    db.query(sql, [name, price, id], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Delete a Pool by ID
exports.deletePool = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM datakoamrenang WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};
