search = [];
color = [];
brand = [];
filter_sold = [];
filter_sold[0] = "available";

function show_product(list_product){
  for(var i = 0 ; i < list_product.length; i++) {
    var img = $("<img />").attr("src","images/"+list_product[i].url);
    img.addClass(list_product[i].color);
    img.addClass(list_product[i].brand.substring(6))
    if(list_product[i].sold_out == '0')
      img.addClass("available")
    img.appendTo($("#products"));

    if($.inArray(list_product[i].color,color) == -1 ) { 
      color.push(list_product[i].color);
    }    
    if ($.inArray(list_product[i].brand, brand) == -1 ) {       
      brand.push(list_product[i].brand);
    }    
  }
  search.push(filter_sold)
  search.push(color);
  search.push(brand);
}

function show_checklist(){
  count = 0
  $.each(search,function(ind, arr){    
    count++;
    var option = $("<div />").attr("id",count);
    $.each(arr,function(pos,value){         
      var check_box = $("<input/>").attr("type", "checkbox").attr("id",count)      
      if(value.indexOf("BRAND") > 0) {
        check_box.text(value.substring(6));
      }
      else {
        check_box.text(value);
      }
      option.append(check_box);
      option.append(value + "<br />")    
    });
    option.append("<br />");
    option.appendTo($("#check"));
  }); 
}

function filter_product(clicked){    
  $("#products img").show();
  $("img").removeClass("filtered");
  if($("#check :input").is(":checked")) {    
    $("#check div").each(function(ind,block){
      checked_list = [];
      $(block).children(":input").each(function(index,element){
        var filter = $(element).text();
        if($(element).is(":checked")) {
          if(filter.indexOf("BRAND") >= 0) {
            checked_list.push(filter.substring(6));          
          }
          else {
            checked_list.push(filter);                 
          }     
        }        
      });
      if(checked_list.length > 0) {
        filter_image(checked_list);
      }
    });  
  }
}

function filter_image(filter) {
  var img_set = $("#products img:visible")
  var filter_set = $(img_set).each(function(i,image){
      $(image).removeClass("filtered")
  });
  $.each(filter,function(index,element){
    $.each(filter_set,function(id,image){  
      if($(image).hasClass(element)){
        $(image).addClass("filtered");
      }
    });    
  });
  $("#products img").hide();
  $("#products img.filtered").show();
}
 
$(document).ready(function(){
	$.ajax({
		url:"pro.json",
		type: "get",
		dataType : "json",
    cache : true,
		success: function(json){
      show_product(json);
      show_checklist();		
      $("#check :input").click(function(){
        filter_product($(this).text(),$(this).attr('id'))
      });
    },
		error : function(xhr,status){
      console.log(status);
		},
	});
});
