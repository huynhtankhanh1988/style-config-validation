'use strict';

exports.styleConfigGET = function(args, res, next) {
  console.log(args);
  /**
   * parameters expected in the args:
  * where (String)
  * token (String)
  **/


  var examples = {};
  examples['application/json'] = [ {
  "weatherBackgroundColor" : "aeiou",
  "fgColor1" : "aeiou",
  "breakingNewsColor" : "aeiou",
  "font1" : "aeiou",
  "name" : "aeiou",
  "bgColor1" : "aeiou",
  "bgColor2" : "aeiou",
  "affiliateId" : "aeiou",
  "fgColor2" : "aeiou",
  "headerFontColor" : "aeiou",
  "weatherForegroundColor" : "aeiou"
} ];

  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }


}

exports.styleConfigIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * token (String)
  **/
  // no response value expected for this operation


  res.end();
}

exports.styleConfigIdPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * styleConfig (Style)
  * token (String)
  **/
  // no response value expected for this operation


  res.end();
}

exports.styleConfigPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * styleConfig (Style)
  * token (String)
  **/
  // no response value expected for this operation


  res.end();
}
