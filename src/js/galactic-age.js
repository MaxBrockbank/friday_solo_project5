
export default class Galactic_Age {

  constructor(name, age){
    this.name = name,
    this.age = parseInt(age)

  };

  mercury(){
    this.mercuryAge = Math.round((365/88) * this.age);
  };

  venus(){
    this.venusAge = Math.round((365/225) * this.age);
  };

  mars(){
    this.marsAge = Math.round((365/687) * this.age);
  };

}