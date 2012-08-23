$(document).ready(function(){

  $("#blog h3").click(function(e){
    e.preventDefault();
       $("#blog p.excerpt").slideUp();
       $(this).next("p.excerpt").slideDown();
     });
});
