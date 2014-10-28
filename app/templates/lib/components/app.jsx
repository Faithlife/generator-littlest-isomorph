/**
 * @jsx React.DOM
 */
var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="app__sidebar">
          <h1><a href="/"><%= title %></a></h1>
          <nav>
            <ul className="nav-list">
              <li><a className="nav-list__item" href="/">Home</a></li>
              <li><a className="nav-list__item" href="/about">About</a></li>
              <li><a className="nav-list__item" href="/orgs/github">GitHub</a></li>
              <li><a className="nav-list__item" href="/user/schoonology">Schoonology</a></li>
            </ul>
          </nav>
        </div>
        <div className="app__content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
