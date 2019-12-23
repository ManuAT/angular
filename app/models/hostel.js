var mongoose = require('mongoose');

module.exports = mongoose.model('hostel', {
    msg :{
        type : String,
        default :""
    },
   
    time :{
        type: String,
        default : ""
    },
    phone :{
        type:String,
        default:""
    },
    
    
    
});