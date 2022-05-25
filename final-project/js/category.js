import "../css/category.css";
import {dt} from './main.js';

let data = dt;

let renderCat = function(){
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
            $(`#${catFilter}`).addClass("selected-filter");
            $(".category-product-header-breadcrumb-filter p").text($(`#${catFilter}`).text());
        }
        if(brandFilter != null){
            $(".category-filter-item-2-list div").removeClass("selected-brand");
            $(`#${brandFilter}`).addClass("selected-brand");
            $(".category-product-header-breadcrumb-brand p").text($(`#${brandFilter}`).text());
        }
        if(sortFilter != null){
            $(".category-product-header-list-ele").removeClass("selected-sort");
            $(`#${sortFilter}`).addClass("selected-sort");
        }
    }
    $(".category-product-header-sort-btn img").toggleClass("image-rotate");
    $(".category-product-header-list").slideToggle(200);
}

let resizeText = function(){
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
}

$(window).ready(function(){
    resizeText();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sort', 'sort-filter-3');
    window.history.pushState({}, "", `/category.html?${urlParams}`);
    renderCat();
    renderItem();
    $(".category-product-header-sort-btn img").toggleClass("image-rotate");
    $(".category-product-header-list").slideToggle(200);
})  

$(window).resize(function(){
    resizeText();
    if (window.innerWidth > 900){
      $(".category-product").show(0);
      $(".footer").show(0);
      $(".section-filter-mob").css("left", "-100%");
      $(".section-filter-mob").delay(300).hide(0);
    }
})

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


$(".category-product-header-filter").click(function(){
  $(".section-filter-mob").show(0);
  $(".section-filter-mob").css("left", "0");
  $(".category-product").hide();
  $(".footer").hide();
})

$(".section-filter-mobile-header img").click(function(){
  $(".category-product").show(0);
  $(".footer").show(0);
  $(".section-filter-mob").css("left", "-100%");
  $(".section-filter-mob").delay(300).hide(0);
})




function parseValue(v) {
  // extract number (defaults to 0 if not present)
  var n = +(v.match(/\d+$/) || [0])[0]; 
  var str = v.replace(n, '');  // extract string part
  return [str, n];
}

let listItem = [];

