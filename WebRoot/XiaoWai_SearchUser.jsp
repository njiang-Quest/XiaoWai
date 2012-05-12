<%@ page language="java" import="java.util.*,com.csu.xiaowai.bean.UserBean,com.csu.xiaowai.dao.UserDao;" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
 	 <c:set var="user" value="${user}"></c:set> 
    <base href="<%=basePath%>">
    
    <title>校外 - 搜索结果</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<!--[if lte IE 7]><script type="text/javascript" src="http://s.xnimg.cn/a17120/n/core/expressions.js"></script><![endif]-->
<link href="css/layout.css"rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="css/base.css"></script>    
<link rel="stylesheet" href="css/style2.css" />
<script type="text/javascript" src="js/tinyeditor.js"></script>


<link
href="css/blog.css"
rel="stylesheet" type="text/css" media="all" />
<link
href="css/friendSelector.css"
rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript"
src="js/xn.ui.friendSelecotorMenu.js">
</script><script type="text/javascript" src="js/tiny_mce.js"></script>
<script type="text/javascript" src="js/xn.form.editor.js"></script>
<script type="text/javascript" src="js/xn.app.blog.js"></script>
<script type="text/javascript" src="js/mediaplayer.js"></script>


  </head>
  
  <body id="blogeditor" class="blogeditor">
<div id="container">	
<input type="hidden" id="userGuideType" value="true" />
<div id="showNewNav" style="display:none"></div>

<div id="dropmenuHolder" class="dropmenu-holder dropmenu-holder-new rr">
<div id="accountDropDownMenu" class="menu-dropdown" style="display: none">
<div class="menu-dropdown-border">
<div class="account-menu">
<div class="accounts" id="otherAccount" style="display:none"></div>
<div class="optionmenu options">

</div>
<a accesskey="0" href="http://www.xiaowai.com/Logout.do" class="logout">退出</a>
</div>
</div>
</div>


		
<div id="appMenu" class="menu-dropdown" style="display:none;left:-99999px;top:-99999px;">
<div class="menu-dropdown-border">


</div>

</div></div>
<div id="navBar" class="menu-bar rr"><div class="navigation-wrapper">
<div class="navigation navigation-new clearfix"><div id="logo2"><h1><a href="http://www.xiaowai.com" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏"><img alt="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" height="35" width="120" src="index_img/logo.png"/></a></h1></div>										
<div class="nav-body clearfix"><div class="nav-main"> 
<div class="menu"><div class="menu-title"><a stats="Hd_home" accesskey="1" href="XiaoWai_Homepage.jsp">首页<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div id="profileMenuActive" class="menu-title with-drop-menu"><a id="showProfileMenu" accesskey="2" stats="Hd_Profile" href="XiaoWai_PersonalPage.jsp">个人主页<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div class="menu-title with-drop-menu" id="friendMenuActive"><a id="showFriendMenu" accesskey="3" stats="Hd_frd" href="XiaoWai_Friend_Shouye.jsp">好友<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></div>	
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_Yuehui_Shouye.jsp" accesskey="4" id="showAppMenu">约会<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 	
</div>					
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_ErShou_Shouye.jsp" accesskey="4" id="showAppMenu">跳蚤市场<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 
</div> 
<div class="menu"> 
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="XiaoWai_Store_Shouye.jsp">商家<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
						</div> <div class="nav-other">
<div class="menu">
<div class="menu-title" id="searchMenuAction"><a accesskey="7" href="http://browse.xiaowai.com/search.do?_sgrf=navi" onmouseover="" stats="Hd_sMenu">搜索</a></div>
</div><div id="navSearch">
<form method="post" id="globalSearchForm" action="http://browse.xiaowai.com/searchEx.do?from=opensearch">

<div id="search-input">
<input accesskey="/" stats="Hd_sInput" type="text" size="25" maxlength="100" id="navSearchInput" name="q" class="input-text" value="" tabindex="1" />
</div>
<div id="search-submit">
<a stats="Hd_sBtn" id="navSearchSubmit" class="submit" href="#">搜索</a>
</div>
</form>
</div>
<div class="menu account-action" id="accountMenu">
<div class="menu-title"><a href="javascript:;">退出</a></div>
</div></div>
</div>
</div>
</div>
</div>

<div id="opi" class="page-wrapper clearfix">
<div class="full-page-holder">
<div class="full-page clearfix">
<div id="content">
<div style="margin-bottom: 20px; display: none;" id="info">
<div class="msn-notice clearfix notice">
<a href="#nogo" onclick="hideInfo();return false;"
style="float: right;">关闭</a>
	
</div>
</div>
<br />

<div class="page-title post">


