<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Purchase Confirmation Page</title>
   <link rel="stylesheet" type="text/css" href="./stylesheet.css">
</head>
<body>
<form action="assign11_a.php" method="GET">
<fieldset>
         <legend>
            <h1>Archery Store Checkout</h1>
         </legend>
<?php 
$firstName = $_GET["first_name"]; 
$lastName = $_GET["last_name"];
$address = $_GET["address"];
$phoneNumber = $_GET["phone"];
$total = $_GET["purchaseTotal"];
$expirationDate = $_GET["exp_date"];
$card = $_GET["card"];

echo "First Name: ";
echo $firstName;
echo "<br>Last Name: ";
echo $lastName;
echo "<br>Address: ";
echo $address;
echo "<br>Phone: ";
echo $phoneNumber;
echo "<br>Chosen Items: <br>";
if(!empty($_GET['items'])) {

    foreach($_GET['items'] as $value){
        echo $value.'<br/>';
    }
}
echo "<br>Credit Card: <br>";
echo $card;
echo "<br>Expiration Date: ";
echo $expirationDate;

?>
<input type="submit" name="submission" value="confirmed">
<input type="submit" name="submission" value="canceled">
</fieldset>
</form>
</body>
</html>