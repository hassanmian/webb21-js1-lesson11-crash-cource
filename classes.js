
class Student {
    constructor(birthYear, marks, firstName, lastName){
        this.birthYear = birthYear
        this.marks = marks
        this.firstName = firstName
        this.lastName = lastName
    }
    getAge() {
        return 2021 - this.birthYear
    }
    getGrade() {
        return this.marks > 50 ? "PASSED": "FAILED"
    }
}

const student1 = new Student(2001, 60, "John", "Doe")
console.log( student1.birthYear )
console.log( student1.getAge() )
console.log( student1.getGrade() )

const student2 = new Student(1990, 80, "Jane", "Doe")
console.log( student2.birthYear )
console.log( student2.getAge() )
console.log( student2.getGrade() )

const student3 = new Student(1985, 40, "Adam", "Eve")
console.log( student3.birthYear )
console.log( student3.getAge() )
console.log( student3.getGrade() )
