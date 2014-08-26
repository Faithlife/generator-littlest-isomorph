'use strict';
var yeoman = require('yeoman-generator');

var LittlestIsomorphGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          bower: false
        });
      }
    });
  },

  askFor: function () {
    var done = this.async();

    var prompts = [
      {
        name: 'name',
        message: 'What is the name of this application?',
        default: 'littlest-isomorph'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  app: function () {
    this.template('package.json', 'package.json', this.props);
    this.template('public/index.html', 'public/index.html', this.props);
    this.template('README.md', 'README.md', this.props);

    this.copy('.editorconfig', '.editorconfig');
    this.copy('_gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('index.js', 'index.js');
    this.copy('bin/client', 'bin/client');
    this.copy('bin/server', 'bin/server');
    this.copy('lib/components/about.jsx', 'lib/components/about.jsx');
    this.copy('lib/components/app.jsx', 'lib/components/app.jsx');
    this.copy('lib/components/home.jsx', 'lib/components/home.jsx');
    this.copy('lib/components/not-found.jsx', 'lib/components/not-found.jsx');
    this.copy('lib/components/user.jsx', 'lib/components/user.jsx');
    this.copy('lib/config.js', 'lib/config.js');
    this.copy('lib/routes.js', 'lib/routes.js');
    this.copy('styles/app.less', 'styles/app.less');
  }
});

module.exports = LittlestIsomorphGenerator;
