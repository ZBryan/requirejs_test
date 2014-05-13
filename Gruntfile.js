module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: ['build/'],
			dev: {
				src: ['build/**/*']
			}
		},

		copy: {
			dev: {
				expand: true,
				cwd: 'app',
				src: ['*.css', '*.html', 'bower_components/requirejs/require.js'],
				dest: 'build/',
				flatten: false,
				filter: 'isFile'
			}
		},

		connect: {
			options: {
				port: process.env.PORT || 3000,
				base: 'build/',
				keepalive: true,
			},
			all: {},
		},

		requirejs: {
			compile: {
				options: {
					name: 'config',
					baseUrl: 'app/js',
					mainConfigFile: 'app/js/config.js',
					out: 'build/client.js',
					optimizer: "none"
				}
			}
		}
	});

	grunt.registerTask('build:dev', ['clean:dev', 'requirejs', 'copy:dev']);
	grunt.registerTask('serve', ['build:dev', 'connect']);
}