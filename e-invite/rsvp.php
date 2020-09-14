<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include_once 'lib/DB.php';

$DB = new DB();
$table = "rsvp";

$arr = array(
    "event" => $_POST["event"],
    "name" => $_POST["name"],
    "headcount" => $_POST["headcount"],
    "phone_number" => $_POST["phone_number"],
    "slot" => $_POST["slot"]
);

$res = $DB->query_insert($table, $arr);

$error = "";
$status = "";
if($res == false){
    $error = $DB->error;  
    $status = "0";
} else{
    $status = "1";
}
echo json_encode(array("status"=>$status,"error"=>$error));

/**
 CREATE TABLE `e_invite`.`rsvp` ( `ID` BIGINT(20) NOT NULL AUTO_INCREMENT , `event` VARCHAR(100) NOT NULL , `name` TEXT NOT NULL , `headcount` INT(50) NULL , `phone_number` VARCHAR(50) NULL , `slot` VARCHAR(100) NULL , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`ID`), INDEX (`event`)) ENGINE = InnoDB; 
 */
?>

