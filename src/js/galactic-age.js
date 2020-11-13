
export default class Galactic_Age {

  constructor(name, age){
    this.name = name,
    this.age = parseInt(age)

  };

  mercury(){
    this.mercuryAge = Math.floor((365/88) * this.age);
  };

  venus(){
    this.venusAge = Math.floor((365/225) * this.age);
  };

  mars(){
    this.marsAge = Math.floor((365/687) * this.age);
  };

}