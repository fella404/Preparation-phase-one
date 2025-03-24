function squareNumber(num) {
  //code here
  const result = [];
  let counter = 0;

  if (num < 3) return "Minimal input adalah 3";

  for (let i = 0; i < num; i++) {
    const arr = [];
    for (let j = 0; j < num; j++) {
      counter++;
      arr.push(counter % 4 === 0 ? "#" : counter % 2 === 0 ? "o" : "x");
    }

    if (i % 2 !== 0) {
      arr.reverse();
    }

    result.push(arr);
  }

  return result;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ]
// ]

console.log(squareNumber(2)); // Minimal input adalah 3
