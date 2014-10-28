/**
 * @jsx React.DOM
 */
var React = require('react');
var App = require('../app.jsx');

var Home = React.createClass({
  render: function () {
    return (
      <App>
        <h1>Home</h1>
        <p>This is the home page.</p>
      </App>
    );
  }
});

module.exports = Home;
