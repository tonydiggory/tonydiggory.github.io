// Bài 1:
// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra
// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”

function chiaHet(num) {
  if (num % 15 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  }
}
chiaHet(15);

// Bài 2:
// Viết function giải phương trình bậc nhất (ax + b= 0)
// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả

function linearEquation(a, b) {
  if (a === 0) {
    console.log("Infinity");
  } else {
    console.log(-b / a);
  }
}
linearEquation(2, 6);

// Bài 3:
// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)
// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả

function quadraticEquation(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (a === 0) {
    linearEquation(b, c);
  } else {
    if (delta < 0) {
      console.log("Impossible equation");
    } else if (delta === 0) {
      console.log("There is 1 root: ", -b / (2 * a));
    } else {
      console.log("root 1:", (-b - Math.sqrt(delta)) / (2 * a));
      console.log("root 2:", (-b + Math.sqrt(delta)) / (2 * a));
    }
  }
}
quadraticEquation(1, 2, -3);

// Bài 4:

// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”
// Cách tính năm nhuận như thế nào thì lên mạng tra

function year4(year){
    if(year % 4 === 0){
        console.log("Là năm nhuận");
    }else{
        console.log("Không là năm nhuận");
    }
}
year4(2017);

// Bài 5:
// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng
// Sử dụng return

function BMI(w,h){
    return w/(h*2);
}
console.log(BMI(55,1.72));

// Bài 6:
// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng
// Sử dụng return

function changeTemp(c){
    return (c*1.8)+32;
}
console.log(changeTemp(-50));

