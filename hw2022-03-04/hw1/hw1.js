// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const text = document.createElement("p");
text.id = "text";
text.style.color = "#777";
text.style.fontSize = "2rem";
text.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với Javascript."
document.body.prepend(text);

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const ul1 = document.querySelector("ul");
const li1 = ul1.querySelectorAll("li");
for(let i = 0; i < li1.length; i++){
    li1[i].style.color = "blue";
}

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
const ul2 = document.getElementById("list");

// 1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
for(let i = 8; i < 11; i++){
    const ul_tmp = document.createElement("li");
    ul_tmp.innerText = `Item ${i}`;
    ul2.insertAdjacentElement("beforeend", ul_tmp);
}

// 2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const list1 = document.querySelector("#list li");
list1.style.color = "red";

// 3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const list3 = document.querySelector("#list li:nth-child(3)");
list3.style.backgroundColor = "blue";

// 4. Remove thẻ <li> 4
const list4 = document.querySelector("#list li:nth-child(4)");
ul2.removeChild(list4);

// 5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const liNew = document.createElement("li");
liNew.innerText = "Item Test";
// Do list4 đã bị xóa nên list5 ở vị trí thứ 4
const list5 = document.querySelector("#list li:nth-child(4)");
ul2.insertBefore(liNew, list5);



// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li
// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

// Thêm 1 nút Hide trên đầu của danh sách ul

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
// checkpoint
const btn1 = document.getElementById("btn-add");
const btn2 = document.getElementById("btn-remove");
const add = () => {
    let tmp = document.querySelector("#typeText").value;
    if(tmp.length == 0){
        alert("Bạn chưa điền nội dung");
    }else{
    let para = document.createElement("li");
    para.innerText = `${tmp}`;
    let paraCopy = para.cloneNode(true);
    ul1.append(paraCopy);
    ul2.append(para);
    }
}
btn1.onclick = add;

const remove = () => {
    let lastpara = document.querySelectorAll("ul li:last-child");
    for(let i = 0; i < lastpara.length; i++){
        lastpara[i].parentElement.removeChild(lastpara[i]);
    }
}
btn2.onclick = remove;

const btn3 = document.getElementById("btn-hide1");
const display1 = () => {
    if(ul1.style.display == "none"){
        ul1.style.display = "block";
        btn3.innerText = "Hide";
    }else{
        ul1.style.display = "none";
        btn3.innerText = "Show";
    }
}
btn3.onclick = display1;

const btn4 = document.getElementById("btn-hide2");
const display2 = () => {
    if(ul2.style.display == "none"){
        ul2.style.display = "block";
        btn4.innerText = "Hide";
    }else{
        ul2.style.display = "none";
        btn4.innerText = "Show";
    }
}
btn4.onclick = display2;