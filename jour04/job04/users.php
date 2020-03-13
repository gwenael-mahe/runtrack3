
        <?php
            $connexion = mysqli_connect('localhost', 'root', '', 'runtrack03_jour04');
            $request = "SELECT * FROM utilisateurs";
            $query = mysqli_query($connexion,$request);
            $fetch = mysqli_fetch_all($query);
            echo json_encode($fetch);

        ?>