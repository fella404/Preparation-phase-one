function initialObjectGrouping(studentsArr) {
  //CODE HERE
  const obj = {};

  for (let i = 0; i < studentsArr.length; i++) {
    if (obj[studentsArr[i][0]] !== undefined) {
      obj[studentsArr[i][0]].push(studentsArr[i]);
    } else {
      obj[studentsArr[i][0]] = [studentsArr[i]];
    }
  }

  return obj;
}
console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/
