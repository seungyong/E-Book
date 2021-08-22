<?php
    if ( !isset($_POST['user_id']) || !isset($_POST['user_pw']) ) {
        header("Content-Type: text/html; charset=UTF-8");
        echo "<script>alert('잘못된 접근입니다.');";
        echo "window.history.back();</script>";
        exit;
    }

    $user_id = $_POST['user_id'];
    $user_pw = $_POST['user_pw'];

    echo($user_id);
    echo($user_pw);
?>