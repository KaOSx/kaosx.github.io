<p></p>
<?php foreach ($repolist as $name => $description): ?>
    <p>
        <a href="packages.php?sortby=name&sordir=asc&repo=<?php echo $name; ?>">
            <b><i class="fa fa-bars fa-lg" aria-hidden="true"> <?php echo $name; ?></i></b>
        </a>
    </p>
<?php endforeach; ?>
