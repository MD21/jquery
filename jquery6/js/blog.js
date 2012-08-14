$(document).ready(function(){

  var $next_time = false;
  
  $("#blog h3").click(function(){
    if($next_time)
    {
       $("#blog p.excerpt").hide().slideUp();
       $(this).next("p.excerpt").show().slideDown();
    }
    else
      $next_time = $(this).next("p.excerpt").show().slideDown();
  });
});


  
   

