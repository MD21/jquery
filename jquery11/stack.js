
  function add_item()
  {
    var count = $("div#container div:first").text();
    var div = $("<div />").text(++count);
    $("div#container").prepend(div);
  }

  $(document).ready(function(){
   
      $("div#container").delegate("div ","click",function(){
    
        $(this).css("background-color","white").siblings().css("background-color","orange");
      }); 

      $("div#container").delegate("div:first","click",function(){


        $("div#container div :first").detach();
        
      });
  
  });





