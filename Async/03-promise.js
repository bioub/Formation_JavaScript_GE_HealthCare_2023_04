// fs.readFile('.prettierrc', (err, buffer) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     fs.writeFile('.prettierrc.copy', buffer, (err) => {
//       if (err) {
//         console.log(err.message)
//       } else {
//         console.log('Copy async done');
//       }
//     });
//   }
// });

const fs = require('fs/promises');

// Async (basée sur des promesses)
// Dans cette version toujours le callback hell
// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     fs.writeFile('.prettierrc.copy', buffer)
//       .then(() => {
//         console.log(err.message)
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })

// Si dans le callback d'un .then ou .catch on retourne une promesse
// on est pas obligé d'imbriquer
// fs.readFile('.prettierrc')
//   .then((buffer) => {
//     return fs.writeFile('.prettierrc.copy', buffer);
//   })
//   .then(() => {
//     console.log(err.message)
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })

// grace aux fonctions fléché (ce qui suit la flèche est la valeur de retour)
// on peut raccourcir
fs.readFile('.prettierrc')
  .then((buffer) => fs.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('Copy async done'))
  .catch((err) => console.log(err.message));

