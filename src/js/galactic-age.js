
export default class Galactic_Age {

  constructor(name, age){
    this.name = name,
    this.age = parseInt(age)

  }

  mercuryAge(){
    this.mercuryAge = Math.round((365/88) * this.age)
  }
}