// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất
// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3
let max2Number = (arr) => {
    // B1: Sắp xếp mảng theo thứ tự từ lớn đến bé
    // B2: Chạy vòng for để tìm giá trị lớn thứ 2
    // B3: Trả về giá trị lớn nhì tìm được

    // sort arr kết hợp higher order function. Các tham số truyền vào là a,b tương đương với giá trị arr[a], arr[a+1]. arr sẽ được sắp xếp theo giá trị giảm dần (arr[b] - arr[a], nếu giá trị này âm => giữ nguyên, giá trị này dương => đảo 2 vị trí)

    arr = arr.sort((a,b) => b-a);
    let res = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        if(res != arr[i]){
            // Ngay khi tìm thấy giá trị đầu tiên khác giá trị lớn nhất, trả về giá trị lớn nhì (do mảng đã dược sắp xếp)
            return arr[i];
        }
    }
}
let test = [2, 1, 4, 3, 4];
console.log(max2Number(test));

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
let getStringHasMaxLength = (arr) => {
    // B1: Đi tìm độ dài lớn nhất của các chuỗi trong mảng
    // B2: Chạy vòng for để đẩy các chuỗi tìm được có độ dài bằng độ dài lớn nhất vào mảng kết quả 
    // B3: Trả ra kết quả là mảng res gồm các chuỗi có độ dài lớn nhất
    
    
    let tmp = arr[0].length;
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(tmp < arr[i].length){
            tmp = arr[i].length;
        }
    }
    for(let i = 0; i < arr.length; i++){
        // Đẩy tất cả các chuỗi có độ dài = tmp (độ dài lớn nhất) vào mảng res
        if(arr[i].length == tmp){
            res.push(arr[i]);
        }
    }
    return res;
}
let test2 = ['aba', 'aa', 'ad', 'c', 'vcd'];
console.log(getStringHasMaxLength(test2));

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9
let getRandomElement = (arr) => {
    // B1: Mathrandom() * arr.length sẽ random giá trị từ khoảng 0 - arr.length
    // B2: Làm tròn xuống giá trị vừa random được để có giá trị nguyên trong khoảng 0 - (arr.length -1)
    // B3: trả về giá trị ở vị trí ngẫu nhiên vừa có được
    
    
    let randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
}
let test3 = [3, 7, 9, 11];
console.log(getRandomElement(test3));

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]
let similarity = (arr1, arr2) => {
    // B1: dùng filter để tạo mảng mới "tmp" chứa các giá trị có ở cả 2 mảng 
    // B2: điền các giá trị từ mảng tmp vào mảng res nếu mảng res chưa có giá trị đó (bỏ các giá trị trùng nhau)
    // B3: trả về mảng kết quả
    
    
    let tmp = arr1.filter(ele => arr2.includes(ele));
    let res = [];
    for(let i = 0; i < tmp.length; i++){
        if(!res.includes(tmp[i])){
            res.push(tmp[i]);
        }
    }
    return res;
}
console.log(similarity([1, 2, 3, "Hoa", 6, 6, 9], [1, 2, 4, "Hoa", 6, 7]));

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
// // Ví dụ:
// getTime("9:20:56", 7) => "9:21:3"
// Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss
let getTime = (str, x) => {
    // B1: dùng hàm split ngắt chuỗi tại các dấu : trả về 1 mảng gồm 3 phần giờ, phút, giây
    // B2: chuyển các giá trị giờ, phút, giây thành số
    // B3: nếu i !=0 tương đương với đang xét giá trị phút, giây => sẽ lấy x chia dư cho 60 để được phần giây thừa (Ví dụ: 1000 giây sẽ được 16 phút và 40 giây)
    // B4: Cộng phần giây với phần giây thừa (ví dụ: 56 giây + 40 giây = 36 giây dư 1 phút)
    // B5: Cộng phút dư vào phút đang có (16 phút + 1 phút = 17 phút)
    // B6: Cộng phần phút với phần phút thừa (ví dụ: 59 phút + 17 phút = 16 phút dư 1 giờ)
    // B7: Cộng phần giờ với phần giờ thừa (nếu thừa giờ sẽ lấy giờ - 24 và hết)
    // B8: join lại mảng thành chuỗi dưới dạng "giờ:phút:giây" và trả về kết quả dạng chuỗi 
    
    
    let res = str.split(":");
    let tmp = 0;
    for(let i = 2; i >= 0; i--){
        res[i] = Number(res[i]);
        if(i == 0){
            res[i] += x;
            if(res[i] >= 24){
                res[i] -= 24;
            }
        }else{
            tmp = x % 60;
            res[i] += tmp;
            x = Math.floor(x/60);
            if(res[i] >= 60){
                res[i] -= 60;
                x++;
            }
        }
    }
    return res.join(":");
}
console.log(getTime("23:59:56",1000));


// Bài 6 (2 điểm). Cho mảng users như sau:
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần
let older25 = (users) => {
    // B1: return ra mảng chứa các giá trị có age > 25 và isStatus == true

    // Dùng hàm filter để lọc các giá trị có age > 25 và isStatus = true
    // hàm filter sẽ trả về 1 mảng mới các giá trị thỏa mãn => return luôn

    return users.filter(user => user.age > 25 && user.isStatus == true);
}
console.log(older25(users));

let sortUsers = (users) => {
    // B1: Sắp xếp lại users theo giá trị tăng dần và return ra kết quả

    // Dùng hàm higher order function kết hợp với hàm sort 
    // các giá trị truyền và hàm sort là các user tương đương với các thành phần trong mảng users
    // hàm users sẽ được sắp xếp lại theo thứ tự tăng dần (lấy user1.age - user2.age, Nếu âm sẽ giữ nguyên thứ tự, nếu dương sẽ đảo chỗ nguyên thứ tự)

    return users.sort((user1, user2) => user1.age - user2.age);
}
console.log(sortUsers(users));

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
// getCountElement(["one", "two", "three", "one", "one", "three"])
// // Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

let test7 = ["one", "two", "three", "one", "one", "three"];

let getCountElement = (arr) => {
    // B1: tạo vòng lặp để đẩy các giá trị không trùng nhau vào mảng "tmp"
    // B2: tạo vòng lặp để tạo mảng "tmp_value" chứa số lần xuất hiện các giá trị
    // B3: tạo vòng lặp để đối chiếu, mỗi lần tìm thấy giá trị tmp[i], số lần xuất hiện tmp_value[i] sẽ được cộng 1
    // B4: tạo vòng lặp để cho kết quả vào object (các giá trị ở tmp[i] sẽ là key và các giá trị ở tmp_value[i] sẽ là value)
    // B5: trả về kết quả res vừa tìm được
    
    let tmp = [];
    let tmp_value = [];
    let res = {};
    for(let i = 0; i < arr.length; i++){
        if(!tmp.includes(arr[i])){
            tmp.push(arr[i]);
        }
    }
    for(let i = 0; i < tmp.length; i++){
        tmp_value[i] = 0;
    }
    for(let i = 0; i < tmp.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] == tmp[i]){
                tmp_value[i] += 1;
            }
        }
    }
    for(let i = 0; i < tmp.length; i++){
        res[`${tmp[i]}`] = tmp_value[i];
    }
    return res;
}
console.log(getCountElement(test7));