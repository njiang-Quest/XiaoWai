<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head> 
    <title>约会信息</title>
<link href="css/friend.css" type=text/css rel=stylesheet>
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
<LINK href="css/friend.css" type=text/css rel=stylesheet>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}

#Layer2 {
	position:absolute;
	width:569px;
	height:306px;
	z-index:2;
	top: 88px;
}
#Layer3 {
	position:absolute;
	width:567px;
	height:45px;
	z-index:1;
}
#Layer4 {
	position:absolute;
	width:565px;
	height:115px;
	z-index:2;
	left: 3px;
	top: 52px;
}
#Layer1 {
	position:absolute;
	width:161px;
	height:609px;
	z-index:3;
	
	top: 88px;
}
#Layer7 {
	position:absolute;
	width:388px;
	height:142px;
	z-index:4;
	top: 117px;
	
}
#Layer8 {
	
	width:388px;
	height:29px;
	
	z-index:1;
	background-color: #3366FF;
}


-->
</style>
<script language="JavaScript1.2">

/*
Highlight Table Cells Script- 
Last updated: 99/01/21
?Dynamic Drive (www.dynamicdrive.com)
For full source code, installation instructions,
100's more DHTML scripts, and Terms Of
Use, visit dynamicdrive.com
*/

function changeto(highlightcolor){
source=event.srcElement
if (source.tagName=="TR"||source.tagName=="TABLE")
return
while(source.tagName!="TD")
source=source.parentElement
if (source.style.backgroundColor!=highlightcolor&&source.id!="ignore")
source.style.backgroundColor=highlightcolor
}

function changeback(originalcolor){
if (event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="ignore")
return
if (event.toElement!=source)
source.style.backgroundColor=originalcolor
}


</script>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script type="text/javascript">
var httprequest = false;
	var appTitle;
	function sousuo(op){
			
			if(window.XMLHttpRequest){
	        	  httprequest = new window.XMLHttpRequest();
	      	   
	     	 }else if(window.ActiveXObject){//IE浏览器创建对象
	        	 try{
	         	 httprequest = new window.ActiveXObject("Msxm12.XMLHTTP");
		       
		         }catch(e){
	         	 httprequest = new window.ActiveXObject("Microsoft.XMLHTTP");
	         	 }
	         }
	         if(httprequest){
	        	var date = new Date();
	        	
	        		appTitle = document.getElementById("yuehuisousuo").value;
	        	
	        		url ="YuehuiSousuoServlet?appTitle="+ appTitle + "&saPage="+ op + "&date=" + date;
					httprequest.open("GET",url,true);
					httprequest.onreadystatechange=sendsuo;
					httprequest.send(null);
	        	
	         }
	}
	function sendsuo(){
			if(httprequest.readystate==4){
				if(httprequest.status==200){
					var message = httprequest.responseText;
			
				document.getElementById("Layer2").innerHTML=message;
					
				}
			}
		}
 function pageJump3(allPage){
      	var newPage = document.getElementById("jumpPage3").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		sousuoNextPage(newPage);
    	}
      }
      function pageJump4(allPage){
      	var newPage = document.getElementById("jumpPage4").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		
    		sousuoNextPage(newPage);
    	}
      }
      function sousuoNextPage(page){
     		 var date = new Date();
      		url ="YuehuiSousuoServlet?appTitle="+ appTitle + "&saPage="+ page + "&date=" + date;
			httprequest.open("GET",url,true);
			httprequest.onreadystatechange=sendsuo;
			httprequest.send(null);
      }
</script>
  </head>
  
  <body>
<div id="topbar"> 
</div><div id="container" align="center"> 
<div id="header"><div id="navBar" class="site-nav rr"> 
<div class="navigation-wrapper"> 
<div class="navigation navigation-new clearfix"> 
<div id="logo2"><h1><a href="http://www.xiaowai.com" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏"><img alt="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" height="35" width="120" src="index_img/logo.png" /></a></h1></div> 
						<div class="nav-body clearfix"><div class="nav-main"> 
<div class="menu"><div class="menu-title"><a stats="Hd_home" accesskey="1" href="HomePage.html">首页<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div id="profileMenuActive" class="menu-title with-drop-menu"><a id="showProfileMenu" accesskey="2" stats="Hd_Profile" href="PersonalPage.html">个人主页<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div class="menu-title with-drop-menu" id="friendMenuActive"><a id="showFriendMenu" accesskey="3" stats="Hd_frd" href="friend.html">好友<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></div>	
<div class="menu"><div class="menu-title with-drop-menu"><a href="#" accesskey="4" id="showAppMenu">约会<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 	
</div>					
<div class="menu"><div class="menu-title with-drop-menu"><a href="ershoushichang.html" accesskey="4" id="showAppMenu">跳蚤市场<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 
</div> 
<div class="menu"> 
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="StoreIndex.html">商家<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
						</div> 
