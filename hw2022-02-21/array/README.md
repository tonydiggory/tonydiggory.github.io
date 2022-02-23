# Array methods

***

### Truy cập thành phần của mảng

Các thành phần của mảng được truy cập qua **vị trí trong mảng**:

>vị trí trong mảng bắt đầu từ 0:
[0] thành phần đầu tiên
[1] thành phần thứ 2
[2] thành phần thứ 3
...

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
```

***

### Tính độ dài mảng

```javascript
// Cú pháp: array.length;

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

//result: 4
```

***

### Convert mảng sang string

1. Phương pháp `toString()` chuyển 1 mảng sang 1 string **các giá trị được ngăn cách bởi dấu phẩy**.

```javascript
let arr = [1,2,3,4];
arr = arr.toString();
console.log(arr);

//Result: "1,2,3,4"
```

2. Phương pháp `join()` nối các giá trị trong mảng thành 1 string. Phương pháp này gần giống với `toString()` nhưng bạn có thể thay đổi dấu ngăn cách.

```javascript
// Cú pháp: array.join(seperator);

let arr = [1,2,3,4];
arr = arr.join(" * ");
console.log(arr);

//Result: "1 * 2 * 3 * 4"
```

***

### Popping and Pushing

1. Phương pháp `pop()` loại bỏ thành phần cuối cùng ra khỏi mảng và sẽ `return` giá trị vừa được đẩy ra:

```javascript
// Cú pháp: array.pop();

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log(fruits);
console.log(fruit);

//Result: 
//["Banana", "Orange", "Apple"]
//"Mango"
```

2. Phương pháp `push()` thêm thành phần mới **ở cuối** và sẽ `return` ra độ dài mới của mảng.

```javascript
// Cú pháp: array.push();

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
console.log(fruits);
console.log(length);

//Result:
//["Banana", "Orange", "Apple", "Mango","Kiwi"]
//5
```

***

### Shifting Elements

**1. Phương pháp `shift()`**

*Phương pháp `shift()` xóa thành phần đầu tiên khỏi mảng và đẩy dần các thành phần trong mảng lên. Phương pháp `shift()` cũng sẽ `return` giá trị vừa được xóa.*

```javascript
// Cú pháp: array.shift();
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

console.log(fruits);
console.log(fruit);

//Result: 
//["Orange", "Apple","Mango"]
//"Banana"
```

**2. Phương pháp `unshift()`**

*Phương pháp `unshift()` thêm thành phần mới ở ô đầu của mảng và `return` độ dài của mảng mới.*

```javascript
//Cú pháp: array.unshift(value);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit = fruits.unshift("Lemon");
console.log(fruits);
console.log(fruit);

//Results:
// ["Lemon","Banana", "Orange", "Apple", "Mango"]
// 5
```

***

### JavaScript Array delete()

> **Lưu ý:**
Khi sử dụng phương pháp `delete()`, các thành phần trong mảng có thể bị xóa dẫn đến *undefined holes* trong mảng; nên sử dụng `pop`() hoặc `shift()`.

```javascript
// Cú pháp: delete arr[index];

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);

//Results:
//[, "Orange", "Apple", "Mango"]
```

***

### Merging (Concatenating) Arrays

Phương pháp `concat()` sẽ tạo ra 1 mảng mới bằng cách nối 2 mảng lại với nhau 

```javascript
//Cú pháp: array1.concat(array2);

//(Merging Two Arrays)

let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//Results: ["Cecilie","Lone","Emil","Tobias","Linus"]
```

***Phương pháp concat() không thay đổi các mảng cũ, nó luôn `return` ra mảng mới.***

Phương pháp concat() có thể sử dụng nhiều tham số:

```javascript
//Example (Merging Three Arrays)

let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3);

//Results: ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]
```

Phương pháp `concat()` có thể lấy tham số là string:

```javascript
//Example (Merging an Array with Values)

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

//Results: ["Emil", "Tobias", "Linus", "Peter"]
```

***

### Phương pháp Splice() và Slice()

1. Phương pháp `splice()` điền thêm giá trị vào 1 mảng.

Phương pháp `splice()` có thể được sử dụng để điền thêm giá trị vào mảng:

```javascript
// Cú pháp array.splice(start,deleteCount,item1,...)
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//Results: ["Banana","Orange","Lemon","Kiwi","Apple","Mango"]
```

- start: điểm bắt đầu khi bắt đầu thay đổi mảng
- deleteCount: bao nhiêu phần tử có thể bị xóa đi
- item1, item2, ...: các phần tử thêm vào 

2. Phương pháp `slice()` 

The `slice()` method tách 1 hoặc nhiều phần tử ra khỏi mảng và cho vào 1 mảng mới.

```javascript
// Cú pháp: array.slice(start,end);

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);
console.log(fruits);
console.log(citrus);

//Results: 
// ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// ["Orange", "Lemon", "Apple", "Mango"]
```

- start: điểm bắt đầu tách mảng
- end: điểm cuối cùng tách mảng( không bao gồm ) ( default: array.length - 1)

>Note
Phương pháp `slice()` tạo ra 1 mảng mới.
Phương pháp `slice()` không thay đổi các phần tử trong mảng cũ.

***

### Một vài array methods đã sử dụng tới

- `array.sort()`: sắp xếp mảng theo thứ tự tăng dần, thường là để sắp xếp chữ 

> Đôi khi, dùng `array.sort()` sắp xếp mảng số sẽ bị lỗi vì 25 > 100
Khi đó ta sẽ thêm
`array.sort((function(a, b){return a - b;}))` ;

- `array.reverse()`: sắp xếp các giá trị trong mảng theo thứ tự ngược lại

- `randomelement(array)`: lấy giá trị ngẫu nhiên trong mảng