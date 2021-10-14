<p></p>
<br>
<div class="wrapper">
    <div id="linkList">
        <div id="linkList2">
            <h3>
                <i class="fa fa-download" aria-hidden="true"></i>
                Package
            </h3>
            <ul class="pkglinks">
                <li>
                    <a href="<?= $package['URL']['Download'] ?? '' ?>">
                        Download
                    </a>
                </li>
            </ul>
            <h3>
                <i class="fa fa-bug" aria-hidden="true"></i>
                Bugs
            </h3>
            <ul class="pkglinks">
                <li>
                    <a href="<?= $package['URL']['Bugs'] ?? '' ?>">
                        Report Issues
                    </a>
                </li>
            </ul>
            <h3>
                <i class="fa fa-github-square" aria-hidden="true"></i>
                Git
            </h3>
            <ul class="pkglinks">
                <li>
                    <a href="<?= $package['URL']['Sources'] ?? '' ?>">
                        Source Files
                    </a>
                </li>
                <li>
                    <a href="<?= $package['URL']['PKGBUILD'] ?? '' ?>">
                        PKGBUILD
                    </a>
                </li>
                <li>
                    <a href="<?= $package['URL']['Commits'] ?? '' ?>">
                        Commits
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<table width="60%" border="0" cellspacing="10" cellpadding="2" class="ltable">
    <tbody>
        <tr>
            <th class="tdhp">
                <b><?= $package['CompleteName'] ?></b>
            </th>
        </tr>
        <tr>
            <td>Repository: <?= $package['Repository'] ?></td>
        </tr>
        <tr>
            <td>Description: <?= $package['Description'] ?></td>
        </tr>
        <tr>
            <td>Upstream URL: <a href="<?= $package['URL']['Upstream'] ?>"><?= $package['URL']['Upstream'] ?></a></td>
        </tr>
        <tr>
            <td>License: <?= implode(', ', $package['Licenses']) ?></td>
        </tr>
        <tr>
            <td>Package size: <?= $package['PackageSize'] ?></td>
        </tr>
        <tr>
            <td>Installed size: <?= $package['InstalledSize'] ?></td>
        </tr>
        <tr>
            <td>Build date: <?= $package['BuildDate'] ?></td>
        </tr>
        <tr>
            <td>Packages groups: [<?= implode(' ', $package['Groups'] ?? []) ?>]</td>
        </tr>
        <tr><td></td></tr><tr><td></td></tr>
        <tr>
            <?php if ($package['Flagged']): ?>
            <td class="pkgwarning">
                <i class="fa fa-flag-checkered text-danger" aria-hidden="true"> This package has been flagged as outdated</i>
            </td>
            <?php elseif ($package['Build'] ?? false): ?>
            <td align="center">
                <div class="Button">
                    <a href="view.php?name=<?= $package['Build'] ?>">View in build</a>
                </div>
            </td>
            <?php else: ?>
            <td align="center">
                <div class="Button">
                    <a href="flag.php?name=<?= $package['FullName'] ?>">Flag as outdated</a>
                </div>
            </td>
            <?php endif; ?>
        </tr>
        <tr><td></td></tr>
        <?php if (is_array($package['Depends']) && count($package['Depends']) > 0): ?>
        <tr>
            <th class="tdhp"><b>Dependencies</b></th>
        </tr>
        <?php foreach ($package['Depends'] as $dep): ?>
        <tr>
            <td>
                <a href="packages.php?exact=1&search=<?= $dep ?>"><?= $dep ?></a>
            </td>
        </tr>
        <?php endforeach; ?>
        <?php endif; ?>
        <?php if (is_array($package['MakeDepends']) && count($package['MakeDepends']) > 0): ?>
        <tr>
            <th class="tdhp"><b>Make Dependencies</b></th>
        </tr>
        <?php foreach ($package['MakeDepends'] as $dep): ?>
        <tr>
            <td>
                <a href="packages.php?exact=1&search=<?= $dep ?>"><?= $dep ?></a>
            </td>
        </tr>
        <?php endforeach; ?>
        <?php endif; ?>
        <?php if (is_array($package['OptDepends']) && count($package['OptDepends']) > 0): ?>
        <tr>
            <th class="tdhp"><b>Optional Dependencies</b></th>
        </tr>
        <?php foreach ($package['OptDepends'] as $dep): ?>
        <tr>
            <td>
                <a href="packages.php?exact=1&search=<?= $dep ?>"><?= $dep ?></a>
            </td>
        </tr>
        <?php endforeach; ?>
        <?php endif; ?>
        <tr>
            <th class="tdhp"><b>Files listing</b></th>
        </tr>
        <?php foreach ($package['Files'] as $f): ?>
        <tr>
            <td><?= $f ?></td>
        </tr>
        <?php endforeach; ?>
        <tr>
            <td align="center">
                <div class="Button">
                    <a href="packages.php?sortby=date&sortdir=desc&repo=<?= $package['Repository'] ?>">Return to packages</a>
                </div>
            </td>
        </tr>
    </tbody>
</table>
