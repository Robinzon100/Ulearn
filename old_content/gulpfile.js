const gulp = require('gulp');
const sass = require('gulp-sass');
const minCss = require("gulp-clean-css");
const browserSync = require('browser-sync').create();


//
// ─── SCSS TO CSS AND MINIFY ────────────────────────────────────────────────────────────────
// 

function style() {
	return gulp.src('./scss/*.scss') 

	.pipe(sass().on('error',sass.logError))

	.pipe(minCss())

	.pipe(gulp.dest('./css'))

	.pipe(browserSync.stream());
}

//
// ─── TO WATCH HTML,SCSS,JS ────────────────────────────────────────────────────────────────
// 

function watch() {
	browserSync.init({
		server: {
			baseDir: './' 
		}
	})
	gulp.watch('./scss/**/*.scss',style);
	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;
