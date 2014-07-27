/*
 * npm-list
 * https://github.com/stefanbuck/npm-list
 *
 * Copyright (c) 2014 Stefan Buck
 * Licensed under the MIT license.
 */

'use strict';

var npmList = require('../');

var options = {
  filter: ['name', 'description']
};

npmList(options, function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data);
});
