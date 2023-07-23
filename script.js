document.addEventListener('DOMContentLoaded', () => 
{
    const jokeContainer = document.getElementById('joke');
    const getJokeBtn = document.getElementById('get-joke');
  
    // Handle form submission to post wishes
    
    // Fetch a random joke from the API
    function fetchJoke() {
        fetch('https://v2.jokeapi.dev/joke/Dark') // Fetching a random joke of any type
          .then((response) => response.json())
          .then((data) => {
            if (data.type === 'twopart') {
              jokeContainer.innerHTML = `
                <p>${data.setup}</p>
                <p>${data.delivery}</p>
              `;
            } else {
              jokeContainer.innerText = data.joke;
            }
          })
          .catch((error) => {
            console.error('Error fetching joke:', error);
          });
      }
    
      // ... Same as before ...
    
      // Initial fetch for the first joke
      fetchJoke();
  
    // Handle button click to get a new joke
    getJokeBtn.addEventListener('click', fetchJoke);
  });