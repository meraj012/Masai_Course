
const movieInput = document.getElementById('movieInput');
const searchButton = document.getElementById('searchButton');
const movieInfo = document.getElementById('movieInfo');

const apiKey = 'ae077187';

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const movieTitle = movieInput.value.trim();
    if (movieTitle === '') {
        alert('Please enter a movie title.');
        return;
    }

    // Make a fetch request to the OMDB API
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // Check if the API response contains an error
            if (data.Error) {
                movieInfo.innerHTML = `<p>${data.Error}</p>`;
            } else {
                // Display movie data
                
                const html = `
                    <h2>${data.Title}</h2>
                    <p>Released: ${data.Year}</p>
                    <p>Director: ${data.Director}</p>
                    <p>Plot: ${data.Plot}</p>
                    <img src="${data.Poster}" alt="${data.Title} Poster">
                `;
                movieInfo.innerHTML = html;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            movieInfo.innerHTML = '<p>An error occurred. Please try again later.</p>';
        });
});


