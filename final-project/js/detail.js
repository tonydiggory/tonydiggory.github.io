import "../css/detail.css";
import {dt} from './main.js';
let data = dt;

$(".section-banner-imgnav-thumb-2").click(function(){
    $(".section-banner-imgnav-thumb").removeClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-imgnav-thumb-2").addClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-bg-image-front").css("left", "-100%");
    $(".section-banner-bg-image-back").css("left", "0");
})

$(".section-banner-imgnav-thumb-1").click(function(){
    $(".section-banner-imgnav-thumb").removeClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-imgnav-thumb-1").addClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-bg-image-back").css("left", "100%");
    $(".section-banner-bg-image-front").css("left", "0");
})

let renderImageFront = function(){
    $(".section-banner-imgnav-thumb").removeClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-imgnav-thumb-1").addClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-bg-image-back").css("left", "100%");
    $(".section-banner-bg-image-front").css("left", "0");
}

let renderImageBack = function(){
    $(".section-banner-imgnav-thumb").removeClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-imgnav-thumb-2").addClass("section-banner-imgnav-thumb-selected");
    $(".section-banner-bg-image-front").css("left", "-100%");
    $(".section-banner-bg-image-back").css("left", "0");
}


let tmpPos = 0;
let clicked = false;
$(".section-banner-bg").on('mousedown', function(e){
    tmpPos = e.pageX;
    clicked = true;
})

$(".section-banner-bg").on("mousemove", function(e){
    if(clicked == true){       
        if(e.pageX - tmpPos <= -100){
            renderImageBack();
            clicked = false;
        }else if(e.pageX - tmpPos >= 100){
            renderImageFront();
            clicked = true;
        }
    }
})

$(window).ready(function(){
    $('#loading').hide();
    $('.section').css('display', 'block');
    let webUrl = window.location.href;
    if(webUrl.includes("?")){
        let urlParams = new URLSearchParams(window.location.search);
        let itemId = urlParams.get('item');
        $(".section-banner-bg-image-front").html(`<img src="./img/pic/${itemId}/itemFrontHome.png" alt="front">`);
        $(".section-banner-bg-image-back").html(`<img src="./img/pic/${itemId}/itemBack.png" alt="back">`);
        $(".section-banner-breadcrumb-name p").text(data[itemId]['call']);
        $(".section-banner-breadcrumb-gender p").text(data[itemId]['gender']);
        $(".section-banner-breadcrumb-cat p").text(data[itemId]['cat']);
        $(".section-banner-breadcrumb-brand p").text(data[itemId]['brand']);
        $(".detail-brand").text(data[itemId]['brand']);
        $(".detail-name").text(data[itemId]['call']);
        $(".section-banner-detail-info-price p").text(data[itemId]['price']);
    }
})

// document.addEventListener("DOMContentLoaded", function(event) { 
//     //do work
// });

$(".section-banner-detail-add").click(function(){
    if(typeof(Storage) !== "undefined") {
        console.log('Có hỗ trợ');
        let urlParams = new URLSearchParams(window.location.search);
        let itemId = urlParams.get('item');
        alert(`You have successfully added ${data[itemId]['call']}`);
        localStorage.setItem(itemId, 1);
    } else {
        console.log('Không hỗ trợ');
    }
})