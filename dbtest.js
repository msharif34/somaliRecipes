var db = require("./models");

db.user.create({ email: 'Brian', firebaseId: 101091 }).then(function(data) {
  // you can now access the newly created task via the variable data
  console.log(data)
});


// CREATE POST FOR AUTHOR
// db.user.find({where:{email:'Brian'}}).then(function(user){
//   user.createFavorite({
//     foodName:'test2'
//   }).then(function(post){
//     console.log(post.get());
//   })
//   console.log(user.get());
// });


//FIND ONE AUTHOR - get posts
// db.user.find({where:{email:'Brian'}}).then(function(user){
//   console.log(user.get());
//   user.getFavorites().then(function(favorites){
//     console.log('post count:',favorites.length);
//     favorites.forEach(function(favorites){
//       console.log('-----');
//       console.log(favorites.get());
//     })
//   });
// });


// db.favorite.findOrCreate({where: {foodName: "test3"}}).spread(function(favorite, created) {
//   db.user.find({where:{email:'Brian'}}).then(function(user) {
//     user.addFavorite(favorite).then(function(data) {
//         console.log(data);
//         console.log('---------');
//         console.log(favorite.get());
//         console.log('---------');
//     });
//   });
// });


