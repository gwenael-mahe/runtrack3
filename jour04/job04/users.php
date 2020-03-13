
        <?php
            $connexion = mysqli_connect('localhost', 'root', '', 'utilisateurs');
            $request = "SELECT * FROM utilisateurs";
            $query = mysqli_query($connexion,$request);
            $fetch = mysqli_fetch_all($query);
            echo json_encode($fetch);

        ?>