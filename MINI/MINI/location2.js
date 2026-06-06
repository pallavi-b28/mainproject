// Function to get the user's exact location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to handle the success case, and convert coordinates to a readable address
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Display the coordinates (optional)
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
    
    // Call the reverse geocoding function
    getAddressFromCoordinates(latitude, longitude);
}

// Function to get the human-readable address from coordinates (reverse geocoding)
function getAddressFromCoordinates(latitude, longitude) {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";  // Replace with your Google Maps API key

    // Construct the URL for reverse geocoding
    const url = https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey};

    // Fetch the address data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                const address = data.results[0].formatted_address;
                document.getElementById("address").textContent = You are located at: ${address};
            } else {
                document.getElementById("address").textContent = "Address not found.";
            }
        })
        .catch(error => {
            console.error('Error during reverse geocoding:', error);
            document.getElementById("address").textContent = "Unable to retrieve address.";
        });
}

// Function to handle errors (e.g., permission denied or other issues)
function showError(error) {
    let errorMessage = "";

    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred.";
            break;
    }

    alert(errorMessage);
}