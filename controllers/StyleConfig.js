'use strict';

var url = require('url');


var StyleConfig = require('./StyleConfigService');


module.exports.styleConfigGET = function styleConfigGET (req, res, next) {
  StyleConfig.styleConfigGET(req.swagger.params, res, next);
};

module.exports.styleConfigIdDELETE = function styleConfigIdDELETE (req, res, next) {
  StyleConfig.styleConfigIdDELETE(req.swagger.params, res, next);
};

module.exports.styleConfigIdPUT = function styleConfigIdPUT (req, res, next) {
  StyleConfig.styleConfigIdPUT(req.swagger.params, res, next);
};

module.exports.styleConfigPOST = function styleConfigPOST (req, res, next) {
  StyleConfig.styleConfigPOST(req.swagger.params, res, next);
};
