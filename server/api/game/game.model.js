'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
  designer: String,
  bggId: String,
  publisher: {type: Schema.Types.ObjectId, ref: 'Publisher'},
  purchaseLink: String,
  mechanics: [{type: Schema.Types.ObjectId, ref: 'Mechanic'}],
  themes: [{type: Schema.Types.ObjectId, ref: 'Theme'}]
});

module.exports = mongoose.model('Game', GameSchema);