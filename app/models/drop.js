var mongoose = require('mongoose');

module.exports = mongoose.model('drop', {
    name :{
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
    
    location :{
        type:String,
        default:""
    },
    location2 :{
        type:String,
        default:""
    },
    items :{
        type : String,
        default: ""
    }
    
    
});