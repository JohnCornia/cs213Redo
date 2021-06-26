<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Assignment 7</title>
   <link rel="stylesheet" type="text/css" href="./stylesheet.css">
</head>
<body>

<?php $apr = $_GET["apr"] ?><br>
<?php $term = $_GET["term"] ?><br>
<?php $amount = $_GET["amount"] ?><br>
<?php $monthlyPayment = $amount * (($apr * ((1 + $apr) ** $term)) / (((1 + $apr) ** $term) - 1)); 
    echo number_format($monthlyPayment, 2,",",".");;
?>
</body>
</html>