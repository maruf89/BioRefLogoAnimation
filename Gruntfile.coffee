module.exports = ( grunt ) ->
  "use strict"

  require( "matchdep" ).filterDev(" grunt-* ").forEach ( obj ) ->
    console.log obj
    grunt.loadNpmTasks obj

  grunt.initConfig
    config:
      _javascript: 'js/'
      _coffee: 'js/src/'
      _css: './'
      _stylus: 'css/src/'
      pkg: 'package.json'

    stylus:
      compile:
        options:
          urlfunc: 'embedurl'
          use: [ 'nib' ]
          import: [ 'nib' ]
        files:
          'css/style.css': "<%= config._stylus %>*.styl"

    coffeelint:
      dist:
        options:
          camel_case_classes: true
        files:
          src: "<%= config._coffee %>*.coffee"

    coffee:
      compileBare:
        options:
          sourceMap: true
          join: true
        expand:true
        flatten:true
        cwd: "<%= config._coffee %>"
        src: [ '*.coffee' ]
        dest: 'js/'
        ext: '.js'

      concatenated:
        options:
          sourceMap: false
        files:
          'js/scripts.js' : "<%= config._coffee %>*.coffee"

    uglify:
      options:
        sourceMappingURL: (dest) ->
          console.log dest
          "#{dest}.map"
        sourceMapPrefix: 3
        beautify: false
        report: false
        compress: false
        mangle: false
      production:
        src: 'js/scripts.js'
        dest: 'js/scripts.min.js'
        options:
          sourceMap: 'js/scripts.min.js.map'
          compress: true
          mangle: true

    watch:
      stylus:
        files: [ "<%= config._stylus %>*.styl" ]
        tasks: [ 'stylus' ]
      coffee:
        files: [ "<%= config._coffee %>*.coffee" ]
        tasks: [ 'coffee:concatenated', 'uglify:production' ]

    grunt.registerTask 'default', ['stylus','coffee:concatenated' ,'watch']
    grunt.registerTask 'production', ['stylus' ,'coffee:concatenated' ,'uglify:production']



