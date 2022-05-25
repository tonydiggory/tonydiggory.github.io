// index.js để import các module dùng trên toàn bộ trang
// VD: import "bootstrap/dist/css/bootstrap.min.css";
//     import "./css/index.css"
import "../css/index.css";

let leftBanner = function(){
  // if(window.innerWidth >= 900){
    $(".section-1-banner-image-item-1").css("left", "-100%");
    $(".section-1-banner-image-item-2").css("left", "0");
    $(".section-1-banner-image-item-mob-1").css("left", "-100%");
    $(".section-1-banner-image-item-mob-2").css("left", "0");
  // }else{
    
  // }
}

let rightBanner = function(){
  // if(window.innerWidth >= 900){
  $(".section-1-banner-image-item-1").css("left", "0");
  $(".section-1-banner-image-item-2").css("left", "100%");
  $(".section-1-banner-image-item-mob-1").css("left", "0");
  $(".section-1-banner-image-item-mob-2").css("left", "100%");
  // }else{
  //   
  // }
}

$(".section-1-banner-image-click").click(function(){
  window.location.href = '/category.html?brand=brand-filter-1';
})

$(".section-1-rightarr").click(leftBanner);
  
$(".section-1-leftarr").click(rightBanner);

setInterval(function () {
  setTimeout(leftBanner, 1000);
  setTimeout(rightBanner, 7000);
}, 12000);

const slider = document.querySelector('.section-2-contain');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


$(".section-1-see-more-btn").click(function(){
  window.location.href = '/category.html?brand=brand-filter-1'
})

$(".section-3-fg-card").click(function(){
  window.location.href = '/category.html?brand=brand-filter-3'
})

$(".discover-btn").click(function(){
  window.location.href = '/category.html?brand=brand-filter-4'
})

$(".discover-button-mob").click(function(){
  window.location.href = '/category.html?brand=brand-filter-4'
})