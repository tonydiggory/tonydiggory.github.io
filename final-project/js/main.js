import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/style.css';
import "../css/header.css";
import "../css/footer.css";

/* ============================================================= ============================================================== */

let dt = {
  item1: {
    itemID: 1,
    call:"Chilling Tee",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 113.00"
  },
  item2: {
    itemID: 2,
    call:"Koinobori Tee",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 117.00"
  },
  item3: {
    itemID: 3,
    call:"Kanji Tee",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 98.00"
  },
  item4: {
    itemID: 4,
    call:"Bape Girl Tee",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 113.00"
  },
  item5: {
    itemID: 5,
    call:"Kabuto Tee",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 117.00"
  },
  item6: {
    itemID: 6,
    call:"Space Shorts",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 117.00"
  },
  item7: {
    itemID: 7,
    call:"Shark Sweat",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 256.00"
  },
  item8: {
    itemID: 8,
    call:"XCoach Shorts",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 256.00"
  },
  item9: {
    itemID: 9,
    call:"SSShark Sweat",
    brand:"A Bathing Ape",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 264.00"
  },
  item10: {
    itemID: 10,
    call:"Lighter Necklace",
    brand:"Ambush",
    gender:"Women",
    cat:"Jewelry",
    price:"US$ 207.00"
  },
  item11: {
    itemID: 11,
    call:"PillCharm Necklace",
    brand:"Ambush",
    gender:"Women",
    cat:"Jewelry",
    price:"US$ 312.00"
  },
  item12: {
    itemID: 12,
    call:"BunnyCharm Necklace",
    brand:"Ambush",
    gender:"Women",
    cat:"Jewelry",
    price:"US$ 376.00"
  },
  item13: {
    itemID: 13,
    call:"Heart Link Ring",
    brand:"Ambush",
    gender:"Women",
    cat:"Accessories",
    price:"US$ 597.00"
  },
  item14: {
    itemID: 14,
    call:"FlyCharm Ring",
    brand:"Ambush",
    gender:"Women",
    cat:"Accessories",
    price:"US$ 413.00"
  },
  item15: {
    itemID: 15,
    call:"MisFit Ring",
    brand:"Ambush",
    gender:"Women",
    cat:"Accessories",
    price:"US$ 454.00"
  },
  item16: {
    itemID: 16,
    call:"FlyCharm Necklace",
    brand:"Ambush",
    gender:"Women",
    cat:"Jewelry",
    price:"US$ 413.00"
  },
  item17: {
    itemID: 17,
    call:"BatteryCharm Necklace",
    brand:"Ambush",
    gender:"Women",
    cat:"Jewelry",
    price:"US$ 450.00"
  },
  item18: {
    itemID: 18,
    call:"Classic Sportcoat",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 850.00"
  },
  item19: {
    itemID: 19,
    call:"Cali Blazer",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 950.00"
  },
  item20: {
    itemID: 20,
    call:"Grey Sweater",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 525.00"
  },
  item21: {
    itemID: 21,
    call:"Dark Sweater",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 525.00"
  },
  item22: {
    itemID: 22,
    call:"Knit Hoodie",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 750.00"
  },
  item23: {
    itemID: 23,
    call:"'Seven' Tee",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 250.00"
  },
  item24: {
    itemID: 24,
    call:"Baseball Tee",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 295.00"
  },
  item25: {
    itemID: 25,
    call:"Perfectage Tee",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 195.00"
  },
  item26: {
    itemID: 26,
    call:"Pique Pocket Tee",
    brand:"Fear of God",
    gender:"Men",
    cat:"Clothing",
    price:"US$ 295.00"
  }
};

export {dt};

/* ============================================================= ============================================================== */

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

$(".header-menu-1-list img").click(function(){
  $(".header-content-mobile").show(0);
  $(".header-content-mobile").css("left", "0");
})

$(".header-menu-3-cart img").click(function(){
  window.location.href = '/cart.html';
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
  if(window.innerWidth > 900){
    $(".header-content-mobile").css("left", "-100%");
    $(".header-content-mobile").delay(300).hide(0);
  }
})
