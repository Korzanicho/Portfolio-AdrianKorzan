const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require("browser-sync").create();
const concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('serve', (cb) => {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		notify: false,
		open: true,
	});

	cb();
});

gulp.task('scripts', function () {
	return gulp.src(['./js/main.js', './js/collapse.js'])
		.pipe(concat('index.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
});

gulp.task('sass', () => {
	return gulp.src("./scss/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css"));
});

gulp.task("watch", ()=>{
	gulp.watch("./scss/**/*.scss", gulp.series("sass"));
	gulp.watch("./js/**/*.js", gulp.series("scripts"));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'watch', 'serve'));
