<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Retrieve and sanitize user inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $service = htmlspecialchars(trim($_POST["service-interest"]));
    $details = htmlspecialchars(trim($_POST["project-details"]));

    // Validation: Ensure all fields are filled
    if (empty($name) || empty($email) || empty($service) || empty($details)) {
        echo "All fields are required. Please go back and complete the form.";
        exit;
    }

    // Email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format. Please go back and provide a valid email.";
        exit;
    }

    // Email recipient (Replace with your email)
    $to = "emmanuelcomfort789@gmail.com";  // YOUR email address here
    $subject = "New Inquiry from $name";
    $message = "You have received a new project inquiry:\n\n" .
               "Name: $name\n" .
               "Email: $email\n" .
               "Service Interested In: $service\n" .
               "Project Details:\n$details";

    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=utf-8";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you, $name! Your submission has been received successfully. We will contact you shortly.";
    } else {
        echo "There was an issue submitting your form. Please try again later.";
    }
} else {
    echo "Invalid request. Please submit the form correctly.";
}
header("Location: thank_you.html");
exit;

?>
