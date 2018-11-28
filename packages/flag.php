<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';

$page_title = 'Online Package Viewer';

function render()
{
    $repo = isset($_GET['repo']) ? $_GET['repo'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $result = execRequest('/package/view', [
        'repo' => $repo,
        'name' => $name,
    ]);
    if ($result === false || !isset($result['data'])) {
        echo 'Package “'.$repo.'/'.$name.'” not found.';
        return;
    }
    $package = $result['data'];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $repo    = $package['Repository'];
        $pname   = $package['Name'];
        $version = $package['Version'];
        $email   = (isset($_POST['email'])) ? $_POST['email'] : false;
        $comment = (isset($_POST['comment'])) ? $_POST['comment'] : false;
        if (!$package['Flagged'] && $email && $comment) {
            $comment = str_replace('<br>', "\n", $comment);
            $comment = str_replace("\r\n", "\n", $comment);
            $comment = preg_replace('/<[^>]*>/', '', $comment);
            execRequest('/flag/add', [
                'repo'    => $repo,
                'name'    => $pname,
                'version' => $version,
                'email'   => $email,
                'comment' => $comment,
            ]);
        }
        header('Location: view.php?'.http_build_query([
            'repo' => $repo,
            'name' => $name,
        ]));
        return;
    }
    include __DIR__.'/tpl/flagform.php';
};

include __DIR__.'/tpl/page.php';
