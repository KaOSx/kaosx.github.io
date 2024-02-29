<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$page_title = 'Online Package Viewer';

function render()
{
    $result = execRequest('/flag/list', [
        'sortby'  => 'name',
        'sortdir' => 'asc',
    ]);
    if ($result === false) {
        echo 'Internal servor error';
        return;
    }
    $flags = $result['data'] ?? [];
    include __DIR__.'/tpl/flaggedpackages.php';
};

include __DIR__.'/tpl/page.php';
