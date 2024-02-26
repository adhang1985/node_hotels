const express = require('express');
const { getAllPerson, createPerson, getOnePerson, updatePerson, deletePerson } = require('../controllers/person.controller');
const checkLogin = require('../middleware/checkLogin');
const router = express.Router();

router.get('/',checkLogin,getAllPerson);
router.get('/:id',checkLogin,getOnePerson);
router.post('/',createPerson);
router.put('/:id',updatePerson);
router.delete('/:id',deletePerson);

module.exports = router;