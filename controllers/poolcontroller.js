const poolModel = require('../models/poolmodel');

// Controller untuk mendapatkan semua data pool
exports.getAllPools = async (req, res) => {
  try {
    const pools = await poolModel.getAllPools();
    res.render('pools', { 
      title: 'Pools Management', 
      pools // Mengirim data pools ke view pools.ejs
    });
  } catch (error) {
    console.error('Error fetching pools:', error);
    res.status(500).json({ error: error.message });
  }
};

// Controller untuk membuat pool baru
exports.createPool = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Both name and price are required!' });
  }

  try {
    await poolModel.createPool({ name, price });
    res.redirect('/pools'); // Redirect ke halaman pools
  } catch (error) {
    console.error('Error creating pool:', error);
    res.status(500).json({ error: error.message });
  }
};

// Controller untuk mengupdate pool
exports.updatePool = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body; // Penamaan konsisten dengan form

  if (!name || !price) {
    return res.status(400).json({ error: 'Both name and price are required!' });
  }

  try {
    await poolModel.updatePool(id, { name, price });
    res.redirect('/pools'); // Redirect ke halaman pools setelah update
  } catch (error) {
    console.error('Error updating pool:', error);
    res.status(500).json({ error: error.message });
  }
};

// Controller untuk menghapus pool
exports.deletePool = async (req, res) => {
  const { id } = req.params;

  try {
    await poolModel.deletePool(id);
    res.redirect('/pools'); // Redirect ke halaman pools setelah delete
  } catch (error) {
    console.error('Error deleting pool:', error);
    res.status(500).json({ error: error.message });
  }
};
