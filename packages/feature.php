<?php

include __DIR__.'/inc/vars.php';
include __DIR__.'/inc/util.php';
$sd = '/repo/list';
$args = [
    'repo'    => 'build',
    'sortby'  => 'date',
    'sortdir' => 'desc',
    'limit'   => 14,
    'page'    => 1,
];
$result = execRequest($sd, $args);
if ($result === false) {
    echo 'Internal server error';
    return;
}
$packages = $result['data'];
?>

<html>
    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700" rel="stylesheet">
        
        <script src="https://use.fontawesome.com/cbedfa5cad.js"></script>
        
        <style>            
            body {
                font: 85% "Open Sans", sans-serif;
                background: #fbfbfe;
            }
            div {
                margin-left: auto;
                margin-right: auto;
                width: 98%;
            }
            span { 
                display: block;
                width: 98%
                height: 10px;
                padding: 1px;
            }
            span.b {
                display: inline-block;
                float: right;
                padding: 0px;
                height: 0px;
            }
            h3 { 
                font-family: "Raleway", sans-serif;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 10; 
                color: #272727;
            }
            a:link { 
                font-weight: normal; 
                text-decoration: none; 
                color: #3C5675;
            }
            a:visited { 
                font-weight: bold; 
                text-decoration: none; 
                color: #333333;
            }
            a:hover, a:active { 
                text-decoration: none; 
                color: #31A3DD;
            }
        </style>
        
    </head>
    <body>
        <div>
            <h3><a target=_blank title="View the Build Repository in descending order" href=https://kaosx.us/packages/packages.php?sortby=date&sortdir=desc&repo=build><i class="fa fa-external-link"></i> Full List</a></h3>

            <?php foreach ($packages as $package): ?>

            <span>
                <a href="view.php?repo=<?php echo $package['Repository']; ?>&name=<?php echo $package['CompleteName']; ?>" target="blank"><i class="fa fa-camera"></i> <?php echo $package['CompleteName']; ?>
                <span class="b"><?php echo date('D H:i', strtotime($package['BuildDate'])); ?></span>
                </a>
            </span>
            
            <?php endforeach; ?>
            
        </div>
    </body>
</html>
