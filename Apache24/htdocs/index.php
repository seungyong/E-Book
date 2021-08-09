<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/commons/Initialization.css">
    <title>E-Book</title>
</head>
<body>
<?php
    include('./php/Router.php');

    $uri= $_SERVER['REQUEST_URI'];
    $url = routing($uri);

    include_once($url);
    include('./views/commons/Footer.html');
?>
</body>
</html>