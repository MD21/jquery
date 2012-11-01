search = [];
color = [];
brand = [];
filter_sold = [];
filter_sold[0] = "all";
filter_sold[1] = "available";

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
    var type_in = ind == 0 ? "radio" : "checkbox"
    count++;
    var option = $("<p />").attr("id",count);
    $.each(arr,function(pos,value){         
      option.append($("<input/>").attr("type", type_in).attr("id",count).attr("name",type_in).text(value));
      option.append(value + "<br />")    
    });
    option.appendTo($("#check"));
  }); 
}

function filter_product(clicked,sold_out){
  
  if(sold_out == 1){
    $("#products img").hide();
    $("#check #1 :input").each(function(index,element) {
      if($(element).is(':checked')){
        if($(element).text() == "available") { 
          $("#products img."+$(element).text()).show();
        }
        else {
          $("#products img").show();
        }
      }      
    });
  }
  else{
    if ($("input[type = checkbox]:checked").length){
      $("#products img").hide();
      $("#check #2 :input").each(function(index,element){
        if($(element).is(':checked')){
          $("#products img."+$(element).text()).show();          
        }        
        $("#check #3 :input").each(function(index2,element2){
          if($(element2).is(':checked')) {
            $("#products img."+($(element2).text()).substring(6)).show();
          }
        });        
      });           
    }
    else{
      $("#products img").show();
    }  
  } 
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