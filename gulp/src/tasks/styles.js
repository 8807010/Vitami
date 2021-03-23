module.exports = () => {
  blinker.gulp.task('styles', function () {
    return blinker.gulp.src('./' + blinker.config.sourcePath + '/' + blinker.config.stylesDirectory + '/*.scss')
      .pipe(blinker.plugins.sass().on('error', blinker.plugins.sass.logError))
      .pipe(blinker.plugins.autoprefixer({
        cascade: 1
      }))
      // .pipe(blinker.plugins.rename('style.css'))
      .pipe(blinker.gulp.dest(blinker.config.temporaryPath + '/' + blinker.config.stylesDirectory))
      .pipe(blinker.plugins.browser_sync.reload({stream: true}));
  });

  blinker.gulp.task('styles:build', function () {
    let stream = blinker.gulp.src('./' + blinker.config.sourcePath + '/' + blinker.config.stylesDirectory + '/*.scss');

    if (blinker.config.css_source_maps) {
      stream = stream.pipe(blinker.plugins.source_maps.init());
    }

    stream = stream.pipe(blinker.plugins.sass().on('error', blinker.plugins.sass.logError))
      .pipe(blinker.plugins.autoprefixer({
        cascade: 1
      }))
      // .pipe(blinker.plugins.rename('style.css'))
      .pipe(blinker.gulp.dest(blinker.config.temporaryPath + '/' + blinker.config.stylesDirectory))
      .pipe(blinker.plugins.csso());

    if (blinker.config.css_source_maps) {
      stream = stream.pipe(blinker.plugins.source_maps.write());
    }

    stream = stream.pipe(blinker.plugins.rename(function(path){
      path.extname = '.min' + path.extname;
    }))
      .pipe(blinker.gulp.dest(blinker.config.temporaryPath + '/' + blinker.config.stylesDirectory))
      .pipe(blinker.plugins.browser_sync.reload({stream: true}));
    return stream;
  });

  blinker.gulp.task('styles:inline', function () {
    if (blinker.config.inline_css) {
      return blinker.gulp.src('./' + blinker.config.destinationPath + '/**/*.{html,htm}')
        .pipe(blinker.plugins.inline_css())
        .pipe(blinker.gulp.dest('./' + blinker.config.destinationPath));
    }
    return blinker.gulp.src('./' + blinker.config.destinationPath + '/**/*.html');
  });

  blinker.gulp.task('styles:build-watch', function () {
    let stream = blinker.gulp.src('./' + blinker.config.sourcePath + '/' + blinker.config.stylesDirectory + '/*.scss');

      if (blinker.config.css_source_maps) {
          stream = stream.pipe(blinker.plugins.source_maps.init());
      }

    stream = stream.pipe(blinker.plugins.sass().on('error', blinker.plugins.sass.logError))
      .pipe(blinker.plugins.autoprefixer({
        cascade: 1
      }))
      //  .pipe(blinker.plugins.rename('style.css'))
      .pipe(blinker.gulp.dest(blinker.config.destinationPath + '/' + blinker.config.stylesDirectory))
      .pipe(blinker.plugins.csso());

    if (blinker.config.css_source_maps) {
      stream = stream.pipe(blinker.plugins.source_maps.write());
    }

    stream = stream.pipe(blinker.plugins.rename(function(path){
      path.extname = '.min' + path.extname;
    }))
      .pipe(blinker.gulp.dest(blinker.config.destinationPath + '/' + blinker.config.stylesDirectory));
    return stream;
  });
};