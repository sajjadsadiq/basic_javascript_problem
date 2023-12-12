// Function to convert Inches to Feet
function convertInchesToFeet(inches) {
  // 1 Foot = 12 Inches
  const feet = inches / 12;
  return feet;
}

// Example Usage
const inches = 84;
const feetResult = convertInchesToFeet(inches);
console.log(`Feet: ${feetResult}`);
