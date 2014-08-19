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
    this.mkdir('lib');
    this.mkdir('lib/components');
    this.mkdir('styles');

    this.copy('.editorconfig', '.editorconfig');
    this.template('package.json', 'package.json', this.props);
  }
});

module.exports = LittlestIsomorphGenerator;
