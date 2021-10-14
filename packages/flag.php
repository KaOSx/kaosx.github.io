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
    if ($result === false || !isset($result['data'])) {
        echo "Package “${name}” not found.";
        return;
    }
    $package = $result['data'];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $repo    = $package['Repository'] ?? '';
        $pname   = $package['Name'] ?? '';
        $version = $package['Version'] ?? '';
        $email   = $_POST['email'] ?? false;
        $comment = $_POST['comment'] ?? false;

        $canNotFlag = ($package['Flagged'] ?? false) || ($package['Build'] ?? false);
        if (!$canNotFlag && $email && $comment) {
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
            'name' => $name,
        ]));
        return;
    }
    include __DIR__.'/tpl/flagform.php';
};

include __DIR__.'/tpl/page.php';
