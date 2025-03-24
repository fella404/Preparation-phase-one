function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  //lalu bandingkan dengan sentence
  if (sentence.length <= 1) {
    return true;
  } else if (sentence[0] !== sentence[sentence.length - 1]) {
    return false;
  }

  return palindromeRecursive(sentence.substring(1, sentence.length - 1));
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
