import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/style.css';
import "../css/header.css";
import "../css/footer.css";

/* ============================================================= ============================================================== */

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

$(".header-menu-1-list img").click(function(){
  $(".header-content-mobile").show(0);
  $(".header-content-mobile").css("left", "0");
})

$(".header-content-mobile-header-icon").click(function(){
  $(".header-content-mobile").css("left", "-100%");
  $(".header-content-mobile").delay(300).hide(0);
})

$(".header-content-mobile-header-close").click(function(){
  $(".header-content-mobile").css("left", "-100%");
  $(".header-content-mobile").delay(300).hide(0);
})

$(window).resize(function(){
  if(window.innerWidth >= 900){
    $(".header-content-mobile").hide(0);
  }
})
