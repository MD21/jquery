$(document).ready(function(){

$("#specials form").after("<div></div>").next("div").attr("id","special_info")
                                        .append("<title></title>")
                                        .append("<font></font>").children().last().append("<span></span>").end().end()
                                        .append("<img>");

$("#specials form li.buttons").detach();


$("#specials form select").change(function(){

  var day = $(this).val();

  $.ajax({
    url : 'data/specials.json',
    type : 'GET',
    dataType : 'json',
    cache : true ,
    success : function(json){
      var day_item = $(json).attr(day);

      $("#special_info title").text($(day_item).attr("title"));
    
       
      $("#special_info font").attr("color",$(day_item).attr("color"));
      
      $("#special_info span").text($(day_item).attr("text"));

      $("#special_info img").attr("src",$(day_item).attr("image"));
    },

    error : function(xhr, status) {
      console.log('Sorry, there was a problem!');
    },
 
  });

});

});
