import "../css/cart.css";
import {dt} from './main.js';

let data = dt;
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

$(".selection-payment-option-item-1 .section-payment-option-item-thumb").click(function(){
    $(".section-payment-option-item-thumb").removeClass("section-payment-option-item-thumb-selected");
    $(".selection-payment-option-item-1 .section-payment-option-item-thumb").addClass("section-payment-option-item-thumb-selected");
})

$(".selection-payment-option-item-2 .section-payment-option-item-thumb").click(function(){
    $(".section-payment-option-item-thumb").removeClass("section-payment-option-item-thumb-selected");
    $(".selection-payment-option-item-2 .section-payment-option-item-thumb").addClass("section-payment-option-item-thumb-selected");
})

$(".selection-payment-option-item-3 .section-payment-option-item-thumb").click(function(){
    $(".section-payment-option-item-thumb").removeClass("section-payment-option-item-thumb-selected");
    $(".selection-payment-option-item-3 .section-payment-option-item-thumb").addClass("section-payment-option-item-thumb-selected");
})

$(".more").click(function(){
    window.location.href = '/category.html';
})

let renderCart = function(){
    let cnt = localStorage.length;
    let itemList = [];
    let loopCnt = 0;
    for(let key in localStorage){
        if(loopCnt == cnt){
            break;
        }
        itemList.push(key);
        loopCnt++;
    }
    let tmpProduct = '';
    let tmpOrder = '';
    let subtotal = 0;
    let shipping = 30;
    for(let i = 1; i <= itemList.length; i++){
        let tmpPrice = data[itemList[i-1]]['price'].split(" ")[1];
        let tmpQuan = localStorage.getItem(itemList[i-1]);
        tmpPrice = Number(tmpPrice);
        subtotal += tmpPrice * tmpQuan;
        if(subtotal > 300){
            shipping = 0;
        }
        tmpProduct += `
        <div class="section-product-list-item section-product-list-item-${i}">
                      <div class="product-item-image product-item-${i}-image">
                        <img src="./img/pic/${itemList[i-1]}/itemFront.png" alt="">
                      </div>

                      <div class="product-item-text product-item-${i}-text">
                        <div class="product-item-text-detail product-item-${i}-text-detail">
                          <div class="product-item-text-detail-row-1 product-item-${i}-text-detail-row-1">
                            <div class="product-item-text-detail-row-1-name">
                              <p class="text-desktop">${data[itemList[i-1]]['call']}</p>
                            </div>

                            <div class="product-item-text-detail-row-1-size">
                              <p class="text-desktop">size: M</p>
                            </div>
                          </div>

                          <div class="product-item-text-detail-row-2 product-item-${i}-text-detail-row-2">
                            <div class="product-item-text-detail-row-2-brand">
                              <p class="sub-text-desktop">${data[itemList[i-1]]['brand']}</p>
                            </div>

                            <div class="product-item-text-detail-row-2-price">
                              <p class="sub-text-desktop">${data[itemList[i-1]]['price']}</p>
                            </div>
                          </div>
                        </div>

                        <div class="product-item-text-remove product-item-${i}-text-remove">
                          <p class="sub-text-desktop"><span onclick="removeID('${itemList[i-1]}')">Remove</span></p>
                        </div>
                      </div>

                      <div class="product-item-right product-item-${i}-right">
                        <div class="product-item-count product-item-${i}-count">
                          <div class="product-item-count-subtract product-item-${i}-count-subtract" onclick=subNum('${itemList[i-1]}')>
                            <img src="./img/icon/minus.svg" alt="minus">
                          </div>
  
                          <div class="product-item-count-num product-item-${i}-count-num">
                            <p class="text-bold-desktop">${tmpQuan}</p>
                          </div>
  
                          <div class="product-item-count-plus product-item-${i}-count-plus" onclick=addNum('${itemList[i-1]}')>
                            <img src="./img/icon/Plus.svg" alt="plus">
                          </div>
                        </div>
  
                        <div class="product-item-total product-item-${i}-total">
                          <p class="text-bold-desktop">US$ ${tmpPrice * tmpQuan}.00</p>
                        </div>
                      </div>
                    </div>
        `
        tmpOrder += `
        <div class="section-summary-info-list-item section-summary-info-list-item-${i}">
                        <div class="section-summary-info-list-item-text section-summary-info-list-item-${i}-text">
                          <div class="section-summary-info-list-item-count section-summary-info-list-item-${i}-count">
                            <p class="text-desktop">${tmpQuan}x</p>
                          </div>
  
                          <div class="section-summary-info-list-item-name section-summary-info-list-item-${i}-name">
                            <p class="text-desktop">${data[itemList[i-1]]['call']}</p>
                          </div>
                        </div>

                        <div class="section-summary-info-list-item-price section-summary-info-list-item-${i}-price">
                          <p class="text-desktop">US$ ${tmpQuan * tmpPrice}.00</p>
                        </div>
                      </div>
        `
    }
    let total = subtotal + shipping;
    $(".section-summary-info-total-subtotal-price").text(`US$ ${subtotal}.00`);
    $(".section-summary-info-total-shipping-price").text(`US$ ${shipping}.00`);
    $(".section-summary-info-total-all-price").text(`US$ ${total}.00`);
    $(".section-product-list").html(tmpProduct);
    $(".section-summary-info-list").html(tmpOrder);
}

