const express = require('express');
const { registration, logging } = require('../controllers/user.controller');
const router = express.Router();

router.post('/register',registration);
router.post('/login',logging);

module.exports = router;