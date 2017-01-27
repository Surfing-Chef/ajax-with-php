<?php
// File Name: proxy.php

$api_key = '<api key>';
$location = '37.8267,-122.4233';

$API_ENDPOINT = 'https://api.darksky.net/forecast/';
$url = $API_ENDPOINT . $api_key . '/' . $location;

if(!isset($_GET['url'])) die();
$url = $url . $_GET['url'];
$url = file_get_contents($url);

//print_r($url);
return $API_ENDPOINT;
