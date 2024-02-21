const express = require('express');
const { createMenu, getAllMenu, getManuByTaste, updateMenuItem, deleteMenuItem } = require('../controllers/menuItem.controller');
const router = express.Router();

router.post('/',createMenu);
router.get('/',getAllMenu);
router.get('/:taste',getManuByTaste);
router.put('/:id',updateMenuItem);
router.delete('/:id',deleteMenuItem);

module.exports = router;