function externe(msgClosure) {
  return function () {
    console.log(msgClosure);
  };
}

const hello = externe('Hello');
const bonjour = externe('Bonjour');
hello();
bonjour();
bonjour();
hello();
