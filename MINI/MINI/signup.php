<?php
// Database connection parameters
$servername = "localhost"; // MySQL server (localhost for local XAMPP)
$username = "root"; // Default MySQL username (XAMPP)
$password = ""; // Default MySQL password (XAMPP is empty)
$dbname = "my_database"; // The name of the database

// Create connection to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $full_name = $_POST['name'];
    $phone_number = $_POST['phno'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $password = $_POST['password'];

    // Validate the data (example: check if email is valid)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit();
    }

    // Hash the password before storing
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL query to insert the data into the database
    $sql = "INSERT INTO users (full_name, phone_number, email, address, password) 
            VALUES (?, ?, ?, ?, ?)";

    // Prepare statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $full_name, $phone_number, $email, $address, $hashed_password);

    // Execute the statement and check if insertion is successful
    if ($stmt->execute()) {
        echo "Signup successful!";
        // Redirect to login page or dashboard
        header("Location: log1.html");  // Adjust this to the correct page
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
}

// Close the connection
$conn->close();
?>
