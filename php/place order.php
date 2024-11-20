<?php
// Connect to the database
include '../php/db_connect.php';

// Get form data
$productName = $_POST['product_name'];
$productPrice = $_POST['product_price'];
$customerEmail = $_POST['email'];
$shippingAddress = $_POST['shipping_address'];
$city = $_POST['city'];
$province = $_POST['province'];
$postalCode = $_POST['postal_code'];
$country = $_POST['country'];
$cardNumber = $_POST['card_number'];

// Save order details in the database
$sql = "INSERT INTO orders (product_name, product_price, customer_email, shipping_address, city, province, postal_code, country, card_number)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sdsssssss", $productName, $productPrice, $customerEmail, $shippingAddress, $city, $province, $postalCode, $country, $cardNumber);

if ($stmt->execute()) {
    echo "Order placed successfully!";
    header('Location: ../html/order_success.html'); // Redirect to a success page
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
