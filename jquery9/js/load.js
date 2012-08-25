$(document).ready(function(){

  $("div#blog ul li h3").each(function(index){

    var div = $("<div />").attr("id","post"+ (index + 1))
    $(this).after(div);

    var bind_on = $(this).children("a").attr("href");

    $(this).data( bind_on , $(this).next("div") );

  });


  $("div#blog ul li h3").bind( 'click' , function(e){
    e.preventDefault();

    var bind_on = $(this).children("a").attr("href");
    var load_data = "data/blog.html #"+$(this).next("div").attr("id");
    $(this).data( bind_on ).load( load_data );

  });

});



