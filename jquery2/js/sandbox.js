$(document).ready(function ()
{
  
  //Figure out how many image elements on the page have an alt attribute.

   for(var i = 0 ; i < $("img").length ; i++ )
   {
      console.log(i+" image element's alt attribute is : "+$("img").eq(i).attr("alt"));
   }

  //Select the search input text box, then traverse up to the form and add a class to the form.
   $("input.input_text").parent().attr('class','new_Class_Added');
   console.log($("input.input_text").parent().attr('class'));

  //Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list
  //item.
   console.log($("#myList li.current").removeClass("current").next().attr("class","current"));            	 				
  //Select the select element inside #specials; traverse your way to the submit button.
  console.log($("#specials select").next("submit"));

  //Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling
  // elements.
  console.log($("#slideshow li").eq(0).addClass("current").siblings().addClass("disabled"));

});








