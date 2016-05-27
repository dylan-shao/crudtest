var express = require('express');
var router = express.Router();
var db = require('mongodb').MongoClient.connect('mongodb://localhost/test1');

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

router.delete('/delete', function(req,resp,next){
	console.log(req);
	db.then(function(db){
		return db.collection('c1').remove({})
	})
	.then(function(){
		resp.json(req.body);
	})
	.catch(function(err){
		next(err);
	})
})


module.exports = router;