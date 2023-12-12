// Function to convert Miles to Kilometers

function convertMilesToKilometers(miles) {
  // 1 mile = 1.60934 kilometers
  const kilometers = miles * 1.60934;
  return kilometers;
}

// Example Usages
const inputKilometers = 5;
const kilometersResult = convertMilesToKilometers(inputKilometers);
console.log(`Kilometers: ${kilometersResult}`);
