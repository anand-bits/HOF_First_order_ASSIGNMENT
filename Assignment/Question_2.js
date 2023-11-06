// Delay in seconds (you can modify this value)
const delayInSeconds = 3;
let remainingTime = delayInSeconds;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Function to display the countdown
function displayCountdown() {
  if (remainingTime > 0) {
    console.log(`Time remaining: ${remainingTime} second${remainingTime > 1 ? 's' : ''}`);
    remainingTime--;
    setTimeout(displayCountdown, 1000); // Display a message every second
  } else {
    const randomNumber = generateRandomNumber();
    console.log(`Random Number Generated: ${randomNumber}`);
  }
}

console.log(`Delaying random number generation for ${delayInSeconds} seconds...`);
setTimeout(displayCountdown, 1000); // Start the countdown after 1 second
