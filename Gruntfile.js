module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'build/styles/main.css': 'source/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'source/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['source/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['source/index.html'],
                tasks: ['replace:build']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'source/scripts/main.js'
                }
            }
        },

        replace: {
            dist: {
                options: {
                    patterns:
                        [
                            {
                                match: "SCRIPT_JAVASCRIPT",
                                replacement: './scripts/main.js'
                            },
                            {
                                match: "STYLESHEET_CSS",
                                replacement: "./styles/main.less"
                            }
                        ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['source/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "dist/index.min.html": "source/index.html"
                }
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'uglify']);
}

