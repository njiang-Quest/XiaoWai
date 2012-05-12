<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>校外网 - 登录</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="css/layout.css" rel="stylesheet" type="text/css" media="all" />
 <script type="text/javascript">
XN = {env:{domain:'www.renren.com',shortSiteName:'校外网',siteName:'校外网'}};
</script>
<script type="text/javascript" src="js/base.js"></script>    
<script type="text/javascript">
XN.getFileVersion(
[
'css/profile.css',
'js/xn.app.recommendFriend.js',
'js/xn.ui.pager.js',
'js/xn.ui.multiFriendSelectorBox.js',
'css/friendSelector.css',
'js/tiny_mce.js'
]);    
</script>
<script type="text/javascript">
XN.getFileVersion([
'js/xn.app.status.js',
'js/xn.app.share.js',
'js/xn.app.ilike.js',
'css/news-feeds.css'
]);
</script>
<link href="css/login.css" rel="stylesheet" type="text/css" media="all" /><!--[if IE]><script type="text/javascript" src="js/expressions.js"></script><![endif]-->
<!--[if lte IE 6]><style type="text/css" media="screen">/* <![CDATA[ */ @import url(css/ie6.css); /* ]]> */</style><![endif]-->
<!--[if gte IE 7]><style type="text/css" media="screen">/* <![CDATA[ */ @import url(css/ie7.css); /* ]]> */</style><![endif]-->

<title>校外网游戏交友网温馨的网上生活家园|开心农场注册|开心农场游戏网址|开心农场游戏网站|</title><script type="text/javascript" src="js/swfobject.js"></script>    
<style type="text/css">
<!--
.STYLE1 {	COLOR: #666666
}
.STYLE6 {	COLOR: #808080
}
.STYLE7 {font-size: 12px}
-->
</style>
  </head>
  
  <body  id="syshome" class="login">
    <div id="dropmenuHolder" class="dropmenu-holder rr">
<div id="optiondropdownMenu" class="menu-dropdown optionmenu" style="display:none;">
<div class="menu-dropdown-border">
<div class="optionmenu">
<ul>

</ul>
</div>
</div>
</div>
<div id="searchdropdownMenu" class="menu-dropdown" style="display:none;width:110px;">
<div class="menu-dropdown-border">
<div class="search-menu">


</div>
</div>
</div>
<div id="appMenu" class="menu-dropdown" style="display:none;left:-99999px;top:-99999px;">
<div class="menu-dropdown-border">

</div>
<div id="navMyApps" class="menu-holder my-app"></div>
<div class="separator"></div>
<div class="app-actions">
<ul>

</ul>
</div>
</div>
</div>

<div id="navBar" class="menu-bar rr">		
<div class="navigation-wrapper">
<div class="navigation clearfix"><div id="logo2"><h1><a href="index.html" title="校外网首页"><img height="35" width="122" src="index_img/logo.png" /></a></h1>
</div>				
<div class="nav-body clearfix"><div class="nav-other"><div class="menu">
<div class="menu-title"><a href="XiaoWai_Regist.jsp">注册</a></div>
</div>
<div class="menu">
<div class="menu-title"><a href="">请登录</a></div>
</div>
<div class="menu">
<div class="menu-title"><a href="">游戏中心</a></div>
</div>
<div class="menu">
<div class="menu-title"><a href="http://support.renren.com/support" target="_blank">客服中心</a></div>
</div>
<div class="menu last">
<div class="menu-title"><a href="http://support.renren.com/support">帮助</a></div>
</div></div>
</div>
</div>
</div>
</div>
<div id="opi" class="page-wrapper clearfix">
<div class="full-page-holder">
<div class="full-page">
<div class="login-page clearfix">
  <div class="side-column">
    <div class="">
      <div class="login-panel">
        <div class="inner">
          <div class="innertop"></div>
          <div class="errors_div" id="errorMessage" style="DISPLAY: none"></div>
          <FORM class=login-form id=loginform name=loginform action=/XiaoWai/LoginServlet method=post>
            <p class="top">
              <label for="email">用户名:</label>
              <input name="username" class="input-text" size="15" />
            </p>
            <p>
              <label for="password">密　码:</label>
              <input name="password" type="password" class="input-text" size="15" />
            </p>
            <p>
              
            </p>
			 <p><input class="input-submit" type="submit" value="登录" name="loginsubmit" /></p>
            <p><a href="http://www.henkx.com/do.php?ac=lostpasswd" target="_blank" class="float-left"> 忘记密码？</a>
               
                <input type="hidden" value="space.php?do=home" name="refer" />
                <span class="c_form">
                <input type="hidden" value="cc507ee1" 
name="formhash" />
                </span></p>
          </form>
          <div class="innerbottom"></div>
        </div>
      </div>
    </div>
    <div class="extra-guide">
      <p><a 
href="XiaoWai_Regist.jsp" class="portal"><span 
class="STYLE1"><strong>注册</strong><span class="STYLE6">很开心期待您的加入</span></span></a></p>
      <p><a 
href="http://www.henkx.com/do.php?ac=43912806445205cab2986065412841e3" class="portal"><span 
class="STYLE1"><strong>个人空间</strong>属于自己的免费zone</span></a></p>
      <div class="renrenAdPanel" >
        <div class="header clearfix"> <a class="download" href="http://www.tudou.com/v/EFhXFOk_Xd8">全屏</a>
            <h4>校外网三十六计宣传片</h4>
        </div>
        <div class="section">
          <div class="video">
            <div id="renrenAdVideo">
              <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="index_img/swflash.cab" width="188" height="174">
                <param name="movie" value="http://www.tudou.com/v/EFhXFOk_Xd8" />
                <param name="quality" value="high" />
                <embed src="http://www.tudou.com/v/EFhXFOk_Xd8" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="188" height="174"></embed>
              </object>
            </div>
          </div>
        </div>
        <script type="text/javascript">
