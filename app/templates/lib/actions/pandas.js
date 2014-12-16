var context = require('../context');

context.createAction('pandas:all:fetch', function (params) {
  return this.flickr.getPandaList();
});
