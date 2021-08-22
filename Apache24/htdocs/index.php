<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/commons/Initialization.css">
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <title>E-Book</title>
</head>
<body>
<?php
    include('./php/Router.php');

    Router::add('get', '/', function() {
        include('./views/Main.html');
    });

    Router::add('get', '/login', function() {
        include('./views/login/Login.html');
    });

    Router::run();
?>
</body>
</html>