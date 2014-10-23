var superagent = require('superagent');
var when = require('when');
var context = require('../context');

context.createAction('org:fetch', function (params) {
  var name = params.name;

  return when.promise(function (resolve, reject) {
    superagent
      .get('https://api.github.com/orgs/' + name)
      .end(function (err, res) {
        if (err) {
          reject(err);
        } else if (res.status === 404) {
          resolve(null);
        } else if (res.status !== 200) {
          reject(new Error(res.text));
        } else {
          resolve(res.body);
        }
      });
  });
});
