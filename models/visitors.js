const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  name: {
    type: String,
    required: true
},
  phone_num: {
      type: String,
      required: true
  },
 content:{
     type: String,
     required: false
 },
   
},{timestamps: true});

const Visitor = mongoose.model('Visitor', visitorSchema);


module.exports = Visitor;