<!DOCTYPE html>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <form action="index.php">
            <label>ID</label>
            <input type="text" id="id">
            <label>Nom</label>
            <input type="text" id="name">
            <label>Type</label>
            <select id="type">
                <option value="">Veuillez choisir</option>
                <option value="Grass">Grass</option>
                <option value="Poison">Poison</option>
                <option value="Fire">Fire</option>
                <option value="Flying">Flying</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Fairy">Fairy</option>
                <option value="Fighting">Fighting</option>
                <option value="Psychic">Psychic</option>
                <option value="Rock">Rock</option>
                <option value="Steel">Steel</option>
                <option value="Ice">Ice</option>
                <option value="Ghost">Ghost</option>
                <option value="Dragon">Dragon</option>
            </select>
            <input type="button" id="button" value="Select">
        </form>
    </body>
</html>