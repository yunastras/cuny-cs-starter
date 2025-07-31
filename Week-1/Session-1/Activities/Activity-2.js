// Week 1 Session 1: Variables and Data Types Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Create variables for different data types
// TODO: Create a string variable for your name
const fname = "Astra";

// TODO: Create a number variable for your age

const age = "18";


// TODO: Create a boolean variable for whether you're a student

let student = true;

// Task 2: Print variables to console
// TODO: Use console.log() to display each variable

console.log(fname, age, student);

// Task 3: Experiment with typeof operator
// TODO: Check the type of each variable using typeof
console.log(typeof age);


// BONUS CHALLENGES
// 1. Create a variable that holds your favorite quote
let favouriteQuote = "favourite quote";
// 2. Create a variable that calculates days until the weekend
const day = new Date().getDay();
console.log(day);
const dayUntilWeekend = 6 - day;
log("There are " + dayUntilWeekend + " days until the weekend.");
// 3. Create a variable that checks if today is a weekday()