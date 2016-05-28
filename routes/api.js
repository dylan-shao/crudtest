var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel');

router.get('/get', function(req, resp, next) {
    UserModel.find()
        .then(resp.json.bind(resp))
        .catch(function(err) {
            console.log(err);
            next(err);
        })
});

router.post('/add', function(req, resp, next) {
    var user = new UserModel(req.body);
    user.save()
        .then(resp.json.bind(resp))
        .catch(function(err) {
            console.log(err);
            next(err);
        })
});

router.put('/update/:uid', function(req, resp, next) {
    var id = req.params.uid;
    //var user = new UserModel(req.body); do not use
    //UserModel.findOneAndUpdate({"_id":uid},{$set:{"firstName":req.body.firstName,"lastName":req.body.lastName}})
    UserModel.findByIdAndUpdate(id, req.body) //do not use user here to replace req.body, because this will create a new _id
        .then(resp.json.bind(resp))
        .catch(function(err) {
            console.log(err);
            next(err);
        })
});

router.delete('/delete/:uid', function(req, resp, next) {
    var id = req.params.uid;
    UserModel.findByIdAndRemove(id)
        .then(function() {
            resp.json(req.body);
        })
        .catch(function(err) {
            next(err);
        })
})


module.exports = router;
