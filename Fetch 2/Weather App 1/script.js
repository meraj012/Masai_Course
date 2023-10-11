// Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your OpenWeatherMap API key
const openWeatherMapApiKey = 'b4f0833bab14d5aff207e711bfb2e494';

// Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your Google Maps API key
const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherDetails = document.querySelector('.weather-details');
const map = document.querySelector('.map');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    }
});

async function fetchWeatherData(city) {
    try {
        // Fetch weather data from OpenWeatherMap API
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={openWeatherMapApiKey}`);
        const weatherData = await weatherResponse.json();

        // Fetch coordinates (latitude and longitude) for Google Maps
        const latitude = weatherData.coord.lat;
        const longitude = weatherData.coord.lon;

        // Display weather details
        weatherDetails.innerHTML = `
            <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
            <div class="weather-icon">
                <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="Weather Icon">
                <p>${weatherData.weather[0].description}</p>
            </div>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Min Temperature: ${weatherData.main.temp_min}°C</p>
            <p>Max Temperature: ${weatherData.main.temp_max}°C</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        `;

        // Display Google Map
        map.innerHTML = `
            <iframe
                width="600"
                height="450"
                frameborder="0"
                style="border:0"
                src="https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${latitude},${longitude}"
                allowfullscreen
            ></iframe>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
