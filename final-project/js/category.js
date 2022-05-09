import "../css/category.css";

$(".category-filter-item-1-name").click(function(){
    $(".category-filter-item-1-name img").toggleClass("image-rotate");
    $(".category-filter-item-1-list").slideToggle(300);
})

$(".category-filter-item-2-name").click(function(){
    $(".category-filter-item-2-name img").toggleClass("image-rotate");
    $(".category-filter-item-2-list").slideToggle(300);
})

$(".category-product-header-sort-btn").click(function(){
    $(".category-product-header-sort-btn img").toggleClass("image-rotate");
    $(".category-product-header-list").slideToggle(300);
    $(".category-product-header-sort-btn").toggleClass("category-product-header-sort-btn-click");
})

window.onload = function(){
    let webUrl = window.location.href;
    if(webUrl.includes("?")){
        let urlParams = new URLSearchParams(window.location.search);

        let genderFilter = urlParams.get('gender');
        let catFilter = urlParams.get('category');
        let brandFilter = urlParams.get('brand');
        let sortFilter =urlParams.get('sort');

        if(genderFilter != null){
            $(".category-product-header-breadcrumb-gender p").text(genderFilter);
        }
        if(catFilter != null){
            $(".category-filter-item-1-list div").removeClass("selected-filter");
            $(`#${catFilter}`).parent().addClass("selected-filter");
            $(".category-product-header-breadcrumb-filter p").text($(`#${catFilter}`).text());
        }
        if(brandFilter != null){
            $(".category-filter-item-2-list div").removeClass("selected-brand");
            $(`#${brandFilter}`).parent().addClass("selected-brand");
            $(".category-product-header-breadcrumb-brand p").text($(`#${brandFilter}`).text());
        }
        if(sortFilter != null){
            $(".category-product-header-list-ele").removeClass("selected-sort");
            $(`#${sortFilter}`).parent().addClass("selected-sort");
        }
    }
    $(".category-product-header-sort-btn img").toggleClass("image-rotate");
    $(".category-product-header-list").slideToggle(200);
}


$(window).resize(function(){
    if(window.innerWidth <= 800){
        $(".section-1 .sub-text-desktop").addClass("category-sub-text-mobile");
        $(".section-1 .sub-text-desktop").removeClass("sub-text-desktop");

        $(".section-1 .text-bold-desktop").addClass("text-bold-mobile");
        $(".section-1 .text-bold-desktop").removeClass("text-bold-desktop");

        $(".section-1 .text-desktop").addClass("text-mobile");
        $(".section-1 .text-desktop").removeClass("text-desktop");
    }
    else{
        $(".section-1 .category-sub-text-mobile").addClass("sub-text-desktop");
        $(".section-1 .category-sub-text-mobile").removeClass("category-sub-text-mobile");

        $(".section-1 .text-bold-mobile").addClass("text-bold-desktop");
        $(".section-1 .text-bold-mobile").removeClass("text-bold-mobile");

        $(".section-1 .text-mobile").addClass("text-desktop");
        $(".section-1 .text-mobile").removeClass("text-mobile");
    }
})
