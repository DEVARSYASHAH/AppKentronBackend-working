const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/add-user', adminController.addUser);

module.exports = router;

