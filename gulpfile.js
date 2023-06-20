const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');


function ComprimeImagem() {
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'));
}


function ComprimeJavascript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}



function CompilaSass() {
    return gulp.src('./source/estilos/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/estilos'));
}

exports.default = function () {
    gulp.watch('./source/estilos/main.scss', { ignoreInitial: false }, CompilaSass);
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, ComprimeJavascript);
    gulp.watch('./source/imagens', { ignoreInitial: false }, ComprimeImagem);
}