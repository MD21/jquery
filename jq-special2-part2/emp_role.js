$(document).ready(function() {
    
  $( "#employees li.ui-draggable" ).draggable({
    appendTo: "body",
    helper: function(){
      return $("<li/>").text($(this).text())
    }
  });
  
  $( "#roles ul li ul" ).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    accept: ":not(.ui-sortable-helper)",
    drop: function( event, ui ) {
      var id = $(this).attr("id");
      var name = ui.draggable.text();
      var i = $(this).children("li:contains("+name+")").length;
      var cross = $("<img />").attr("src","images/delete.png").css("display","none");
      var emp = $("<li />").addClass('employee');
      if(i == 0 ){
        $(emp).text( ui.draggable.text() ).appendTo( this );
        cross.prependTo($(emp));
        add_todo(ui.draggable.text(),id);
      }
    }
  });
    
  $("#todos li>ul img").click(function(e){
    var li_display = $(this).siblings("li");
    if($(li_display).css('display') == 'none'){
        $(li_display).slideDown();
        $(this).attr("src","images/minus.png")
      }
    else{
      $(li_display).slideUp();  
      $(this).attr("src","images/add.png")
    }
  });


  function add_todo(name,id)
  {
    var emp_name = $("<div/>").attr("id","emp_name").text(name);
    var todo_list = $("<div/>").attr("id","todo_box");
    var add_img = $("<img/>").attr("src","images/add.png").css("vertical-align",'top');
    var init_text = $("<span/>").attr("id","add_todo").text("add todos for "+name+" here");
    add_img.appendTo(todo_list);
    init_text.appendTo(todo_list);
    var li = $("<li></li>");
    emp_name.appendTo(li);
    todo_list.appendTo(li);
    $(li).appendTo($("#todos ul>li>ul#"+id));
  }

  $("#roles ").delegate("img","click",function(event){
    var del_li = confirm("Do u want to delete the Employee !");
    var li = $(this).parent()
    if(del_li == true){
      var name = $(li).text();
      var todo_div = $("#todos div#emp_name:contains('"+name+"') ");
      var todo_li = $(todo_div).parent();
      $(li).detach();
      $(todo_li).detach();  
    }
  });

  $("#roles").delegate(".employee","mouseover mouseout", function(event){
    var li = $(this);   
    if (event.type == 'mouseover') {
      $(li).css("background-color","grey");
      $(li).children("img").css('display', 'inline');
    }
    else{
      $(this).css("background-color","white");
      $(this).children("img").css("display",'none');
    }
  });
});
