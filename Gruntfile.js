module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            },
            uglify: {
                files: ['app/**/**.js/','app/**/**/**.js','app/**/**/**.html','!app/**/**/*.spec.js','!app/**/**/*conf.js','app.js'],
                tasks: ['uglify:dev_build:run', 'uglify:prod_build:run'] //NOTE the :run flag
            },
            protractor: {
                files: ['app/**/**.js/','app/**/**/**.js','app/**/**/*.spec.js','!*conf.js','app.js', 'app/**/templates/**.html'],
                tasks: ['protractor:target:run'] //NOTE the :run flag
            }
        },
        uglify: {          
            dev_build: {
              options: {
                mangle: false,
                beautify: true
              },                
              files: {
                'app.built.js': ['app/**/**.js/','app/**/**/**.js','!app/**/**/*.spec.js','!app/**/**/*conf.js','app.js']
              }
            },
            prod_build: {
              options: {
                mangle: true
              },                
              files: {
                'app.built.min.js': ['app/**/**.js/','app/**/**/**.js','!app/**/**/*.spec.js','!app/**/**/*conf.js','app.js']
              }
            }
        },
        protractor: {
          options: {
            configFile: "conf.js", // Default config file 
            keepAlive: true, // If false, the grunt process stops when the test fails. 
            noColor: false, // If true, protractor will not use colors in its output. 
            args: {
              // Arguments passed to the command 
            }
          },
          target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
            options: {
              configFile: "conf.js", // Target-specific config file 
              args: {} // Target-specific arguments 
            }
          }
        }
  });
    grunt.registerTask('default', ['watch:uglify']);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-protractor-runner');
};