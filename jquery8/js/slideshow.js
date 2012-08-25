$(document).ready(function(){

  var slide_show = $("#slideshow").detach();

  $("body").prepend(slide_show);

  var label_text = "total images are "+$("#slideshow li img").length+" and you are viewing image ";
  var label = $("<label />").html(label_text);
  var span = $("<span />").addClass("show_after");
  $(label).append(span);

  $("#slideshow").after(label);
<<<<<<< HEAD

  $("#slideshow li").hide();

  function slideshow(a,img_no)
  {
    $(a).fadeIn(700).delay(1000).fadeOut(700);
    $("span.show_after").text(img_no);
  }

  $(function(){	
    var i = 0;
    setInterval(function(){

      slideshow($("#slideshow li ").eq(i++),i);

      if(i == 3)
       i = 0;
    },2405);
=======

  $("#slideshow li").fadeOut();

  $("#slideshow li").ready(function slide_show (){
    
    var image_name1 = $("#slideshow li :first img").attr("alt");
    var image_name2 = $("#slideshow li").eq(1).children("img").attr("alt");
    var image_name3 = $("#slideshow li :last img").attr("alt");

    $("span.show_after").html(image_name1);

    $("#slideshow li").first().fadeIn(700).delay(1000).fadeOut(700,function(){  

      $("span.show_after").html(image_name2);  
      $(this).next("li").fadeIn(700).delay(1000).fadeOut(700,function(){

        $("span.show_after").html(image_name3);
        $(this).next("li").fadeIn(700).delay(1000).fadeOut(700,function (){

            setTimeout(slide_show(),10000)
        });

      });

    });

>>>>>>> fb720b32f50edcc213e53ab28209ef3573610ce7
  });

});
