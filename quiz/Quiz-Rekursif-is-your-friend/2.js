function changeXRecursive(data, jenis) {
  //code here
  if (!data.length) {
    return "";
  } else if (jenis === "ganjil" && data[0] % 2 == 0) {
    return "x" + changeXRecursive(data.substring(1), jenis);
  } else if (jenis === "genap" && data[0] % 2 != 0) {
    return "x" + changeXRecursive(data.substring(1), jenis);
  }

  return data[0] + changeXRecursive(data.substring(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
