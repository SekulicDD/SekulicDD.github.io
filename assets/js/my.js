$( document ).ready(function() {
    $("#fs_center ul li").on("click",function(e){
        e.preventDefault();
        changeNextPage()});

    $("#back").on("click",function(e){
        e.preventDefault();
        changeBackPage()});
 
});

function changeNextPage(){
    $("#nav ul").hide(); 
    resetClassAnimations(false);
    addClassAnimation(false);

    setTimeout (function() {
        $("#first_section").css("display","none");
        $("#fs_center").css("display","none");
    }, 600);
}

function changeBackPage(){
    resetClassAnimations(true);
    $("#first_section").css("display","grid");
    addClassAnimation(true);
    setTimeout (function() {
        $("#fs_center").fadeIn(); 
        $("#nav ul").fadeIn(); 
    }, 800);
}

function addClassAnimation(reverseBool){
    let reverse="";
    if(reverseBool)
        reverse="_reverse";

    $("#bg_div1").addClass("move_left"+reverse);
    $("#bg_div2").addClass("move_right"+reverse);
    $("#fs_left").addClass("move_left_faster"+reverse);
    $("#fs_right").addClass("move_right_faster"+reverse);
}

function resetClassAnimations(reverseBool){

    let reverse="_reverse";
    if(reverseBool)
        reverse="";

    $("#bg_div1").removeClass("move_left"+reverse);
    $("#bg_div2").removeClass("move_right"+reverse);
    $("#fs_left").removeClass("move_left_faster"+reverse);
    $("#fs_right").removeClass("move_right_faster"+reverse);
}
