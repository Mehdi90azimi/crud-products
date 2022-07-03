const router = require('express').Router();
const { model } = require('mongoose');
const {postProduct , getProducts , updateProduct , deleteProduct}=require('../controller/user-controller');

router.post('/new', postProduct);
router.get('/' , getProducts);
router.put('/:id' , updateProduct);
router.delete('/:id' , deleteProduct);






module.exports = router;
