$(document).ready(function () {

    history.pushState("home", "", "#home");
    let currentPage = "home";

    $("#nav a").on("click", function(e) {
        e.preventDefault();
        var page = $(this).data("page");
        history.pushState(page, "", "#" + page);
        changeNextPage(page);
        currentPage = page;
      });

    $(".homeLink").on("click",function(e){
        e.preventDefault();
        routeHomePage();
        currentPage = "home";
    });
    
    $(".menu a").on("click",function(e){
        e.preventDefault();
        let source = $(this).data("source");
        let dest = $(this).data("dest");
        history.pushState(dest, "", "#" + dest);
        changePage(source, dest);
        currentPage = dest;
    });  

    window.onpopstate = function (event) {
        if (event.state == "home") {
            routeHomePage();
            currentPage = "home";
        }
        else {
            let tmp = event.state;
            changePage(currentPage, event.state);
            currentPage = tmp;
        }

    }
});

function changeNextPage(page){

    switch (page) {
        case "about":
            $("#about_section").css({"display":"grid","z-index":-2});
            break;
        case "work":
            $("#work_section").css("display","grid");
            break;
        default:
            $("#contact_section").css("display","grid");
            break;
    }

    $("#nav ul").hide(); 
    resetClassAnimations(false);
    addClassAnimation(false);

    setTimeout (function() {
        $("#first_section").css("display","none");
        $("#navParent").css("display","none");
        $("#bg_div1").css("display","none");
        $("#bg_div2").css("display","none");
    }, 750);
}

function routeHomePage(){
    $("#bg_div1").css("display","block");
    $("#bg_div2").css("display","block");
    resetClassAnimations(true);
    $("#first_section").css("display","grid");
    addClassAnimation(true);
    setTimeout (function() {
        $("#navParent").fadeIn(); 
        $("#nav ul").fadeIn(); 
        $("#about_section").css("display","none");
        $("#work_section").css("display","none");
        $("#contact_section").css("display","none");
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

var left=true;
var transitionFinished=true;
function changePage(from,to){
    if(!transitionFinished)
        return;

    transitionFinished=false;
    let direction;
    if(left)
        direction="left";
    else
        direction="right";
    left=!left;

    $(`#${from}_section`).addClass(`move_${direction}_faster`);
    $(`#${from}_section`).css("z-index",3);
    $(`#${to}_section`).css("display","grid");
    setTimeout (function() {
        $(`#${from}_section`).removeClass(`move_${direction}_faster`);
        $(`#${from}_section`).css("display","none");
        $(`#${from}_section`).css("z-index",-2);
        transitionFinished=true;
    }, 600);
}
