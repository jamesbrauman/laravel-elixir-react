var elixir = require('laravel-elixir');
var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var path = require('path');

elixir.extend('react', function(src, dest) {
    if (src == false)
        src = 'resources/assets/jsx/*.jsx';

    if (dest == false)
        dest = 'public/js';

    new elixir.Task('react', function() {
        var buffer = gulp.src(src).pipe(react());

        if (Array.isArray(src))
            buffer = buffer.pipe(concat(path.basename(dest)));

        if (dest.indexOf('.js'))
            buffer = buffer.pipe(rename(path.basename(dest)));

        buffer.pipe(gulp.dest(path.dirname(dest)));
    });
});