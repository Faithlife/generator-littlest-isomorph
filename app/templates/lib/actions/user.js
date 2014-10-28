var context = require('../context');

context.createAction('user:fetch', function (params) {
  return this.github.getUser({ name: params.name });
});
