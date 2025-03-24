function missingNum(arr) {
  //code here
  const nums = [],
    result = [];

  if (arr.length === 0) return result;

  for (const x of arr) {
    const filteredNums = x.filter((item) => typeof item === "number");
    nums.push(...filteredNums);
  }

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  for (let i = min; i <= max; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
