<?php
$myObj->performance = $_GET['performance'];
$myObj->first_name = $_GET['first_name'];
$myObj->last_name = $_GET['last_name'];
$myObj->student_id = $_GET['student_id'];
$myObj->first_name_2 = $_GET['first_name_2'];
$myObj->last_name_2 = $_GET['last_name_2'];
$myObj->student_id_2 = $_GET['student_id_2'];
$myObj->skill = $_GET['skill'];
$myObj->instrument = $_GET['instrument'];
$myObj->location = $_GET['location'];
$myObj->room = $_GET['room'];
$myObj->time_slot = $_GET['time_slot'];

$myJSON = json_encode($myObj);

//echo $myJSON;

$file = fopen("./data/data.json","a");
fwrite($file, $myJSON);
fclose($file);
?>