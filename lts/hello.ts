const sayHello = (name: string) => `hello ${name}`;

let str: string = 'adfd';

class Animal {
  name: 'anonymous';
  constructor(name) {
    this.name = name;
  }
  say(sound: string) {
    console.log(this);
    return this.name + '' + sound;
  }
}

const wang = new Animal('dog');
wang.say('www');
