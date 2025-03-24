function virusCheckRecursive(str, viruses) {
  //code here
  if (!viruses) return "There is no virus";

  if (!str) {
    return 0;
  } else if (viruses.toLowerCase().includes(str[0].toLowerCase())) {
    return 1 + virusCheckRecursive(str.substring(1), viruses);
  }

  return virusCheckRecursive(str.substring(1), viruses);
}

console.log(virusCheckRecursive("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(virusCheckRecursive("HH0NBP1zRa", "h|r")); // 3
console.log(virusCheckRecursive("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(virusCheckRecursive("mjBgPlzks", "m")); // 1
console.log(virusCheckRecursive("AIn4Ks05bBaa", "x")); // 0
console.log(virusCheckRecursive("RsMFjBUjvIaP")); // There is no virus
console.log(virusCheckRecursive("")); // There is no virus
