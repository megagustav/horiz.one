# horizon

I'm adding a readme! This will be replaced. Bye bye!

# setup

We need npm, gulp, and three packages.

Check for your versions.

```
node --version
npm --version
gulp --version
```

Install the gulp command line utility
```
npm install --global gulp-cli
```

Install the gulp package
```
npm install --save-dev gulp
```

Add the browser-sync plugin
```
npm install browser-sync
```

Start the server to let the gulpfile build the static site in the /docs folder
```
gulp
```

pushing to main will cause github pages to publish the page, deploying from the /docs folder