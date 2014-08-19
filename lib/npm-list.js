/*
 * npm-list
 * https://github.com/stefanbuck/npm-list
 *
 * Copyright (c) 2014 Stefan Buck
 * Licensed under the MIT license.
 */

'use strict';

var jsonRequester = require('json-requester');
var REGISTRY_URL = 'http://isaacs.iriscouch.com/registry/_all_docs?include_docs=true';

module.exports = function(options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  options = options || {};
  options.uri = options.uri || REGISTRY_URL;
  options.jsonStreamPath = options.jsonStreamPath || 'rows.*.doc';

  return jsonRequester(options, function(err, data) {
    if (err) {
      return cb(err);
    }
    cb(null, data);
  });
};
