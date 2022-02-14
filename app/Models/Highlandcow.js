export class Highlandcow {
  constructor(name, color, gender, teeth) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.teeth = teeth;
  }

  sayName() {
    console.log("My name is", this.name, "and I am a", this.gender, "with", this.teeth, "teeth")
  }
}