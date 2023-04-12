const names = ['Romain', 'Jean', 'Eric'];

// Avec une boucle et un if
// Style de programmation (Paradigme) : impérative
function get4LettersUpperImparitive(array) {
  const newArray = [];

  for (const el of array) {
    if (el.length === 4) {
      newArray.push(el.toUpperCase())
    }
  }

  return newArray;
}

// Avec des fonctions
// Style de programmation (Paradigme) : functionnelle
function get4LettersUpperFunctionnal(array) {
  return array.filter((el) => el.length === 4)
              .map((el) => el.toUpperCase());
}

console.log(get4LettersUpperImparitive(names));
console.log(get4LettersUpperFunctionnal(names));
