<table border="0" cellspacing="10" cellpadding="2" class="ctable">
    <tbody>
        <tr>
            <th><a href="<?= setSortLink('name', $args) ?>">Name</a></th>
            <th><a href="<?= setSortLink('repo', $args) ?>">Repo</a></th>
            <th><a href="<?= setSortLink('size', $args) ?>">Size</a></th>
            <th><a href="<?= setSortLink('date', $args) ?>">Date</a></th>
            <th></th>
        </tr>
        <tr>
            <td colspan="5">
                <a href="index.php"><b><i class="fa fa-bars fa-lg" aria-hidden="true"> [Repositories list]</i></b></a>
            </td>
        </tr>
        <?php foreach ($packages as $package): ?>
        <tr>
            <td>
                <a href="view.php?name=<?= $package['FullName'] ?>"><?= $package['CompleteName'] ?></a>
            </td>
            <td align="left"><?= $package['Repository'] ?></td>
            <td align="right"><?= $package['InstalledSize'] ?></td>
            <td align="right"><?= $package['BuildDate'] ?></td>
            <td align="center">
                <a href="<?= REPOURL.$package['Repository'].'/'.$package['Filename'] ?>">
                    <i class="fa fa-linux fa-lg" aria-hidden="true"></i>
                </a>
            </td>
        </tr>
        <?php endforeach; ?>
        <tr>
            <th colspan="5">
                Total: <?= $totalPackages ?> packages (<?= $totalSize ?>)
            </th>
        </tr>
    </tbody>
</table>
