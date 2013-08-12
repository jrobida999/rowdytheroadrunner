// Generated by CoffeeScript 1.6.2
(function() {
  module.exports = function(grunt) {
    var cssFiles, dateFormat, htmlTemplateFiles;

    dateFormat = require('dateformat');
    cssFiles = ['public/css/*.css', '!public/css/utils/*.css', '!public/css/vendor/*.css', '!public/css/inherit/*.css', 'public/css/utils/contentTypes.css', 'public/css/utils/tables.css'];
    htmlTemplateFiles = ['public/homepage.html', 'public/onecolumn.html', 'public/twocolumn.html', 'public/threecolumn.html'];
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        options: {
          expand: true,
          banner: '/*! <%= pkg.name %> \n CSS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
        },
        combine: {
          files: {
            'sm_build/css/main.min.css': cssFiles
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            'sm_build/js/main.min.js': ['public/js/main.js']
          }
        }
      },
      watch: {
        scripts: {
          files: cssFiles,
          tasks: ['cssmin', 'uglify']
        }
      },
      "regex-replace": {
        t4tags: {
          src: htmlTemplateFiles,
          actions: {
            name: "t4media",
            search: new RegExp()
          }
        }
      }
    });
    grunt.event.on('watch', function(action, path, target) {
      return grunt.log.writeln(target + ' : ' + path + ' has been ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-regex-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('buildcss', ['cssmin']);
    grunt.registerTask('buildjs', ['uglify']);
    grunt.registerTask('watch-build', ['watch']);
    grunt.registerTask('buildt4tags', ['regex-replace']);
    return grunt.registerTask('default', ['cssmin']);
  };

}).call(this);
