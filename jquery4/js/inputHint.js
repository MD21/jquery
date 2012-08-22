$(document).ready(function(){


  //Set the value of the search input to the text of the label element
  $("input.input_text").val($("label").text());

  //Add a class of "hint" to the search input
  console.log($("input.input_text").addClass("hint"));

  //Remove the label element
  var label_detach = $("label").detach();
  
  //Bind a focus event to the search input that removes the hint text and the "hint" class
  $("input.input_text").bind("focus",function(){
  $("input.input_text").removeAttr("value").removeClass("hint");
  });  

  //Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  $("input.input_text").bind("blur",function(){
  $("input.input_text").val(label_detach.text());
  });

});