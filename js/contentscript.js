

$("#stickthread_1111336").after("<input id='Pwd'><button id='PwdSearch'>查询</button><textarea id='result'></textarea>");
$("#PwdSearch").click(function(){
		var password = $("#Pwd").val();
	    getMd5Result(password,function(result){$("#result").text(result);});
		return false;
});


function getMd5Result(ciphertext,callback)
{
	$.get("http://www.md5.cc/ShowMD5Info.asp",
		   {GetType:'ShowInfo',md5_str:ciphertext},
		   function(data,state){
		   		var result = $(data).text().trim();
		   		alert(result);
		        callback(result);
    		}
		);
}



