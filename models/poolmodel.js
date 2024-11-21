const db = require('../database/db');

// Get All Pools
exports.getAllPools = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM pools';
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
    const sql = 'INSERT INTO pools (nama, harga) VALUES (?, ?)';
    const { nama, harga } = poolData;
    db.query(sql, [nama, harga], (err, result) => {
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
    const sql = 'UPDATE pools SET nama = ?, harga = ? WHERE id = ?';
    const { nama, harga } = poolData;
    db.query(sql, [nama, harga, id], (err, result) => {
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
    const sql = 'DELETE FROM pools WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};