/**
 * @jsx React.DOM
 */
var React = require('react');
var config = require('../config');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>Config:</p>
        <pre><code>{JSON.stringify(config, null, 2)}</code></pre>
      </div>
    );
  }
});

module.exports = About;
