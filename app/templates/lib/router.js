/**
 * Application-specific Router. Includes routes configuration, defaults,
 * error pages, etc.
 */
var littlest = require('littlest-isomorph');
var About = require('./components/screens/about.jsx');
var Error = require('./components/screens/error.jsx');
var Home = require('./components/screens/home.jsx');
var Panda = require('./components/screens/panda.jsx');

module.exports = new littlest.Router({
  routes: {
    home: {
      path: '/',
      title: 'Home',
      body: Home,
      action: 'router:interesting'
    },
    about: {
      path: '/about',
      title: 'About',
      body: About,
      action: 'router:app'
    },
    panda: {
      path: '/panda/:name',
      title: function (props) { return 'Panda | ' + decodeURIComponent(props.route.params.name) },
      body: Panda,
      action: 'router:panda'
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
