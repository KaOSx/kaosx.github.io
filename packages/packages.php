<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$page_title = 'Online Package Viewer';

function render()
{
    global $repolist;
    $form = getParameters();
    $args = [];
    $sd = '/package/list';
    foreach ($form as $k => $v) {
        if ($v !== '') {
            $args[$k] = $v;
        }
        if ($k === 'repo' && $v !== '') {
            $sd = '/repo/list';
        }
    }
    $ftitle = (isset($args['repo'])) ? $args['repo'] : '';
    $fdesc  = (isset($repolist[$ftitle])) ? $repolist[$ftitle] : '';
    include __DIR__.'/tpl/buttonsbar.php';
    renderForm($form, $ftitle, $fdesc);
    $result = execRequest($sd, $args);
    if ($result === false) {
        echo 'Internal servor error';
        return;
    }
    $packages      = $result['data'];
    $pagination    = $result['paginate'];
    $totalSize     = $result['size'];
    $totalPackages = $pagination['total'];
    $current       = $pagination['page'];
    $last          = $pagination['last'];
    include __DIR__.'/tpl/packagelist.php';
    renderPagination($current, $last, $args);
};

include __DIR__.'/tpl/page.php';
