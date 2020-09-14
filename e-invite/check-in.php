<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include_once 'lib/DB.php';

$DB = new DB();
$table = "check_in";

$arr = array(
    "event" => $_POST["event"],
    "name" => $_POST["name"],
    "phone_number" => $_POST["phone_number"]
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
 CREATE TABLE `e_invite`.`check_in` ( `ID` BIGINT(20) NOT NULL AUTO_INCREMENT , `event` VARCHAR(100) NOT NULL , `name` TEXT NOT NULL , `phone_number` VARCHAR(50) NULL , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`ID`), INDEX (`event`)) ENGINE = InnoDB; 
 */
?>

