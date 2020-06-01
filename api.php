<?php
header('Content-Type: application/json');

include "class.php";

$names = [];
foreach ($class as $students) {
  $names[] = [
           "name" => $students["name"],
           "lastname" => $students["lastname"],
           "scores" => $students["scores"]
         ];
}
echo json_encode($names);
 ?>