<div class="nav-other"><div class="menu"> 
<div class="menu-title"> 

</div> 
</div> 
		<div class="menu"> 
<div class="menu-title" id="searchMenuAction"><a accesskey="7" href="http://browse.xiaowai.com/search.do?_sgrf=navi" onMouseOver="" stats="Hd_sMenu">搜索</a></div> 
</div> 
 
<div id="navSearch"><form method="post" id="globalSearchForm" action="http://browse.xiaowai.com/searchEx.do?from=opensearch"> 
<div id="search-input"> 
<input stats="Hd_sInput" type="text" size="25" maxlength="100" id="navSearchInput" accesskey="/" name="q" class="input-text" value="" tabindex="1" /> 
</div> 
<div id="search-submit"> 
<a stats="Hd_sBtn" id="navSearchSubmit" class="submit" href="http://browse.xiaowai.com/search.do?_sgrf=navi">搜索</a> 
</div> 
</form> 
</div> 
<div class="menu account-action" id="accountMenu"> 
<div class="menu-title"><a href="javascript:;">退出</a></div> 
</div> 
</div></div> 
</div> 
</div> 
</div> 
</div> 
<table width="980" border="0" align="center">
  <tr>
    <td height="50" colspan="3">
      <table width="100%" border="0">
        <tr>
          <td width="6%">&nbsp;&nbsp;&nbsp;<img src="images/haoyou.jpg" /></td>
          <td width="94%" align="left"><strong><font size="+1">约会</font></strong></td>
        </tr>
    </table></td>
  </tr>
  <tr>
  		<td width="162" height="540"><%@include file="XiaoWai_Yuehui_fenzu.jsp" %>
	</td>
	<td width="588">	<div id="Layer2">  
<div id="Layer3">
        <table width="100%" height="41" border="0" background="images/beijing.jpg">
        <tr>
          <td width="19%" height="35" align="center"><a 
                        href="YuehuiMyAppintmentServlet?myAppPage=1"><img 
                        height=30 src="images/myyuehui.jpg" width=76 
                        border=0 /></a></td>
          <td width="15%" align="center"><a href="XiaoWai_Yuehui_CreateYuehui.jsp"><img 
                        height=28 src="images/addyuehui.jpg" width=71 
                        border=0 /></a></td>
          <td width="15%"><a href="YuehuiMyxiangyingServlet?myXyPage=1"><img 
                        height=32 src="images/yuehuixiangying.jpg" width=81 
                        border=0 /></a></td>
          <td width="51%">&nbsp;</td>
        </tr>
      </table>
</div>
<div id="Layer4">
		<form action="yuehuiCreateServlet" name="addyuehui" method="post" onsubmit="return mesIsEmpty()">
        <table width="100%" height="168" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td height="40"><font size="+1" color="#333333"><strong>创建约会</strong></font></td>
            <td width="52%"></td>
            <td width="25%">&nbsp;</td>
          </tr>
          <tr>
            <td height="25"></td>
            <td width="16%" align=center><font size="+2" color="red"><strong>恭喜！发布成功！</strong></font></td>
            <td></td>
          </tr>
          <tr>
            <td height="25"></td>
            <td width="16%" align="right"></td>
            <td></td>
         
          </tr>
         
        </table>
        </form>
      </div>
	
	</div></td>
	<td>
	<div id="Layer5">
      <table width="100%" height="81" border="0">
        <tr>
          <td><table width="100%" border="0">
              <caption>
                <hr />
            </caption>
            <tr>
                <td><a href=""><font size="+1">凡客经典帆布鞋</font></a></td>
            </tr>
              <tr>
                <td><img src="images/guanggao1.jpg" /></td>
              </tr>
          </table></td>
        </tr>
        <tr>
          <td><table width="100%" border="0">
              <caption>
                <hr />
            </caption>
            <tr>
                <td><a href=""><font size="+1">免费唱歌的软件</font></a></td>
            </tr>
              <tr>
                <td><img src="images/guanggao2.png" /></td>
              </tr>
          </table></td>
        </tr>
        <tr>
          <td><table width="100%" border="0">
              <caption>
                <hr />
            </caption>
            <tr>
                <td><a href=""><font size="+1">买酒就上酒仙网</font></a></td>
            </tr>
              <tr>
                <td><img src="images/guanggao3.jpg" /></td>
              </tr>
          </table></td>
        </tr>
      </table>
</div>
	</td>
	</tr>
</table>


  </body>
</html>
