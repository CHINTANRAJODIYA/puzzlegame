var mongoose = require('mongoose');

var addpuzzleschema = new mongoose.Schema({
    puz_name:{
        type:String
    },
    puz_image:{
        type:String
    },
    random_char:{
        type:String
    },
    win_id:{
        type:Array,
        default:0
    },
    cat_id:{
        type:String
    }
})

module.exports = mongoose.model('addpuzzle',addpuzzleschema)