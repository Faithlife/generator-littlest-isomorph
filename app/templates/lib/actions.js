var superagent = require('superagent');
var when = require('when');
var dispatcher = require('./dispatcher');
var actions = {};

actions.fetchUser = dispatcher.createAction('user:fetch', function (params) {
  var name = params.name;

  return when.promise(function (resolve, reject) {
    superagent
      .get('https://api.github.com/users/' + name)
      .end(function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
  });
});

module.exports = actions;
