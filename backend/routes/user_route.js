const express = require('express');
const app = express();
var multer  = require('multer');

const user_Route = express.Router();
let User = require('../models/user_data');


// Add user data
user_Route.route('/add-user',upload.single('image')).post((req, res, next) => {
    User.create(req.body, (error, data) => {
      if(req.file){
        image = req.file.path 
      }
    else if (error) {
      return next(error);
    } else {
      res.json(data);   
    }
})
});

// Get all user data
user_Route.route('/').get((req, res) => {
    User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get user (id-wise)
user_Route.route('/user-profile/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Update User
user_Route.route('/update-user/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('User updated successfully!')
    }
  })
});

// Delete User
user_Route.route('/delete-user/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      console.log('Delete user data successfully!')
    }
  })
});

// Delete all user data
user_Route.route('/delete-user-all').delete((req, res) => {
  User.deleteMany((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.status(200).json({
      msg: data
    })
    console.log('Delete all data successfully!')
  }
})
});

//search by name
user_Route.route({name:{ $regexp: new RegExp(), $options: "i"}}).get((req, res) => {
  User.find(req.params.name,(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
});


module.exports = user_Route;