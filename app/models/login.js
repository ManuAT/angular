var mongoose = require('mongoose');

module.exports = mongoose.model('login', {
    username :{
        type : String,
        default :""
    },
    password :{
        type:String,
        default:""
    },
    department :{
        type:Number,
        default:0
    },
    time :{
        type: String,
        default : ""
    }
    
});