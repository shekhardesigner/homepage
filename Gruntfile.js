'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			multiple: {
				files: [{
					expand: true,
					cwd: './',
					src: '*.html',
					dest: 'dist/'	
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['htmlmin']);
};