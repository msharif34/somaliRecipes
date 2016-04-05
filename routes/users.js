var express = require('express');
var db = require("../models");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   db.user.findAll().then(function(users){
  	res.send(users);
  });
});

// Get User favorites from server
router.post('/favorites', function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*'); 
console.log(req.body)
db.user.find({where:{firebaseId: req.body.firebaseId}}).then(function(user){
	console.log(user)
		var userId = user.id;
	  db.favorite.find({where:{userId:userId, foodName: req.body.foodName}}).then(function(data,created){
		   if(data === null){
		   	res.send(false)
		   }else{
		   	res.send(true)
		   }
		 })
	});
});

router.post('/create', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); 
	db.user.create({ email: req.body.email, firebaseId: req.body.firebaseId}).then(function(data) {
	  // you can now access the newly created task via the variable data
	  console.log(data)
	}, function(err){
		res.send(err);
	});
});

router.post('/facebook', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); 
	console.log(req.body)
	db.user.findOrCreate({where: {firebaseId: req.body.firebaseId}}).spread(function(user, created) {
  	res.send('facebook user created or found');
	}, function(err){
		res.send(err);
	});
});

//Add user favorite
router.post('/add/favorites', function(req, res, next) {
	db.user.find({where:{firebaseId: req.body.firebaseId}}).then(function(user){
		var userId = user.id;
		console.log('USER =------' + userId, req.body.foodName)
	  db.favorite.findOrCreate({where:{userId:userId, foodName: req.body.foodName}}).spread(function(data,created){
		   res.send('Creating favorite')
		   if(data.foodName != req.body.foodName){
		    	res.send('Creating favorite')
		    }
		  })
	});
  // res.send('user added favorite');
});

router.delete('/remove/favorites', function(req, res, next) {
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	var food = req.body.foodName
	db.user.find({where:{firebaseId: req.body.firebaseId}}).then(function(user){
		var userId = user.id
		db.favorite.destroy({where:{userId:userId, foodName: req.body.foodName}}).then(function(data){
		    console.log('favorite deleted');
		    res.send('user removed favorite');
		  })
	});
});

router.post('/favorites/all', function(req, res, next) {
	db.user.find({where:{firebaseId: req.body.firebaseId}}).then(function(user){
		var userId = user.id
		db.favorite.findAll({where:{userId:userId}}).then(function(data){
		    console.log(data);

		    res.send(data);
		  })
	});
});




module.exports = router;
