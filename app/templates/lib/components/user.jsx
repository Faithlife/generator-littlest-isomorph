/**
 * @jsx React.DOM
 */
var React = require('react');
var superagent = require('superagent');
var when = require('when');
var actions = require('../actions');
var userStore = require('../stores/user');

var User = React.createClass({
  getInitialState: function() {
    return {
      user: userStore[this.props.name]
    };
  },
  componentDidMount: function() {
    var self = this;

    userStore.on('change:' + self.props.name, function (user) {
      self.setState({
        user: user
      });
    });

    actions.fetchUser({
      name: self.props.name
    });
  },
  render: function() {
    if (!this.state.user) {
      return (
        <div />
      );
    }

    return (
      <div>
        <img src={this.state.user.avatar_url} alt="Avatar Image" width="128px" heigth="128px" />
        <h1>{this.state.user.name}</h1>
        <dl>
          <dt>Company:</dt><dd>{this.state.user.company}</dd>
        </dl>
      </div>
    );
  }
});

module.exports = User;
