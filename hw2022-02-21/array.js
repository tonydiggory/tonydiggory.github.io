function arrFilter(arr){
    let res = [];
    let pos = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == "number" || typeof(arr[i]) == "string"){
            if(Number.isNaN(Number(arr[i]))){
                continue;
            }else{
                res[pos] = Number(arr[i]);
                pos++; 
            }
        }
    }
    return res;
}


// Bài 1: Tìm số lớn nhất trong mảng
function maxArr(arr){
    arr = arrFilter(arr)
    return Math.max(...arr);
    // return Math.max.apply(null, arr);
}
function maxArr_2(arr){
    // Loại bỏ các giá trị gây nhiễu 
    arr = arrFilter(arr);
    arr = arr.sort(function(a, b){return a-b});
    return arr[arr.length - 1];
}
arr = [true,"hello",undefined,NaN,"12",false,-2,2,3,6,9,8,1];
console.log(maxArr(arr));
console.log(maxArr_2(arr));


// Bài 2: Tìm số nhỏ nhất trong mảng
function minArr(arr){
    arr = arrFilter(arr);
    return Math.min(...arr);
    // return Math.min.apply(null, arr);
}
function minArr_2(arr){
    arr = arrFilter(arr);
    arr = arr.sort(function(a, b){return a-b});
    return arr[0];
}
console.log(minArr(arr));
console.log(minArr_2(arr));


// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function calcRemainder(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        // Do % là phép chia modulo nên kết quả có thể âm 
        res[i] = Math.abs(arr[i] % 2);
    }
    console.log(arr);
    return res;
}
console.log(calcRemainder(arr));


// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function multiplyString(str){
    return str.repeat(10);
}
console.log(multiplyString("a"));


// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeatStringWithDash(str) {
    let res = [];
    for(let i = 0; i < 10; i++){
        res[i] = str;
    }
    return res.join("-");
}
console.log(repeatStringWithDash("a"));