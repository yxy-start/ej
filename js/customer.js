$(function(){
	var baseURL = "http://134.175.154.93:6677";

// 加载数据
function reloadData(){
	var url = baseURL+"/customer/findCustomerAll";
	$.get(url,function(response,status){
		//1. 将tbody清空
		$("#customer_tbl tbody").empty();
		//2. 追加新的值
		response.data.forEach(function(item){
			var newTr = $(`<tr>
				<td><input type="checkbox" value="`+item.id+`"></td>
				<td>`+item.realname+`</td>
				<td>`+item.status+`</td>
				<td>`+item.photo+`</td>
				<td>`+item.telephone+`</td>
				<td>
					<a class="btn_del" href="#">删除</a>
					<a class="btn_upd" href="#">修改</a>
				</td>
			</tr>`);
			$("#customer_tbl").append(newTr)
		});
	});
}

// 文档加载完毕之后执行
$(function(){
	//调用重载数据
	reloadData();
})

//添加数据
	$("#btn_add").on("click",function(){
		document.getElementsByClassName("none")[0].style.display="block";
		document.getElementById("Add_content").style.display="block";
		


	})

		$(".add_input").on("click",function(){
			
			var url=baseURL+"/customer/saveCustomerOrUpdateCustomer";
			var date={
				realname:$("#realname").val(),
				telephone:$(".telephone").val(),
				status:$(".status").val(),
			};

			$.ajax(url,{
				method:"post",
				data:date,
				success:function(result){
					console.log(result);
				}
			})
			document.getElementsByClassName("none")[0].style.display="none";
			document.getElementById("Add_content").style.display="none";
			// 文档加载完毕之后执行
			$(function(){
			//调用重载数据
			reloadData();
		})
		
	})
	//删除该行
	$("tbody").on("click","A",function(event){
		if(event.target.className==="btn_del"){
			var url=baseURL+"/customer/deleteCustomerById";
			var id=event.target.parentNode.parentNode.firstElementChild.firstElementChild.value;
			var date ="id="+id;
			console.log(id);
			$.ajax(url,{
				method:"post",
				data:date,
				success:function(result){
					console.log(result);
				}
			})
			$(function(){
			//调用重载数据
			reloadData();
		})


		}
		// console.log(event.target);
		//修改
		if(event.target.className==="btn_upd"){
			document.getElementsByClassName("none")[0].style.display="block";
			document.getElementById("Add_content").style.display="block";
			document.getElementsByClassName("add_cg")[0].style.display="block";
			document.getElementsByClassName("add_input")[0].style.display="none";


			document.querySelector("input[name=realname]").value=event.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;
			 document.querySelector("input[name=status]").value=event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
			 document.querySelector("input[name=telephone]").value=event.target.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
			//点击进行修改
			$(".add_cg").on("click",function(){
				event.preventDefault();
				var url=baseURL+"/customer/saveCustomerOrUpdateCustomer";
				var date={
					id:$("input:[type=hidden]").val()，
					realname:$("#realname").val(),
					telephone:$(".telephone").val(),
					status:$(".status").val(),
				};

				$.ajax(url,{
				method:"post",
				data:date,
				success:function(result){
					console.log(result);

				}

				})
				$(function(){
				//调用重载数据
				reloadData();
				})
				

					
						
				document.getElementsByClassName("none")[0].style.display="none";
				document.getElementById("Add_content").style.display="none";
				document.getElementsByClassName("add_input")[0].style.display="block";

			})


				
			
			
		}
		
	})

})
})