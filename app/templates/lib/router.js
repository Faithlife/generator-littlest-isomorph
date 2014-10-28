/**
 * Application-specific Router. Includes routes configuration, defaults,
 * error pages, etc.
 */
var littlest = require('littlest-isomorph');
var About = require('./components/screens/about.jsx');
var Error = require('./components/screens/error.jsx');
var Home = require('./components/screens/home.jsx');
var Organization = require('./components/screens/org.jsx');
var User = require('./components/screens/user.jsx');

module.exports = new littlest.Router({
  routes: {
    index: {
      path: '/',
      body: Home
    },
    about: {
      path: '/about',
      body: About
    },
    user: {
      path: '/user/:name',
      body: User,
      action: 'user:fetch'
    },
    org: {
      path: '/orgs/:name',
      body: Organization,
      action: 'org:fetch'
    }
  },
  defaults: {
    props: {}
  },
  errors: {
    NotFound: {
      body: Error
    },
    '500': {
      body: Error
    }
  }
});
