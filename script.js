//your JS code here. If required.
// Function to create a delay using a Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to display text after a delay
async function displayTextAfterDelay() {
  // Retrieve input values
  const text = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);
  const output = document.getElementById('output');

  // Validate input
  if (!text) {
    output.textContent = 'Please enter some text.';
    return;
  }

  if (isNaN(delayTime) || delayTime < 0) {
    output.textContent = 'Please enter a valid delay in milliseconds.';
    return;
  }

  // Display loading message
  output.textContent = 'Waiting...';

  // Introduce delay
  await delay(delayTime);

  // Display the text after the delay
  output.textContent = text;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', displayTextAfterDelay);
