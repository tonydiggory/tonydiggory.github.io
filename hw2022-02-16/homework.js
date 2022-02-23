//Bài 1: Viết function truyền vào 1 chuỗi bất kì, sao chép chuỗi đó lên 10 lần
function repeatString(a) {
    let res = "";
    for(let i= 1; i<= 10; i++){
        res += a;
    }
    return res;
}
console.log(repeatString("la")); 

//Bài 2: Viết function truyền vào 1 chuỗi bất kì, sao chép chuỗi đó lên 10 lần ngăn cách bởi dấu gạch ngang

function repeatStringSymbol(a) {
    let res = a;
    for(let i= 1; i<= 9; i++){
        res += '-' + a ;
    }
    return res;
}
console.log(repeatStringSymbol("hello")); 

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
function repeatStringSymbolNTime(a,n){
    let res = a;
    if(n <= 1){
        return "Số không hợp lệ";
    }
    for(let i = 1; i<n; i++){
        res += '-' + a;
    }
    return res;
}
console.log(repeatStringSymbolNTime('a',0));


//Bài 4: Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum5(){
    let res = 0;
    for(let i = 0; i<=100; i+= 5){
        res += i;
    }
    return res;
}
console.log(sum5());

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function calcVolumeSphere(r){
    return (4/3) * Math.PI * Math.pow(r,3);
}
console.log(calcVolumeSphere(5));


// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :
// sum(3,8) = 22
// sum(8,3) = 22
function sum(num1,num2){
    let sum = 0;
    for ( let i = Math.min(num1,num2) + 1; i < Math.max(num1,num2); i++){
        sum += i;
    }
    return sum;
}
console.log(sum(8,3));

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function checkSNT(num){
    let tmp = 2;
    if( num < 2 ){
        return false;
    }else if ( num === 2 ){
        return true;
    }else{
        while(tmp <= Math.sqrt(num)){
            if(num % tmp == 0){
                return false;
            }
            tmp++;
        }
    }
    return true;
}
console.log(checkSNT(101));

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function sumSNT(num){
    let res = 0;
    for(let i = 2; i<=num ; i++){
        if (checkSNT(i) == true){
            res += i;
        }
    }
    return res;
}
console.log(sumSNT(12));

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sumUoc(num){
    sum = 1+num;
    if (num<1){
        return("Số không hợp lệ")
    }else if(num == 1){
        return 1;
    }else{
        for( let i = 2; i<= num/2; i++ ){
            if(num % i == 0){
                sum += i;
            }
        }
        return sum;
    }
}
console.log(sumUoc(12345678));