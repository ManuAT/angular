var data = require('./models/data');
var login = require('./models/login');
var drop = require('./models/drop');

function getvalues(res) {
    data.find(function (err, lms) {       
        if (err) {
            res.send(err);
        }
        res.json(lms); 
    });
};
module.exports = function (app) {
    app.get('/api/data', function (req, res) { 
               console.log("code",req.query)
        data.find({},function (err, todo) {
            console.log(todo)
            if (err)
                res.send(err);
           res.send(todo);
        });
    });

    app.post('/api/data', function (req, res) {  
        console.log(req.body);
              
        data.create({
            name: req.body.name,
            time: new Date(),
            phone: req.body.phone,
            count : req.body.count,
            ccount : req.body.ccount,
            ocount : req.body.ocount,
            preg : req.body.preg,
            asap : req.body.asap,
            location : req.body.location,
            comment : req.body.comment
        }, function (err, todo) {
            console.log("response");
            if (err){
                console.log("creation err");
                res.send(err);
            }
            else{
                console.log("created");
                res.send(todo);
            }
        });
       
    });

    app.get('/api/login', function (req, res) { 
        console.log("code",req.query.username)
            
        login.findOne({
         username:  req.query.username,
        }, function (err, todo) {
         console.log("todo",todo, 'err',err);
         if (err){
        console.log("err happend!!");
        // res.sent(1)
         }
         res.send(todo);
});

});

    app.post('/api/login', function (req, res) {  
        console.log(req.body.code);
              
        login.findOne({
            username:  req.body.username,
        }, function (err, todo) {
            console.log("todo",todo, 'err',err);
            if (err){
                console.log("exist");
                res.sent(1)
                
            }
            else if(todo==null){
                console.log("!exist");
                login.create({
                    username: req.body.username,
                    time: new Date(),
                    password : req.body.password,
                    department : req.body.department
                }, function (err, todo) {
                    console.log("response");
                    if (err){
                        console.log("creation err");
                        res.send(err);
                    }
                    else{
                        console.log("created");
                        res.send(todo);
                    }
                });
            }
            else 
            res.send(todo);
        });
       
    });

    app.get('/api/drop', function (req, res) { 
        console.log("code",req.query)
 drop.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});

app.post('/api/drop', function (req, res) {  
    console.log(req.body);
          
    drop.create({
        name: req.body.name,
        time: new Date(),
        phone: req.body.phone,
        location : req.body.location,
        location2 : req.body.location2,
        items : req.body.items
    }, function (err, todo) {
        console.log("response");
        if (err){
            console.log("creation err");
            res.send(err);
        }
        else{
            console.log("created");
            res.send(todo);
        }
    });
   
});

    // app.put('/api/lms', function (req, res) { 
    //     console.log("time",req.body.totalLostMin);
        
    //    var newData ={
    //     finishedTime : new Date()
    //    };
      
    //    if(req.body.task)  
    //    newData.task = req.body.task;
    //     lms.update({code:req.body.code}, {
    //          $inc:{totalLostMin:req.body.totalLostMin?req.body.totalLostMin:0}
    //         }, {}, function(err, numAffected) {
    //         // numAffected is the number of updated documents
    //         if (err)
    //             res.send(err);
    //     //console.log(numAffected)
    //     // if(req.body.totalLostMin)  
    //     // newData.totalLostMin = req.body.totalLostMin;
    //         lms.update({code:req.body.code}, {
    //             $set:newData
    //         }, {}, function(err, numAffected) {
    //         // numAffected is the number of updated documents
    //         if (err)
    //             res.send(err);
    //     //console.log(numAffected)
    //         res.send(numAffected);
    //         });
    //       });
    // });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });


};
