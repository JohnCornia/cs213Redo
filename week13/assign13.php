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

$myFile = "./data/data.json";               //get the destination for this information

$fileTmp = file_get_contents($myFile);      //get file contents
$tempArray = json_decode($fileTmp,true);    //turn contents into a string
if (!$tempArray) {                          //if the contents are empty...
    $tempArray = array();                   //turn it into an array
}
array_push($tempArray, $myObj);             //add an object to the array
$jsonData = json_encode($tempArray);        //turn the array into JSON
file_put_contents($myFile, $jsonData);      //put it all back into the file

?>