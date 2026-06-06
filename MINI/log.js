// Basic login validation
document.getElementById("customer-login-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here, you would normally send the data to the server for validation, but for now, we just log it
    if (username && password) {
        // You can replace this with a real authentication request (AJAX, fetch, etc.)
        console.log("Customer login:", username, password);
        // Redirect to the customer dashboard (for example purposes)
        window.location.href = "customer_dashboard.html";
    } else {
        alert("Please fill in both fields.");
    }
});

document.getElementById("worker-login-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here, you would normally send the data to the server for validation, but for now, we just log it
    if (username && password) {
        // You can replace this with a real authentication request (AJAX, fetch, etc.)
        console.log("Worker login:", username, password);
        // Redirect to the worker dashboard (for example purposes)
        window.location.href = "worker_dashboard.html";
    } else {
        alert("Please fill in both fields.");
    }
});