<?php
// File Name: weather.data.php
//
$api_key = '<api key>';
$latLong = '37.8267,-122.4233';

$API_ENDPOINT = 'https://api.darksky.net/forecast/';
$url = $API_ENDPOINT . $api_key . '/' . $latLong;


$json = file_get_contents($url);
echo $json;
