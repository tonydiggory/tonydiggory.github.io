const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

let findMaxGrade = (arr) => {
    let res = arr[0].grade;
    arr.forEach(student => {
        if(res < student.grade){
            res = student.grade;
        }
    })
    return res;
}

let findMinGrade = (arr) => {
    let res = arr[0].grade;
    arr.forEach(student => {
        if(res > student.grade){
            res = student.grade;
        }
    })
    return res;
}

   
// 1. Viết function tính thứ hạng trung bình của cả lớp
let calcAvgGrade = (grades) => {
    let sum = 0;
    grades.forEach(student => sum += student.grade);
    return sum/(grades.length);
}
console.log(calcAvgGrade(grades));


// 2. Viết function tính thứ hạng trung bình của nam trong lớp
let findMale = (grades) => {
    return grades.filter(student => student.sex == "M");
}

let calcAvgGradeM = (grades) => {
    let sum = 0;
    let male = findMale(grades);
    male.forEach(student => sum += student.grade);
    return sum/(male.length);
}
console.log(calcAvgGradeM(grades));


// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
let findFemale = (grades) => {
    return grades.filter(student => student.sex == "F");
}

let calcAvgGradeF = (grades) => {
    let sum = 0;
    let female = findFemale(grades);
    female.forEach(student => sum += student.grade);
    return sum/(female.length);
}
console.log(calcAvgGradeF(grades));


// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
let findMHighestGrade = (grades) => {
    let male = findMale(grades);
    // Sử dụng hàm filter để tìm các học sinh nam = grade thấp nhất(có thể có các học sinh có grade bằng nhau)
    return male.filter(student => student.grade == findMinGrade(male));
}
console.log(findMHighestGrade(grades));


// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
let findFHighestGrade = (grades) => {
    let female = findFemale(grades);
    // Sử dụng hàm filter để tìm các học sinh nữ = grade thấp nhất(có thể có các học sinh có grade bằng nhau)
    return female.filter(student => student.grade == findMinGrade(female));
}
console.log(findFHighestGrade(grades));


// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
let findMLowestGrade = (grades) => {
    let male = findMale(grades);
    // Sử dụng hàm filter để tìm các học sinh nam = grade cao nhất(có thể có các học sinh có grade bằng nhau)
    return male.filter(student => student.grade == findMaxGrade(male));
}

console.log(findMLowestGrade(grades));


// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
let findFLowestGrade = (grades) => {
    let female = findFemale(grades);
    // Sử dụng hàm filter để tìm các học sinh nữ = grade cao nhất(có thể có các học sinh có grade bằng nhau)
    return female.filter(student => student.grade == findMaxGrade(female));
}

console.log(findFLowestGrade(grades));


// 8. Viết function thứ hạng cao nhất của cả lớp
let findHighestGrade = (grades) => {
    return grades.filter(student => student.grade == findMinGrade(grades));
}
console.log(findHighestGrade(grades));

// 9. Viết function thứ hạng thấp nhất của cả lớp
let findLowestGrade = (grades) => {
    return grades.filter(student => student.grade == findMaxGrade(grades));
}
console.log(findLowestGrade(grades));

// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
console.log(findFemale(grades));

// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
let sortStudentsbyABC = (grades) => {
    let sName = [];
    let sName_2 = [];
    let res = [];
    let tmp;
    // Cho các riêng các tên vào 1 mảng mới
    grades.forEach(student => {
        sName.push(student.name);
    });
    // Sắp xếp mảng tên theo thứ tự tăng dần của bảng chữ cái
    sName.sort((student1, student2) => student1.localeCompare(student2));
    // Loại bỏ các giá trị trùng nhau (vì filter phía dưới chỉ cần đúng giá trị cũng có thể lấy ra 1 hoặc nhiều tên nếu giống nhau)
    for(let i = 0; i < sName.length; i++){
        if(sName_2.includes(sName[i])){
            continue;
        }else{
            sName_2.push(sName[i]);
        }
    }
    // Truyền lần lượt các object vào mảng mới với tên đã sắp xếp
    for(let i = 0; i < sName_2.length; i++){
        tmp = grades.filter(student => student.name == sName_2[i]);
        for(let j = 0; j < tmp.length; j++){
            res.push(tmp[j]);
        }
    }
    return res;
}
console.log(sortStudentsbyABC(grades));

// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
let sortStudentsbyGrade = (grades) => {
    return grades.sort((student1, student2) => student2.grade - student1.grade);
}
console.log(sortStudentsbyGrade(grades));


// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
let sortJStudents = (grades) => {
    let female = findFemale(grades);
    return female.filter(student => student.name[0] == 'J');
}
console.log(sortJStudents(grades));
// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
let top5 = (grades) => {
    grades.sort((student1, student2) => student1.grade - student2.grade);
    let res = [];
    for(let i = 0; i < 5; i++){
        res.push(grades[i]);
    }
    return res;
}
console.log(top5(grades));