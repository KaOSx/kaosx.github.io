<div id="paginate">
    <?php foreach ($pages as $p): ?>
    <a href="<?php echo $p['url']; ?>" <?php if ($p['current']): ?>disabled<?php endif; ?>>
        <?php echo $p['text']; ?>
    </a>
    <?php endforeach; ?>
</div>