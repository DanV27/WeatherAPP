// Select the input field, suggestion container, and submit button
const cityInput = document.getElementById('city-input');
const suggestionsContainer = document.getElementById('suggestions');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result');

// Predefined list of cities
const cities = [
    "Los Angeles, USA",
    "London, UK",
    "Paris, France",
    "Tokyo, Japan",
    "Sydney, Australia",
    "Berlin, Germany",
    "Toronto, Canada",
    "Mumbai, India",
    "Cape Town, South Africa"
];

// Function to fetch city suggestions from the local list
function fetchCitySuggestions(query) {
    const lowerCaseQuery = query.toLowerCase();
    return cities.filter(city => city.toLowerCase().includes(lowerCaseQuery));
}

// Function to display suggestions
function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = suggestion;

        // Add click event to autofill the input field
        suggestionItem.addEventListener('click', () => {
            cityInput.value = suggestion;
            suggestionsContainer.innerHTML = ''; // Clear suggestions
        });

        suggestionsContainer.appendChild(suggestionItem);
    });
}

// Event listener for input field
cityInput.addEventListener('input', () => {
    const query = cityInput.value.trim();

    if (query.length > 0) {
        const suggestions = fetchCitySuggestions(query);
        displaySuggestions(suggestions);
    } else {
        suggestionsContainer.innerHTML = ''; // Clear suggestions if input is empty
    }
});

// Function to generate a random temperature
function getRandomTemperature() {
    return Math.floor(Math.random() * 61) - 10; // Random temperature between -10°C and 50°C
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    const selectedCity = cityInput.value.trim();

    if (selectedCity && cities.includes(selectedCity)) {
        const randomTemp = getRandomTemperature();
        resultContainer.textContent = `The current temperature in ${selectedCity} is ${randomTemp}°C.`;
    } else {
        resultContainer.textContent = 'Please select a valid city from the suggestions.';
    }
});
