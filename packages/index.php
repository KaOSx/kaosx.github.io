<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$page_title = 'Online Package Viewer';

function render()
{
    global $repolist;
    $form = getParameters();
    include __DIR__.'/tpl/buttonsbar.php';
    renderForm($form);
    include __DIR__.'/tpl/repolist.php';
};

include __DIR__.'/tpl/page.php';
