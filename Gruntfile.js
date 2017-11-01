module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['scripts/modernizr.js', 'scripts/all_features_detected_by_modernizr.js', 'scripts/browser_capabilities.js'],
                dest: 'scripts/app.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'scripts/app.js',
                dest: 'scripts/app.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['scripts/browser_capabilities.js', 'scripts/all_features_detected_by_modernizr.js'],
                tasks: ['default'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};