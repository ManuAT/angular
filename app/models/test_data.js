var mongoose = require('mongoose');

module.exports = mongoose.model('test_data', {
    name :{
        type : String,
        default :""
    },
    phone :{
        type:String,
        default:""
    },

    time :{
        type: String,
        default : ""
    },
    address :{
        type : String,
        default :""
    },
    
});