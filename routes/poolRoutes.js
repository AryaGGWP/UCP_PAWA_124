const express = require('express');
const router = express.Router();
const poolController = require('../controllers/poolcontroller');

router.get('/pools', poolController.getAllPools);

router.post('/pools', poolController.createPool);

router.post('/update/:id', poolController.updatePool);

router.post('/delete/:id', poolController.deletePool);

module.exports = router;