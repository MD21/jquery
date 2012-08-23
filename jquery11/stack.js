

  var count = 1;

  function add_item()
  {
    var div = $("<div />").attr("id",count).text(count++);
    $("div#container ").prepend(div);
  }

  $(document).ready(function(){

    $("div#container").delegate("div","click",function(){

      var first_div = $("div#container div :first");

      if($(this).attr("id") ==  $(first_div).attr("id") )
      {  
         if($("div#container div").length == 1)
           count = 1;
         else
           count = $(this).attr("id");

         $(this).siblings().css("background-color","orange");
         $(first_div).detach();
        
      }
      else
      {
        $(this).css("background-color","white").siblings().css("background-color","orange");
      } 
 });
});
