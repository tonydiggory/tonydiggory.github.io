// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
function showProductInfo(product){
    let tmp = [];
    for(let i = 0; i < products.length; i++){
        tmp = Object.values(products[i]);
        console.log(tmp.join(" - "));
    }
}
showProductInfo(products);

const showProductInfo_2 = (products) => {
    products.forEach(function(product){
        console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
    })
}
showProductInfo_2(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const calcRev = (products) => {
    let res = 0;
    products.forEach(product => {
        res += product.price * product.count;
    })
    return res;
}
console.log(calcRev(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProduct = (products) => {
    return products.filter(product => product.brand == "Apple");
}
console.log(findProduct(products));

// 4. Tìm các sản phẩm có giá > 20000000
const findSuitablePrice = (products) => {
    return products.filter(product => product.price > 20000000);
}
console.log(findSuitablePrice(products));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findSuitableProduct = (products) => {
    return products.filter(product => product.name.toLowerCase().includes("pro"));
}
console.log(findSuitableProduct(products));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
function addStock(ten, gia, hang, soluong, products){
    products[products.length] = {
        name: ten,
        price: gia,
        brand: hang,
        count: soluong
    } 
    return products;
}
console.log(addStock("testten", 0, "testhang", 10, products));

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
let removeSpecificProduct = (products) => {
    return products.filter(product => product.brand != "Samsung");
}
// Gán lại products để xóa giá trị "Samsung"
products = removeSpecificProduct(products);
console.log(removeSpecificProduct(products));


// 8. Sắp xếp giỏ hàng theo price tăng dần
let sortCartByPrice = (products) => {
    return products.sort((product1, product2) => product1.price - product2.price);
}
console.log(sortCartByPrice(products));


// 9. Sắp xếp giỏ hàng theo count giảm dần
let sortCartByCount = (products) => {
    return products.sort((product1, product2) => product2.count - product1.count);
}
console.log(sortCartByCount(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let takeRandomProducts = (products) => {
    let res = [];
    for(let i = 0; i < 2; i++){
        let tmp = Math.floor(Math.random() * products.length);
        res.push(products[tmp]);
        products = products.slice(0,tmp).concat(products.slice(tmp+1));
    }
    return res;
}
console.log(takeRandomProducts(products));
