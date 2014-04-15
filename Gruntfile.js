module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: { /// UGLIFY - minimizes and combines js files. all {src} files into {dest}.
			build: {
				files: {
	        		'js/scripts.js': ['js/modernizr-2.7.1.min.js','js/functions.js', 'js/responsive-nav.js'],
	      		}
			}
		},
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
					cwd: 'build/i',     // Src matches are relative to this path.
					src: ['**/*.svg'],  // Actual pattern(s) to match.
					dest: 'build/i/',       // Destination path prefix.
					ext: '.svg'     // Dest filepaths will have this extension.
					// ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
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
		    src: ['build/i/', 'build/i/*/']
		  }
		},
		autoprefixer: { /// AUTOPREFIXER
				dist: {
					files: {
						'build/css/style.css': 'build/css/style.css',
						},
						options: {
							browsers: ['last 3 versions']
						},
				}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'build/css/',
				src: ['*.css'],
				dest: 'build/css/',
			},
			options: {
				keepSpecialComments: 0,
			}
		},
		copy: { /// THIS IS THE PART OF THE BUILD PROCESS THAT COPIES THE NEEDED FILES TO THE NEW BUILD FOLDER THEME. YOU JUST UPLOAD THAT THEME SINCE IT HAS ONLY THE FILES THAT ARE NEEDED
		  main: {
		    files: [
 		      {expand: true, flatten: true, src: ['i/**'], dest: 'build/i/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['css/style.css'], dest: 'build/css/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['js/jquery-1.10.2.min.js'], dest: 'build/js/', filter: 'isFile'},
 		      {expand: true, flatten: true, src: ['js/scripts.js'], dest: 'build/js/', filter: 'isFile'},
 		      {expand: true, cwd: 'i/', src: ['**'], dest: 'build/i/'},

		    ]
		  }
		},
	  htmlmin: {                                     // Task
	    dist: {                                      // Target
	      options: {                                 // Target options
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   // Dictionary of files
	        'build/index.html': 'index.html',     // 'destination': 'source'
	      }
	    },
	  }
  	}); // END CONFIG

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-imageoptim');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build', ['uglify', 'copy', 'autoprefixer', 'htmlmin', 'svgmin', /*'imageoptim',*/ 'cssmin',   ]);


};