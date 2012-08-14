$(document).ready(function(){

  //Hide all of the modules.
    $(".module").hide();

  //Create an unordered list element before the first module.
    console.log($("<ul>Unordered list</ul>").insertBefore($(".module").eq(0)));
   
    
  // Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the 
  //  unordered list element.
   
    $(".module").each(function(){
     console.log($(this).before("<li id = added_list_item><h2> heading </h2>"));
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
  $("#added_list_item").next(".module").show();

});
