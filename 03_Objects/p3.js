//Q. Create a student object and add a method to return their grade.

const student = {
  name: "Ankur",
  marks: 86,

  getGrade: function() {
    if (this.marks >= 90) return "A+";
    else if (this.marks >= 80) return "A";
    else if (this.marks >= 70) return "B";
    else if (this.marks >= 60) return "C";
    else return "F";
  }
};

// Test it
console.log(`${student.name}'s Grade: ${student.getGrade()}`);
