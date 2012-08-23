$(document).ready(function(){

  //Hide all of the modules.
  $(".module").hide();

  //Create an unordered list element before the first module.
  ul = $("<ul />").html("unordered list");

  $(".module :first").before(ul);
    
   // Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to 
   // the unordered list element.
   
   $(".module").each(function(){

     heading = $(this).children().first().text();
     li = $("<li />").attr("id","added_list_item").text(heading); 

     $(this).before(li);
    
    });


   //Bind a click event to the list item that:
   $("*#added_list_item").bind('click',function(){

    //Shows the related module, and hides any other modules
     $(this).next(".module").show().siblings(".module").hide(); 

    //Adds a class of "current" to the clicked list item
    $(this).next(".module").addClass("current");

    //Removes the class "current" from the other list item
    $(this).next(".module").siblings(".module").removeClass("current");
  });
  
  //Finally, show the first tab.
  $(".module :first").show();

});