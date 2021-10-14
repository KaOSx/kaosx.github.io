<?php

function getParameters()
{
    $form = [
        'sortby'  => $_GET['sortby'] ?? '',
        'sortdir' => $_GET['sortdir'] ?? '',
        'flagged' => $_GET['flagged'] ?? '',
        'page'    => $_GET['page'] ?? '',
        'search'  => $_GET['search'] ?? '',
        'repo'    => $_GET['repo'] ?? '',
        'exact'   => $_GET['exact'] ?? '',
    ];
    return $form;
}

function renderForm(array $form, $form_title = 'Repositories list', $form_description = '')
{
    include __DIR__.'/../tpl/form.php';
}

function execRequest($req, $args = [], $method = 'POST')
{
    $url  = APIURL.$req;
    $curl = curl_init();
    switch ($method) {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);
            if ($args) {
                curl_setopt($curl, CURLOPT_POSTFIELDS, $args);
            }
            break;
        default:
            if ($args) {
                $url = sprintf("%s?%s", $url, http_build_query($args));
            }
    }
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);
    curl_close($curl);
    if ($result === false) {
        return $result;
    }
    return json_decode($result, true);
}

function setSortLink($field, $args)
{
    $cargs   = [];
    foreach ($args as $k => $v) {
        $cargs[$k] = $v;
    }
    $sortdir = (isset($args['sortdir']) && $args['sortdir'] === 'desc') ? 'desc' : 'asc';
    if (isset($args['sortby']) && $args['sortby'] === $field) {
        $sortdir = ($sortdir === 'desc') ? 'asc' : 'desc';
    }
    $cargs['sortby']  = $field;
    $cargs['sortdir'] = $sortdir;
    return 'packages.php?'.http_build_query($cargs);
}

function setPageLink($page, $args)
{
    $cargs = [];
    foreach ($args as $k => $v) {
        $cargs[$k] = $v;
    }
    $cargs['page'] = $page;
    return 'packages.php?'.http_build_query($cargs);
}

function renderPagination($currentPage, $lastPage, $args)
{
    if ($lastPage <= 1) {
        return;
    }
    $pages = [];
    $prev = $currentPage - INCPAGES;
    $next = $currentPage + INCPAGES;
    if ($prev < 1) {
        $prev = 0;
    }
    if ($next > $lastPage) {
        $next = $lastPage + 1;
    }
    if ($prev > 0) {
        $pages[] = [
            'text'    => 1,
            'url'     => setPageLink(1, $args),
            'current' => $currentPage == 1,
        ];
    }
    if ($prev > 1) {
        $pages[] = [
            'text'    => '…',
            'url'     => setPageLink($prev, $args),
            'current' => false,
        ];
    }
    for ($i = $prev+1; $i < $next; $i++) {
        $pages[] = [
            'text'    => $i,
            'url'     => setPageLink($i, $args),
            'current' => $currentPage == $i,
        ];
    }
    if ($next < $lastPage) {
        $pages[] = [
            'text'    => '…',
            'url'     => setPageLink($next, $args),
            'current' => false,
        ];
    }
    if ($next < $lastPage+1) {
        $pages[] = [
            'text'    => $lastPage,
            'url'     => setPageLink($lastPage, $args),
            'current' => $currentPage == $lastPage,
        ];
    }
    include __DIR__.'/../tpl/pagination.php';
}
