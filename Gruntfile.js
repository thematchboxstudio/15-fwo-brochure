module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: { /// UGLIFY - minimizes and combines js files. all {src} files into {dest}.
			build: {
				files: {
	        'library/js/build/global.min.js': ['library/js/libs/*', 'library/js/scripts.js'],
	        'library/js/build/typekit.wp-editor.js': ['library/js/typekit.wp-editor.js']
	      }
			}
		},
		/* UNCOMMENT THIS (and the below) TO CHECK YOUR JS, I COMMENTED IT OUT BY DEFAULT CAUSE THERE ARE ERRORS THAT WE ARE IGNORING :P
		jshint: {
			all: ['Gruntfile.js',  'library/js/scripts.js']
		},*/
 		svgmin: { /// SVG MIN - MINIMIZES SVG FILES IN THE {images} FOLDER AND PUTS THEM IN THE {img} FOLDER
			options: {                  // Configuration that will be passed directly to SVGO
				plugins: [
					{ removeViewBox: true },
					{ removeUselessStrokeAndFill: true },
					{ removeEmptyAttrs: false }
				]
			},
			dist: {                     // Target
				files: [{               // Dictionary of files
					expand: true,       // Enable dynamic expansion.
					cwd: 'library/images',     // Src matches are relative to this path.
					src: ['**/*.svg'],  // Actual pattern(s) to match.
					dest: 'library/img/',       // Destination path prefix.
					ext: '.min.svg'     // Dest filepaths will have this extension.
					// ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
				}]
			}
		},
		imagemin: {  /// IMAGEMIN - optimizes all source images {cwd} and spits them into {dest}.
			dynamic: {
				files: [{
					expand: true,
					cwd: 'library/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'library/img/'
				}]
			}
		},
		imageoptim: {
		  myTask: {
		    options: {
		      jpegMini: false,
		      imageAlpha: true,
		      quitAfter: true
		    },
		    src: ['library/img/', 'library/img/*/']
		  }
		},
		autoprefixer: { /// AUTOPREFIXER
				dist: {
					files: {
						'library/css/build/style.css': 'library/css/build/style.css',
						'library/css/build/login.css': 'library/css/build/login.css',
						'library/css/build/ie.css': 'library/css/build/ie.css'
						},
						options: {
							browsers: ['last 3 versions']
						},
				}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'library/css/build/',
				src: ['*.css'],
				dest: 'library/css/build/',
			},
			options: {
				keepSpecialComments: 0,
			}
		},
		uncss: {
			dist: {
				files: {
				'library/css/build/style.css': ['*.php']
				},
				options: {
					ignore: [':hover', ':focus', ':before', ':after','.js-nav-active body:not(.home) .header', 'body:not(.home) .header', "#colorbox", '#cboxPrevious','#cboxNext', '#cboxContent', '#cboxLoadedContent', '#cboxWrapper', '.cboxPhoto' ],
					stylesheets: ["library/css/build/style.css"],
					urls: ["http://beta.matchboxstudio.com/vital/","http://beta.matchboxstudio.com/vital/classes/","http://beta.matchboxstudio.com/vital/about-us/","http://beta.matchboxstudio.com/vital/pricing-and-memberships/","http://beta.matchboxstudio.com/vital/our-instructors/","http://beta.matchboxstudio.com/vital/studio-gallery/"],
					report: 'min',

				}
			},
		},
		copy: { /// THIS IS THE PART OF THE BUILD PROCESS THAT COPIES THE NEEDED FILES TO THE NEW BUILD FOLDER THEME. YOU JUST UPLOAD THAT THEME SINCE IT HAS ONLY THE FILES THAT ARE NEEDED
		  main: {
		    files: [
		      {expand: true, src: ['*.php', '*.ico', '*.png', '*.css'], dest: '../mb-build/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['library/*.php'], dest: '../mb-build/library/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['library/img/**'], dest: '../mb-build/library/img/', filter: 'isFile'},
 		      {expand: true, cwd: 'library/img/', src: ['**'], dest: '../mb-build/library/img/'},

		    ]
		  }
		}
	}); // END CONFIG

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-imageoptim');

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-uncss');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'svgmin', 'imagemin', 'imageoptim', 'autoprefixer', 'cssmin' ]);
	grunt.registerTask('images', ['svgmin','imagemin', 'imageoptim']);
	grunt.registerTask('text', ['uglify','autoprefixer']);
	grunt.registerTask('build', ['uglify','autoprefixer', 'uncss', 'cssmin', /*'svg-sprites','svgmin', 'imagemin', 'imageoptim'*/]);

};