</div>
<br>
<div id="oak" class="gray"> 
<form action="http://blog.renren.com/blog/0/addBlog"
id="editorForm" method="post"
onsubmit="return beforeSubmitWithPassWordCheck(this);">
<div id="single-column" style="position:relative">
<div><br><div>



 <div>
 <table>
 	<tr>
 		<td rowspan="6">
 			<img src="${SearchResult.userimg }">
 		</td>
 		<td>
 			<font color="#006699" size="3"><b>姓名：${SearchResult.name }</b></font>
 		</td>
 	</tr>
 	<tr>
 		<td>
 			<font color="#006699" size="3"><b>性别：${SearchResult.sex }</b></font>
 		</td>
 	</tr>
 	<tr>
 		<td>
 			<font color="#006699" size="3"><b>生日：${SearchResult.birthday }</b></font>
 		</td>
 	</tr>
 	<tr>
 		<td>
 			<font color="#006699" size="3"><b>家乡：${SearchResult.hometown }</b></font>
 		</td>
 	</tr>
 	<tr>
 		<td>
 			<font color="#006699" size="3"><b>大学：${SearchResult.university }</b></font>
 		</td>
 	</tr>
 	<tr>
 		<td>
 			<font color="#006699" size="3"><b>学院：${SearchResult.academe }</b></font>
 		</td>
 	</tr>
 </table>






<hr/>
<font></font>
<hr />

<font color="#006699">发表时间：${fnb.time }</font>
</div>
<br>









<div id="permissionBox" class="permission-box bd">						


<div class="pre-fri pre-block">


</div>
<div class="pre-pass pre-block" >
 
<div class="pre-pass-input"  style="display:none">



</div>
</div>

<div class="pre-me pre-block">
 
<div class="black-list clearfix" style="display:none" id="blackListContainer"><div id="blackList">
<div id="blackList_selected" class="black-user-list tokenizer" style="margin-bottom:5px;display:none"></div>
<div style="display:none"><a href="#nogo" onclick="blackListToggle()" id="blackListToggle">展开(0)</a></div>
<div class="add-black-user">
<input type="text" maxlength="100" class="input-text" id="blackList_input"/>

</div> 
</div>





</div>
<input type="hidden" value="" id="newLetterId"
name="newLetterId" />
<p id="upFile">
<input type="hidden" name="blog_pic_id" id="blog_pic_id"
value="" />
<input type="hidden" name="pic_path" id="pic_path"
value="" />
<input type="hidden" name="activity" id="activity"
value="" />
<input type="hidden" name="id" id="id" value="" />
</p>

<p class="actions align-left">
<input type="hidden" name="relative_optype" id="relative_optype" />

<input type="hidden" name="isVip" id="isVip"
value="false" />
<input type="hidden" name="jf_vip_em" id="jf_vip_em"
value="true" />

</p>
</div>
<div id="blog_releative"><div id="blog-releative">

<div class="added">
<div id="relatives" class="list">
</div>

</div></div>
</div>
</form>
</div>
</div></div>
</div>
</div>
</div>
<div id="footer"><div class="copyright">
<span class="float-right">
<a href="http://www.xiaowai.com/siteinfo/about">关于</a><span class="pipe">|</span><a href="">开放平台</a><span class="pipe">|</span><a href="http://mobile.xiaowai.com/mobilelink.do?psf=40002">手机校外</a><span class="pipe">|</span><a href="http://ads.xiaowai.com">广告</a><span class="pipe">|</span><a href="http://job.xiaowai.com/">招聘</a><span class="pipe">|</span><a href="http://support.xiaowai.com/helpcenter">客服帮助</a><span class="pipe">|</span><a href="">隐私</a>

</span>
<span>北京千橡网景科技发展有限公司：文网文[2009]169号 文化部监督电子邮箱：wlwh@vip.sina.com</span>
<p style="clear:both;margin-top:5px">
<span>校外网<span title="">&copy;</span>2011&nbsp;&nbsp;<a style="color:#808080" href="http://www.miibeian.gov.cn/" target="_blank">京ICP证090254号</a>&nbsp;<span style="color:#808080">京公网安备110000000009号</span>&nbsp;<span style="color:#808080">甲测资字11002066</span></span>
</p>
</div>
</div>
<div class="hidden-area"></div>
<div id="console_log" style="position:absolute;top:0;left:0;"></div>
<!--[if gt IE 7]><!--><link type="text/css" rel="stylesheet" href="" /><!--<![endif]-->
<!--[if IE 6]><link type="text/css" rel="stylesheet" href="http://s.xnimg.cn/a18115/n/core/webpager-ie6-min.css" /><style id="CSSID_9f2766a4"></style><![endif]-->

<!--[if IE 7]><link type="text/css" rel="stylesheet" href="http://s.xnimg.cn/a18115/n/core/webpager-ie7-min.css" /><![endif]--><!--[if gt IE 6]><script>if(window.ActiveXObject&&!window.XMLHttpRequest)XN.disableWebpager=true;</script><![endif]--><iframe id="imengine" name="imengine" src="" frameBorder="0" style="position:absolute;left:-1000pt;top:20pt;width:200pt;height:100pt;"></iframe>
<div id="system-notification-box" style="display:none">
<article id="system-notification" class="system-notification">
<section>
<article class="system-notification-item">
<header>
<img class="icon" width="16" height="16" src="" alt="状态" />
<a class="x-to-hide" href="#"></a>
</header>
<section>
</section>
</article>
</section>
</article>
</div>
<div id="bottombar"></div>

<script type="text/javascript" src="js/beacon.js"></script>
<script type="text/javascript">
COMSCORE.beacon({ c1:2, c2:6934070, c3:"", c4:"", c5:"", c6:"", c15:"" });
</script>




  </body>
</html>
