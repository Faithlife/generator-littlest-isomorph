/**
 * Application-specific Router. Includes routes configuration, defaults,
 * error pages, etc.
 */
var littlest = require('littlest-isomorph');
var App = require('./components/app.jsx');

module.exports = new littlest.Router({
  routes: {
    index: {
      path: '/'
    },
    about: {
      path: '/about'
    },
    user: {
      path: '/user/:name',
      action: 'user:fetch'
    }
  },
  defaults: {
    body: App,
    props: {}
  },
  errors: {
    NotFound: {
      body: App
    },
    '500': {
      body: App
    }
  }
});
