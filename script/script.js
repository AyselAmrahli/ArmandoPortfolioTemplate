$(document).ready(function(){
 var target;


 $("li").click(function(){
 	$("li").removeClass("active");
    $(this).addClass("active");
    target = $(this).attr("id");
     $("img").removeClass("selector");
     $("."+target).addClass("selector");


 });

$("img").click(function(){
     $("img").removeClass("gClick");
   $(this).addClass("gClick");

});





});

