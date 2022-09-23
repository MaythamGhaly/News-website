<?php
// Connection
include("connection.php");
//required file

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$query = $mysqli->prepare("SELECT sports, international, lebanon FROM news");
$query->execute();
$result = $query->get_result();
$response = [];

while($a = $result->fetch_assoc()){
    $response[] = $a;
}
$json = json_encode($response);
echo $json;

?>