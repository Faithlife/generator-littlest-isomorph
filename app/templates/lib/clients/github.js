/**
 * TODO: Description.
 */
var ProxyClient = require('proxy-client');

/**
 * Creates a new instance of GitHubClient with the provided `options`.
 *
 * @param {Object} options
 */
function GitHubClient(options) {
  if (!(this instanceof GitHubClient)) {
    return new GitHubClient(options);
  }

  options = options || {};

  this.rootUrl = this.rootUrl || options.rootUrl || 'https://api.github.com';

  ProxyClient.call(this, options);
}
ProxyClient.inherit(GitHubClient);

/**
 * TODO: Description.
 */
GitHubClient.prototype.getUser = function getUser(options) {
  return this.get('/users/' + options.name)
    .end()
    .then(function (response) {
      if (response.status === 404) {
        return null;
      } else if (response.status !== 200) {
        throw new Error(response.text);
      }

      return response.body;
    });
};

/**
 * TODO: Description.
 */
GitHubClient.prototype.getOrganization = function getOrganization(options) {
  return this.get('/orgs/' + options.name)
    .end()
    .then(function (response) {
      if (response.status === 404) {
        return null;
      } else if (response.status !== 200) {
        throw new Error(response.text);
      }

      return response.body;
    });
};

/*!
 * Export `GitHubClient`.
 */
module.exports = GitHubClient;
