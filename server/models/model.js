const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstname:{
        type:String,
       
    },
    middlename:{
        type:String,
       
    },
    lastname:{
        type:String,
        
    },
    email:{
        type:String,
    
    },
    phone:{
        type:String,
      
    }
})

const userdb = mongoose.model('userdb',schema);
module.exports = userdb;