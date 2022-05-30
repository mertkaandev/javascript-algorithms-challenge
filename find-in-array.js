// Find In Array By Id

// There are 5 students in the "Students" array.
// Write a function that will traverse the Students array and find the student based on the id value.

const students = [
    {id: 1, name: "Mert"},
    {id: 2, name: "Ceren"},
    {id: 3, name: "Deniz"},
    {id: 4, name: "Ali"},
    {id: 5, name: "Ece"}
];

const getStudentById = (id, students) => {
   for (let student of students) {
       if(student.id == id) {
           return student;
       }
   }
};

console.log(getStudentById(5, students));