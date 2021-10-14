<table border="0" class="stable">
    <tbody>
        <tr>
            <td>
                <b><?= $form_title ?></b>
                <br>
                <?= $form_description ?>
            </td>
            <td width="28" class="tdrt"></td>
            <td class="tdrt">
                <form method="get" name="searchform" action="packages.php">
                    <input name="sortby" type="hidden" value="<?= $form['sortby'] ?>">
                    <input name="sortdir" type="hidden" value="<?= $form['sortdir'] ?>">
                    <input name="flagged" type="hidden" value="<?= $form['flagged'] ?>">
                    <input name="page" type="hidden" value="<?= $form['page'] ?>">
                    <input name="limit" type="hidden" value="<?= $form['limit'] ?>">
                    <input name="repo" type="hidden" value="<?= $form['repo'] ?>">
                    <input name="exact" type="hidden" value="<?= $form['exact'] ?>">
                    <input name="search" type="text" size="20" value="<?= $form['search'] ?>">
                    <button type="submit">Search</button>
                </form>
            </td>
        </tr>
    </tbody>
</table>