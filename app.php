<?php

$apiUrl = "https://sandbox.vtpass.com/api/merchant-verify";

// Your VTpass credentials
 $serviceID = "enugu-electric";

//Data to send in the request
$data = array(

"billersCode"=> "1010101010101", // Replace with the meternumber you want to verify
"serviceID" => $serviceID,
"type"=>"postpaid" 
// or "postpaid" depending on the meter type
);
