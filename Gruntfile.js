'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin' // Static mapping используется для объявления плагинов вручную
    });
    const sass = require('node-sass'); // Указываем какой плагин использовать для задачи Sass

    grunt.initConfig ({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
            },
            dist: {
                files: {
                    'css/styles-sass.css': 'css/styles-sass.scss'
                }
            }
        },
        watch: {
            files: 'css/*scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['css/*.css', '*.html', 'js/*.js']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*html'],
                    dest: 'dist'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/'
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: 'dist',
                src: ['index.html, contact.html, about.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }
                        }]
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {} // This configuration is provided by useminPrepare
        },
        uglify: {
            dist: {} // This configuration is provided by useminPrepare
        },
        cssmin: {
            dist: {} // This configuration is provided by useminPrepare
        },
        usemin: {
            html: ['dist/index.html, dist/contact.html, dist/about.html'],
            options: {
                assetsDirs: ['dist', 'dist/css', 'dist/js']
            }
        },
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/about.html': 'dist/about.html',
                    'dist/contact.html': 'dist/contact.html'
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
                                'clean', 
                                'copy', 
                                'imagemin',
                                'useminPrepare',
                                'concat',
                                'cssmin',
                                'uglify',
                                'usemin',
                                'htmlmin'
                                ]
    );

};