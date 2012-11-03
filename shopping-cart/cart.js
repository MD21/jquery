function create_products(product_json) {
  $(product_json).each(function(index,product){
    var tr = $("<tr/>").attr("id",index);
    var description_td = $("<td/>").attr("id","product_td")
    $.each(product,function(column,element){
      switch(column) {
        case 'name' :
          var pro_name = $("<p />").text(element);
          pro_name.appendTo(description_td);
        break;
        case 'url' :
          var img_td = $("<td />")
          var image = $("<img />").attr("src","images/"+element)
          image.appendTo(img_td);
          img_td.appendTo(tr);
        break;
        case 'category' : 
          var cat = $("<p />").text("Category: "+element);
          cat.appendTo(description_td);
        break;
        case 'description' :
          var desc = $("<p />").text("Description :"+element)
          desc.appendTo(description_td);
        break;
        case 'price' :
          var price = $("<p />").attr("id","product_price").text("PRICE: "+element);
          price.appendTo(description_td);
        break;        
      }      
    });
    description_td.appendTo(tr);
    
    var quan = $("<td />").attr("id","quantity_td");
    var input_quan = $("<input />").attr("type","textbox").attr("id","quantity_"+index);
    quan.text("Quantity: ");
    input_quan.appendTo(quan);
    quan.appendTo(tr);

    var cart_td = $("<td />")
    var add_cart = $("<input />").attr("type","button").attr("id","add_cart").attr("value","add to cart");
    add_cart.appendTo(cart_td);
    cart_td.appendTo(tr);

    tr.appendTo($("#pro_grid"));
  });
}

function total_amount() {
  var total = 0.0
  $("td.amount").each(function(index,element){
    total += parseFloat($(element).text(),10)
  });
  $("#total_amount").val(total.toFixed(2));
}

function add_to_cart(tr,product) {
  if($("#cart_grid tr."+product['id']).length) {
    var new_quan = $("#cart_quantity_"+product['id']).val()
    if($.isNumeric(new_quan) && new_quan >= 0) {  
      new_quan = parseInt(new_quan,10) + parseInt(tr,10);
      $("#cart_quantity_"+product['id']).val(new_quan)
      var new_total = (parseFloat(product['price'],10) * new_quan).toFixed(2);
      $("#subtotal_"+product['id']).text(new_total)
    }
  }
  else {
    var cart_rec = $("<tr />").addClass(product['id'])
    var product_td = $("<td />").attr("id","product_td")
    var img_div = $("<div />")
    var image = $("<img />").attr("src","images/"+product['url']).addClass("cart_img")
    image.appendTo(img_div)
    img_div.appendTo(product_td);
    var desc_div = $("<div />").text(product['name'])
    desc_div.appendTo(product_td);
    product_td.appendTo(cart_rec);

    var price_td = $("<td />").attr("id","price_td").text(product['price']);
    price_td.appendTo(cart_rec);

    var quantity_td = $("<td />").attr("id","quan_td");
    var quan = $("<input />").attr("id","cart_quantity_"+product['id']).val(tr).attr("type","text");
    quan.appendTo(quantity_td);
    quantity_td.appendTo(cart_rec);

    var amount = (parseFloat(tr,10) * parseFloat(product['price'],10)).toFixed(2)

    var subtotal = $("<td />").attr("id","subtotal_"+product['id']).text(amount).addClass("amount");
    subtotal.appendTo(cart_rec);

    var remove_td = $("<td />");
    var remove_button = $("<input />").attr("type","button");
    remove_button.attr("value","remove").attr("id","remove_rec");
    remove_button.appendTo(remove_td);
    remove_td.appendTo(cart_rec)
    cart_rec.appendTo($("#cart_grid"))
  }
  total_amount();
}

$(document).ready(function(){
	$("#tabs").tabs();
	$.ajax({
    url : "product.json",
    type : "get",
    dataType : "json",   
    success : function(json){
      create_products(json);
      $("*#add_cart").click(function(){
        var tr_id = $(this).parents("tr").attr("id")
        var quantity = $("#quantity_"+tr_id).val();
        if($.isNumeric(quantity) && quantity > 0) {
          add_to_cart($("#quantity_"+tr_id).val(),json[tr_id]);
        }    
      });

      $("#cart_grid ").delegate('#quan_td :input','focusout',function(){
        var new_quan = $(this).val();
        if($.isNumeric(new_quan) && new_quan >= 0) {
          var product_id = $(this).parents("tr").attr("class")        
          var new_amount = (new_quan * parseFloat(json[product_id]['price'],10)).toFixed(2)
          $("#subtotal_"+product_id).text(new_amount)
          total_amount();
        }
      });
      $("#cart_grid").delegate('#remove_rec','click',function(){
        $(this).parents("tr").detach();
        total_amount();
      });
    },
    error : function(xhr,status){
      console.log(status)
    }    
  });
});