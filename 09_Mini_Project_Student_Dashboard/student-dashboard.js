const students = [
  {name: "Ankur", marks: 90},
  {name: "Rahul", marks: 45},
  {name: "Aman", marks: 75}
];

const names = students.map(({ name }) => name);

const passedStudents = students.filter(({ marks }) => marks > 50);

const newStudent = { name: "Vikram", marks: 85 };
const updatedStudentList = [...students, newStudent];

function totalMarks(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

const total = totalMarks(...students.map(({ marks }) => marks));

// Final output
console.log("All Names:");
console.log(names);

console.log("\nPassed Students:");
console.log(passedStudents);

console.log("\nUpdated Student List:");
console.log(updatedStudentList);

console.log("\nTotal Marks:");
console.log(total);
