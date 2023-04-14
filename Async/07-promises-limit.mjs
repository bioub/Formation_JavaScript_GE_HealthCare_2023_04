import { log } from 'console';
import { Observable } from 'rxjs';
import { setInterval } from 'timers/promises'
import { createReadStream } from 'fs'
import { createInterface } from 'readline'

// function interval(delayMs) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve(delayMs);
//     }, delayMs)
//   });
// }

// await interval(1000);
// console.log('1s');

// Les promesses ne peuvent pas être résolue
// plus d'une fois
// interval(1000).then(() => {
//   console.log('1s');
// })

// 2 solutions
// - Observable (RxJS qu'on retrouve dans Angular)
// function interval(delayMs) {
//   return new Observable((subscriber) => {
//     setInterval(() => {
//       subscriber.next(delayMs);
//     }, delayMs)
//   });
// }

// interval(1000).subscribe({
//   next: (delay) => {
//     console.log(delay + 'ms');
//   },
//   error: (err) => {},
//   complete: () => {},
// });

// - Async iteration (ES2018)
// for await (const _ of setInterval(1000)) {
//   console.log('1s');
// }

const rl = createInterface({
  input: createReadStream('.prettierrc'),
})

for await (const line of rl) {
  console.log(line);
}
