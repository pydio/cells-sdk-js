module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-class-properties"],
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js'],
                        dest: 'lib/'
                    }
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask("default", ["babel"]);

};