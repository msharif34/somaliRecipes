var express = require('express');
var db = require("../models");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   db.user.findAll().then(function(users){
  	res.send(users);
  });
});

router.post('/create', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); 
	db.user.create({ email: req.body.email, firebaseId: req.body.firebaseId}).then(function(data) {
	  // you can now access the newly created task via the variable data
	  console.log(data)
  		res.send('user created');
	}, function(err){
		res.send(err);
	});
});

//Add user favorite
router.post('/add/favorites', function(req, res, next) {
	db.user.find({where:{firebaseId: req.body.firebaseId}}).then(function(user){
	  user.createFavorite({
	    foodName: req.body.foodName
	  }).then(function(post){
	    console.log('favorite created');
	  })
	});
  res.send('user added favorite');
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

module.exports = router;
