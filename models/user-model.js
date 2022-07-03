const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    proudctName: {
        type : String,
        required : true,

    },
    category :{
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
        Maxlength : 6,

    },
    numberOfProduct : {
        type : Number,
        required : true
    }
})


module.exports = mongoose.model('Product', userSchema);
