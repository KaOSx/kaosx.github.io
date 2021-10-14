<h4>Status report of all mirrors used by KaOS.</h4>
<div class="box">
    <?php foreach ($countries as $country): ?>
    <p>
        <b><?= $country['Name'] ?></b>
        <br>
    <?php foreach ($country['Mirrors'] as $mirror): ?>
        <?php
            $textOnline  = $mirror['Online'] ? 'Online' : 'Offline';
            $colorOnline = $mirror['Online'] ? 'green' : 'red';
            $c           = 0;
            $l           = 0;
            foreach ($mirror['Repos'] as $repo) {
                $l++;
                if ($repo['Sync']) {
                    $c++;
                }
            }
            $textSync  = ($c === 0) ? 'Not synced' : (($c === $l) ? 'Fully synced' : 'Partially synced');
            $colorSync = ($c === 0) ? 'red' : (($c === $l) ? 'green' : 'purple');
        ?>
        <a href="<?= $mirror['Name'] ?>"><?= $mirror['Name'] ?></a>
        |
        <font color="<?= $colorOnline ?>"><?= $textOnline ?></font>
        |
        <font color="<?= $colorSync ?>"><?= $textSync ?></font>
        <br>
    <?php endforeach; ?>
    <?php endforeach; ?>
    </p>
</div>
<div class="Button">
    <a href="index.php">Return to search index page</a>
</div>