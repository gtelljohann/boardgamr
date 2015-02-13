'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MechanicSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Mechanic', MechanicSchema);