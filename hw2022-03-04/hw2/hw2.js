// Giá trị mặc định của counter ban đầu = 0
// Bấm vào Cộng tăng counter lên 1
// Bấm vào Trừ giảm counter đi 1
// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

let cnt = 0;
let para = document.getElementById("counter");
const btn1 = document.querySelector(".prevBtn");
const btn2 = document.querySelector(".nextBtn");

if(cnt == 0){
    para.style.color = "#333333";
}

const plus = () => {
    cnt++;
    if(cnt > 0){
        para.style.color = "green";
    }else if(cnt == 0){
        para.style.color = "#333333";
    }else{
        para.style.color = "red";
    }
    para.innerText = `${cnt}`;
}
btn2.onclick = plus;

const minus = () => {
    cnt--;
    if(cnt > 0){
        para.style.color = "green";
    }else if(cnt == 0){
        para.style.color = "#333333";
    }else{
        para.style.color = "red";
    }
    para.innerText = `${cnt}`;
}
btn1.onclick = minus;

