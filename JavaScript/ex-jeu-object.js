const Random = {
  getRandom: function () {
    return Math.random();
  },
  getRandomArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
};

// Dans Node il faut importer les API de Node
const readline = require('readline');

function Jeu(options) {
  // configure readline pour lire sur le clavier
  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // ? et ?? 2 opérateurs ES2020
  this.entierAlea = Random.getRandomInt(options?.min ?? 0, options?.max ?? 100);
  this.essais = [];
}

Jeu.prototype.jouer = function () {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  }
  this.rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);
    this.essais.push(entierSaisi);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur il faut saisir un nombre');
      return this.jouer();
    }

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this.rl.close();
    }
  });
};

const game = new Jeu();
game.jouer();

// ^
// |                         [question]
// |[question]               [jouer]
// |[jouer]    ⟳             [=>]        ⟳
// +----------------------------------------------------->
//
