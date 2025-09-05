<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destination = $_POST['destination'];
    $people = $_POST['people'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];

    // Example: store in a file or database
    $data = "Destination: $destination, People: $people, Checkin: $checkin, Checkout: $checkout\n";
    file_put_contents("inquiries.txt", $data, FILE_APPEND);

    echo "Inquiry submitted successfully!";
}
?>
