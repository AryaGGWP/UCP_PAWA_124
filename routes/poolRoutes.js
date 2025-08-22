const express = require('express');
const router = express.Router();
const poolController = require('../controllers/poolcontroller');

// Routes
router.get('/', poolController.getAllPools);
router.post('/', poolController.createPool); 

router.post('/update/:id', poolController.updatePool); 
router.post('/delete/:id', poolController.deletePool);

module.exports = router;
