angular-gulp-config
===================

## Setup

```
$ npm install angular-gulp-config --save-dev
$ cp node_modules/angular-gulp-config/gulpfile.js .
```

Then add the following scripts to your `package.json` file:

```
{
  ...
  "scripts": {
    ...
    "start": "gulp",
    "test": "npm run build && gulp test",
    "lint": "gulp lint",
    "build": "npm run build:dev",
    "build:dev": "npm install && gulp build:dev",
    "build:prod": "npm install && gulp build:prod",
    "deploy": "npm install && gulp lint && gulp test && gulp zip && gulp upload",
    "deploy:skip-tests": "npm install && gulp lint && gulp zip && gulp upload",
    ...
  }
  ...
}
```

Create `angular-gulp-config.json`:

```
{
  "app": "YOUR_ANGULAR_APP_NAME",
  "tests": [
    "src/**/*-spec.js"
  ]
}
```

## Common Usages

Start development environment:

```
$ npm start
```

Run tests:

```
$ npm test
```

Build application (dev version):

```
$ npm run build
```

Deploy application:

```
$ npm run deploy
```
