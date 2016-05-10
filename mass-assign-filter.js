// The MIT License (MIT)

// Copyright (c) 2016 Roberto Oliveira - IsTheJack (robertooliveira.dev@gmail.com)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'strict mode';

/**
 * @args:
 *  obj: The object that will be filtered
 *  keysArray: Array with the name of the obj keys
 *  isWhiteList: Defines how this function will work (with white or black list)
**/

var massAssignFilter = function(obj, keysArray, isWhiteList) {

  var objKeys = Object.keys(obj);

  // It Works with whitelist and blacklist
  isWhiteList = isWhiteList === undefined? true: !!isWhiteList;

  var hasKey = function(x) {
      return keysArray.some(function(y) {
      return y === x;
    });
  }

  if (isWhiteList) {
    var whiteKeys = objKeys.filter(function(x) {
      return hasKey(x);
    });
  } else {
    var whiteKeys = objKeys.filter(function(x) {
      return !hasKey(x);
    });
  }

  return whiteKeys.reduce(function(acc, x) {
    acc[x] = obj[x];
    return acc;
  }, {});
};

module.exports = massAssignFilter;