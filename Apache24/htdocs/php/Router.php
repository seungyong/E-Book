<?php
    // 라우팅
    function routing($uri) {
        $url = "";
        
        if ($uri == "/") {
            $url = "./views/Index.html";
        }

        return $url;
    }
?>