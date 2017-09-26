
'use strict';
function decode(sentence) {
  const listObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  const arr = sentence.split(' ');
  let decoded = [];

  for (let i = 0 ; i < arr.length; i++) {
    let word = arr[i];  
    // if first letter is NOT included in the keys array, then add space
    if (!Object.keys(listObject).includes(word[0])) {
      decoded.push(' ');
    }
    else {
      decoded.push(word[listObject[word[0]]]);
    }
  }
  return decoded.join('');
}