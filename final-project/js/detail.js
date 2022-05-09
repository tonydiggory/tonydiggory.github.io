import "../css/detail.css";

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