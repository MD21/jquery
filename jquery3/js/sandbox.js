$(document).ready(function ()
{

  //Add five new list items to the end of the unordered list #myList.
  for(var add_5 = 0 ; add_5 < 5 ; add_5++)
  $("ul#myList ").html($("ul#myList").html()+'<li>new list item '+add_5+'</li>');
 
  //Remove the odd list items
  $("li:odd").detach();

  //Add another h2 and another paragraph to the last div.module
  $("div").last()
    .append("<h2></h2>").children().last().text("new h2 heading").end().end()
    .append("<p></p>").children().last().text("new paragraph");
 
  //Add another option to the select element; give the option the value "Wednesday"
  $("select").append("<option ></option>").children().last().text("wednessday").attr("val","wednessday");

  //Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  $("div").last().parent().append("<div></div>").children().last().text("new division");
  $("img").first().clone(true).appendTo($("div").last());


});
