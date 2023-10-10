document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication logic here (e.g., send a request to the server)
    // For now, let's assume username: "user" and password: "password"

    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform necessary actions upon successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Handle navigation clicks
document.querySelector('nav').addEventListener('click', function(event) {
    // Check if the clicked element is a link
    if (event.target.tagName === 'A') {
        // Prevent default link behavior
        event.preventDefault();

        // Get the href attribute of the clicked link
        var targetPage = event.target.getAttribute('href');

        // Redirect to the target page
        window.location.href = targetPage;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('client-search');
    var searchButton = document.getElementById('search-button');
    var searchResultsContainer = document.querySelector('.search-results');

    searchButton.addEventListener('click', function() {
        var searchTerm = searchInput.value.trim();

        // Call your API endpoint with the searchTerm and handle the search results
        // For now, let's assume searchResults is an array of client objects
        var searchResults = []; // Replace this with actual search results from your API

        // Clear previous search results
        searchResultsContainer.innerHTML = '';

        // Display search results in the search-results container
        searchResults.forEach(function(client) {
            var clientDiv = document.createElement('div');
            clientDiv.classList.add('client-result');
            clientDiv.textContent = client.name; // Assume name is a property of the client object
            searchResultsContainer.appendChild(clientDiv);
        });
    });
});


