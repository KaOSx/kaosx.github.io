<?php
include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$page_title = 'Mirrors status';

function render()
{
    $countries = execRequest('/mirror');
    if ($countries === false) {
        echo 'Internal servor error';
        return;
    }
    include __DIR__.'/tpl/mirrorlist.php';
}

include __DIR__.'/tpl/page.php';
