/**
 * @jsx React.DOM
 */
var React = require('react');
var superagent = require('superagent');
var when = require('when');
var App = require('../app.jsx');

var Organization = React.createClass({
  getInitialState: function() {
    return {
      org: this.props.context.getStore('org')[this.props.route.params.name]
    };
  },
  componentDidMount: function() {
    var self = this;

    this.props.context.getStore('org')
      .on('change:' + self.props.route.params.name, function (org) {
        self.setState({
          org: org
        });
      });
  },
  render: function() {
    if (!this.state.org) {
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
        <img src={this.state.org.avatar_url} alt="Avatar Image" width="128px" heigth="128px" />
        <h1>{this.state.org.name}</h1>
        <dl>
          <dt>Location:</dt><dd>{this.state.org.location}</dd>
          <dt>Member since:</dt><dd>{(new Date(this.state.org.created_at)).toDateString()}</dd>
          <dt>Email:</dt><dd><a href={'mailto:' + this.state.org.email}>{this.state.org.email}</a></dd>
          <dt>Website:</dt><dd><a href={this.state.org.blog}>{this.state.org.blog}</a></dd>
        </dl>
      </App>
    );
  }
});

module.exports = Organization;
