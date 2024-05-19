
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static my(){
    console.log("fuck u")
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


let d= new Animal("r",4)
console.log(d.describe())
Animal.my()