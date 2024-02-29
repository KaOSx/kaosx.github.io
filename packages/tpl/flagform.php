<form method="post">
    <table border="0" class="cctable">
        <tbody>
            <tr>
                <td class="cctable">
                    Your email:
                    <input type="email" required="" size="50" name="email">
                    <br>
                    <br>
                    <br>
                </td>
            </tr>
            <tr>
                <td class="cctable">
                    You are about to flag <b><?= $package['CompleteName'] ?></b> as outdated, write any additional information here.
                    <br>
                    Use <a href="https://kaosx.us/bugs"><u>Bugs</u></a> <b>for broken packages</b>.
                    <br>
                    <br>
                    <textarea cols="50" required="" rows="8" name="comment"></textarea>
                    <br>
                    <br>
                </td>
            </tr>
            <tr>
                <td class="cctable">
                    <input type="checkbox" name="gdpr" required="">
                    I authorize KaOS to record my email
                </td>
            </tr>
            <tr>
                <td align="center">
                    <br>
                    <br>
                    <br>
                    <button type="submit">Flag the package as outdated</button>
                </td>
            </tr>
        </tbody>
    </table>
</form>
<br>
<br>
<div align="center" class="Button">
    <a href="view.php?name=<?= $package['FullName'] ?>">Back to package</a>
</div>