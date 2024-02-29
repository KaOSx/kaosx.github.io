<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$page_title = 'Online Package Viewer';

function render()
{
    $name = $_GET['name'] ?? '';
    $result = execRequest('/package/view', [
        'name' => $name,
    ]);
    if ($result === false || !isset($result['data']) || !is_array($result['data'])) {
        echo "Package “${name}” not found.";
        return;
    }
    $package = $result['data'];
    include __DIR__.'/tpl/packageview.php';
};

include __DIR__.'/tpl/page.php';
