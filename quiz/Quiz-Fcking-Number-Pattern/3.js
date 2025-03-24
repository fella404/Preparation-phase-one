function squareNumber(num) {
  //code here
  const result = [];
  let counter = 0;

  if (num < 3) return "Minimal input adalah 3";

  for (let i = 0; i < num; i++) {
    const arr = [];
    for (let j = 0; j < num; j++) {
      counter++;
      arr.push(counter);
    }

    if (i % 2 !== 0) {
      arr.reverse();
    }

    result.push(arr);
  }

  return result.reverse();
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
