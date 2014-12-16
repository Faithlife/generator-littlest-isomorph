/**
 * Application-specific Router. Includes routes configuration, defaults,
 * error pages, etc.
 */
var littlest = require('littlest-isomorph');
var About = require('./components/screens/about.jsx');
var Error = require('./components/screens/error.jsx');
var Home = require('./components/screens/home.jsx');

module.exports = new littlest.Router({
  routes: {
    home: {
      path: '/',
      title: 'Home',
      body: Home,
      action: 'photos:interesting:fetch'
    },
    about: {
      path: '/about',
      title: 'About',
      body: About
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
