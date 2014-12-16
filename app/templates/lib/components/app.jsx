var littlest = require('littlest-isomorph');
var React = require('react');

var App = React.createClass({
  mixins: [littlest.Mixin],
  mappings: {
    pandas: 'pandas:all'
  },
  render: function () {
    return (
      <div className="app">
        <div className="app__sidebar">
          <h1><a href="/"><%= title %></a></h1>
          <nav>
            <ul className="nav-list">
              <li key="home"><a className="nav-list__item" href="/">Home</a></li>
              <li key="about"><a className="nav-list__item" href="/about">About</a></li>
              {this.state.pandas.map(function (name) {
                return <li key={name}><a className="nav-list__item" href={'/panda/' + name}>{name}</a></li>;
              })}
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
