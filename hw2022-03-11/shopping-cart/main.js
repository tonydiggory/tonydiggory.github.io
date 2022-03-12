// ===== Phân tích =====
// Câu 1: Các chức năng có trong ứng dụng là gì?
// 1. Xóa sản phẩm 
// 2. Chỉnh sửa số lượng từng sản phẩm
// 3. Tính tổng số sản phẩm
// 4. Mã giảm giá
// 5. Tính tiền 

// Câu 2: Đối tượng trong ứng dụng là gì? <=> Sản phẩm 
// Có các thuộc tính nào ?

// ID --> id : int
// Tên sản phẩm --> title : string 
// Mô tả --> description : string
// Số lượng trong giỏ hàng --> count : int
// Giá --> price : int
// Ảnh --> image : string

let products = [
    {
        id: 1,
        title: "Quả bóng",
        description: "Sample text 1",
        count: 1,
        price: 10000,
        image: "https://sc04.alicdn.com/kf/HTB13md0B41YBuNjy1zcq6zNcXXay.jpg_Q55.jpg"
    },
    {
        id: 2,
        title: "Gậy bóng chày",
        description: "Sample text 2",
        count: 3,
        price: 70000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAwBmajWOJojLVFvRc5aEiqemrRAysA6G3g&usqp=CAU"
    }
];

let promotionCode = {
    A : 10,
    B : 15,
    C : 20,
    D : 25
};

// Truy cập
let productsEl = document.querySelector(".products");
let countEl = document.querySelector(".count");
let subTotalEl = document.querySelector(".subtotal span");
let totalEl = document.querySelector(".total span");
let vatEl = document.querySelector(".vat span");
let promoBtnEl = document.querySelector(".promotion button");
let promoInput = document.querySelector(".promotion input");
let discountEl = document.querySelector(".discount");
let discountValueEl = document.querySelector(".discount span");

// Convert giá tiền
function convertMoney(number){
    return number.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
}

// Hiển thị dữ liệu trên giao diện
function renderProduct(arr){
    productsEl.innerHTML = "";

    // Cập nhật số lượng
    updateTotalProduct(arr);

    // Kiểm tra không có sản phẩm nào trong giỏ hàng
    if(arr.length == 0){
        productsEl.insertAdjacentHTML("afterbegin", "<li>Không có sản phầm nào trong giỏ hàng </li>");
        document.querySelector(".option-container").style.display = "none";
        return;
    }

    // Trường hợp có sản phẩm 
    let html = "";
    for(let i = 0; i < arr.length; i++){
        let p = arr[i];
        html += `
        <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#">
                        <img src="${p.image}" alt="${p.title}">
                    </a>
                </div>
                <div class="detail">
                    <div class="name"><a href="#">${p.title}</a></div>
                    <div class="description">
                        ${p.description}
                    </div>
                    <div class="price">${convertMoney(p.price)}</div>
                </div>
            </div>
    
            <div class="col right">
                <div class="quantity">
                    <button class="btn-subtract" onclick = "subtractCount(${p.id})">-</button>
                    <p>${p.count}</p>
                    <button class="btn-add" onclick = "addCount(${p.id})">+</button>
                </div>
    
                <div class="remove">
                    <span class="close" onclick = "removeProduct(${p.id})">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </li>
        `
    }

    // Cập nhật tổng tiền
    updateTotalMoney(arr);

    // Chèn lại nội dung cho phần tử
    productsEl.innerHTML = html;
}

// Tính số lượng sản phẩm 
function updateTotalProduct(arr){
    // Sử dụng vòng lặp qua mảng arr để tính tổng các giá trị của thuộc tính "count"
    let tmp = 0;
    for(let i = 0; i < arr.length; i++){
        tmp += arr[i].count;
    }

    // Update tổng tính được vào phần tử có class "count"
    if(tmp <= 1){
        countEl.innerText = `${tmp} item in the bag`;
    }else{
        countEl.innerText = `${tmp} items in the bag`;
    }
}

function removeProduct(id){
    // Sử dụng vòng lặp để tìm sản phẩm có id tương ứng
    // Xóa sản phaamrr ra khỏi mảng products 
    products = products.filter(product => product.id != id);
    // Render lại giao diện
    renderProduct(products);
}

// Tăng số lượng sản phẩm
function addCount(id){
    for(let i = 0; i < products.length; i++){
        if(products[i].id == id){
            products[i].count++;
        }
    }
    renderProduct(products);
}

// Giảm số lượng sản phẩm
function subtractCount(id){
    for(let i = 0; i < products.length; i++){
        if(products[i].id == id){
            if(products[i].count > 1){
                products[i].count--;
                renderProduct(products);
                break;
            }
        }
    }
}

let promoValue = 0;
let tmpSubTotal = 0;

function updateTotalMoney(arr){
    // Sử dụng vòng lặp để tính tổng tiền
    // Tổng tiền tổng từng sản phẩm (count * price)
    tmpSubTotal = 0;

    for(let i = 0; i < arr.length; i++){
        tmpSubTotal += arr[i].count * arr[i].price;
    }
    subTotalEl.innerText = `${convertMoney(tmpSubTotal)}`;
    //  VAT = 10% Subtotal
    vatEl.innerText = `${convertMoney(tmpSubTotal/10)}`;
    
    // Discount
    let discountValue = tmpSubTotal * 1.1 * promoValue;
    discountValueEl.innerText = `${convertMoney(discountValue)}`;

    // total = Subtotal + VAT - discount
    totalEl.innerText = `${convertMoney(tmpSubTotal * 1.1 - discountValue)}`;
}

promoBtnEl.onclick = function (){
    promoValue = 0;
    let check = 0;
    let tmpPromo = promoInput.value;
    let promoValueArr = Object.values(promotionCode);
    let promoArr = Object.keys(promotionCode);
    for(let i = 0; i < promoArr.length; i++){
        if(tmpPromo == promoArr[i]){
            promoValue = promoValueArr[i] / 100;
            discountEl.classList.remove("hide");
            check = 1;
            break;
        }
    }
    if (check == 0){
        alert("Mã giảm giá không hợp lệ");
    }
    updateTotalMoney(products);
}


renderProduct(products);