# Instructions

1. cài đặt nodejs => nodejs.org
2. Cài đặt yarn => npm install -g yarn
3. Tạo project: yarn create vite (LƯU Ý VỊ TRÍ THƯ MỤC)
4. Mở thư mục project mà vite tạo ra
5. Chạy lệnh `yarn install` để cài đặt công cụ cần thiết
6. Chạy lệnh `yarn dev` để chơi chạy server
7. Để dừng server bấm Ctrl+ C
8. Cài đặt thêm các package: `yarn add package-name` (tùy chọn -D thì lưu vào devDependencies) để cài đặt package vào dependencies
Ví dụ: yarn add bootstrap
       yarn add axios (import axios from "axios"; 29.3k (gzipped: 10k)) import vào js sau khi tải package để sử dụng
9. Sử dụng `import/export` của ES6
10. Tất cả dạng tài nguyên như file `.css` đều sử dụng cú pháp `import`
import `./style.css`: import các tài nguyên (bắt đầu dấu .)
import `bootstrap/...`: import các module
11. Các file dạng hình ảnh, fonts, ... thì lưu trữ trong mục public
12. Để các file khác sử dụng function trong 1 file js => cần phải export
// export function
// export const/let

//import {name} from "module";
//import name from "module";

** Đang set min width cho body**