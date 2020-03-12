<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <a href="index.php">Index</a><br/>
        <?php
            $connexion = mysqli_connect('localhost', 'root', '', 'runtrack03_jour04');
            $request = "SELECT * FROM utilisateurs";
            $query = mysqli_query($connexion,$request);
            $fetch = mysqli_fetch_all($query);
            echo json_encode($fetch);

        ?>
    </body>
</html>