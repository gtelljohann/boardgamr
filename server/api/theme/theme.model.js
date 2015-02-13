'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThemeSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Theme', ThemeSchema);