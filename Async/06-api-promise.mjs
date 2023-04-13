function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs)
  });
}

const delay = await timeout(Math.floor(Math.random() * 1000));
console.log(delay + 'ms');

function asyncError(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Async error'));
    }, delayMs)
  });
}

try {
  await asyncError(1400);
  console.log('1s');
} catch (error) {
  console.log(error.message);
}

// 4 méthodes Promise.all, Promise.race, Promise.allSettled, Promise.any

// Promise.all
// Combine plusieurs promesses en une
// Qui sera résolue quand toutes auront été résolues
// (ex : lire plusieurs fichiers en même temps
// envoyer plusieurs requetes vers le serveur pour les combiner...)
// si l'une échoue l'ensemble échoue

const values1 = await Promise.all([
  timeout(2000),
  timeout(1000),
]);
console.log(values1); // [2000, 1000]


// Promise.allSettle idem Promise.all
// mais on récupère tous les résultats qu'ils échouent ou pas
const values2 = await Promise.allSettled([
  timeout(2000),
  timeout(1000),
  asyncError(1500),
]);
console.log(values2);
// [
//   { status: 'fulfilled', value: 2000 },
//   { status: 'fulfilled', value: 1000 },
//   {
//     status: 'rejected',
//     reason: Error: Async error
//   }
// ]

// Promise.race
// Combine plusieurs promesses en une
// Qui sera résolue quand la première aura été résolue
// (ex : lire un fichier avec un timeout maximum...)
// si la première échoue l'ensemble échoue
// Promise.race([
//   fs.readFile('fichier.txt'),
//   timeout(1000),
// ])

// Promise.any idem race mais si le premier
// échoue on attend le suivant
// s'ils échouent tous l'ensemble échoue
// Promise.any([
//   ping('server-1'),
//   ping('server-2'),
//   ping('server-3'),
// ])
