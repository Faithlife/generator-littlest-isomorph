/**
 * @jsx React.DOM
 */
var littlest = require('littlest-isomorph');
var React = require('react');
var superagent = require('superagent');
var when = require('when');
var App = require('../app.jsx');

var User = React.createClass({
  getInitialState: function() {
    return {
      user: this.props.context.getStore('user')[this.props.route.params.name]
    };
  },
  componentDidMount: function() {
    var self = this;

    this.props.context.getStore('user')
      .on('change:' + self.props.route.params.name, function (user) {
        self.setState({
          user: user
        });
      });
  },
  render: function() {
    if (!this.state.user) {
      return (
        <App>
          <h1>
            Not Found
          </h1>
        </App>
      );
    }

    return (
      <App>
        <img src={this.state.user.avatar_url} alt="Avatar Image" width="128px" heigth="128px" />
        <h1>{this.state.user.name}</h1>
        <dl>
          <dt>Location:</dt><dd>{this.state.user.location}</dd>
          <dt>Company:</dt><dd>{this.state.user.company}</dd>
          <dt>Member since:</dt><dd>{(new Date(this.state.user.created_at)).toDateString()}</dd>
          <dt>Website:</dt><dd><a href={this.state.user.blog}>{this.state.user.blog}</a></dd>
        </dl>
      </App>
    );
  }
});

module.exports = User;
