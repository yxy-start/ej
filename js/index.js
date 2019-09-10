
$(function(){


		//加载管理界面
		
	
		
		$(".left-nav").on("click","li",function(event){
			$(".left-nav > li").removeClass("current");
			// console.log(event.target);
			var url = $(this).attr("url");
			$(this).addClass("current");
			// console.log($(this).attr("url"));
			$("#wrapper").load(url+"?time",Math.random());
			//+"?time",Math.random() 清除缓存
		})
		$("#first").trigger("click");
		
		
})
