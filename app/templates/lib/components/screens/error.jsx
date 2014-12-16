var React = require('react');
var App = require('../app.jsx');

var Error = React.createClass({
  render: function () {
    return (
      <App context={this.props.context}>
        <h1>{this.props.code} Error</h1>
        <p>Message: <code>{this.props.message}</code></p>
      </App>
    );
  }
});

module.exports = Error;
