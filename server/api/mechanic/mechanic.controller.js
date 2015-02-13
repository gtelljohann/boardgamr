'use strict';

var _ = require('lodash');
var Mechanic = require('./mechanic.model');

// Get list of mechanics
exports.index = function(req, res) {
  Mechanic.find(function (err, mechanics) {
    if(err) { return handleError(res, err); }
    return res.json(200, mechanics);
  });
};

// Get a single mechanic
exports.show = function(req, res) {
  Mechanic.findById(req.params.id, function (err, mechanic) {
    if(err) { return handleError(res, err); }
    if(!mechanic) { return res.send(404); }
    return res.json(mechanic);
  });
};

// Creates a new mechanic in the DB.
exports.create = function(req, res) {
  Mechanic.create(req.body, function(err, mechanic) {
    if(err) { return handleError(res, err); }
    return res.json(201, mechanic);
  });
};

// Updates an existing mechanic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mechanic.findById(req.params.id, function (err, mechanic) {
    if (err) { return handleError(res, err); }
    if(!mechanic) { return res.send(404); }
    var updated = _.merge(mechanic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mechanic);
    });
  });
};

// Deletes a mechanic from the DB.
exports.destroy = function(req, res) {
  Mechanic.findById(req.params.id, function (err, mechanic) {
    if(err) { return handleError(res, err); }
    if(!mechanic) { return res.send(404); }
    mechanic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}