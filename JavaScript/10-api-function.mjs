
function hello(p1, p2) {
  return `Hello ${p1}, ${p2} my name is ${this.name}`;
}

const user = {
  name: 'Romain',
};

console.log(hello.call(user, 'Jean', 'Eric'));
console.log(hello.apply(user, ['Jean', 'Eric']));
console.log(hello.call(user, ...['Jean', 'Eric']));

const helloUser = hello.bind(user);
console.log(helloUser('Jean', 'Eric'));
