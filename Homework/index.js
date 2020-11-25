class Student{
    name;
    age;
    hometown;
    constructor(name, age, hometown,) {
        this.name = name
        this.age = age
        this.hometown = hometown
    }
    studentDisplayInfo() {
        console.log(`=== Thông Tin Học Sinh ===`)
        console.log(`Tên : ${name}`)
        console.log(`Tuổi : ${age}`)
        console.log(`Quê quán : ${hometown}`)
    }

    
}
class StudentCollection{
    listStudent;
    constructor(listStudent, current){
        this.listStudent = []
    }
    addStudent(student){
        this.listStudent.push(student)
    }
    findByAge(age){
       return this.listStudent.filter(function(findAge){
           return findAge === 15;
       })
    }
    findByName(name){
        return this.listStudent.filter(function(findName) {
            return findName.name.toLowerCase().includes(name.toLowerCase())
        })
    }
}

const Students = new StudentCollection();

const student1 = new Student('Trung Ngọc', 15, 'Hà Nội')
const student2 = new Student('Linh Tống', 18, 'Hà Nội')
const student3 = new Student('Nguyễn Thành', 22, 'Huế')
const student4 = new Student('Thuyet Tran', 15, 'Japan')

Students.addStudent(student1)
Students.addStudent(student2)
Students.addStudent(student3)
Students.addStudent(student4)

console.log(Students);
console.log(Students.findByAge());
