$(document).ready(function(){

  var slide_show = $("#slideshow").detach();

  $("body").prepend(slide_show);

  var label_text = "total images are "+$("#slideshow li img").length+" and you are viewing image ";
  var label = $("<label />").html(label_text);
  var span = $("<span />").addClass("show_after");
  $(label).append(span);

  $("#slideshow").after(label);

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
  });

});