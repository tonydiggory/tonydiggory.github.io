// checkpoint
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