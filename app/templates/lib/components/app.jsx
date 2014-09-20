/**
 * @jsx React.DOM
 */
var React = require('react');
var About = require('./about.jsx');
var Home = require('./home.jsx');
var Error = require('./error.jsx');
var User = require('./user.jsx');

var App = React.createClass({
  getMainContent: function () {
    switch (this.props.route && this.props.route.name) {
      case 'index':
        return <Home />;
      case 'about':
        return <About />;
      case 'user':
        return <User name={this.props.route.params.name} />;
      default:
        return <Error code={this.props.status} message={this.props.error} />;
    }
  },
  render: function () {
    return (
      <div>
        {this.getMainContent()}
        <footer>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/user/schoonology">Schoonology</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
});

module.exports = App;
