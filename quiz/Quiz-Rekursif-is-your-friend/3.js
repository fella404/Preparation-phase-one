function consonantCounterRecursive(sentences) {
  //code here
  if (!sentences.length) {
    return 0;
  } else {
    if (
      sentences[0].toLowerCase() !== "a" &&
      sentences[0].toLowerCase() !== "i" &&
      sentences[0].toLowerCase() !== "u" &&
      sentences[0].toLowerCase() !== "e" &&
      sentences[0].toLowerCase() !== "o" &&
      sentences[0] !== " " &&
      isNaN(sentences[0])
    ) {
      return 1 + consonantCounterRecursive(sentences.substring(1));
    }
    return consonantCounterRecursive(sentences.substring(1));
  }
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
