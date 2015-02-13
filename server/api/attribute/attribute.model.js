'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AttributeSchema = new Schema({
	name: String,
	description: String
});

module.exports = mongoose.model('Attribute', AttributeSchema);