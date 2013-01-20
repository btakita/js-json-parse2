JSON.parse2 = function(str, callback) {
  callback = callback || function() {};
  try {
    var json = JSON.parse(str);
    callback(null, json);
  } catch(e) {
    console.error("JSON.parse2 error: " + str);
    callback(e);
  }
};

JSON.stringify2 = function(json, callback) {
  callback = callback || function() {};
  try {
    var str = JSON.stringify(json);
    callback(null, str);
  } catch(e) {
    callback(e);
  }
};
