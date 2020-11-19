
export default class Galactic_Age {

  constructor(name, age, changeBy){
    this.name = name,
    this.age = age,
    this.expectedLife = (changeBy) + 72;
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

  checkLifeExpectancy(){
    this.mercury();
    this.venus();
    this.mars();
    this.jupiter();
    const {mercuryAge, venusAge, marsAge, jupiterAge} = this;

    let planetsAndAges = new Map([
      ['Mercury', mercuryAge],
      ['Venus', venusAge],
      ['Mars', marsAge],
      ['Jupiter', jupiterAge]
    ]);

    let keys = Array.from(planetsAndAges.keys());
    let values = Array.from(planetsAndAges.values());
    let planetExpectations = [];

    for (let i = 0; i < keys.length; i++){
      if(this.expectedLife <= values[i]){
        planetExpectations.push(`${this.name} is ${values[i] - this.expectedLife} years older than expected to live on ${keys[i]}.`)
      } else {
        planetExpectations.push(`${this.name} is expected to live ${this.expectedLife - values[i]} more years on ${keys[i]}. Use them well.`)
      }
    }
    return planetExpectations;
  }
}