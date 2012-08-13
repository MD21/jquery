$(document).ready(function ()
{
  
  //Add five new list items to the end of the unordered list #myList.
  for(var add_5 = 0 ; add_5 < 5 ; add_5++)
  $("ul#myList").append("<li> new list item "+add_5+"</li>");

  //Remove the odd list items
  
  $("li:odd").detach();

  //Add another h2 and another paragraph to the last div.module
  $("div").eq($("div").length-1).append("<h2>new h2 heading</h2>").append("<p>new paragraph<p>");
 
  //Add another option to the select element; give the option the value "Wednesday"
  $("select").append("<option value = 'Wednessday'>Wednessday</option>");

  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $("div").eq($("div").length-1).parent().append("<div>New Div </div>");
  $("img").clone(true).appendTo($("div").eq($("div").length-1));


});








