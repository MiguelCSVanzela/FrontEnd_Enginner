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
                    'build/styles/main.min.css': 'source/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['source/styles/**/*.less'],
                tasks: ['less:development']
            },
            obfuscator: {
                files: ['source/scripts/main.js'],
                tasks: ['obfuscator']
            },
            uglify: {
                files: ['prebuild/scripts/main.js'],
                tasks: ['uglify']
            }

        },
        uglify: {
            target: {
                files: {
                    'build/scripts/main.min.js': 'prebuild/scripts/main.js'
                }
            }
        },
        obfuscator: {
            uglify: {
                files: {
                    'prebuild/scripts/main.js': 'source/scripts/main.js'
                }
            }
        },
        replace: {
            build: {
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
                        dest: 'build/'
                    }
                ]
            }
        },
        clean: ['prebuild']
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-obfuscator');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'clean'])
}

