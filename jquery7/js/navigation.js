$(document).ready(function(){
  $("#nav li").hover(
    function(){ $(this).children().css("display","block"); },
   function(){ $("#nav li ul").css("display","none"); }
  );
});

