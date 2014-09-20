var dispatcher = require('../dispatcher');

module.exports = dispatcher.createStore()
  .handle('user:fetch:succeeded', function (data) {
    var key = data.login.toLowerCase();

    this.define(key);
    this[key] = data;
  });
