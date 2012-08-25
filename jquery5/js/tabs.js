$(document).ready(function(){

  //Hide all of the modules.
  $(".module").hide();

  //Create an unordered list element before the first module.
  ul = $("<ul />").html("unordered list").attr("id","ul_before_module");

  $(".module :first").before(ul);
    
   // Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to 
   // the unordered list element.
   
   $(".module").each(function(){

     li_id = $(this).attr("id");
     heading = $(this).children(":header").text();
     li = $("<li />").attr("id",li_id).text(heading); 

     $("#ul_before_module").append(li);
    
    });


   //Bind a click event to the list item that:
   $("#ul_before_module li").bind('click',function(){
  
   module = $("div#"+$(this).attr("id"));

    //Shows the related module, and hides any other modules
     $(module).show().siblings(".module").hide(); 

    //Adds a class of "current" to the clicked list item
    $(module).addClass("current");

    //Removes the class "current" from the other list item
    $(module).siblings(".module").removeClass("current");
  });
  
  //Finally, show the first tab.
  $(".module :first").show();

});
