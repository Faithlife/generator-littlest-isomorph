'use strict';
var path = require('path');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var LittlestIsomorphGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
    this.props = {};
    this.props.name = this._.slugify(this.appname || path.dirname(process.cwd()));
    this.props.title = this._.titleize(this._.humanize(this.props.name));
    this.props.description = 'A simple application built on Littlest-Isomorph, an isomorphic JavaScript stack.';
  },

  welcome: function () {
    if (!this.options['skip-welcome-message']) {
      this.log(yosay('Welcome to the Littlest Isomorph Generator!'));
    }
  },

  askFor: function () {
    var done = this.async();

    var prompts = [
      {
        name: 'name',
        message: 'What is the name of this application?',
        default: this.props.name
      },
      {
        name: 'title',
        message: 'What is the title of this application?',
        default: this.props.title
      },
      {
        name: 'description',
        message: 'How would you describe this application?',
        default: this.props.description
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      this.log();
      done();
    }.bind(this));
  },

  app: function () {
    this.template('_package.json', 'package.json', this.props);
    this.template('public/index.html', 'public/index.html', this.props);
    this.template('README.md', 'README.md', this.props);

    this.copy('.editorconfig', '.editorconfig');
    this.copy('_gitignore', '.gitignore');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('index.js', 'index.js');
    this.copy('bin/client', 'bin/client');
    this.copy('bin/server', 'bin/server');
    this.copy('lib/components/about.jsx', 'lib/components/about.jsx');
    this.copy('lib/components/app.jsx', 'lib/components/app.jsx');
    this.copy('lib/components/home.jsx', 'lib/components/home.jsx');
    this.copy('lib/components/error.jsx', 'lib/components/error.jsx');
    this.copy('lib/components/user.jsx', 'lib/components/user.jsx');
    this.copy('lib/config.js', 'lib/config.js');
    this.copy('lib/router.js', 'lib/router.js');
    this.copy('styles/app.less', 'styles/app.less');
  },

  dependencies: function () {
    if (!this.options['skip-install']) {
      this.log();
      this.log('Installing dependencies for you ' + chalk.bold('while you wait') + '!');
      this.log(chalk.grey('(If this fails, try running ' + chalk.bold('npm install') + ' yourself.)'));
      this.log();
      this.installDependencies({
        bower: false,
        skipMessage: true,
        callback: this.async()
      });
    }
  },

  farewell: function () {
    this.log();
    this.log(chalk.green('Application generated!'));
    this.log('To get started:');
    this.log('  grunt dev');
    this.log('To read more:');
    this.log('  https://github.com/Faithlife/littlest-isomorph');
    this.log('  http://facebook.github.io/react/');
    this.log();
  }
});

module.exports = LittlestIsomorphGenerator;
