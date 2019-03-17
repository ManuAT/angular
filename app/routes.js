var lms = require('./models/lms');

function getvalues(res) {
    lms.find(function (err, lmss) {       
        if (err) {
            res.send(err);
        }
        res.json(lmss); 
    });
};
module.exports = function (app) {
    app.get('/api/lms', function (req, res) {        
        lms.findOne({
            code: req.body.code,
        }, function (err, todo) {
            if (err)
                res.send(err);
           res.send(todo);
        });
    });

    app.post('/api/lms', function (req, res) {        
        lms.create({
            code: req.body.code,
            time: new Date(),
            task: req.body.currentTask,
            totalLostMin : 0
        }, function (err, todo) {
            if (err)
                res.send(err);
           res.send(todo);
        });
    });

    app.put('/api/lms', function (req, res) { 
        lms.update({_id:"5c8cd94caa9fa01224b89f98"}, { $set: { totalLostMin: 10 }}, {}, function(err, numAffected) {
            // numAffected is the number of updated documents
            if (err)
                res.send(err);
            // console.log(numAffected)
            res.send(numAffected)
          });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); 
    });


};
