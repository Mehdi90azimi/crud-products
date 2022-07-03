const Product = require('../models/user-model');


//create

const postProduct = async (req , res) => {
    try {
        const product = new Product(req.body);
        const result = await product.save()
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message)
    }

}

// read

const getProducts = async (req , res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json(error.message)
    }
}

//update

const updateProduct = async (req , res) => {

   try {
    const product = await Product.findByIdAndUpdate(req.params.id , {
       $set:req.body, 
    }, {new:true , runValidators:true});
    res.status(200).json(product);
   } catch (error) {
       res.status(500).json(error.message)
   } 
}

//delete

const deleteProduct = async(req, res) =>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('product deleted')
    } catch (error) {
       res.status(500).json(error.message) 
    }
} 

module.exports = {
   postProduct ,
   getProducts,
   updateProduct,
   deleteProduct
}