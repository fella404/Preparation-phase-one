function deleteUndefinedKeys(data) {
  //code here
  const result = [];
  if (!data.length) return "No data";

  for (const item of data) {
    const obj = {};
    for (const key in item) {
      if (!(item[key] === undefined)) {
        obj[key] = item[key];
      }
    }
    result.push(obj);
  }
  return result;
}

console.log(
  deleteUndefinedKeys([
    {
      name: "Dimitri",
      address: undefined,
      email: "dimitri@mail.com",
      age: undefined,
      gender: "male",
    },
    {
      name: "Alexei",
      address: "Earth",
      email: undefined,
      age: 18,
      gender: "male",
    },
  ])
);
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(
  deleteUndefinedKeys([
    {
      band: "Ghost",
      formed: 2006,
      members: ["Papa Emeritus", "Alpha", "Omega", "Water", "Wind", "Earth"],
      genre: "Heavy Metal",
      rating: undefined,
    },
    {
      band: "BABYMETAL",
      formed: undefined,
      members: ["SU-METAL", "MOAMETAL", "YUIMETAL"],
      genre: "Kawaii Metal",
      rating: undefined,
    },
    {
      band: "Avatar",
      formed: 2006,
      members: undefined,
      genre: undefined,
      rating: 5,
    },
  ])
);
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data
