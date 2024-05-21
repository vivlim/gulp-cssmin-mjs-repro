import gulp from "gulp";
import debug from "gulp-debug";

// Importing cssmin breaks everything
//import cssmin from "gulp-cssmin";

gulp.task("default", function () {
    return gulp.src("./input/*.txt")
    .pipe(debug())
    .pipe(gulp.dest("./output"))
})