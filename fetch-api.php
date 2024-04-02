<?php
$url = "https://dummyjson.com/recipes";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$response = json_decode($response, true);
$recipes = $response['recipes'];

return $recipes;
// var_dump($response);

// header('Contect-Type: application/json; charset=utf-8');
// echo json_encode($response);
