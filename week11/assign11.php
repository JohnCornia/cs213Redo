<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Confirmation Page</title>
   <link rel="stylesheet" type="text/css" href="./stylesheet.css">
</head>
<body>

<?php 

$firstName = $_GET["first_name"]
echo $firstName
if(!empty($_GET['items'])) {

    foreach($_GET['items'] as $value){
        echo "Chosen Items : ".$value.'<br/>';
    }

}

?>
</body>
</html>