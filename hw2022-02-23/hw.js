// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

function sortStudents(arr){
    // Khai báo mảng rỗng là kết quả khi 'return'
    let res = [];
    // Gán mảng res các giá trị trong mảng ban đầu
    for (let eles of arr) {
        res.push(eles);
    }
    // Sort để sắp xếp tên theo thứ tự tăng dần theo bảng chữ cái => reverse để sắp xếp ngược lại
    return res.sort().reverse();
}
let students = ["Nam","Hoa","Tuan","Tuấn","Hoan","tuan"];
console.log("Bài 1: ",sortStudents(students));


// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

let shuffleArray = (arr) => {
    let tmp = 0;
    let arr_len = arr.length;
    let res = [];
    let pos = 0;
    // Điều kiện dừng khi độ dài mảng sau khi shuffle bằng độ dài mảng ban đầu
    while(res.length < arr_len){
        // Lấy ra 1 vị trí "tmp" bất kì trong mảng ban đầu (random trong khoảng: 0 -> arr.length - 1)
        tmp = Math.floor(Math.random() * arr.length);
        // Giá trị ở vị trí "tmp" trong mảng ban đầu sẽ được gán vào mảng res
        res[pos] = arr[tmp];
        // Loại bỏ giá trị đã được lấy ra
        arr = arr.slice(0,tmp).concat(arr.slice(tmp+1));
        pos++;
    }
    return res;
}
console.log("Bài 2: ",shuffleArray(students));


// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

let test1 = [1, 2, 3, 7, 9, 10, "Hoa", "Công"];
let test2 = [1, 1, 1, 2, 2, 2, 4, 20, 21, "Hoa"];

let symmetricDifference = (arr1, arr2) => {
    // Nối 2 mảng ban đầu thành 1 mảng mới "tmp"
    let tmp = arr1.concat(arr2);
    // Sắp xếp lại mảng "tmp" theo alphabetical order 
    tmp = tmp.sort();
    // Tạo mảng "res" rỗng
    let res = [];
    for(i = 0; i < tmp.length; i++){
        // Mảng "tmp" sau khi sắp xếp dù là số hay chữ nếu giống nhau sẽ được đặt cạnh nhau
        if(tmp[i-1] != tmp[i] && tmp[i+1] != tmp[i]){
            res.push(tmp[i]);
        }
    }
    return res;
}
console.log("Bài 3: ",symmetricDifference(test1, test2));


// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

// Hàm loại bỏ các giá trị trùng lặp
let eliminateDup = (arr) => {
    // Tạo mảng kết quả rỗng "res"
    let res = [];
    let check = 0;
    arr.forEach(function(ele1){
        // reset biến check sau mỗi lần lặp của vòng for
        check = 0;
        // kiểm tra xem có trong mảng kết quả đã có giá trị đang xét chưa
        res.forEach(function(ele2){
            if(ele1 == ele2){
                // Nếu có thì check = 1; nếu không check vẫn = 0
                check = 1;
            }
        })
        // nếu check = 0 thì thêm giá trị đang xét vào mảng res
        if(check == 0){
            res.push(ele1);
        }
    })  
    return res;
}

let union = (arr1, arr2) => {
    // nối 2 mảng đang có vào mảng mới
    let res = arr1.concat(arr2);
    // trả ra mảng sau khi chạy hàm eliminateDup với tham số là mảng mới sau khi nối
    return eliminateDup(res);
}

console.log("Bài 4: ",union(test1, test2));
