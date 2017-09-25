function decode(sentence) {
  const code = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  
    // If first letter is a, b, c, or d, we return nth character of that word.
  
  const arr = sentence.split(' ');
  let decoded = [];
  
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
      
    if (word[0] === 'a') {
      decoded.push(word[1]);
    }
  
    else if (word[0] === 'b') {
      decoded.push(word[2]);
    }
  
    else if (word[0] === 'c') {
      decoded.push(word[3]);
    }
  
    else if (word[0] === 'd') {
      decoded.push(word[4]);
    }
  
    else {
      decoded.push(' ');
    }
  }
  
  return decoded.join('');
}
  
decode('craft block argon meter bells brown croon droop');