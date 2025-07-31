// Week 1 Session 1 Homework: Multi-Conversion Program
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Temperature Conversion
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
let temperatureCelsius = 25;

// Your code here
let temperatureFahrenheit = temperatureCelsius * (9 / 5) + 32;
// Display the result
console.log("The temperature in Fahrenheit is: " + temperatureFahrenheit + "°F");
// console.log("Temperature conversion: ??? °C = ??? °F");
console.log("Temperature conversion: " + temperatureCelsius + "°C = " + temperatureFahrenheit + "°F");

// Task 2: Distance Conversion
// TODO: Convert miles to kilometers
// Formula: 1 mile = 1.60934 kilometers
let distanceMiles = 5;
// Your code here
let distanceKilometers = distanceMiles * 1.60934;

// Display the result
console.log("The distance in kilometers is: " + distanceKilometers + " km");
// console.log("Distance conversion: ??? miles = ??? kilometers");
console.log("Distance conversion: " + distanceMiles + " miles = " + distanceKilometers + " km");

// Task 3: Currency Conversion
// TODO: Convert USD to EUR
// Use fixed rate: 1 USD = 0.92 EUR
let amountUSD = 100;
// Your code here
let amountEUR = amountUSD * 0.92;

// Display the result
console.log("The amount in EUR is: " + amountEUR + " €");
// console.log("Currency conversion: $??? = €???");
console.log("Currency conversion: $" + amountUSD + " = €" + amountEUR);


// BONUS CHALLENGES
// 1. Add reverse conversions (Fahrenheit to Celsius, etc.)
let temperatureCelcius = (temperatureFahrenheit - 32) * 5/9;
console.log("The temperature in Celsius is: " + temperatureCelcius + "°C");
// 2. Format numbers to 2 decimal places
// 3. Create a function for each conversion