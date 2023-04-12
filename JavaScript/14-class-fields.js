class User {
  #name = 'Romain';
  hello() {
    return `Hello ${this.#name}`;
  }
}

const romain = new User();
// console.log(romain.#name);
console.log(romain.hello());
