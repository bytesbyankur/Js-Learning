//Q. Loop through an object’s keys and print them.

const person = {
  name: "Ankur",
  age: 18,
  city: "Kolkata"
};

// Using for...in loop
for (let key in person) {
  console.log(key + ": " + person[key]);
}
