var context = require('../context');

context.createAction('org:fetch', function (params) {
  return this.github.getOrganization({ name: params.name });
});
