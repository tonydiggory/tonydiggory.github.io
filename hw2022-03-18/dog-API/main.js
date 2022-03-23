$(".image img").hide();

// Gọi API và trả về danh sách breed-list
$.ajax({
    // B1: Gọi API
    type: "GET",
    url: "https://dog.ceo/api/breeds/list/all",
    success: function(res){
        // B2: render breed list vào select
        let listName = Object.keys(res.message);
        listName.forEach(function(ele){
            // $("#list").append($("<option/>").attr("value", `${ele}`).text(ele));
            $("#list").append($("<option/>").val(ele).text(ele));
        })
    },
    error: function(err){
        console.log(err);
    }
})

let value;

// Render ảnh sub breed
function getApiSub(idx){
    $.ajax({
        type: "GET",
        url: `https://dog.ceo/api/breed/${value}/${$(`#${idx}`).text()}/images/random`,
        success: function(res){
            $(".image img").attr("src", `${res.message}`);
            setTimeout(function(){
                $(".image img").show();
            },1000);
        },
        error: function(err){
            console.log(err);
        }
    })
}


// Render sub-breed
async function getSubBreed(){
    // Lấy value từ list select
    value = $("#list").children("option:selected").val();

    // Gọi API sub breed
    $.ajax({
        // B1: Gọi API
        type: "GET",
        url: `https://dog.ceo/api/breed/${value}/list`,
        success: function(res){
            // Render sub breed
            let subListName = res.message;
            if(subListName.length == 0){
                $(".sub-list").html("<li>Không có sub breed</li>");
            }else{
                $(".sub-list").empty();
                subListName.forEach(function(ele, idx){
                    let tmpA = $("<a/>").attr({"href": "#","id": `${idx}`,}).text(`${ele}`);
                    tmpA.click(function(){getApiSub(idx);});
                    let tmpL = $("<li/>").append(tmpA);
                    $(".sub-list").append(tmpL);
                    // $(".sub-list").append($("<li/>").html(`<a href="#" id = "${idx}" onclick = "getApiSub(${idx})">${ele}</a>`));
                })
            }
        },
        error: function(err){
            console.log(err);
        }
    })    
}

$(".btn-sub").click(function(){getSubBreed();});

// Reset khi chọn lại breed
$("#list").change(function(){
    $(".sub-list").empty();
    $(".image img").hide();
})