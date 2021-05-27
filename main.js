//document.getElementById("videobackground").pause();

document.addEventListener("mousemove", parallax);

var player1X = $('#player1').css("left")

function parallax(e){
    
    
    $('.movable').each(function(move){
        var moving_value = $(this).attr("data-move-value");
        var x = (e.clientX * moving_value) / 150;
        var y = (e.clientY * moving_value) / 150;

        $(this).css("transform", "translateX(" + -x + "px) translateY(" + -y + "px)");
        //document.getElementById("player2").style.transform = "translateX(" + -x + "px) translateY(" + -y + "px)";
        //$('#player1').css("left", player1X + x + "%");
    });
    
    // document.querySelectorAll(".movable").forEach(function(move){

        
    // });
}

$('.nav-dot').click(function(){
    $('.nav-dot').removeClass("active");
    $(this).addClass("active");
});