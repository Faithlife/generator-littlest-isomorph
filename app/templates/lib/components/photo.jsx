var util = require('util');
var React = require('react');
var SIZE_TO_TAG = {
  240: 'm',
  320: 'n',
  640: 'z',
  800: 'c',
  1024: 'b'
};

var Home = React.createClass({
  propTypes: {
    photo: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      farm: React.PropTypes.number.isRequired,
      server: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      secret: React.PropTypes.string.isRequired,
    }).isRequired,
    size: React.PropTypes.oneOf([240, 320, 640, 800, 1024]).isRequired
  },
  getDefaultProps: function () {
    return {
      photo: null,
      size: 640
    };
  },
  getTitle: function () {
    return this.props.photo.title;
  },
  getUrl: function () {
    return util.format(
      'https://farm%s.staticflickr.com/%s/%s_%s_%s.jpg',
      this.props.photo.farm,
      this.props.photo.server,
      this.props.photo.id,
      this.props.photo.secret,
      SIZE_TO_TAG[this.props.size]
    );
  },
  render: function () {
    return (
      <div>
        <h2>{this.getTitle()}</h2>
        <img src={this.getUrl()} />
      </div>
    );
  }
});

module.exports = Home;
