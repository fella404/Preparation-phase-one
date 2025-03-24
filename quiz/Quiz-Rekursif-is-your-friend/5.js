function hapusSimbolRec(str) {
  //code here

  if (!str.length) {
    return "";
  } else if (
    (str[0].charCodeAt(0) >= 65 && str[0].charCodeAt(0) <= 90) ||
    (str[0].charCodeAt(0) >= 97 && str[0].charCodeAt(0) <= 122) ||
    (str[0].charCodeAt(0) >= 48 && str[0].charCodeAt(0) <= 57)
  ) {
    return str[0] + hapusSimbolRec(str.slice(1));
  }

  return hapusSimbolRec(str.slice(1));
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100
