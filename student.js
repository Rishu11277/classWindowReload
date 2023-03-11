
class Student{

constructor(name, age, gender, grade, uniform)  {
    this.name = name
    this.age = age
    this.gender = gender
    this.grade = grade
    this.uniform = uniform
}

display() {
    fill("blue")
    textFont("Times New Roman")
    textSize(25)
    text(this.name, 50, 50)
    text(this.age, 50, 100)
    text(this.gender, 50, 150)
    text(this.grade, 50, 200)
    text(this.uniform, 50, 250)
}

}



