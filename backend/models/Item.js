const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = new Schema({
    name: {
        type: String,
        required:true 
    },
    image_url: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    image_url: {
        type: String,
        required:true
    }

});
module.exports = mongoose.model('item', itemSchema);