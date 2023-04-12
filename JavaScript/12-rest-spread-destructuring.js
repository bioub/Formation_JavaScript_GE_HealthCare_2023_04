// REST
// conversion syntaxique
// une liste de valeur (ici 3, 4, 5)
// ->
// un tableau (ici [3, 4, 5])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD
// conversion syntaxique
// un tableau (ici [3, 4, 5])
// ->
// une liste de valeur (ici 3, 4, 5)

const nbs = [3, 4, 5];
// console.log(sum(nbs[0], nbs[1], nbs[2]));
console.log(sum(...nbs));

// Pour cloner un tableau
const cloneNbs1 = nbs.slice();
const cloneNbs2 = [...nbs]; // (très utilisé)

const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' '); // ['Romain', 'Bohdanowicz']
// const firstName = tmp[0];
// const lastName = tmp[1];

//    ['Romain' , 'Bohdanowicz']
const [firstName, lastName] = fullName.split(' ');

//    [3    , 4     , 5   ]
const [, quatre, cinq, six = 6] = nbs;

//    [3    , 4     , 5   ]
const [three, ...others] = nbs;

// depuis ES2015 on peut destructurer les objets
const coords = { x: 1, y: 2 };

// const xValue = coords.x;
// const yValue = coords.y;

//    { x: 1     , y: 2      }
const { x: xValue, y: yValue } = coords;

const name = 'Romain';
// Depuis 2015 shorthand properties
const user = {
  name, // name: name,
};

//    { x: 1, y: 2 }
// const { x: x, y: y } = coords;
// const { x, y, z = 0 } = coords;

// REST et SPREAD peuvent s'utiliser sur des objets à partir de 2018
const cloneCoords1 = Object.assign({}, coords);
const cloneCoords2 = { ...coords }; // SPREAD (très utilisé)
const { z = 0, ...coords2d } = coords; // REST

console.log(
  ' dflkghjdlfjhg dkjfgh dfkj bgdfk gdfkhjb gdfkh dfgb',
  ' dflkghjdlfjhg dkjfgh dfkj bgdfk gdfkhjb gdfkh dfgb',
);
