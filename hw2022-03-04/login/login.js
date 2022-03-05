const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    },
    {
        username: "testacc",
        password: "testpa"
    },
    {
        username: "thienco",
        password: "123"
    }
]

let btn = document.querySelector("button");
const message = document.createElement("p");
const notice = () => {
    message.innerText = "";
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let hex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];
    let res = "#";
    let tmp2 = 0;
    for(let i = 0; i < 6; i++){
        tmp2 = Math.floor(Math.random() * 16);
        res += hex[tmp2];
    }
    let tmp = users.filter(acc => (acc.username == user && acc.password == pass));
    if(tmp.length == 0){
        message.innerText = "Tài khoản hoặc mật khẩu không chính xác";
        message.style.color = `${res}`;
        document.body.append(message);
    }else{
        message.innerText = "Đăng nhập thành công";
        message.style.color = `${res}`;
        document.body.append(message);
    }
}
btn.onclick = notice;

let btn2 = document.getElementById("btn-display");
let pa = document.getElementById("password");
const display = () => {
    if(pa.type == "password"){
        pa.type = "text";
        btn2.innerText = "Hide";
    }else{
        pa.type = "password";
        btn2.innerText = "Show";
    }
}
btn2.onclick = display;