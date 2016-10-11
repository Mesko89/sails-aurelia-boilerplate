# sails-aurelia-boilerplate
Aurelia and Sails.js joined together in one project.

Uses [Aurelia CLI](https://github.com/aurelia/cli) with some 
additional modifications to gulp scripts to run and build the project.

## Installing
```
npm install -g aurelia-cli
npm install -g sails
npm install
```

## Running
```au run```
Or with BrowserSync (Aurelia) and nodemon (Sails.js):
```au run --watch```

## Building
```au build```

## Generating scaffolds

You can use [Sails.js](http://sailsjs.org/) CLI tool to generate 
anything sails related:
```sails generate api Book ```

or Aurelia CLI for anything Aurelia related:
```au generate element hello-world```

## Test
``` au test```
