$(document).ready(function(){

var slide_show = $("#slideshow").detach();
$("body").children().eq(0).before(slide_show);
$("#slideshow").after('<label>Total images are '+$("#slideshow li img").length+
' and you are viewing image <span class = show_after> </span></label>');

$("#slideshow li").fadeOut();

$("#slideshow li").ready(function slide_show (){
  $("span.show_after").html($("#slideshow li:eq(0)").children("img").attr("alt"));

   $("#slideshow li:eq(0)").fadeIn(700).delay(1000).fadeOut(700,function(){  

   $("span.show_after").html($(this).next("li").children("img").attr("alt"));  
    $(this).next("li").fadeIn(700).delay(1000).fadeOut(700,function(){
       $("span.show_after").html($(this).next("li").children("img").attr("alt"));
       $(this).next("li").fadeIn(700).delay(1000).fadeOut(700,function (){
         setTimeout(slide_show(),10000)});
    });
  });

 });

});

