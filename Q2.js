// Define an object that represents a st,dent's information incl,din& name, a&e, and &rade7 Implement ;
// method to ,pdate the st,dent's grade.

const student = {
    name: "Subhash",
    age: 23,
    grade: "A"
};
function updateGrade(newGrade){
    student.grade = newGrade;
}
updateGrade("B");
console.log(student);