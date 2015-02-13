/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Mechanic = require('./mechanic.model');

exports.register = function(socket) {
  Mechanic.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Mechanic.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('mechanic:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('mechanic:remove', doc);
}