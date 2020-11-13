
export default class Galactic_Age {

  constructor(name, age){
    this.name = name,
    this.age = parseInt(age),
    this.expectedLife = 72
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

  checkLifeExpectancy(planets){
    // planets.forEach( planet => {
    //   if(this.expectedLife < planet){
    //     return `${this.name} is ${planetAge - this.expectedLife} years older than expected to live.`
    //   } else if ( this.expectedLife === planet){
    //     return `${this.name} isnt expected to live much longer...`
    //   } else {
    //     return `${this.name} is expected to live ${this.expectedLife - planet} more years. Use them well.`
    //   }
    // })
  }
}