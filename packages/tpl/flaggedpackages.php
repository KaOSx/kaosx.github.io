<div class="ctable">
    <div align="left" class="fltable">
        <div class="line">
            <h4>Flagged packages</h4>
        </div>
        <div class="fltable">
            <?php foreach ($flags as $flag): ?>
            <?php
            $comment = str_replace('\r\n', '<br>', $flag['Comment']);
            $comment = str_replace('\n', '<br>', $comment);
            ?>
            <p>
                <b><?php echo $flag['Name']; ?></b> (outdated) :
                <br>
                <?php echo $comment; ?>
                <br>
            </p>
            <?php endforeach; ?>
        </div>
        <div class="Button">
            <a href="index.php">Return to search index page</a>
        </div>
    </div>
</div>