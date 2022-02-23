# JavaScript String Methods

***

### JavaScript String Length

*Cú pháp .length sẽ trả về độ dài của chuỗi*

```javascript
// Cú pháp: string.length;

let txt = "ABCDEF";
let length = txt.length;

//Results: 6
```

***

### Các phương pháp cắt chuỗi

**Có 3 phương pháp cắt chuỗi:**

- slice(start, end)
slice() sẽ cắt từ điểm **start** tới điểm **end - 1**
nếu giá trị **start**, **end** có giá trị âm thì sẽ đếm ngược từ cuối chuỗi

- substring(start, end)
substring() sẽ cắt từ điểm **start** tới điểm **end - 1**
substring() parameters không nhận giá trị âm

- substr(start, length)
substr() sẽ cắt từ điểm **start**  đến độ dài **length**
nếu **start** âm sẽ đếm ngược từ cuối chuỗi

> Cả 3 phương pháp này sẽ cắt ra 1 chuỗi mới và không ảnh hưởng đến chuỗi cũ

***

### Thay thế nội dung chuỗi

- Phương pháp `replace(value1,value2)` thay đổi giá trị value1 trong chuỗi bằng giá trị value2 (chỉ thay đổi giá trị đầu tiên tìm được)

> Nếu muốn thay đổi tất cả giá trị dùng flag set global (/g)

- Phương pháp `replaceAll(value1, value2)` thay đổi tất cả giá trị value1 tìm được trong chuỗi bằng giá trị value2

>Khi được gọi, `replace()` không thay đổi chuỗi ban đầu
`replace()` sẽ trả về 1 chuỗi mới

***

### In hoa, In thường chuỗi

- chuỗi sẽ được in hoa khi sử dụng `toUpperCase();`

- chuỗi sẽ được in thường khi sử dụng `toLowerCase();`

```javascript
//Cú pháp: string.toUpperCase();
//Cú pháp: string.toLowerCase();

let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
console.log(text2);
console.log(text3);

//Results:
"HELLO WORLD!"
"hello world!"
```

***

### Nối 2 chuỗi với nhau

Dùng phương pháp `concat()` để nối 2 hay nhiều chuỗi với nhau:

```javascript
// Cú pháp: string1.concat(string2);

let text1 = "Hello";
let text2 = " World!";
text3 = text1.concat(text2);
console.log(text3);

//Results:
//"Hello World!"
```

Có thể dùng **plus operator** để thay thế phương pháp `concat()`:

```javascript
text = "Hello" + " " + "World!";
```

*** String trim() method

Sử dụng phương pháp `trim()` để loại bỏ khoảng trắng ở 2 đầu chuỗi

```javascript
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);

//Results:
//"Hello World!"
```

***

### Tìm kiếm giá trị trong chuỗi 

- `String.indexOf(value)`: trả về **vị trị đầu tiên** tìm thấy value trong chuỗi nhưng *tìm từ đầu chuỗi xuống*

- `String.lastIndexOf(value)`: trả về **vị trí đầu tiên** tìm thấy value trong chuỗi nhưng *tìm từ cuối chuỗi lên*

- `String.include(value)`: Nếu chuỗi chứa giá trị value sẽ trả về kết quả **true**; ngược lại, trả về kết quả **false**