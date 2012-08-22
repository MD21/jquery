$(document).ready(function(){

  var $next_time = false;
  
  $("#blog h3").click(function(){
    if($next_time)
    {
       $("#blog p.excerpt").slideUp();
       $(this).next("p.excerpt").slideDown();
    }
    else
      $next_time = $(this).next("p.excerpt").slideDown();
  });
});

   

