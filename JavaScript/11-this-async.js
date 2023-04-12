class User {
  constructor() {
    this.name = 'Romain';
  }
  hello() {
    console.log('Hello ' + this.name);
  }
  helloAsync() {
    setTimeout(() => {
      console.log('Hello ' + this.name);
    }, 1000)
  }
}

const romain = new User();
romain.helloAsync();
