
  var count = 1;

  function add_item()
  {
    if(count === 1)
    $("div#container ").append("<div id = "+count+">"+ count++ +"</div>");
    else
    $("div#container div:first").before("<div id = "+count+">"+ count++ +"</div>");
  }

  $(document).ready(function(){

    $("div#container").delegate("div","click",function(){

      console.log($(this).attr("id"));
      console.log(count-1);
      if($(this).attr("id") == (count-1))
      {  $(this).siblings().css("background-color","orange");
         $("div#container div:first").detach();
         count--;
      }
      else
      {
        $(this).css("background-color","white").siblings().css("background-color","orange");
      } 
 });
});

