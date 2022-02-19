// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ:
// checkStringExist(“i love you”, “you”) => true
// checkStringExist(“i love you”, “hate”) => false
function checkStringExist(str,str_req){
    let check = false;
    for(let i = 0; i < str.length; i++){
        if (str[i] == str_req[0]){
            for(let j = 1; j < str_req.length; j++){
                check = true;
                if(str[i+j] != str_req[j]){
                    check = false;
                    break;
                }
            }
            if( check == true ){
                return true;
            }
        }
    }
    return false;
}
console.log(checkStringExist("i love you","you"));
console.log(checkStringExist("i love you","hate"));

function checkStringExist_2(str,str_req){
    return str.includes(str_req);
}
console.log(checkStringExist_2("i love you","you"));
console.log(checkStringExist_2("i love you","hate"));


// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
// Ví dụ:
// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”
function shortenString(str){
    res = "";
    if(str.length <= 8){
        return str;
    }else{
        for(let i = 0; i < 8; i++){
            res += str[i];
        }
        res += "...";
    }
    return res;
}
console.log(shortenString("Xin chao cac ban"));
console.log(shortenString("hello"));

function shortenString_2(str){
    res = "";
    if(str.length <= 8){
        return str;
    }else{
        return str.substr(0,8) + "...";
    }
}
console.log(shortenString_2("Xin chao cac ban"));
console.log(shortenString_2("hello123 "));


// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
// Ví dụ
// “Race car” => true,
// “hello world” => false.
function reverseString(str){
    str = str.toLowerCase();
    let tmp = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] != " "){
            tmp += str[i];
        }else{
            continue;
        }
    }
    for(let i = 0; i < Math.floor(tmp.length/2); i++){
        if(tmp[i] != tmp[tmp.length-i-1]){
            return false;
        }
    }
    return true;
}
console.log(reverseString("Race car"));
console.log(reverseString("hello world"));

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
// Ví dụ
// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359
function findMinNumber(str){
    let tmp = str[0];
    let res = 0;
    for(let i = 1; i< str.length; i++){
        if (tmp > str[i]){
            tmp = str[i];
            res = i;
        }
    }
    return res;
}

function reorderNumber(num){
    let tmp = num + "";
    let res = "";
    let a = 0;
    let b = tmp.length;
    //Sắp xếp thành chữ số tăng dần ( có số 0 ở đầu )
    for(let i = 0; i < b; i++){
        a = findMinNumber(tmp);
        res += tmp[a];
        tmp = tmp.substring(0,a) + tmp.substring(a+1);
    }
    //Đẩy các chữ số 0 ra sau 
    for(let i = 0; i < b; i++){
        if(res[i] != 0){
            res = res[i] + res.substring(0,i) + res.substring(i+1);
            break;
        }
    }
    return res;
}
console.log(reorderNumber(203950));


// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường
// Ví dụ:
// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”
function snakeCase(str){
    //Viết thường các chữ cái
    str = str.toLowerCase();
    //Xóa khoảng trắng ở 2 đầu
    str = str.trim();
    let a = str.length;
    let res = "";
    for(let i = 0; i < a; i++){
        if(str[i] != " "){
            res += str[i];
        }
        //Nhận diện 1 hoặc nhiều khoảng trắng
        if(str[i] == " " && str[i-1] != " "){
            res += "_";
        }
    }
    return res;
}
console.log(snakeCase("Hello world"));
console.log(snakeCase("Xin Chào Các  BẠN "));