const gulp = require("gulp");
const del = require("del");
const imagemin = require("gulp-imagemin");

gulp.task("clean", () => del("dist"));

gulp.task("build", () =>
  gulp
    .src("src/**/*")
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest("dist"))
);

gulp.task("default", gulp.series("clean", "build"));
