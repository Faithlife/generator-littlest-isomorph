var context = require('../context');

context.createStore('photos')
  .define('streams', [])
  .define('interesting', [])
  .handle('photos:stream:update:succeeded', function (data) {
    if (this.streams.indexOf(data.name) === -1) {
      this.streams.push(data.name);
      this.streams.sort();
    }
  })
  .handle('photos:interesting:fetch:succeeded', function (data) {
    this.interesting = data;
  });

context.createStore('photos:streams')
  .handle('photos:stream:update:succeeded', function (data) {
    this.define('photos:streams:' + data.name, data.photos);
  });
