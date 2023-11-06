// Question  no- 1--------------------------
// Input string
const input = "my name is Anand";

// Function to reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Delayed reverse function
function delayedReverse() {
    //Arrow Function
  setTimeout(() => {
    const reversedString = reverseString(input);
    console.log("Reversed String:", reversedString);
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the delayedReverse function
delayedReverse();
