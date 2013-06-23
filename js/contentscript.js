$("#stickthread_1111336").after("<input id='Pwd'><button id='PwdSearch'>查询</button><textarea id='result'></textarea>");
$("#PwdSearch").click(function(){
		var password = $("#Pwd").val();
	 	$.ajax({
		    url: "http://www.cmd5.com/default.aspx",
		    type: "POST",
		    data: "__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=l03I1%2BSajFxjds3lZw1xGNk7ddrFIY6HSePKBcOf4S%2F9XAtcgYNlcSjg8ocpaabbP5vdUaufhCwPQvjV5WUApVmf3%2F88jLGfp35x2Wj0XFQdhWxb662YuuCZVa6YZAGGcJrImAtBCWq4fYUOS1v%2BaK2JOxQ1k%2FIrDond9sBbf3lTXSGfv2sob9zaOa0j9HXQeKd2LWSTrARv8wqii%2BAVm9yq5MoA1dcOMSPUGL0F8Ku7BLth8TGtkhOJFgdRANIWynFzE6pfBbzGn49QqoF%2By7%2FQ79tbEhRsaqQJOD6chB7RA%2FOCeyZKfS95velh%2BM7DoIda%2BRL5ea4JRHkoLvajpXmD3QfPpGsIjUYAKkeuoIeKMBmM%2B11wsHRGOnP5yip1ZbYMf%2FzzZObtyOHy7FF1a4BnrKQ00Kfo7z5jXO6K2m%2FZRx1pUQaVkbmIXU5KEok9OVV6kn9xrZ0JUU%2FBTWDS40Etvv%2FEM7yKuDWiCNtFaEu9cllRYWzIHsANAaTLUXVQwlPTBBuMkZdVxMxa0iyGh7kG3QG632UoulQx39NARrvKpRlO8LEMN0trREQ%2FcppdbgJwcxpmL3j53tYibDJM3jVer45VyGEvm6o6IDhpdMQ2Z7GPgNyU6xjeMU3FCPkZNERWvXTZTKYIw%2FDCMF5YviHuGnNEgYAmTg2jnubIHSD5JUII1eAZgZJfA%2BKXEE932aLkE1C6FT5XHJx0tZJU3aL9FgorQJ3z0mc3dy8VlbzaTgadT9vfRChb6VesLyCfRMceEHj5l7al4Y6Hvhh6q1x1hup9mFiuFL7WLcuCVu1giEm5LAI%2B5YOJEZaL4vMmT9%2BUSKul%2Fcg9KMGOiyqXhMxWfjuiILtcG4e3QJqae0vz0dj5pqGCWQJMuVFghHJ8hdjtOHt0u%2F3hEwfJERk3rU92as9eIrJlqB6gQXYTRhl1VtBWy0mCreeiAGqzBOnAy6jVz%2FopR5T3varxWXhrbrXBTtAeqMTwRSltTGa2s6Gc0yIwFBkrlSxG9tfwZCPU0nzIMGEKFgdFI6jivgydbfLd8Mi7EAXeNmClV1PzNY5iBELIGrfcIE8Wtv2On9o%2BvSV3fVAigmXPPFYpczPepIh2b4kFqTBY3D4skefnEXtPzhnKuDUMTVYKMb3G59Kaqf2ZDsItngX5RiLLmFfkYhEwxd9E3QWVJoCOYFA%2FOBFRg3uv0%2BOkabH%2FcvDWTSGUDGNr5ACfzSmLPBNznmpxZ1wdGim9vCUMrxythLh3oRIxlZx%2BzcxhN4Ul2KjnuNvI1xZK%2FknY6D92adaK8pEsM0yiurUsaaLlLxRQNXjvO%2Bdws8XZvNLKIpCgmHSTnnqoYBK7EXdUgNY9IYT8rCbx2EqcJHdmrOWmIr0qCAPC2bnifwa7OC94jg0X4QtBsT1Kn0coMoTfTSbxzGKbMMNdG45GO2fVnV5ZyXxEv97NpVItTlwZyzy6ms444MJG347oBLAfptGXoea63Q1CPPo9DaTWrzZXtLMxiC2VrX9epO9JYUJ01P20e0BKplFGepkNXH2acnjtfaggoqF1lc%2B19YpLyMOBZrCfNFg79w6anzhAL%2B02heEAFcvKs6iTCP0wGeB585XZ5l%2FtrdqTSK%2FTvD1lTAY69dOHzsMefLl%2FlCUh6cq9x07ixZ6jDN0RCOVhpYYjjo9cUeqcRc9%2BK2HKoVUED2qdSsWSRtFGxfkwbm5klQMzEjkvGzPXj2sXq0JOLzf0zRmK48W0SbXVFLNZaH1QIaxxfwjr2vRSWg%3D%3D&ctl00%24ContentPlaceHolder1%24TextBoxInput="+password+"&ctl00%24ContentPlaceHolder1%24InputHashType=md5&ctl00%24ContentPlaceHolder1%24Button1=%E8%A7%A3%E5%AF%86&ctl00%24ContentPlaceHolder1%24HiddenField1=0&ctl00%24ContentPlaceHolder1%24HiddenField2=U%2Bjqdzb8pPrXblxy%2FBY298lbJhFBLdZ3cb3ccmEa2EDWGKaNXXgBwjnI4VzsIE1y",
		    contentType: "application/x-www-form-urlencoded", 
		    success: function(d) {
		    	alert(d);
		    	var result = $(d).find("#ctl00_ContentPlaceHolder1_LabelAnswer").html();
		    	var end = result.indexOf("<br>");
		    	result = result.substring(0,end);
		    	$("#result").text(result);
		    }

		});
		return false;
});




