$(document).ready(function ()
{
  //Add five new list items to the end of the unordered list #myList.
  for(var add_5 = 0 ; add_5 < 5 ; add_5++){
    li = $('<li />').html("new list item"+add_5);
    console.log($("ul#myList ").append(li));
   }
  
  //Remove the odd list items
  $("li:odd").detach();

  //Add another h2 and another paragraph to the last div.module
  heading = $("<h2 />").text("new h2 heading");
  para = $("<p />").text("new paragraph");

  $("div").last() .append(heading) .append(para);
 
  //Add another option to the select element; give the option the value "Wednesday"
  wed = $("<option />").html("wednessday").val("wednessday");

  $("select").append(wed);

  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  new_div = $("<div />").addClass("module").html("new division");
  copy_image = $("img:first").clone("true");

  $(new_div).append(copy_image);
  $("div.module :last").append(new_div);
});

