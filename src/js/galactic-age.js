
export default class Galactic_Age {

  constructor(name, age, subYears, addYears){
    this.name = name,
    this.age = parseInt(age),
    this.expectedLife = (72 - subYears) + addYears;
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

  jupiter(){
    this.jupiterAge = Math.floor((365/4333) * this.age);
  };

  checkLifeExpectancy(keys, values){
    let planetExpectations = [];
    for (let i = 0; i < keys.length; i++){
      if(this.expectedLife < values[i]){
        planetExpectations.push(`${this.name} is ${values[i] - this.expectedLife} years older than expected to live on ${keys[i]}.`)
      } else if ( this.expectedLife === values[i]){
        planetExpectations.push(`${this.name} isnt expected to live much longer on ${keys[i]}...`)
      } else {
        planetExpectations.push(`${this.name} is expected to live ${this.expectedLife - values[i]} more years on ${keys[i]}. Use them well.`)
      }
    }
    return planetExpectations;
  }
}