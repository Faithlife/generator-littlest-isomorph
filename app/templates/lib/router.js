/**
 * Application-specific Router. Includes routes configuration, defaults,
 * error pages, etc.
 */
var littlest = require('littlest-isomorph');
var App = require('./components/app.jsx');
var actions = require('./actions');

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
      action: actions.fetchUser
    }
  },
  defaults: {
    component: App,
    props: {}
  },
  errors: {
    NotFound: {
      component: App
    },
    '500': {
      component: App
    }
  }
});
