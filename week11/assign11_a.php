<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Purchase Confirmation Page</title>
   <link rel="stylesheet" type="text/css" href="./stylesheet.css">
</head>
<body>
    <?php
    $finalDecision = $_GET["submission"];
    echo "Your purchase was ".$finalDecision;
    ?>
</body>
</html>