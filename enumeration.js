var Enumeration = function() {}

Enumeration.prototype.find = function(searchedArray, callbackFunction) {
  for (var each of searchedArray) {
    if (callbackFunction(each)) {
      return each;
    }
  }
};

Enumeration.prototype.map = function(searchedArray, callbackFunction) {
  var mappedArray = [];
  for (var each of searchedArray) {
    mappedArray.push(callbackFunction(each));
  }
  return mappedArray;
};

Enumeration.prototype.filter = function(searchedArray, callbackFunction) {
  var filteredArray = [];
  for (var each of searchedArray) {
    if (callbackFunction(each)) {
      filteredArray.push(each);
    }
  }
  return filteredArray;
};

Enumeration.prototype.some = function(searchedArray, callbackFunction) {
  var someArray = [];
  for (var each of searchedArray) {
    if (callbackFunction(each)) {
      someArray.push(each);
    }
  }
  if (someArray.length === 0) {
    return false;
  }
  else {
    return true;
  } 
};

Enumeration.prototype.every = function(searchedArray, callbackFunction) {
  var someArray = [];
  for (var each of searchedArray) {
    if (callbackFunction(each)) {
      someArray.push(each);
    }
  }
  if (someArray.length === searchedArray.length) {
    return true;
  }
  else {
    return false;
  } 
};

Enumeration.prototype.reduce = function(searchedArray, callbackFunction) {
  var reducedSum = 0;
  for (var each of searchedArray) {
    reducedSum = callbackFunction(reducedSum, each);
  }
  return reducedSum;
};

Enumeration.prototype.reverse = function(searchedArray) {
  var reversedArray = [];
  for (var each of searchedArray) {
    reversedArray.unshift(each);
  }
  return reversedArray;
};

module.exports = Enumeration;
