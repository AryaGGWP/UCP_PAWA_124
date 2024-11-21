const poolModel = require('../models/poolmodel');

exports.getAllPools = async (req, res) => {
    try {
      const pools = await poolModel.getAllPools();
      res.render('pools', { pools }); // Menampilkan halaman pools.ejs dengan data
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.createPool = async (req, res) => {
    const { nama, harga } = req.body;
    if (!nama || !harga) {
      return res.status(400).json({ error: 'Both name and price are required!' });
    }
  
    try {
      await poolModel.createPool({ nama, harga });
      res.redirect('/pools'); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updatePool = async (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;
  
    if (!nama || !harga) {
      return res.status(400).json({ error: 'Both name and price are required!' });
    }
  
    try {
      await poolModel.updatePool(id, { nama, harga });
      res.redirect('/pools'); // Redirect ke halaman pools setelah update
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deletePool = async (req, res) => {
    const { id } = req.params;
  
    try {
      await poolModel.deletePool(id);
      res.redirect('/pools'); // Redirect ke halaman pools setelah delete
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };