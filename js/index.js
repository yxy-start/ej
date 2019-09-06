
$(function(){

	$(".customer").on("click",function(){
		alert(5);
		//加载顾客管理界面
		$("#wrapper").load("./pages/customer.html");
	})

	$(".staff").on("click",function(){
		alert(4);
		//加载员工管理界面
		$("#wrapper").load("./pages/staff.html");
	})

	$(".order").on("click",function(){
		alert(3);
		//加载订单管理界面
		$("#wrapper").load("./pages/order.html");
	})

	$(".comment").on("click",function(){
		alert(2);
		//加载问卷管理界面
		$("#wrapper").load("./pages/comment.html");
	})

	$(".product").on("click",function(){
		alert(1);
		//加载顾客管理界面
		$("#wrapper").load("./pages/product.html");
	})








})
