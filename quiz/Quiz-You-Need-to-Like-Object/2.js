function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000;
  let duitLarry = 95000;
  let duitJack = 90000;

  const arr = [];

  for (const data of tradeActivity) {
    for (const item of data) {
      const obj = {};
      for (let i = 0; i < item.length; i++) {
        if (item[i] === "+" || item[i] === "-") {
          obj.name = item.substring(0, i);
          obj.deposit = item.substring(item.length - 1, i);
        }
      }
      arr.push(obj);
    }
  }

  for (const data of arr) {
    if (data.name === "Jeff Bezos") {
      duitJeff += duitJeff * (Number(data.deposit) / 100);
      data.deposit = duitJeff;
      data.owner = "Amazon";
    } else if (data.name === "Larry Page") {
      duitLarry += duitLarry * (Number(data.deposit) / 100);
      data.deposit = duitLarry;
      data.owner = "Google";
    } else {
      duitJack += duitJack * (Number(data.deposit) / 100);
      data.deposit = duitJack;
      data.owner = "Alibaba";
    }
  }

  return arr;
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/
