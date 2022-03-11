// ======== Phân tích ========
// Câu 1: Chức năng của todolist
// - Thêm công việc 
// - Lọc các công việc hiện có (All, Chưa hoàn thành, Hoàn thành)
// - Chỉnh sửa các công việc hiện có 
// - Xóa các công việc hiện có 
// - Đánh dấu các công việc đã hoàn thành(thay đổi trạng thái công việc)

// Câu 2: Đối tượng trong ứng dụng là gì? == Công việc 
// Có các thuộc tính nào ?
// 1. Trạng thái -> status
// 2. Tiêu đề -> title
// 3. Mã công việc -> ID


let todos = [
    {
        id: 1,
        title: "Đi đá bóng",
        status: false
    },
    {
        id: 2,
        title: "Làm bài tập về nhà",
        status: true
    },
    {
        id: 3,
        title: "Đi kiểm tra sức khỏe",
        status: true
    }
];
let newID = todos[0].id;
for(let i = 0; i < todos.length; i++){
    if(newID < todos[i].id){
        newID = todos[i].id;
    } 
}
newID++;

// Truy cập 
const todoList = document.querySelector(".todo-list");
const optionAll = document.getElementById("all");
const optionActive = document.getElementById("active");
const optionUnactive = document.getElementById("unactive");
const btnAdd = document.getElementById("btn-add");
const todoInput = document.getElementById("todo-input");

// 1. Render danh sách todo
function renderTodo (arr) {
    // Xóa hết dữ liệu trước khi render
    todoList.innerHTML ="";

    // Trước hợp không có công việc nào trong danh sách
    if(arr.length == 0){
        todoList.innerHTML = "Không có công việc nào trong danh sach";
        return;
    }

// Khi có công việc thì render 
// Sử dụng vòng lặp for để render 
    let html = "";
    for(let i = 0; i < arr.length; i++){
        const t = arr[i];
        html += `
            <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title" id = "${t.id}">
                    <input type="checkbox" ${t.status ? "checked" : ""}
                    onclick = "toggleStatus(${t.id})"
                    />
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick = "updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick = "deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `
    }
    // Sau khi điền nội dung, hiển thị lên todoList
    todoList.innerHTML = html;
}

// 2. Xóa công việc
function deleteTodo(id){
    // B1: Sử dụng vòng for qua mảng todos để tìm kiếm object có id = id truyền vào
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            todos = todos.slice(0, i).concat(todos.slice(i+1));
        }
    }

    // B2: sau khi xóa xong gọi function renderTodo để cập nhật lại giao diện
    renderTodo(todos);
}

// 3. Thay đổi trạng thái
function toggleStatus(id){
// B1: Sử dụng vòng for qua mảng todos để tìm kiếm object có id = id truyền vào
    // Kiểm tra : nếu trạng thái cv là true => set lại = false 
               // nếu trạng thái cv là false => set lại = true
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id == id){
            // if(todos[i].status == true){
            //     todos[i].status = false;
            // }else{
            //     todos[i].status = true;
            // }
            todos[i].status = !todos[i].status;
        }
    }

    // B2: sau khi thay đổi dữ liệu xong gọi function renderTodo để cập nhật lại giao diện
    renderTodo(todos);
}

//4. Lọc công việc theo trạng thái
optionAll.addEventListener("click",function(){
    // Mặc định render dữ liệu với mảng todos
    renderTodo(todos);
})

optionActive.addEventListener("click",function(){
    // B1: Lọc các công việc có status = true ra 1 mảng mới
    let todosActive = todos.filter(work => work.status == true);
    // B2: Render lại giao diện với mảng vừa lọc
    renderTodo(todosActive);
})

optionUnactive.addEventListener("click",function(){
    // B1: Lọc các công việc có status = false ra 1 mảng mới
    let todosUnactive = todos.filter(work => work.status == false);
    // B2: Render lại giao diện với mảng vừa lọc
    renderTodo(todosUnactive);
})

// 5. Thêm công việc

btnAdd.addEventListener("click", function(){
    // B1: Lấy ra dữ liệu trong ô input
    let newTodo = todoInput.value;
    // B2: Kiểm tra dữ liệu trống 
    // Nếu có thì thông báo -> alert -> return 
    if(newTodo.length == 0){
        alert("Công việc đang để trống");
    }
    // B3: Tạo object todo mới
    else{
        let tempTodo = {
            id: newID,
            title: newTodo,
            status: false
        };
        
    // B4: Thêm object mới vào mảng todos ban đầu
        todos.push(tempTodo);
        newID++;
    }
    // B5: Render lại giao diện
    renderTodo(todos);
    // Clear dữ liệu trong ô input để nhập công việc khác
    todoInput.value = "";
})

// 6. Sửa công việc
function updateTodo(id){
    // B1: Truy cập 
    let updateDiv = document.getElementById(`${id}`);
    let tmpPara = updateDiv.querySelector("p");
    let updateInput = document.createElement("input");

    // B2: Xóa các ô chỉnh sửa công việc thừa (1 lần chỉ chỉnh sửa được 1 mục)
    for(let i = 0; i < todos.length; i++){
        let tmpUpdateDiv = document.getElementById(`${todos[i].id}`);
        if(tmpUpdateDiv != null){
            let tempPara = tmpUpdateDiv.querySelector("p");
            let tmpUpdateInput = tmpUpdateDiv.querySelector("input[type=text]");
            if(tmpUpdateInput != null){
                tmpUpdateDiv.removeChild(tmpUpdateInput);
                tempPara.style.display = "block";
            }
        }
    }
    // B3: Tạo ô dùng để chỉnh sửa công việc
    tmpPara.style.display = "none";
    updateInput.type = "text";
    updateInput.placeholder = `${tmpPara.innerText}`;
    updateInput.classList.add("update-todo");
    updateDiv.appendChild(updateInput);

    // B4: Lấy giá trị vừa nhập update vào todos
    document.addEventListener("keydown", function (event) {
        // Dùng mũi tên lên trên để nhập giá trị tại nếu để Enter (tắt alert bằng Enter sẽ bị lỗi)
        if(event.keyCode == 38){
            let tmpTodo = updateInput.value;
            if(tmpTodo.length == 0){
                alert("Công việc đang để trống");
            }
            else{
                for(let i = 0; i < todos.length; i++){
                    if(todos[i].id == id){
                    todos[i].title = tmpTodo;
                    todos[i].status = false;
                    renderTodo(todos);
                    break;
                    }
                }
            }
        // Nếu đang sửa mà muốn thoát ra về lại giá trị ban đầu thì nhấn "ESC"
        }else if(event.keyCode == 27){
            tmpPara.style.display = "block";
            updateDiv.removeChild(updateInput);
        }
    });
}

renderTodo(todos);

