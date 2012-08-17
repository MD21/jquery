$(document).ready(function(){

$("#specials form").after("<div id = special_info> <title></title> <font color = > <span></span> </font> <img src='null'> </div>");

//remove submit button
$("#specials form li.buttons").detach();


$("#specials form select").change(function(){

  var day = $(this).val();

  $.ajax({
    url : 'data/specials.json',
    type : 'GET',
    dataType : 'json',
    cache : true ,
    success : function(json){
      var day_ite = $(json).attr(day);

      $("#special_info title").text($(day_ite).attr("title"));
      console.log( $("#special_info title"));
       
      $("#special_info font").attr("color",$(day_ite).attr("color"));
      
      $("#special_info span").text($(day_ite).attr("text"));

      $("#special_info img").attr("src",$(day_ite).attr("image"));
    },

    error : function(xhr, status) {
      console.log('Sorry, there was a problem!');
    },
 
  });

});

});

