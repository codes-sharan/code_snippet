const { formatDate, calculateAge } = require("./date-utilities");

// Example usage of formatDate
const today = new Date();
console.log(formatDate(today, "YYYY-MM-DD")); // Outputs: 2024-11-02
console.log(formatDate(today, "MM/DD/YYYY")); // Outputs: 11/02/2024
console.log(formatDate(today, "DD-MM-YYYY")); // Outputs: 02-11-2024

// Example usage of calculateAge
const birthDate = "1990-10-15"; // Format: YYYY-MM-DD
console.log(calculateAge(birthDate)); // Outputs: Age based on the current date
