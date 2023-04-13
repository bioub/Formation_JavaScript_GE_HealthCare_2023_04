import { hello } from "./hello.js";

const names = ['Jean', 'Paul', 'Romain'];

for (const n of names) {
  console.log(hello(n));
}
