$(document).ready(function(){

  $(".accordion a").bind( 'click' , function(e){
    e.preventDefault();

    if($(this).children().length == 0)
    {
      var url = $(this).attr("href");
      var name = $(this).text();
  
      window.location = url+"?name="+name;
    }
  });

  var link_name = window.location.toString();
  var name = link_name.split('?name=');

  name[1]= unescape(name[1]);

  if(name[1] != "undefined"){
    var node = $(".accordion a:contains("+name[1]+")");
    $(node).css("background-color","orange");
    
    var parent_li = $(node).parents("ul");
    $(parent_li).siblings("a").addClass('active'); 
  }

});


