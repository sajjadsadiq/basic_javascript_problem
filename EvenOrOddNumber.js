// Function to check if a number is even or odd
function getEvenAndOddNumber(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example Usages
const inputNum = 117;
const numOutput = getEvenAndOddNumber(inputNum);
console.log(`Output is: ${numOutput}`);
