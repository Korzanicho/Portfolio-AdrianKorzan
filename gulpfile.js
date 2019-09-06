const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');





gulp.task('sass', () =>{
	return gulp.src("./scss/**/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./css"));
});

gulp.task("watch",()=>{
	gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});

gulp.task('default', gulp.parallel('watch')); //funkcja defaultowa
