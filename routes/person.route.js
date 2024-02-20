const express = require('express');
const { getAllPerson, createPerson, getOnePerson } = require('../controllers/person.controller');
const router = express.Router();

router.get('/',getAllPerson);
router.get('/:id',getOnePerson);
router.post('/',createPerson);

module.exports = router;