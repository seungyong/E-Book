<?php

$servername = "localhost";
$username = "seoil";
$password = "1234";
$dbnam = "teamProject";

$conn = new mysqli($servername,$username,$password,$dbnam);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO test (data) VALUES ('$testData')";
// INSERT INTO tablename VALUES('A105', '박문수', 35);

echo $testData;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../css/Main.css">
    <script src="../js/Main.js" defer></script>
</head>
<body>
    <?php include('../views/commons/Header.html') ?>

    <div class="carousel-box">
        <div class="slideshow-container">
            <div class="slides fade">
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-listexample-5b840.appspot.com/o/item1.jpg?alt=media&token=580a63a0-e4fa-44f5-b96d-7203bbaec44a" class="carousel-item">
                <div class="text">윤성빈이 추천한 책!</div>
            </div>
            <div class="slides fade">
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-listexample-5b840.appspot.com/o/item2.jpg?alt=media&token=56e0ce18-8a9a-477d-95c8-44afa0ac2123" class="carousel-item">
                <div class="text">윤성빈이 싫어하는 책!</div>
            </div>
            <div class="slides fade">
                <img src="https://firebasestorage.googleapis.com/v0/b/fir-listexample-5b840.appspot.com/o/item3.jpg?alt=media&token=ff902890-0228-488a-ac40-204a5380bee2" class="carousel-item">
                <div class="text">윤성빈이 좋아하지도 싫어하지도 않는 책!</div>
            </div>

            <!-- <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a> -->
        </div>
        <div class="pagination-box">
            <!-- <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span> -->

            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
    <div class="explan-box">
        <div class="explan-box__sub-title">E-Book With You</div>
        <div class="explan-box__title">감성을 자극하는 우리의 이야기</div>
        <div class="explan-box__explanation">
            E-Book은 고객님의 독서를 좀 더 편리하게 해줍니다. <br />
            조금 더 쉽고 많은 책과 함께 라이프스타일을 즐기고 싶다면 추천드립니다. <br />
            윤성빈 바ㅗ바보바보바보바보바보바보바보바보
        </div>
    </div>
    <div class="contents-box"></div>
</body>
</html>