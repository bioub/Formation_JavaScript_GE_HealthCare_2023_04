// Si le code est basé sur des promesses
// on peut l'écrire comme le code synchrone
// tout en conservant son caractère async (et donc performant)
const fs = require('fs/promises');

async function copy() {
  try {
    const buffer = await fs.readFile('.prettierrc');
    await fs.writeFile('.prettierrc.copy', buffer);
    console.log('Copy async done');
  } catch (err) {
    console.log(err.message);
  }
}

copy();
