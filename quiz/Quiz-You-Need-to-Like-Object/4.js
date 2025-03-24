function travelingIndonesia(arr, emoney) {
  //code here
  const result = [];
  if (!arr.length) return result;

  const splittedArr = arr.map((item) => item.split("-"));
  const rute = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];

  for (const item of splittedArr) {
    const name = item[0];
    const indexOfDepartureCity = rute.indexOf(item[1]);
    const indexOfDestinationCity = rute.indexOf(item[2]);
    const transport = item[3];

    let totalCost = 0;
    if (transport === "Pesawat") {
      totalCost =
        275000 * Math.abs(indexOfDepartureCity - indexOfDestinationCity);
    } else if (transport === "Kereta") {
      totalCost =
        250000 * Math.abs(indexOfDepartureCity - indexOfDestinationCity);
    } else if (transport === "Bis") {
      totalCost =
        225000 * Math.abs(indexOfDepartureCity - indexOfDestinationCity);
    }

    if (emoney === "OVO") {
      totalCost -= totalCost * 0.15;
    } else if (emoney === "Dana") {
      totalCost -= totalCost * 0.1;
    } else if (emoney === "Gopay") {
      totalCost -= totalCost * 0.05;
    }

    result.push({
      name,
      departureCity: rute[indexOfDepartureCity],
      destinationCity: rute[indexOfDestinationCity],
      transport,
      totalCost,
    });
  }
  return result.sort((a, b) => b.totalCost - a.totalCost);
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
