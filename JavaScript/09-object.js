// En JS de nombreux objets sont déjà existants

// Dans le langage
console.log(typeof Math); // object
console.log(typeof JSON); // object
console.log(typeof globalThis); // object

// Dans Node.js
console.log(typeof process); // object

// Dans le browser
console.log(typeof document); // object

// Les fonctions sont des objets
console.log(Math.random instanceof Object); // true
console.log(Number instanceof Object); // true
console.log(String instanceof Object); // true

// Pour créer ses objets
// Il y a 2 systèmes

// Object literal
// si utilisé plusieurs fois, ne pas mettre de méthodes (elles seraient dupliquées)
const coords = {
  x: 1,
  y: 2,
  infos: function() {

  },
};

console.log(coords.x); // 1
console.log(coords.y); // 2
console.log(coords.z); // undefined

// Les objets sont extensibles (on peut ajouter des clés/valeur)
coords.z = 3;
console.log(coords.z); // 3

// Y compris sur d'autres objets que je n'ai pas créé (Mauvaise pratique, Math étant global === conflits)
console.log(Math.sum); // undefined
Math.sum = function (a, b) {
  return a + b;
};
console.log(Math.sum(1, 2)); // 3

// On peut remplacer
Math.sum = function (a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum('1', '2')); // 3

// On peut supprimer
delete Math.sum;

// Pour créer des objets multiples on peut utiliser des fonctions constructeurs


function User(name) {
  this.name = name;
}

User.prototype.hello = function() {
  return `Hello ${this.name}`;
}

const romain = new User('Romain');

console.log(typeof User); // function
console.log(typeof romain); // object


console.log(romain.name);
console.log(romain.hello());
