'use strict';

var path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      client: {
        src: ['bin/client'],
        dest: 'public/bundle.js',
        options: {
          transform: ['envify', 'reactify']
        }
      }
    },
    less: {
      client: {
        src: ['styles/bundle.less'],
        dest: 'public/bundle.css',
        options: {
          paths: function (srcFile) {
            return [
              path.dirname(srcFile),
              path.resolve(__dirname, 'node_modules')
            ];
          },
          relativeUrls: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['bin/client', 'lib/**/*.js', 'lib/**/*.jsx', 'lib/**/*.json'],
        tasks: ['browserify'],
        options: {
          atBegin: true
        }
      },
      server: {
        files: ['bin/server'],
        tasks: ['restart-server']
      },
      styles: {
        files: ['styles/**/*.less'],
        tasks: ['less'],
        options: {
          atBegin: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // A supervisor-specific hack to restart the server without running a
  // complete Browserify pass, though it's Browserify's output it's watching.
  grunt.registerTask('restart-server', function () {
    fs.appendFileSync(path.resolve(__dirname, 'public', 'bundle.js'), ' ');
  });

  grunt.registerTask('server', function () {
    grunt.util.spawn({
      cmd: 'node',
      args: [
        './node_modules/supervisor/lib/cli-wrapper.js',
        '-w', 'public',
        '-e', 'html,js,json',
        'index.js'
      ],
      opts: {
        stdio: 'inherit'
      }
    }, function () {
      grunt.fail.fatal(new Error('Supervisor quit.'));
    });
  });

  grunt.registerTask('default', ['browserify', 'less']);
  grunt.registerTask('dev', ['server', 'watch']);
};