let renderItem = function(){
    let webUrl = window.location.href;
    if(webUrl.includes("?")){
        listItem = [];
        let urlParams = new URLSearchParams(window.location.search);
        let catFilter = urlParams.get('category');
        let brandFilter = urlParams.get('brand');
        let genderFilter = urlParams.get('gender');
        let sortFilter = urlParams.get('sort');
        let tmpData = {};
        if(genderFilter != null){
          for(let key in data){
            if(data[key]['gender'] == genderFilter){
              tmpData[key] = data[key];
            }
          }
          data = tmpData;
        }
        if(catFilter != null && brandFilter != null){
            let tmpCat = $(`#${catFilter} p`).text();
            let tmpBrand = $(`#${brandFilter} p`).text();
            for(let key in data){
                if(data[key]['cat'] == tmpCat && data[key]['brand'] == tmpBrand){
                    listItem.push(key);
                }
            }
            if(sortFilter == 'sort-filter-1'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? a[1] - b[1] : result;
            });
            }else if(sortFilter == 'sort-filter-2'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? b[1] - a[1] : result;
            });
            }
        }else if(catFilter == null && brandFilter == null){
            for(let key in data){
                listItem.push(key);
            }if(sortFilter == 'sort-filter-1'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? a[1] - b[1] : result;
            });
            }else if(sortFilter == 'sort-filter-2'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? b[1] - a[1] : result;
            });
            }
        }else if(catFilter == null){
            let tmpBrand = $(`#${brandFilter} p`).text();
            for(let key in data){
                if(data[key]['brand'] == tmpBrand){
                    listItem.push(key);
                }
            }
            if(sortFilter == 'sort-filter-1'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? a[1] - b[1] : result;
            });
            }else if(sortFilter == 'sort-filter-2'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? b[1] - a[1] : result;
            });
            }
        }else if(brandFilter == null){
            let tmpCat = $(`#${catFilter} p`).text();
            for(let key in data){
                if(data[key]['cat'] == tmpCat){
                    listItem.push(key);
                }
            }
            if(sortFilter == 'sort-filter-1'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? a[1] - b[1] : result;
            });
            }else if(sortFilter == 'sort-filter-2'){
              listItem = listItem.sort(function(a, b) {
                a = parseValue(a);
                b = parseValue(b);
            
                // compare string part alphabetically
                let result = a[0].localeCompare(b[0]);
                // if the string part is the same, compare the number part
                return result === 0 ? b[1] - a[1] : result;
            });
            }
        }
        if(listItem.length == 0){
            $(".category-product-contain").css("display", "block");
            $(".category-product-contain").html("<p class='text-desktop'>Sorry, we can't find any suitable products for you!</p>");
            $(".category-product-navigation-list").html(`<div class="category-product-navigation-list-item category-product-navigation-list-item-1 category-product-navigation-list-item-selected">
            </div>`);
        }else if(listItem.length <= 9){
            let tmpContain = "";
            for(let i = 1; i <= listItem.length; i++){
                let tmpItem = listItem[i-1];
                tmpContain += `<div class="category-product-card category-product-card-${i}" id='${tmpItem}' onclick="itemID('${tmpItem}')">
                <div class="category-product-card-image-front category-product-card-${i}-image-front">
                  <img src="./img/pic/${tmpItem}/itemFront.png" alt="front">
                </div>
                <div class="category-product-card-detail category-product-card-${i}-detail">
                  <div class="category-product-card-image-back category-product-card-${i}-image-back">
                    <img src="./img/pic/${tmpItem}/itemBack.png" alt="back">
                  </div>
                  <div class="category-product-card-text category-product-card-${i}-text">
                    <div class="category-product-card-text-1 category-product-card-${i}-text-1">
                      <div class="category-product-card-text-tag category-product-card-${i}-text-tag">
                        <p class="sub-text-desktop category-product-card-${i}-text-tag-brand">${data[tmpItem]['brand']}</p>
                        <p class="sub-text-desktop category-product-card-${i}-text-tag-gender">${data[tmpItem]['gender']}</p>
                      </div>
                      <div class="category-product-card-text-name category-product-card-${i}-name">
                        <p class="text-desktop">${data[tmpItem]['call']}</p>
                      </div>
                    </div>
                    <div class="category-product-card-text-price category-product-card-${i}-text-price">
                      <p class="text-bold-desktop">${data[tmpItem]['price']}</p>
                    </div>
                  </div>  
                </div>
              </div>`
            }
            $(".category-product-contain").css("display", "grid");
            $(".category-product-contain").html(tmpContain);
            $(".category-product-navigation-list").html(`<div class="category-product-navigation-list-item category-product-navigation-list-item-1 category-product-navigation-list-item-selected">
            </div>`);
        }else if(listItem.length > 9){
          let cntPage = Math.ceil(listItem.length / 9);
          let tmpNav = "";
          for(let i = 1; i <= cntPage; i++){
            tmpNav += `<div class="category-product-navigation-list-item category-product-navigation-list-item-${i}" onclick=renderPage(${i})></div>`
          }
          tmpNav += `<div id="listItem" style="display: none;">${listItem}</div>`;
          tmpNav += `<div id="data" style="display: none;">${JSON.stringify(data)}</div>`;
          $(".category-product-navigation-list").html(tmpNav);
          $(".category-product-navigation-list-item-1").addClass("category-product-navigation-list-item-selected");
            let tmpContain = "";
            for(let i = 1; i <= 9; i++){
                let tmpItem = listItem[i-1];
                tmpContain += `<div class="category-product-card category-product-card-${i}" id='${tmpItem}' onclick="itemID('${tmpItem}')">
                <div class="category-product-card-image-front category-product-card-${i}-image-front">
                  <img src="./img/pic/${tmpItem}/itemFront.png" alt="front">
                </div>
                <div class="category-product-card-detail category-product-card-${i}-detail">
                  <div class="category-product-card-image-back category-product-card-${i}-image-back">
                    <img src="./img/pic/${tmpItem}/itemBack.png" alt="back">
                  </div>
                  <div class="category-product-card-text category-product-card-${i}-text">
                    <div class="category-product-card-text-1 category-product-card-${i}-text-1">
                      <div class="category-product-card-text-tag category-product-card-${i}-text-tag">
                        <p class="sub-text-desktop category-product-card-${i}-text-tag-brand">${data[tmpItem]['brand']}</p>
                        <p class="sub-text-desktop category-product-card-${i}-text-tag-gender">${data[tmpItem]['gender']}</p>
                      </div>
                      <div class="category-product-card-text-name category-product-card-${i}-name">
                        <p class="text-desktop">${data[tmpItem]['call']}</p>
                      </div>
                    </div>
                    <div class="category-product-card-text-price category-product-card-${i}-text-price">
                      <p class="text-bold-desktop">${data[tmpItem]['price']}</p>
                    </div>
                  </div>  
                </div>
              </div>`
            }
            $(".category-product-contain").css("display", "grid");
            $(".category-product-contain").html(tmpContain);
        }
        resizeText();
    }
}



$(".category-filter-item-list-ele").on("click", renderItem);
$(".category-product-header-list-ele").click(renderItem);
$(".section-filter-mobile-list-item").click(function(){
  $(".category-product").show(0);
  $(".footer").show(0);
  $(".section-filter-mob").css("left", "-100%");
  $(".section-filter-mob").delay(300).hide(0);
  renderItem();
})