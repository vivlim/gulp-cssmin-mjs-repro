# importing gulp-cssmin on gulp 5 with a mjs gulpfile badly breaks things

i spent several hours trying to figure this out before i started deleting big chunks of the gulpfile i was working on in desperation, recording it here in the hopes i'll save someone else from the same fate

## the setup

first, a trivial case that works; this copies a text file from `input` to `output` using a glob pattern

```js
import gulp from "gulp";

gulp.task("default", function () {return gulp.src("./input/*.txt").pipe(gulp.dest("./output"))})
```

this results in:

```
$ npm run build

> gulp-cssmin-mjs-repro@0.0.0 build
> gulp

[20:44:02] Using gulpfile ~/git/minimal/gulpfile.mjs
[20:44:02] Starting 'default'...
[20:44:02] Finished 'default' after 23 ms
```


## breaking it

import cssmin via `import cssmin from "gulp-cssmin";`

```js

import gulp from "gulp";
import cssmin from "gulp-cssmin";

gulp.task("default", function () {return gulp.src("./input/*.txt").pipe(gulp.dest("./output"))})
```

this results in:

```
$ npm run build

> gulp-cssmin-mjs-repro@0.0.0 build
> gulp

[20:48:08] Using gulpfile ~/git/minimal/gulpfile.mjs
[20:48:08] Starting 'default'...
[20:48:08] The following tasks did not complete: default
Did you forget to signal async completion?
```
