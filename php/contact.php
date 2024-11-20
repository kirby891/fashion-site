<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Example: Send an email (you can replace this with database storage)
    $to = "support@fashioncompany.com"; // Replace with your email
    $headers = "From: $email\r\n";
    $emailBody = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $emailBody, $headers)) {
        $statusMessage = "Thank you for your inquiry. We'll get back to you soon!";
    } else {
        $statusMessage = "There was an error submitting your inquiry. Please try again.";
    }
}
?>