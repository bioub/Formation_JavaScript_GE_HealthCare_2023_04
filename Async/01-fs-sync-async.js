const fs = require('fs');

// Sync
// Avantage : simple à lire, les lignes sont dans l'ordre
// Inconvénient : performance, le thread est bloqué le temps de la lecture du fichier
const buffer = fs.readFileSync('.prettierrc');
console.log(buffer.toString('utf-8'));

console.log('After readFileSync');


// Async (basée sur des callbacks)
// Inconvénient : plus difficile à lire, les lignes ne sont pas dans l'ordre
// Avantage : performance, le thread est disponible le temps de la lecture du fichier
fs.readFile('.prettierrc', (_, buffer) => {
  console.log(buffer.toString('utf-8'));
});

console.log('After readFile');
