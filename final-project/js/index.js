// index.js để import các module dùng trên toàn bộ trang
// VD: import "bootstrap/dist/css/bootstrap.min.css";
//     import "./css/index.css"
import "../css/index.css";

$(".section-1-rightarr").click(function(){
    // if(window.innerWidth >= 900){
      $(".section-1-banner-image-item-1").css("left", "-100%");
      $(".section-1-banner-image-item-2").css("left", "0");
      $(".section-1-banner-image-item-mob-1").css("left", "-100%");
      $(".section-1-banner-image-item-mob-2").css("left", "0");
    // }else{
      
    // }
  })
  
  $(".section-1-leftarr").click(function(){
    // if(window.innerWidth >= 900){
      $(".section-1-banner-image-item-1").css("left", "0");
      $(".section-1-banner-image-item-2").css("left", "100%");
      $(".section-1-banner-image-item-mob-1").css("left", "0");
      $(".section-1-banner-image-item-mob-2").css("left", "100%");
    // }else{
    //   
    // }
    
  })