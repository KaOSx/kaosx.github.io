<table border="0" class="stable">
    <tbody>
        <tr>
            <td>
                <b><?php echo $form_title; ?></b>
                <br>
                <?php echo $form_description; ?>
            </td>
            <td width="28" class="tdrt"></td>
            <td class="tdrt">
                <form method="get" name="searchform" action="packages.php">
                    <input name="sortby" type="hidden" value="<?php echo $form['sortby']?>">
                    <input name="sortdir" type="hidden" value="<?php echo $form['sortdir']; ?>">
                    <input name="flagged" type="hidden" value="<?php echo $form['flagged']; ?>">
                    <input name="page" type="hidden" value="<?php echo $form['page']; ?>">
                    <input name="repo" type="hidden" value="<?php echo $form['repo']; ?>">
                    <input name="exact" type="hidden" value="<?php echo $form['exact']; ?>">
                    <input name="search" type="text" size="20" value="<?php echo $form['search']; ?>">
                    <button type="submit">Search</button>
                </form>
            </td>
        </tr>
    </tbody>
</table>