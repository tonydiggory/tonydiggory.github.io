$("#page-2").click(function(){
    $("#page-1").removeClass("selected");
    if(!$("#page-2").hasClass("selected")){
        $("#page-2").addClass("selected");
        $(".quote").hide()
        $(".banner").show()
    }
})

$("#page-1").click(function(){
    $("#page-2").removeClass("selected");
    if(!$("#page-1").hasClass("selected")){
        $("#page-1").addClass("selected");
        $(".banner").hide()
        $(".quote").show()
    }
})

$(window).resize(function(){
    if($(window).innerWidth() < 820){
        $(".navbar-list").children().eq(1).hide();
        $(".navbar-list").children().eq(0).hide();
        $("#bar").show();        
    }else{
        $(".navbar-list").children().eq(1).show();
        $(".navbar-list").children().eq(0).show();
        $("#bar").hide();
        $(".overlay").hide();  
    }
})

$("#bar").click(function(){
  $(".overlay").show();
  $(".menu").css("left", "0px");
})

$("#menu-page-2").click(function(){
    $(".menu").css("left", "-250px");
    $(".overlay").hide();
    $(".quote").hide()
    $(".banner").show()
    $("#page-1").removeClass("selected");
    if(!$("#page-2").hasClass("selected")){
        $("#page-2").addClass("selected");
    }
})

$("#menu-page-1").click(function(){
    $(".menu").css("left", "-250px");
    $(".overlay").hide();
    $(".banner").hide()
    $(".quote").show()
    $("#page-2").removeClass("selected");
    if(!$("#page-1").hasClass("selected")){
        $("#page-1").addClass("selected");
    }
})

$(".close-btn").click(function(){
    $(".menu").css("left", "-250px");
    $(".overlay").hide();
})