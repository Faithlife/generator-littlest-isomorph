var context = require('../context');

context.createStore('pandas')
  .define('all', [])
  .handle('pandas:all:fetch:succeeded', function (data) {
    this.all = data;
  });
