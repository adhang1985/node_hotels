const express = require('express');
const { getAllPerson, createPerson, getOnePerson, updatePerson, deletePerson } = require('../controllers/person.controller');
const router = express.Router();

router.get('/',getAllPerson);
router.get('/:id',getOnePerson);
router.post('/',createPerson);
router.put('/:id',updatePerson);
router.delete('/:id',deletePerson);

module.exports = router;