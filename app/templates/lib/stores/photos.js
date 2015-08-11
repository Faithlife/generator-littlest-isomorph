var context = require('../context');

context.createStore('photos')
  .set('interesting', [])
  .handle('photos:interesting:fetch:succeeded', function (scene) {
    this.set('interesting', scene.result);
  });
