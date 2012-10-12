function search_todo()
  {
    var todo_no = parseInt($("#search").val(),10);    
    $("#todos ul li ul li").css("display","none"); 
    $("#todos ul li ul li").each(function(index){
    var len = $(this).children("div#todo_box").children().length;
    if(len == (todo_no+1))
    {
       $(this).slideDown().siblings("li").slideDown();
       $(this).children("div#emp_name").fadeTo(1500, 0).fadeTo(1500, 1.0);
     }  
  });
}

$(document).ready(function(){
   
  $("#todos > ul > li > ul").delegate(" div#todo_box > img","click", function(){

    var todo_div = $(this).parent();

    if($(todo_div).children().length == 3)
    $(todo_div).css("overflow","scroll");
            
    $(todo_div).animate({ scrollTop: $(todo_div).children().last().offset().top},'slow');

    $(todo_div).children("span").detach();

    var todo_container = $("<div/>").attr("id","todo_container");
    var input_text = $("<input/>").attr("text","textbox").attr("id","text").attr("size","32px");
    var new_todo = $("<div/>").attr("id","new_todo");
    input_text.appendTo(new_todo);
    var img_todo = $("<div/>").attr("id","img_todo");


    var add_img = $("<input />").attr("class"," add").attr("type","image").attr("src","images/save.png");
    var delete_img = $("<input />").attr("class","delete ").attr("type","image").attr("src","images/delete.png");
    var edit_img = $("<input />").attr("class","edit").attr("type","image").attr("src","images/edit.png");


    add_img.appendTo(img_todo);
    delete_img.appendTo(img_todo);

    new_todo.appendTo(todo_container);
    img_todo.appendTo(todo_container);

    todo_container.appendTo(todo_div);

    $("* #img_todo").delegate(".edit","click", function(){

      var text = $("#new_todo").text();
      var input = $("<input/>").attr("text","textbox").attr("id","text").attr("size","32px").attr("value",text);
      var textbox = $(this).parent().siblings("#new_todo");

      $(textbox).text("").append(input).css( "border","");
      $(this).replaceWith(add_img);
    });

    $("* #img_todo").delegate(".add","click", function(){

      var text = $("#text").val();
      $("#text").detach();
      var textbox = $(this).parent().siblings("#new_todo");

      $(textbox).text(text).css( "border","1px solid");
      $(this).replaceWith(edit_img);
    });

    $("* #img_todo").delegate(".delete","click", function(){

      $(this).parent().parent().detach();

      if($(todo_div).children().length == 1)
      {
        var span = $("<span/>").attr("id","add_todo").text("add todos for "+name+" here");          
        $(todo_div).append(span);    
      }               
    });
  });
    
  $("#todos >ul> img").click(function(e){

    var li_display = $(this).attr("id");

    if(li_display == 'expand')
      $(this).siblings("li").children().children("li").slideDown();
    if(li_display == 'collapse')
      $(this).siblings("li").children().children("li").slideUp();
  });


  $("#employees").delegate(".ui-draggable ","mouseover mouseout", function(event){
    var li = $(this);
    if (event.type == 'mouseover') 
    {
      $(li).css("background-color","grey");
      $(li).children("img").removeClass("hidden")
          
     }  
   else{
       $(this).css("background-color","white");
       $(this).children("img").addClass('hidden');
       }
  });

  $("#employees").delegate("img","click",function(){
    var del_li = confirm("Do u want to delete the Employee !");
    var li = $(this).parent()
    if(del_li == true)
    {
      var name = $(li).text();
      var todo_div = $("#todos div#emp_name:contains('"+name+"') ");
      var todo_li = $(todo_div).parent();

      var roles_div = $("#roles ul>li>ul>li:contains('"+name+"') ");
      var roles_li = $(roles_div).parent();


      $(li).detach();
      $(todo_li).detach();
      $(roles_li).detach();
      }
  });
});