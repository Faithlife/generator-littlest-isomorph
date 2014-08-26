/**
 * @jsx React.DOM
 */
var React = require('react');

var Error = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.code} Error</h1>
        <p>Message: <code>{this.props.message}</code></p>
      </div>
    );
  }
});

module.exports = Error;
