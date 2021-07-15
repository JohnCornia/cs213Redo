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

$myArray = array($myObj);                       //create a new array of objects*/

$file = fopen("./data/data.json","w+");             //open file, read/write
$fileTmp = file_get_contents("./data/data.json");        //get JSON array
echo empty($fileTmp);
if (empty($fileTmp)) {                              //check to see if it is empty
    
    $myJSON = json_encode($myArray);                //if empty, encode it as JSON and...
    
    fwrite($file, $myJSON);                         //...write to the file
}
else {
$tempArray = json_decode($fileTmp);                 //turn JSON array into PHP array
$newArray = array_push($tempArray, $myArray);         //add array to array
$myJSON = json_encode($newArray);                   //turn array back into JSON

fwrite($file, $myJSON); //$myJSON);
}
fclose($file);

?>