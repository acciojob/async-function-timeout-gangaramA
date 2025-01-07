// Get references to the DOM elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Async function to introduce a delay
async function displayMessageAfterDelay(text, delay) {
  // Wait for the specified delay
  await new Promise((resolve) => setTimeout(resolve, delay));
  // Display the text in the output div
  outputDiv.textContent = text;
}

// Event listener for the submit button
submitButton.addEventListener('click', async () => {
  // Get the user-provided text and delay values
  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  // Validate the inputs
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.textContent = 'Please enter valid text and delay.';
    return;
  }

  // Call the async function to display the message after the delay
  await displayMessageAfterDelay(text, delay);
});