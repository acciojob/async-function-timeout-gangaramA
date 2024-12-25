function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function displayTextAfterDelay() {
  const text = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);
  const output = document.getElementById('output');

  if (!text) {
    output.textContent = 'Please enter some text.';
    return;
  }

  if (isNaN(delayTime) || delayTime < 0) {
    output.textContent = 'Please enter a valid delay in milliseconds.';
    return;
  }

  output.textContent = 'Waiting...';
  await delay(delayTime);
  output.textContent = text;
}

document.getElementById('btn').addEventListener('click', displayTextAfterDelay);
