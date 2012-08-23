
  var count = 1;

  function add_item()
  {
    $("div#container ").prepend("<div></div>").children().first().attr("id",count).text(count++);
  }

  $(document).ready(function(){

    $("div#container").delegate("div","click",function(){

      if($(this).attr("id") ==  $("div#container").children().first().attr("id") )
      {  
         count = $(this).attr("id");
         $(this).siblings().css("background-color","orange");
         $("div#container div").first().detach();
        
      }
      else
      {
        $(this).css("background-color","white").siblings().css("background-color","orange");
      } 
 });
});
