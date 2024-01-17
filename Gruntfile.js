module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' // destiny - origin
                }
            },
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                // let's find anything folder '** - for make reference of the folder' and anything file '* - for make reference of the file' that finished with '.less'
                tasks: ['less:development'] // when anything file change will be active this task
            },
            uglify: {
                files: ['src/scripts/**/*.js'],
                // let's find anything folder '** - for make reference of the folder' and anything file '* - for make reference of the file' that finished with '.less'
                tasks: ['uglify'] // when anything file change will be active this task
            },
        },
        uglify: {
            target: {
                files: {
                    'dev/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
}