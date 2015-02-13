'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TypeSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Type', TypeSchema);