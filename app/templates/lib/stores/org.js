var context = require('../context');

context.createStore('org')
  .handle('org:fetch:succeeded', function (data) {
    var key = data.login.toLowerCase();

    this.define(key, data);
  });
