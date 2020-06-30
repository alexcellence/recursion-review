// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // variable result string
  var stringified = '';
  // if string
  if (typeof obj === 'string') {
    // add quotes around obj and add to stringified
    stringified += '"' + obj + '"';
  } else if (typeof obj === 'boolean') {
    // stringify boolean using toString
    stringified += obj.toString();
  } else if (typeof obj === 'number') {
    // stringify number using toString
    stringified += obj.toString();
  } else if (obj === null) {
    // if null convert to string
    stringified += 'null';
  } else if (typeof obj === 'function') {
    // if function
    stringified += '';
  } else if (obj === undefined) {
    // if undefined
    stringified += '';
  } else if (Array.isArray(obj)) {
    stringified += '[';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        stringified += stringifyJSON(obj[i]);
      } else {
        stringified += stringifyJSON(obj[i]) + ',';
      }
    }
    stringified += ']';
  // if object
  } else if (typeof obj === 'object') {
    stringified += '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      if (obj[keys[i]] === undefined || typeof obj[keys[i]] === 'function') {
        continue;
      }
      if (i === keys.length - 1) {
        stringified += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
      } else {
        stringified += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
      }
    }
    stringified += '}';
  }
  // return result
  return stringified;
};
