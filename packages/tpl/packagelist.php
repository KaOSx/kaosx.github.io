<table border="0" cellspacing="10" cellpadding="2" class="ctable">
    <tbody>
        <tr>
            <th><a href="<?php echo setSortLink('name', $args); ?>">Name</a></th>
            <th><a href="<?php echo setSortLink('repo', $args); ?>">Repo</a></th>
            <th><a href="<?php echo setSortLink('size', $args); ?>">Size</a></th>
            <th><a href="<?php echo setSortLink('date', $args); ?>">Date</a></th>
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
                <a href="view.php?repo=<?php echo $package['Repository']; ?>&name=<?php echo $package['CompleteName']; ?>"><?php echo $package['CompleteName']; ?></a>
            </td>
            <td align="left"><?php echo $package['Repository']; ?></td>
            <td align="right"><?php echo $package['InstalledSize']; ?></td>
            <td align="right"><?php echo $package['BuildDate']; ?></td>
            <td align="center">
                <a href="<?php echo REPOURL.$package['Repository'].'/'.$package['FileName']; ?>">
                    <i class="fa fa-linux fa-lg" aria-hidden="true"></i>
                </a>
            </td>
        </tr>
        <?php endforeach; ?>
        <tr>
            <th colspan="5">
                Total: <?php echo $totalPackages; ?> packages (<?php echo $totalSize; ?>)
            </th>
        </tr>
    </tbody>
</table>