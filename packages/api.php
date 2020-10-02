<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$result = execRequest('/all');
header('Content-Type: application/json');
echo json_encode($result);