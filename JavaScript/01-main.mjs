import { hello } from "./01-hello.mjs";

const names = ['Jean', 'Paul', 'Romain'];

for (const n of names) {
  console.log(hello(n));
}
