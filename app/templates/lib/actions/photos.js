var context = require('../context');

context.createAction('photos:streams:update', function (params) {
  // Implementation details as recommended on the Flickr dev blog:
  // http://code.flickr.net/2009/03/03/panda-tuesday-the-history-of-the-panda-new-apis-explore-and-you/
  return this.flickr.getPandaPhotos({
    // TODO(schoon) - Handle this in the Router.
    name: decodeURIComponent(params.name),
    count: 100,
    page: 1
  })
    .then(function (photos) {
      return photos.slice(0, 50);
    })
    .then(function (photos) {
      // TODO(schoon) - This kind of metadata is useful for "Collection" stores,
      // so find a way to build it into Littlest Dispatcher.
      return {
        name: params.name,
        photos: photos
      };
    });
});

context.createAction('photos:interesting:fetch', function (params) {
  return this.flickr.getInteresting();
});