var flashvars = {};
flashvars.videoUrl1 = "http://www.tudou.com/v/EFhXFOk_Xd8";  
flashvars.videoUrl2 = "http://www.tudou.com/v/EFhXFOk_Xd8";
//flashvars.autoPlayFlag = true;
var params = {};
params.scale="noscale";
params.salign="lt";
params.wmode="opaque";
params.allowScriptAccess="always"
params.allownetworking ="all"
params.allowfullscreen ="true"
swfobject.embedSWF("", "#AdVideo", "192", "144", "9.0.0",false, flashvars, params)
      </script>
      </div>
      <p>&nbsp;</p>
    </div>
  </div>
  <div class="main-column">
<div id="huge-ad">
<SCRIPT LANGUAGE="JavaScript1.1" SRC="guanggao/guanggao.php"></SCRIPT>	
</div>	
<img src="index_img/gg.gif">					
<div class="welcome clearfix">                        	
<div class="upadte_search">
<div class="updates">
<p><strong>我们每天都在快乐地进步着:</strong></p>                                    
<dl class="clearfix">	
<dt>12月04日</dt>
<dd><a href="http://www.henkx.com/bbs/viewthread.php?tid=1&amp;extra=page%3D1" target="_blank">校外桌面1.0正式上线啦，校外社区必备工具！</a></dd>	
<dt>12月01日</dt>
<dd><a href="http://www.henkx.com/shengdan/" target="_blank">我们为您提供了精美的圣诞祝福网页自动生成哦</a><a href="http://www.henkx.com/hot.htm" target="_blank"></a></dd>	
<dt>12月01日</dt>
<dd>风靡台湾的本草仙目上线了(古代版的开心农场)</dd>                                                       	
</dl>                                    
<p class="advice"><a href="#">我要提建议</a></p>
</div>          
<div class="open-search clearfix">
<div>
<form id="oos" name="oos" method="post" action="http://browse.#.com/searchEx.do">
<div class="search-input">
<label for="friendname" class="forname">寻找你的朋友:</label>
<input id="friendname" name="q" type="text" class="input-text" />
<script type="text/javascript">
XN.form.help('friendname').setDefaultValue('输入一直在寻找的那个名字');
</script>
<div class="search-submit">
<a href="http://www.henkx.com/space-top-view-updatetime.html" onclick="if($(_oos_)%5B_q_%5D.value == _输入一直在寻找的那个名_) $(_oos_)[_q_].value=__;$(_oos_).submit();"><span class="search-mag-glass">&nbsp;</span></a></div>
</div>
</form>
</div>
<div class="description">
或 <a class="find-friends" href="http://www.henkx.com/network.html">看看有没有朋友已经注册</a></div>
<p>&nbsp;</p>
</div>
</div>
<div class="sign-up">
  <dl>
    <dt> 
      <div align="center"><img src="index_img/reg.png" width="121" height="36" border="0" usemap="#Map" />
<map name="Map" id="Map">
  <area shape="rect" coords="3,4,116,33" href="XiaoWai_Regist.jsp" />
</map></div>
    </dt>
    <dd><strong>在这里你可以获得</strong></dd>
    <dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 免费无限存储空间</dd>
	<dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 安全多模块的隐私设置</dd>
    <dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 基于社区化的个人空间</dd>
    <dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 汇聚全部当今热门SNS游戏</dd>
    <dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 真实的交友社区，更贴近</dd>
	<dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 与同城的陌生人在这里相识</dd>
	<dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 更方便的寻找到你愿意交往的朋友</dd>
	<dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 真实的交友社区只要你愿意分享</dd>
    <dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 分享 日记 心情等展现自我的方式</dd>
	<dd><img src="index_img/style_circlered.gif" width="5" height="5" /> 开放式应用平台游戏开发者的天堂</dd>
	</dl>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript" src="js/xn.page.syshome.js"></script>
<script>
XN.dom.ready(function(){
var tip = '用户邮箱/手机号/用户名';
var email = $( 'email' );
if ( email.value == '' || email.value == tip ){
new XN.FORM.inputHelper( 'email' ).setDefaultValue( tip );        	
XN.event.addEvent( 'email' , 'click' ,function(){
if ( $( 'email' ).value == tip ){
$( 'email' ).value = '';
}
});
XN.event.addEvent( 'email' , 'blur' , function(){
if ( $( 'email' ).value == tip ){
$( 'email' ).style.color = '#888';
}
});
$('email').style.color = '#333';
$('email').focus();
setTimeout(function(){
$('email').value = tip;
$('email').select();
},0);
}
});
</script>



<div id="footer">
<div class="copyright">
<span class="float-right"><a href="http://www.henkx.com/my" target="_blank">关于我们</a><span class="pipe">|</span><a href="http://www.henkx.com/open" target="_blank">开放平台</a><span class="pipe">|</span><a href="http://www.henkx.com/my/job.html" target="_blank">招聘</a><span class="pipe">|</span><a href="http://www.henkx.com/my/ser.html" target="_blank">客服</a><span class="pipe">|</span><a href="http://www.henkx.com/my/help.php" target="_blank">帮助</a><span class="pipe">|</span><a href="http://www.henkx.com/my/ys.html" target="_blank">隐私声明</a><span class="pipe">|</span><a href="http://www.henkx.com/my/link.html" target="_blank">友情链接</a></span><span>校外网 <span title="revision9784; SJSWT44-47.opi.com">&copy;</span> 2009</span><a href="http://www.miibeian.gov.cn" target="_blank">湘ICP备09017506号</a></div>
</div>
  </body>
</html>
