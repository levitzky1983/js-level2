var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var validator = require('gulp-html');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var $ = require('jQuery');




//Задача запуска сервера
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'build'
    },
  })
})

//Задача преобразования scss в css и расстановка префиксов
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
     browsers: ['last 14 versions'],
     cascade: false
  }))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
  .pipe(validator())
  .pipe(gulp.dest('build'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
  .pipe(gulp.dest('build/js/'))
  .pipe(browserSync.reload({
      stream: true
  }));
});



//gulp.task('autoprefixer', () =>
//    gulp.src('build/**/*.css')
//        .pipe(autoprefixer({
//            browsers: ['last 10 versions'],
//            cascade: false
//        }))
//        .pipe(gulp.dest('build/css'))
//);


gulp.task('watch', function () {
  gulp.series('browserSync');
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.html', gulp.series('html'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));

});

gulp.task('watcher', gulp.parallel('browserSync','html', 'js', 'sass', 'watch'), function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.html', gulp.series('html'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));

});


gulp.task('useref', function () {
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', cleanCSS()))
  .pipe(gulp.dest('build'));
  });


  var minifyCSS = require('gulp-minify-css');
  var sourcemaps = require('gulp-sourcemaps');
   
  gulp.task('minify-css', function() {
    return gulp.src('./build/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(minifyCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/css'));
  }); 



