// Bài 1: Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading1 = document.getElementById("heading");
heading1.style.color = "red";
heading1.style.textTransform = "uppercase";

// Bài 2: Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const para = document.getElementsByClassName("para");
for(let i = 0; i < para.length; i++){
    para[i].style.color = "blue";
    para[i].style.fontSize = "20px";
}

// Bài 3: Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const faceBook = document.createElement("a");
faceBook.innerText = "facebook";
faceBook.href = "https://www.facebook.com/";
faceBook.target = "_blank";
const content = document.querySelector(".content");
document.body.insertBefore(faceBook, content);

// Bài 4: Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.getElementById("title");
title.innerText = "Đây là thẻ tiêu đề";

// Bài 6: Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const button = document.createElement("button");
button.innerText = "Click me";
const para3 = document.querySelector(".para-3");
document.body.replaceChild(button, para3);

// Bài 7: Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para-2");
const para2Copy = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", para2Copy);

// Bài 8: Xóa thẻ para-1
const para1 = document.querySelector(".para-1");
document.body.removeChild(para1);