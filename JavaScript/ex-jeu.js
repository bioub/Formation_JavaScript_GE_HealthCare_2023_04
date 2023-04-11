// Dans Node il faut importer les API de Node
const readline = require('readline');

// configure readline pour lire sur le clavier
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    // pour rejouer (si le nombre n'est pas trouvé)
    // jouer();

    // pour stopper le programme
    // rl.close() ou process.exit()
  });
}

jouer();

// ^
// |                         [question]
// |[question]               [jouer]
// |[jouer]    ⟳             [=>]        ⟳
// +----------------------------------------------------->
//
