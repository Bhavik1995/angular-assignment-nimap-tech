const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let User_data = new Schema({

  image:{
      data: Buffer,
      contentType: String
  },

  first_name: {
    type: String
  },

  last_name: {
    type: String
  },

  email:{
    type: String,
  },

  phone:{
    type: Number,
  },

  age: {
    type: Number,
  },

  state: {
    type: String,
  },

  country: {
    type: String,
  },

  newsletter: {
    type: Boolean
  },

  // gender: String,

 
  // std: {
  //   type: String,
  // },

  // address: {
  //   type: String,
  // },

}, {
  collection: 'users'
})
module.exports = mongoose.model('user_data', User_data)