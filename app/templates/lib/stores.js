var context = require('./context');

context.createStore('user')
  .handle('user:fetch:succeeded', function (data) {
    var key = data.login.toLowerCase();

    if (!this.has(key)) {
      this.define(key);
    }

    this[key] = data;
  });
