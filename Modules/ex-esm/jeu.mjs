import { createInterface } from 'readline';
// importer la fonction getRandomInt uniquement depuis random.mjs

function Jeu(options) {
  // configure readline pour lire sur le clavier
  this.rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // ? et ?? 2 opérateurs ES2020
  this.entierAlea = getRandomInt(options?.min ?? 0, options?.max ?? 100);
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

// exporter Jeu avec export default
