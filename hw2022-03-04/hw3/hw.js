// 1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

let para = document.querySelector("p");
let tmp = para.innerText;
let tmp4 = para.innerText;
para.innerText = "";
let tmp2 = tmp.split(" ");
let tmp3 = document.createElement("span");
for(let i = 0; i < tmp2.length; i++){
    if(tmp2[i].length >= 8){
        tmp3.innerHTML += `<span style = "background-color: yellow">${tmp2[i]}</span>`;
    }else{
        tmp3.innerHTML += `<span> ${tmp2[i]} </span>`;
    }
    para.append(tmp3);
}


// 2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

let link = document.createElement("a");
link.innerText = "facebook";
link.href = "https://www.facebook.com";
link.target = "_blank";
para.insertAdjacentElement("afterend", link);


// 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
let tmp5 = tmp4.split("");
let cnt = 0;
for(let i = 0; i < tmp5.length; i++){
    if(tmp5[i] != " "){
        cnt++;
    }
}
let countWord = document.createElement("div");
countWord.innerText = `${cnt}`;
link.insertAdjacentElement("afterend", countWord);


// 4. Thay thế các ký hiệu ? => 🤔, ! => 😲
let para2 = document.querySelector("p").innerHTML;
let para3 = "";
let temp = para2.split("");
for(let i = 0; i < para2.length; i++){
    if(para2[i] == "?"){
        para3 += "🤔";
    }else if(para2[i] == "!"){
        para3 += "😲";
    }else{
        para3 += para2[i];
    }
}
tmp3.innerHTML = para3;