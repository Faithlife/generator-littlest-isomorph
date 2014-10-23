var context = require('../context');

context.createStore('user')
  .handle('user:fetch:succeeded', function (data) {
    var key = data.login.toLowerCase();

    this.define(key, data);
  });
