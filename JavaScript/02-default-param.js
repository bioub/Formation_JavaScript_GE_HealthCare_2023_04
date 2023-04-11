// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// function sum(a, b, c) {
//   c = c || 0;
//   return a + b + c;
// }

// ES2020
// Nullish coalescing operator
// si la partie gauche est null ou undefined on affecte
// la partie droite
// function sum(a, b, c) {
//   c = c ?? 0;
//   return a + b + c;
// }

// ES2015 Default Param
function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2)); // NaN
