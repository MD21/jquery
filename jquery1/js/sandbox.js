$(document).ready(function ()
{
  //Select all of the div elements that have a class of "module".
  $("div.module").css("backgroundColor","orange");
     
  //three selectors that you could use to get the third item in the #myList unordered lis
  $("ul#myList li:nth-child(3)").css("color","blue");
  $("#myListItem").css("backgroundColor","orange");
  $("div ul li#myListItem").css("font-weight","bold");	

  //Select the label for the search input using an attribute selector
    $("label[for = q]").css("backgroundColor","orange");

  //Figure out how many elements on the page are hidden
   var hidden_ele = $("*:hidden").length;
   console.log("Total hidden elements are : "+hidden_ele);

  //Figure out how many image elements on the page have an alt attribute.
   var image_has_alt = $("img[alt]").length;
   console.log("Total image elements with alt attribute are : "+image_has_alt);

  //Select all of the odd table rows in the table body.
  $("tr:odd").css("backgroundColor","orange");

});







