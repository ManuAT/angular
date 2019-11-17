var mongoose = require('mongoose');

module.exports = mongoose.model('data', {
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
    count :{
        type:Number,
        default:0
    },
    ccount :{
        type:Number,
        default:0
    },
    ocount :{
        type:Number,
        default:0
    },
    preg :{
        type:Boolean,
        default:false
    },
    asap :{
        type:Boolean,
        default:false
    },
    location :{
        type:String,
        default:""
    },
    comment :{
        type : String,
        default: ""
    }
    
    
});