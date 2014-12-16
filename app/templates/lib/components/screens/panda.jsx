var littlest = require('littlest-isomorph');
var React = require('react');
var App = require('../app.jsx');

var Home = React.createClass({
  mixins: [littlest.Mixin],
  mappings: {
    photos: function () { return 'photos:streams:' + this.props.route.params.name; }
  },
  render: function () {
    var photos = this.state.photos || [];
    var name = this.props.route.params.name;

    name = name.split('%20')
      .map(function (part) {
        return part.slice(0, 1).toUpperCase() + part.slice(1);
      })
      .join(' ');

    return (
      <App context={this.props.context}>
        <h1>{photos.length} Photos from {name}</h1>
        {photos.map(function (photo) {
          return <pre>{JSON.stringify(photo, null, 2)}</pre>;
        })}
      </App>
    );
  }
});

module.exports = Home;
