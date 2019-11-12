const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    icon:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Category',schema);