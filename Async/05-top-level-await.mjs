// Si le code est basé sur des promesses
// on peut l'écrire comme le code synchrone
// tout en conservant son caractère async (et donc performant)
import { readFile, writeFile } from 'fs/promises';

try {
  const buffer = await readFile('.prettierrc');
  await writeFile('.prettierrc.copy', buffer);
  console.log('Copy async done');
} catch (err) {
  console.log(err.message);
}
