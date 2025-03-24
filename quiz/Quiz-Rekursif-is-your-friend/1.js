function angkaTerbesar(sentence) {
  //code here
  if (!sentence.length) return -1;

  if (sentence.length == 1) {
    return sentence[0];
  }

  return Math.max(
    sentence[sentence.length - 1],
    angkaTerbesar(sentence.slice(0, sentence.length - 1))
  );
}
// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])); // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])); // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])); // 8
console.log(angkaTerbesar([])); // -1
