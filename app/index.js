'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

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

    this.copy('.editorconfig', '.editorconfig');
    this.copy('.gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('index.js', 'index.js');
    this.copy('bin/server', 'bin/server');
    this.copy('lib/components/about.jsx', 'lib/components/about.jsx');
    this.copy('lib/components/app.jsx', 'lib/components/app.jsx');
    this.copy('lib/components/home.jsx', 'lib/components/home.jsx');
    this.copy('lib/components/not-found.jsx', 'lib/components/not-found.jsx');
    this.copy('lib/components/user.jsx', 'lib/components/user.jsx');
    this.copy('lib/client.js', 'lib/client.js');
    this.copy('lib/config.js', 'lib/config.js');
    this.copy('lib/router.js', 'lib/router.js');
    this.copy('lib/routes.json', 'lib/routes.json');
    this.copy('lib/server.js', 'lib/server.js');
    this.copy('public/index.html', 'public/index.html');
    this.copy('styles/app.less', 'styles/app.less');
  }
});

module.exports = LittlestIsomorphGenerator;
