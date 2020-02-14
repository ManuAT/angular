var mongoose = require('mongoose');

module.exports = mongoose.model('gold', {
    code :{
        type: Number,
        default : 0
    },
    value:{
        type: String,
        default : ""
    },
    time:{
        type: String,
        default : ""
    },
   
});