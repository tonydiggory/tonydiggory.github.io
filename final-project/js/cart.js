import "../css/cart.css";

$(window).resize(function(){
    if(window.innerWidth <= 550){
        $(".section-1 .h3-desktop").addClass("h3-mobile");
        $(".section-1 .h3-desktop").removeClass("h3-desktop");

        $(".section-1 .text-bold-desktop").addClass("text-bold-mobile");
        $(".section-1 .text-bold-desktop").removeClass("text-bold-desktop");

        $(".section-1 .text-desktop").addClass("text-mobile");
        $(".section-1 .text-desktop").removeClass("text-desktop");

        $(".section-1 .sub-text-desktop").addClass("sub-text-mobile");
        $(".section-1 .sub-text-desktop").removeClass("sub-text-desktop");
    }
    else{
        $(".section-1 .h2-mobile").addClass("h2-desktop");
        $(".section-1 .h2-mobile").removeClass("h2-mobile");

        $(".section-1 .h3-mobile").addClass("h3-desktop");
        $(".section-1 .h3-mobile").removeClass("h3-mobile");

        $(".section-1 .text-bold-mobile").addClass("text-bold-desktop");
        $(".section-1 .text-bold-mobile").removeClass("text-bold-mobile");

        $(".section-1 .text-mobile").addClass("text-desktop");
        $(".section-1 .text-mobile").removeClass("text-mobile");

        $(".section-1 .sub-text-mobile").addClass("sub-text-desktop");
        $(".section-1 .sub-text-mobile").removeClass("sub-text-mobile");
    }
  })