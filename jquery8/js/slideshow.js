$(document).ready(function(){

  var slide_show = $("#slideshow").detach();

  $("body").prepend(slide_show);


  $("#slideshow").after('<label></label>').next("label").text("total images are "+$("#slideshow li img").length+
                " and you are viewing image ").append("<span></span>").children().last().addClass("show_after");

  $("#slideshow li").fadeOut();

  $("#slideshow li").ready(function slide_show (){

    console.log( $("span.show_after").html($("#slideshow li").first().children("img").attr("alt")));
    $("#slideshow li").first().fadeIn(700).delay(1000).fadeOut(700,function(){  

      $("span.show_after").html($(this).next("li").children("img").attr("alt"));  
      $(this).next("li").fadeIn(700).delay(1000).fadeOut(700,function(){

        $("span.show_after").html($(this).next("li").children("img").attr("alt"));
        $(this).next("li").fadeIn(700).delay(1000).fadeOut(700,function (){

            setTimeout(slide_show(),10000)
        });

      });

    });

  });

});
