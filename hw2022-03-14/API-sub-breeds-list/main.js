
// Truy cập 
let btnSub = document.querySelector(".btn-sub");
let imageEl = document.querySelector(".image");
let selectEl = document.getElementById("list");
let subList = document.querySelector(".sub-list");

async function getBreedsList () {
    // B1: gọi API: https://dog.ceo/api/breeds/list/all
    // Nếu thành công -> trả về danh sách các loài chó

    let res = await axios.get("https://dog.ceo/api/breeds/list/all");

    // B2: Sử dụng vòng lặp để render vào thẻ select
    let listName = Object.keys(res.data.message);
    for(let i = 0; i < listName.length; i++){
        selectEl.innerHTML += `<option value = "${listName[i]}">${listName[i]}</option>`;
    } 
}

getBreedsList();

let tmp = "";

// Lấy link của loài chó theo từng sub breed
async function getApiSub (idx) {
    try{
        let value = selectEl.options[selectEl.selectedIndex].value;
        let tmpSub = document.getElementById(`${idx}`);
        tmp = tmpSub.innerText;
        // Gọi API
        res = await axios.get(`https://dog.ceo/api/breed/${value}/${tmp}/images/random`);

        // Hiển thị ảnh
        imageEl.innerHTML = `<img src="${res.data.message}" alt=""></img>`
    }catch(err){
        console.log(err);
    }
}

btnSub.addEventListener("click", async function(){
    try {
        subList.innerHTML = "";
        imageEl.innerHTML = "";

        // Lấy ra nội dung trong ô select

        let value = selectEl.options[selectEl.selectedIndex].value;

        // Kiểm tra các sub breeds của từng loài chó

        let res = await axios.get(`https://dog.ceo/api/breed/${value}/list`);

        if(res.data.message.length == 0){
            subList.innerHTML = "<li>Không có sub breed</li>"
        }else{
            for(let i = 0; i < res.data.message.length; i++){
                subList.innerHTML += `<li><a href="#" id = "${i}" onclick = "getApiSub(${i})">${res.data.message[i]}</a></li>`;
            }
        }
    }catch(err){
        console.log(err);
    }
})

