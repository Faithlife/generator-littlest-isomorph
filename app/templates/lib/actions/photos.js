var context = require('../context');

context.createAction('photos:interesting:fetch', function (scene) {
  return scene.context.flickr.getInteresting({
    query: scene.params.query
  });
});
