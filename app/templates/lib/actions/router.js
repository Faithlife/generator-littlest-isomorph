var when = require('when');
var context = require('../context');

context.createAction('router:app', function (params) {
  return this.performAction('pandas:all:fetch', params);
});

context.createAction('router:panda', function (params) {
  return when.all([
    this.performAction('router:app', params),
    this.performAction('photos:streams:update', params)
  ]);
});

context.createAction('router:interesting', function (params) {
  return when.all([
    this.performAction('router:app', params),
    this.performAction('photos:interesting:fetch', params)
  ]);
});
