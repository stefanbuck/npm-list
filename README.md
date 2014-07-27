# npm-list 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Requests a list of npm packages with [json-requester](https://github.com/stefanbuck/json-requester)


## Install

```bash
$ npm install --save npm-list
```


## Usage

```javascript
var npmList = require('npm-list');

var options = {
  filter: ['name', 'description']
};
npmList(options, function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data);
});

```

## License

Copyright (c) 2014 Stefan Buck. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/npm-list
[npm-image]: https://badge.fury.io/js/npm-list.svg
[daviddm-url]: https://david-dm.org/stefanbuck/npm-list.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/stefanbuck/npm-list
