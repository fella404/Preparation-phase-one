function parseNumber(equation) {
  //code here
  equation = String(equation);

  if (equation.length === 2 && equation.slice(1) == 0) return equation;
  if (equation.length === 1) {
    return equation;
  } else {
    return (
      equation[0] +
      "0".repeat(equation.length - 1) +
      "+" +
      parseNumber(equation.substring(1))
    );
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
