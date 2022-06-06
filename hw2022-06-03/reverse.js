function reverseNum(x){
    if(x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)){
        return 0;
    }
    let tmp = x;
    let check = 1;
    if(x < 0){
        check = -1;
        tmp = -x;
    }
    let ans = "";
    while(tmp){
        ans += `${tmp % 10}`;
        tmp = Math.floor(tmp / 10);
    }
    ans = check * ans;
    if(ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)){
        return 0;
    }
    return ans;
}

console.log(reverseNum(123));
console.log(reverseNum(-123));
console.log(reverseNum(120));
console.log(reverseNum(Math.pow(-2, 33)));
console.log(reverseNum(Math.pow(2, 32)));

