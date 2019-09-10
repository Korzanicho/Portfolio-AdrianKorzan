const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');



gulp.task('sass', () =>{
	return gulp.src("./scss/**/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./css"));
});

gulp.task('minify', () => {
	return gulp.src('./js/main.js', { allowEmpty: true }) 
	  .pipe(minify({noSource: true}))
	  .pipe(gulp.dest('./js'))
  })

gulp.task("watch",()=>{
	gulp.watch("./scss/**/*.scss", gulp.series("sass"));
	gulp.watch("./js/main.js", gulp.series("minify"));
});

gulp.task('default', gulp.parallel('watch')); //funkcja defaultowa
