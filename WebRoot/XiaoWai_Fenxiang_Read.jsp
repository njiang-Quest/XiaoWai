<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <c:set var="user" value="${user}"></c:set> 
  
    
    <title>校外 - 日志</title>
    
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


<script type="text/javascript">
XN = {get_check:'1511171133',env:{domain:'xiaowai.com',shortSiteName:'校外',siteName:'校外网'}};
</script>
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
<%@include file="XiaoWai_header.jsp" %>

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
<font color="#FF9900" size="+1" >&nbsp;&nbsp;${user.name }</font>
<font>&nbsp;${status }</font>
<div class="page-title post">
<a class="float-right" href='XiaoWai_Passage_Write.jsp'>发表新日志</a>

</div>
<div id="oak" class="gray"> 
<form action="http://blog.renren.com/blog/0/addBlog"
id="editorForm" method="post"
onsubmit="return beforeSubmitWithPassWordCheck(this);">
<div id="single-column" style="position:relative">
<div><div>


<div>

<font color="#006699" size="3"><b>${fnb.title }</b></font>
<hr />
<a href="${fnb.content }">${fnb.content }</a>
<hr />
<font color="#006699">${fnb.time }</font>
</div>
<br />

</div>









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
<a href="http://www.xiaowai.com/siteinfo/about">关于</a><span class="pipe">|</span><a href="http://dev.xiaowai.com">开放平台</a><span class="pipe">|</span><a href="http://mobile.xiaowai.com/mobilelink.do?psf=40002">手机校外</a><span class="pipe">|</span><a href="http://ads.xiaowai.com">广告</a><span class="pipe">|</span><a href="http://job.xiaowai.com/">招聘</a><span class="pipe">|</span><a href="http://support.xiaowai.com/helpcenter">客服帮助</a><span class="pipe">|</span><a href="">隐私</a>

</span>
<span>北京千橡网景科技发展有限公司：文网文[2009]169号 文化部监督电子邮箱：wlwh@vip.sina.com</span>
<p style="clear:both;margin-top:5px">
<span>校外网<span title="revision51549; SJSWT46-163.opi.com">&copy;</span>2011&nbsp;&nbsp;<a style="color:#808080" href="http://www.miibeian.gov.cn/" target="_blank">京ICP证090254号</a>&nbsp;<span style="color:#808080">京公网安备110000000009号</span>&nbsp;<span style="color:#808080">甲测资字11002066</span></span>
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
