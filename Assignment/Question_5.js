// Regular expression to match valid URLs
const urlRegex = /^(https?:\/\/)[\w\d.]+[a-z]+$/i;

// Function to check if a URL is valid
function isValidURL(input) {
  return urlRegex.test(input);
}

// Test cases
const urlsToTest = [
  "http://www.example.com",
  "https://sub.domain123-456.org",
  "ftp://invalid-url.com",
  "https://123invalid",
];

urlsToTest.forEach(url => {
  if (isValidURL(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is not a valid URL.`);
  }
});
