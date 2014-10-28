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
    this.copy('.dockerignore', '.dockerignore');
    this.copy('.editorconfig', '.editorconfig');
    this.copy('_Dockerfile', 'Dockerfile');
    this.copy('_gitignore', '.gitignore');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.template('_package.json', 'package.json', this.props);
    this.copy('index.js', 'index.js');
    this.template('README.md', 'README.md', this.props);
    this.copy('bin/client', 'bin/client');
    this.copy('bin/cluster', 'bin/cluster');
    this.copy('bin/server', 'bin/server');
    this.copy('data/env/development.json', 'data/env/development.json');
    this.copy('data/env/production.json', 'data/env/production.json');
    this.copy('lib/actions/org.js', 'lib/actions/org.js');
    this.copy('lib/actions/user.js', 'lib/actions/user.js');
    this.template('lib/components/app.jsx', 'lib/components/app.jsx', this.props);
    this.copy('lib/components/screens/about.jsx', 'lib/components/screens/about.jsx');
    this.copy('lib/components/screens/home.jsx', 'lib/components/screens/home.jsx');
    this.copy('lib/components/screens/error.jsx', 'lib/components/screens/error.jsx');
    this.copy('lib/components/screens/user.jsx', 'lib/components/screens/user.jsx');
    this.copy('lib/components/screens/org.jsx', 'lib/components/screens/org.jsx');
    this.copy('lib/stores/org.js', 'lib/stores/org.js');
    this.copy('lib/stores/user.js', 'lib/stores/user.js');
    this.copy('lib/config.js', 'lib/config.js');
    this.copy('lib/context.js', 'lib/context.js');
    this.copy('lib/router.js', 'lib/router.js');
    this.template('public/index.html', 'public/index.html', this.props);
    this.copy('public/favicon.ico', 'public/favicon.ico');
    this.copy('styles/app.less', 'styles/app.less');
    this.copy('styles/bundle.less', 'styles/bundle.less');
    this.copy('styles/mixins.less', 'styles/mixins.less');
    this.copy('styles/reset.less', 'styles/reset.less');
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
