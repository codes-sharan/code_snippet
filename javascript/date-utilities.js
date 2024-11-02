// date-utilities.js

// formatDate.js
/**
 * Formats a Date object into a readable string.
 * @param {Date} date - The date to format.
 * @param {string} format - The desired format ('YYYY-MM-DD', 'MM/DD/YYYY', 'DD-MM-YYYY').
 * @returns {string} - Formatted date string.
 */
function formatDate(date, format) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  let formattedDate = "";

  if (format === "YYYY-MM-DD") {
    formattedDate = date
      .toLocaleDateString("en-CA", options)
      .replace(/\//g, "-");
  } else if (format === "MM/DD/YYYY") {
    formattedDate = date.toLocaleDateString("en-US", options);
  } else if (format === "DD-MM-YYYY") {
    const [day, month, year] = date
      .toLocaleDateString("en-GB", options)
      .split("/");
    formattedDate = `${day}-${month}-${year}`;
  } else {
    throw new Error(
      'Invalid format. Use "YYYY-MM-DD", "MM/DD/YYYY", or "DD-MM-YYYY".'
    );
  }

  return formattedDate;
}

// calculateAge.js
/**
 * Calculates age based on the provided birth date.
 * @param {string} birthDate - The birth date in 'YYYY-MM-DD' format.
 * @returns {number} - The age in years.
 */
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  // Adjust age if the birth date hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

// Exporting the functions for use in other files
module.exports = {
  formatDate,
  calculateAge,
};
