var mongoose = require('mongoose');

var addcategoryschema = new mongoose.Schema({
    cat_name:{
        type:String
    },
    cat_image:{
        type:String
    }
});

module.exports = mongoose.model('addcategory',addcategoryschema)