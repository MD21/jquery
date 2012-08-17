$(document).ready(function(){

  $("div#blog ul li h3").each(function(index){

    $(this).after("<div id = post"+(index + 1)+"></div>");

    $(this).data($(this).children("a").attr("href"),$(this).next("div"));

  });


  $("div#blog ul li h3").bind('click',function(e){
    e.preventDefault();

    $(this).data($(this).children("a").attr("href")).load('data/blog.html #'+$(this).next("div").attr("id"));
  });

});




