let primaryNumber = document.getElementById("primary-number");
primaryNumber.innerText = "";
let secondaryNumber = document.getElementById("secondary-number");
secondaryNumber.innerText = "";
let timeEl = document.querySelector(".time");
timeEl.innerText = "";
let scoreEl = document.querySelector(".score");
scoreEl.innerText = "";
let resultEl = document.getElementById("result");
let operatorEl = document.getElementById("operator");
operatorEl.innerText = "";
let maxTime = 15;
let score = 0;

function renderTime(){
    let sec = maxTime % 60;
    if(sec < 10){
        sec = "0" + sec;
    }
    let min = Math.floor(maxTime / 60);
    if(min < 10){
        min = "0" + min;
    }
    if(maxTime >= 0){
        timeEl.innerText = `${min}:${sec}`;
    }
    if(maxTime == -1){
        clearInterval(timeInterval);
        alert(`Điểm của bạn là ${score}`);
    }
    maxTime --;
}


function renderCalc(){
    let op = ["+", "-", "*"];
    let opRand = Math.floor(Math.random() * 3);
    operatorEl.innerText = op[opRand];
    primaryNumber.innerText = `${Math.floor(Math.random() * 10 + 1)}`;
    secondaryNumber.innerText = `${Math.floor(Math.random() * 10 + 1)}`;
}

function renderScore(){
    if(score < 10){
        scoreEl.innerText = `${"0" + score}`;
    }else{
        scoreEl.innerText = `${score}`;   
    }
}

document.addEventListener("keydown", function(event){
    let ans = 0;
    let tmp = "";
    let res = 0;
    if(event.keyCode == 13){
        tmp = resultEl.value;
        let num1 = parseInt(primaryNumber.innerText);
        let num2 = parseInt(secondaryNumber.innerText);
        let opSign = operatorEl.innerText;
        if(opSign == "+"){
            res = num1 + num2;
        }else if(opSign == "*"){
            res = num1 * num2;
        }else if(opSign == "-"){
            res = num1 - num2;
        }
        if(tmp.length == 0){
            alert("Kết quả không được để trống");
        }else{
            ans = parseInt(tmp);
            if(ans == res){
                resultEl.value = "";
                score++;
                renderScore();
                renderCalc();
            }else{
                resultEl.value = "";
            }
        }
    }
})

let timeInterval = setInterval(renderTime, 1000);
window.onload = setTimeout(renderCalc, 1000);
window.onload = setTimeout(renderScore, 1000);
