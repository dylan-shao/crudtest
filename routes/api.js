var express = require('express');
var router = express.Router();
var db = require('mongodb').MongoClient.connect('mongodb://localhost/test1');
var ObjectId = require('mongodb').ObjectId;

router.get('/get',function(req,resp,next){
	db.then(function(db){
		
		return db.collection('c1').find().toArray();
	}).then(resp.json.bind(resp))
	.catch(function(){
		console.log(err);
		next(err);
	})
});

router.post('/add',function(req,resp,next){
	
	db.then(function(db){
		return db.collection('c1').insert(req.body)
	})
	.then(function(){
		resp.json(req.body);
	})
	.catch(function(err){
		console.log(err);
		next(err);
	})
});

router.put('/update/:uid',function(req,resp,next){
	var id = req.params.uid;
	var uid = new ObjectId(id);
	db.then(function(db){
		return db.collection('c1').updateOne({"_id":uid},{$set:{"firstName":req.body.firstName,"lastName":req.body.lastName}})
	})
	.then(function(){
		resp.json(req.body);
	})
	.catch(function(err){
		console.log(err);
		next(err);
	})
});

router.delete('/delete/:uid', function(req,resp,next){
	var id = req.params.uid;
	var uid = new ObjectId(id);
	db.then(function(db){
		return db.collection('c1').deleteOne({_id: uid})
	})
	.then(function(){
		resp.json(req.body);
	})
	.catch(function(err){
		next(err);
	})
})


module.exports = router;