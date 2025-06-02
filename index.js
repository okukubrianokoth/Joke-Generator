const jokes = [];
let currentIndex = -1;

function getJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    jokes.push(data.joke);
    currentIndex = jokes.length - 1;
    displayJoke();
  })
  .catch(() => {
    document.getElementById('joke').textContent = 'Could not fetch a joke. Please try again.';
  });
}

function showPrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    displayJoke();
  } else {
    alert('No previous joke available.');
  }
}

function displayJoke() {
  document.getElementById('joke').textContent = jokes[currentIndex];
}
