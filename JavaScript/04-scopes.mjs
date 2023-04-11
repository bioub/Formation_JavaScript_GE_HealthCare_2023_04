// globalThis ES2020
globalThis.globalScope = 'globalScope';

const globalOrModuleScope = 'globalOrModuleScope';

function externe() {
  const closureScope = 'closureScope';
  function interne() {
    const localScope = 'localScope';

    if (true) {
      // la portée de block n'existe pas avec var
      const blockScope = 'blockScope';
      console.log(globalScope);
      console.log(globalOrModuleScope);
      console.log(closureScope);
      console.log(localScope);
      console.log(blockScope);
    }
  }
  interne();
}

externe();

