function getSES(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return 0;
}
var pageref = document.referrer;
var pagename = window.location;
var useragent = navigator.userAgent;
var ok_ses=getSES("OK_SES");

document.write("<iframe ID='f126' style='display:none' src='http://traffic.okaybuy.com.cn/count.php?ok_ses="+ok_ses+"&ref="+ escape(pageref) +"&pagename="+ escape(pagename) + "&agent="+ escape(useragent)+"' width=\"0\" height=\"0\" marginwidth=\"0\" marginheight=\"0\"></iframe>");
if(location.href.indexOf("/admin/")<0){
	document.write("<script language=\"javascript\" type=\"text/javascript\" src=\"http://www.okaybuy.com.cn/wangmaiFooter.php\" ><\/script>");
	//document.write("<script language=\"javascript\" type=\"text/javascript\" src=\"http://b5b80b56.cc1.joyent.com.cn/click.php?uid=43\"><\/script>");

	//(function(){
	//var head = document.getElementsByTagName("head")[0];
	//var script = document.createElement("script");
	//script.src = ('https:' == document.location.protocol ? 'https://secure' : 'http://static') + '.mediav.com/mv.js';
	//script.onload =	script.onreadystatechange = function(){
	//	if ( !this.readyState || this.readyState== "loaded" || this.readyState == "complete" )
	//	{		
	//		try{
	//			var _mvsite=new $mvt.$site("m-16-0");
	//			_mvsite.$logConversion();
	//		}catch(e){}
	//		script.onload =	script.onreadystatechange = null;
	//	}
	//};
	//head.appendChild(script);
	//})();
	$(document).ready(function(){
		if(document.domain=="webq.okbuy.com"){
			$("a[target='_blank']").each(function(){
				$(this).attr("target","");
			});
		}
	});
}

/*
if($("div.com_review") && $("div.com_review").length==1){
	nowDate = new Date();
	nowDate=nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+"-"+nowDate.getDate()+" "+nowDate.getHours();
    if(nowDate>='2011-2-1 18' && nowDate<'2011-2-7' ){
		$("div.com_review").html("<p style='padding: 10px; background-color: rgb(255, 255, 204); width: 820px; border: 1px solid rgb(249, 223, 178);'>春节期间由于公司放假 , 将暂停用户提问 , 2月7日将恢复正常 , 敬请谅解 !</p>");
	}

}
*/