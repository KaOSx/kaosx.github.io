<?php
header('Content-Type: application/xml');
echo '<?xml version="1.0" encoding="US-ASCII" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
';
$url = 'http://'.$_SERVER['HTTP_HOST'].str_replace('/rss.php','',$_SERVER['PHP_SELF']);
$requesturl = $url.'/api/discussions';
$request = file_get_contents($requesturl);
$request = json_decode($request);

$title = 'KaOS Forum';
$description = 'Forum Feed';

echo '
<title>'.$title.'</title>
<link>'.$url.'</link>
<description>'.$description.'</description>
<atom:link href="http://'.str_replace(':80','',$_SERVER['HTTP_HOST']).$_SERVER['PHP_SELF'].'" rel="self" type="application/rss+xml" />
';
foreach ($request->data as $k) {
    $m = file_get_contents($requesturl.'/'.$k->id);
    $m = json_decode($m);
    $date=new DateTime($m->data->attributes->startTime);
    
    echo '
    <item>
        <title>'.$m->data->attributes->title.'</title>
        <link>'.$url.'/d/'.$m->data->id.'</link>
        <guid>'.$url.'/d/'.$m->data->id.'</guid>
        <pubDate>'.$date->format('D, d M Y H:i:s O').'</pubDate>
        <description>'.substr(preg_replace('/[^\x20-\x7E]/','', strip_tags($m->included[0]->attributes->contentHtml)), 0, 140).'...</description>
    </item>
    ';

}
Echo '</channel>
</rss>
';
?>
