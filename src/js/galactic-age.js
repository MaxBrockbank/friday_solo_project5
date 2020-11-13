
export default class Galactic_Age {

  constructor(name, age){
    this.name = name,
    this.age = parseInt(age)

  }
  mercuryAge(){
    this.mercury = Math.round((365/88) * this.age)
  }
  venusAge(){
    // this.venus = Math.round((365/225) * this.age)
  }


}