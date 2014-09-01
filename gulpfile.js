// Build library dependencies
var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    bower      = require('gulp-bower'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    del        = require('del');

// Paths
var config = {
    npm: require('./package.json'),
    bower: require('./bower.json'),
    source_paths: {
        client: {
            bower: ['./bower_components'],
            config:['./src/client/js/config.js'],
            css: ['./src/client/css/**/*.css'],
            js: ['./src/client/js/**/*.js', '!./src/client/js/config.js'],
            html: ['./src/client/**/*.html']
        },
        server: {
            js: ['./src/server/**/*.js']
        }
    },
    dest_paths: {
        client: {
            bower: './dev/client/lib',
            config: './dev/client/js',
            css: './dev/client/css',
            js: './dev/client/js',
            html: './dev/client'
        },
        server: {
            js: './dev/server'
        }
    },
    output_files: {
        client: {
            js: 'notary.min.js'
        },
        server: {

        }
    }
}

// Clean any previous build output
gulp.task('clean', function (cb) {
    del(['dev', 'release'], cb);
});

// Copy bower dependencies
gulp.task('copy-bower', function (cb) {
    return bower(config.source_paths.client.bower)
        .pipe(gulp.dest(config.dest_paths.client.bower));
})

// Prepare javascript
gulp.task('compile-javascript', function (cb) {
    return gulp.src(config.source_paths.client.js)
        .on('error', gutil.log.bind(gutil, 'Compilation Error'))
        /*.pipe(uglify())*/
        /*.pipe(concat(config.output_files.client.js))*/
        .pipe(gulp.dest(config.dest_paths.client.js));
});

gulp.task('compile-css', function (cb) {
    return gulp.src(config.source_paths.client.css)
        .pipe(gulp.dest(config.dest_paths.client.css));
});

// Copy html files as-is
gulp.task('copy-html', function (cb) {
    return gulp.src(config.source_paths.client.html)
        .pipe(gulp.dest(config.dest_paths.client.html));
});

// Copy config files as-is
gulp.task('copy-config', function (cb) {
    return gulp.src(config.source_paths.client.config)
        .pipe(gulp.dest(config.dest_paths.client.config));
});

// Copy server-side assets as-is
gulp.task('copy-server', function (cb) {
    return gulp.src(config.source_paths.server.js)
        .pipe(gulp.dest(config.dest_paths.server.js));

});

// Watch the filesystem for changes and
// rerun the dev task when things change
gulp.task('watch', function (cb) {
    gulp.watch(config.source_paths.client.js,     ['dev'], cb);
    gulp.watch(config.source_paths.client.config, ['dev'], cb);
    gulp.watch(config.source_paths.client.html,   ['dev'], cb);
    gulp.watch(config.source_paths.client.css,    ['dev'], cb);
});

// Build a development environment 
gulp.task('dev', [
    'compile-javascript',
    'compile-css',
    'copy-config',
    'copy-html',
    'copy-bower',
    'copy-server'
]);


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'dev']);