function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

let nameVali = function(){
    let cusName = $("#name-address").val();
    cusName = cusName.split(" ").join("");
    if(cusName.length == 0 || typeof(cusName) == undefined){
        return "Name section is required"
    }
    if(onlyLetters(cusName)){
        return true;
    }else{
        return "Your name contains invalid characters";
    }
}

let phoneVali = function(){
    let cusPhone = $("#phone-address").val();
    if(cusPhone.length == 0 || typeof(cusPhone) == undefined){
        return "Phone section is required";
    }
    let cnt = 0;
    for(let ele in cusPhone){
        if($.isNumeric(ele)){
            cnt++;
        }
    }
    if(cnt > 11){
        return "Your phone is oversize";
    }
    let isphone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(cusPhone);
    if(isphone){
        return true;
    }else{
        return "Your phone contains invalid characters";
    }
}

let mailVali = function(){
    let cusMail = $("#email-address").val();
    if(cusMail.length == 0 || typeof(cusMail) == undefined){
        return "Mail section is required";
    }
    let ismail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cusMail);
    if(ismail){
        return true;
    }else{
        return "Your email is invalid";
    }
}

let locationVali = function(){
    let cusLoc = $("#location-address").val();
    if(cusLoc.length == 0 || typeof(cusLoc) == undefined){
        return "Location section is required";
    }
    cusLoc = cusLoc.replace(/\s*(\d+\/\d+|\.\d+)\s/g, '');
    cusLoc = cusLoc.split(",").join("");
    cusLoc = cusLoc.split(" ").join("");
    let isloc = /^[a-z0-9]+$/gi.test(cusLoc);
    if(isloc){
        return true;
    }else{
        return "Your location address is invalid";
    }
}

let zipVali = function(){
    let cusZip = $("#zip-address").val();
    if(cusZip.length == 0 || typeof(cusZip) == undefined){
        return true;
    }
    if($.isNumeric(cusZip)){
        if(cusZip.length <= 8){
            return true;
        }else{
            return "Your Zip code is oversize";
        }
    }else{
        return "Your Zip code contains invalid characters";
    }
}

$(".purchase").click(function(){
    let check = 0;
    let tmpMessage = "";
    if(phoneVali() != true){
        check = 1;
        tmpMessage += phoneVali();
        tmpMessage += "\n";
        $("#phone-address").css("border", "1px solid #ff5722");
    }
    if(nameVali() != true){
        check = 1;
        tmpMessage += nameVali();
        tmpMessage += "\n";
        $("#name-address").css("border", "1px solid #ff5722");
    }
    if(mailVali() != true){
        check = 1;
        tmpMessage += mailVali();
        tmpMessage += "\n";
        $("#email-address").css("border", "1px solid #ff5722");
    }
    if(locationVali() != true){
        check = 1;
        tmpMessage += locationVali();
        tmpMessage += "\n";
        $("#location-address").css("border", "1px solid #ff5722");
    }
    if(zipVali()!= true){
        check = 1;
        tmpMessage += zipVali();
        tmpMessage += "\n";
        $("#zip-address").css("border", "1px solid #ff5722");
    }
    if(check == 1){
        $(window).scrollTop(0);
        const myTimeout = setTimeout(function(){
            alert(tmpMessage);
        }, 500);
        
    }else{
        localStorage.clear();
        alert("You have successfully order your items !");
        window.location.href= "/index.html";
    }
})

$(window).ready(function(){
    $(".remove-bg").hide(0);
    $(".data").text(JSON.stringify(data));
    renderCart();
})

$(".cancel").click(function(){
    $(".remove-bg").hide(300);
})

$(".remove").click(function(){
    $(".remove-bg").hide(300);
    localStorage.removeItem($(".remove").attr("id"));
    renderCart();
})

let change = $(".section-product-list");

change.click(function(){
    renderCart();
})
