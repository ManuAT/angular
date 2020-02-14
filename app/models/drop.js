var mongoose = require('mongoose');

module.exports = mongoose.model('drop', {
    item :{
        type : String,
        default :""
    },
   
    time :{
        type: String,
        default : ""
    },
    quantity :{
        type:String,
        default:""
    },
    
    cost :{
        type:String,
        default:""
    },
    
    exp :{
        type : Number,
        default: 0 
    }
    
    
});