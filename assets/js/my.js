$( document ).ready(function() {

    $("#workLink").on("click",function(e){
        e.preventDefault();
        changeNextPage("work")});

    $("#aboutLink").on("click",function(e){
        e.preventDefault();
        changeNextPage("about")});

    $(".homeLink").on("click",function(e){
        e.preventDefault();
        routeHomePage()});

    $("#workToAbout").on("click",function(e){
        e.preventDefault();
        workToAbout()});

    $("#aboutToWork").on("click",function(e){
        e.preventDefault();
        aboutToWork()});  
        
});

function changeNextPage(page){

    if(page=="about")
        $("#seccond_section").css("display","grid");
    if(page=="work")
        $("#third_section").css("display","grid");

    $("#nav ul").hide(); 
    resetClassAnimations(false);
    addClassAnimation(false);

    setTimeout (function() {
        $("#first_section").css("display","none");
        $("#fs_center").css("display","none");
    }, 600);
}

function routeHomePage(){
    resetClassAnimations(true);
    $("#first_section").css("display","grid");
    addClassAnimation(true);
    setTimeout (function() {
        $("#fs_center").fadeIn(); 
        $("#nav ul").fadeIn(); 
        $("#seccond_section").css("display","none");
        $("#third_section").css("display","none");
    }, 950);
    
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

function workToAbout(){
    $("#third_section").addClass("move_right_faster");
    $("#seccond_section").css("display","grid");
    setTimeout (function() {
        $("#third_section").removeClass("move_right_faster");
        $("#third_section").css("display","none");
    }, 650);
}

function aboutToWork(){
    $("#seccond_section").addClass("move_left_faster");
    $("#seccond_section").css("z-index",3);
    $("#third_section").css("display","grid");
    setTimeout (function() {
        $("#seccond_section").removeClass("move_left_faster");
        $("#seccond_section").css("display","none");
        $("#seccond_section").css("z-index",-2);
    }, 650);
}