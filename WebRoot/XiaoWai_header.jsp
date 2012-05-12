<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'header.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
   <script type="text/javascript">
 	function friendName()
	{
		
		var varname = document.getElementById("navSearchInput").value;
		window.location.href="SearchFriendServlet?name="+varname;
	
	}
 </script> 
<div id="container" align=center> 
<div id="header"><div id="navBar" class="site-nav rr"> 
<div class="navigation-wrapper"> 
<div class="navigation navigation-new clearfix"> 
<div id="logo2"><h1><a href="http://www.xiaowai.com" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏"><img alt="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" height="35" width="120" src="index_img/logo.png" /></a></h1></div> 
						<div class="nav-body clearfix"><div class="nav-main"> 
<div class="menu"><div class="menu-title"><a stats="Hd_home" accesskey="1" href="XiaoWai_Homepage.jsp">首页<span class="drop-menu-btn"></span></a></div> 
</div> 
<div class="menu"> 
<div id="profileMenuActive" class="menu-title with-drop-menu"><a id="showProfileMenu" accesskey="2" stats="Hd_Profile" href="/XiaoWai/PersonalPageServlet?userID=${user.userId }">个人主页<span class="drop-menu-btn" id="profileDropMenu"></span></a></div> 
</div> 
<div class="menu"> 
<div class="menu-title with-drop-menu" id="friendMenuActive"><a id="showFriendMenu" accesskey="3" stats="Hd_frd" href="XiaoWai_Friend_Shouye.jsp">好友<span class="drop-menu-btn" id="friendDropMenu"></span></a></div></div>
<div class="menu"> 
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="XiaoWai_Yuehui_Shouye.jsp">约会<span class="drop-menu-btn"></span></a></div> 
</div> 							
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_ErShou_Shouye.jsp" accesskey="4" id="showAppMenu">跳蚤市场<span class="drop-menu-btn" id="appDropMenu"></span></a> 
</div> 
						  </div> 
<div class="menu"> 
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="StoreSearchAllStore" target="_blank">商家<span class="drop-menu-btn"></span></a></div> 
</div> 
						</div> 
<div class="nav-other"><div class="menu"> 
<div class="menu-title"> 

</div> 
</div> 
													<div class="menu"> 
<div class="menu-title" id="searchMenuAction"><a accesskey="7" href="javascript:friendName()" onMouseOver="" stats="Hd_sMenu"  >搜索</a></div> 
</div> 
 
<div id="navSearch"><form method="post" id="globalSearchForm" action="http://browse.xiaowai.com/searchEx.do?from=opensearch"> 
<div id="search-input"> 
<input stats="Hd_sInput" type="text" size="25" maxlength="100" id="navSearchInput" accesskey="/" name="q" class="input-text" value="" tabindex="1" /> 
</div> 
<div id="search-submit"> 
<a stats="Hd_sBtn" id="navSearchSubmit" class="submit" href="javascript:friendName()">搜索</a> 
</div> 
</form> 
</div> 
<div class="menu account-action" id="accountMenu"> 
<div class="menu-title"><a href="">帐号</a></div> 
</div> 
</div></div> 
</div> 
</div> 
</div> 
</div> 

  </body>
</html>
