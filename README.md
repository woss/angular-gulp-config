angular-gulp-config
===================

## Setup

Install the module:

```
$ npm install angular-gulp-config require-dir --save-dev
```

Copy the `gulpfile.js`:

```
$ cp node_modules/angular-gulp-config/gulpfile.js .
```

Create an `angular-gulp-config.json` file:

```
{
  "app": "YOUR_ANGULAR_APP_NAME",
  "browserSync": {
    "port": 8006
  }
  "tests": [
    "src/**/*-spec.js"
  ]
}
```

Configure an S3 bucket in your `.env` file:

```
S3_ACCESS_KEY=YOUR_S3_ACCESS_KEY
S3_SECRET=YOUR_S3_SECRET
S3_REGION=eu-west-1
S3_BUCKET=BUCKET_NAME/any_subdirectory
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
