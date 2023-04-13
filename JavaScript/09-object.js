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
  // infos: function() {},
};

const key = 'x';
console.log(coords.x);
console.log(coords[key]);


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


// function User(name) {
//   this.name = name;
//   // this.hello = function() {
//   //   return `Hello (objet) ${this.name}`;
//   // }
// }

// User.prototype.hello = function() {
//   return `Hello (prototype) ${this.name}`;
// }

class User {
  constructor(name) {
    this.name = name;
    // this.hello = function() {
    //   return `Hello (objet) ${this.name}`;
    // }
  }
  hello() {
    return `Hello (prototype) ${this.name}`;
  }
}




const romain = new User('Romain');

console.log(typeof User); // function
console.log(typeof romain); // object


console.log(romain.name);
console.log(romain.hello()); // prototype (ou de objet (si on décommente les lignes dans User))
console.log(User.prototype.hello.call(romain)); // prototype

// Pour hériter des propriétés
// function Admin(name, role) {
//   // User.call(this, name);
//   User.apply(this, arguments);
//   this.role = role;
// }

// // Pour hériter des méthodes (du prototype)
// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.getRole = function() {
//   return this.role;
// }

// Admin.prototype.hello = function() {
//   return User.prototype.hello.call(this) + ', my role is ' + this.role;
// }

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  getRole() {
    return this.role;
  }
  hello() {
    return super.hello() + ', my role is ' + this.role;
  }
}

const admin = new Admin('toto', 'superadmin');
console.log(admin.getRole()); // superadmin
console.log(admin.hello()); // Hello (prototype) toto, my role is superadmin
console.log(User.prototype.hello.call(admin)); // Hello (prototype) toto


// (legacy) Boucle for in pour boucler sur les clés/valeurs d'un object
// (for of boucler sur les éléments d'un iterable (ex un tableau))
// for (const key in coords) {
//   if (Object.hasOwnProperty.call(coords, key)) {
//     const value = coords[key];
//     console.log(key, value);
//   }
// }

// Pour convertir un object en tableau
// il y a 3 méthodes

// Object.keys (ES5)
for (const key of Object.keys(coords)) {
  console.log(key);
}

// Object.values (ES2015 ou ES2017)
for (const value of Object.values(coords)) {
  console.log(value);
}

// Object.entries (ES2015 ou ES2017)
for (const entry of Object.entries(coords)) {
  const key = entry[0];
  const value = entry[1];
  console.log(key, value);
}

for (const [key, value] of Object.entries(coords)) {
  console.log(key, value);
}

// ES5
// Pour faire de l'extension on utilise plutôt
const toto = {
  firstName: 'toto',
};

// toto.lastName = 'titi';

Object.defineProperty(toto, 'lastName', {
  value: 'titi',
  // writable: false,
  // enumerable: false,
  // configurable: false,
});

