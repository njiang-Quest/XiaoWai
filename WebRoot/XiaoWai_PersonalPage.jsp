<%@ page language="java" import="java.util.*,com.csu.xiaowai.bean.UserBean,com.csu.xiaowai.bean.FreshNewsBean,com.csu.xiaowai.dao.UserDao;" pageEncoding="GB2312"%>
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
    
    <title>У���� - ${user.name }(${user.university })</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<!--[if lte IE 7]><script type="text/javascript" src="js/expressions.js"></script><![endif]--> 
<link href="css/layout.css" rel="stylesheet" type="text/css" media="all" /> 
<link href="index_img/logo.png" rel="apple-touch-icon" /> 
<link href="css/profilepro.css" rel="stylesheet" type="text/css" media="all"/><link href="css/feed-all-min.css" rel="stylesheet" type="text/css" media="all" /> 
<link href="css/profile-skin.css" rel="stylesheet" type="text/css" media="all"/><style type="text/css">#flashwrap{position:absolute}#closeFlash{position:absolute;top:5px;right:10px;}</style> 





<!--[if IE]><script type="text/javascript" src="js/expressions.js"></script><![endif]--> 
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 

  </head>
  
  <body id="profile" class="profile-pro">
   <input type="hidden" id="encrypt_t" value="254624350-e76656d3d7f9bd2d9fd0bd748d612db7"/> 
	
	
	
<div id="zidou_music"></div> 
 
	<input type="hidden" id="userGuideType" value="true" /> 
<div id="showNewNav" style="display:none"></div> 

<div id="dropmenuHolder" class="dropmenu-holder dropmenu-holder-new rr"><div id="accountDropDownMenu" class="menu-dropdown" style="display: none"> 
<div class="menu-dropdown-border"> 
<div class="account-menu"> 
<div class="accounts" id="otherAccount" style="display:none"></div> 
<div class="optionmenu options"> 
</div> 
<a accesskey="0" href="" class="logout">�˳�</a> 
</div> 
</div> 
</div> 
<div id="profileMenu" class="menu-dropdown" style="display:none;"> 
<div class="menu-dropdown-border"> 
<div class="optionmenu"> 

</div> 
</div> 
</div> 
<div id="friendMenu" class="menu-dropdown" style="display:none;"> 
<div class="menu-dropdown-border"> 
<div class="optionmenu"> 

</div> 
</div> 
</div> 
<div id="optiondropdownMenu" class="menu-dropdown optionmenu" style="display:none;"> 
<div class="menu-dropdown-border"> 
<div class="optionmenu"> 
</div> 
</div> 
</div>			
<div id="appMenu" class="menu-dropdown" style="display:none;left:-99999px;top:-99999px;"> 
<div class="menu-dropdown-border"> 

<div class="menu-holder recent-app"> 
</div> 

</div> 
</div> 
</div><div id="navBar" class="menu-bar rr"> 
<div class="navigation-wrapper"><div class="navigation navigation-new clearfix"> 
<div id="logo2"><h1><a href="http://www.renren.com" title="У���� renren.com - У����У����һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ"><img src="index_img/logo.png" alt="У���� renren.com - У����У����һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ" width="120" height="35" border="0" title="У���� renren.com - У����У����һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ" /></a></h1>
</div>										<div class="nav-body clearfix"><div class="nav-main"> 
<div class="menu"><div class="menu-title"><a stats="Hd_home" accesskey="1" href="XiaoWai_Homepage.jsp">��ҳ<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div id="profileMenuActive" class="menu-title with-drop-menu"><a id="showProfileMenu" accesskey="2" stats="Hd_Profile" href="XiaoWai_PersonalPage.jsp">������ҳ<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div class="menu-title with-drop-menu" id="friendMenuActive"><a id="showFriendMenu" accesskey="3" stats="Hd_frd" href="XiaoWai_Friend_Shouye.jsp">����<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></div>	
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_Yuehui_Shouye.jsp" accesskey="4" id="showAppMenu">Լ��<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 	
</div>					
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_ErShou_Shouye.jsp" accesskey="4" id="showAppMenu">�����г�<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 
</div> 
<div class="menu"> 
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="XiaoWai_Store_Shouye.jsp">�̼�<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
						</div> <div class="nav-other"><div class="menu"> 

</div> 
<div class="menu"><div class="menu-title" id="searchMenuAction"><a accesskey="7" href="" onMouseOver="" stats="Hd_sMenu">����</a></div> 
</div> 
 
<div id="navSearch"><form method="post" id="globalSearchForm" action=""> 
<div id="search-input"> 
<input accesskey="/" stats="Hd_sInput" type="text" size="25" maxlength="100" id="navSearchInput" name="q" class="input-text" value="" tabindex="1" /> 
</div> 
<div id="search-submit"> 
<a stats="Hd_sBtn" id="navSearchSubmit" class="submit" href="">����</a> 
</div> 
</form> 
</div> 
<div class="menu account-action" id="accountMenu"> 
<div class="menu-title"><a href="javascript:;">�˳�</a></div> 
</div> 
</div></div> 
</div> 
</div> 
</div> 



 <div id="opi"><div class="full-page-holder"> 
<div class="col-full"> 
 
					
<div class="status-holder"> 
<h1 class="username lively-user" title="������¼7��, ���ɻ�ó�����Ȩ">${user.name}</h1> 
<span class="icons">
<a class="user-type" href="" title="�ֻ��Ѱ�"> 
<img src="personpage_img/mobile-bind-blue.gif" alt="�ֻ��Ѱ�" /></a></span>
<span id="status-show" class="user-status" > 
			<span id="currentStatus" class="status-content">	
			${status }					
</span> 
<span class="status-info"> 
<span id="statusUpdateTime" class="time"> 
</span></span> 
<span class="pipe">|</span><span class="more"><a stats="pf_tab_status" href="XiaoWai_AllStatus.jsp" class="edit">����״̬</a></span></span></div> 
 
<div class="tabs-holder"><div class="rich-tabs clearfix">	
<ul class="tabpanel clearfix"> 
<li class="current"><a stats="pf_tab_index" id="proTabFeedId_" onFocus="this.blur();" href="">������ҳ</a></li>
</ul> 

<div class="personal-url-box">
</div> 
		</div></div> 


</div>		<div id="ajaxContainer" class="cols clearfix"> 
<div class="col-left"> 
<div class="main-side"><div class="profile-avatar"><ul> 
<li id="prifile-avatar-image" class="profile-image"> 
<a stats="pf_headalbum" href=""> 
<img  stats="pf_headalbum"  src='${user.userimg} ' width="200" height="150" id="userpic" alt="ͷ��" /> 
</a> 
</li> 

</ul>
<script type="text/javascript">try{
(function(){
var t = new XN.UI.tabView({
selectedClass : 'selected'
});		
t.addTab({
label : 'prifile-avatar-image-handle',
content : 'prifile-avatar-image' ,active : true
});		t.addTab({
label : 'prifile-avatar-purikura-handle',content : 'prifile-avatar-purikura'
});})();
}catch(e){}
</script> 
</div> 
<div class="profile-actions"> 
<div class="actions"> 

</div> 					
</div><div class="profile-summary"><ul class="viewer-actions"></ul><dl class="clearfix"> 
<div class="clearfix"> 
<dt>����ѧУ:</dt> 
<dd> 
${user.university}
</dd> 
</div> 
<div class="clearfix"> 
<dt>��������:</dt> 
<dd> 
${user.birthday }
</dd></div> 
<div class="clearfix"> 
<dt>�ҡ�����:</dt> 
<dd>${user.hometown }
</dd> 
</div> 
</dl>		
<dl class="clearfix"> 

</dl> 
</div>	
				
 
<div id="blog" class="mod"> 
<div class="mod-header"> 
<div class="mod-header-in"> 
<a stats="pf_allnote" class="more" href="XiaoWai_Passage_Shouye.jsp">�鿴ȫ��</a> 
<h4>��־</h4> 
<a stats="pf_allnote" href="" class="count">&nbsp;(${passagesCount })</a> 
</div> 
</div> 
<div class="mod-body-out"> 
<div class="mod-body"> 
<ul class="blog-list"> 

<c:forEach var="fnb" items="${MyFreshNews}">
<c:if test="${fnb.type==2}">
<li> 
<div class="title"> 
<img src="personpage_img/blog.png" class="icons iBlog"> 
<a stats="pf_note" href="/XiaoWai/ReadPassageServlet?fnbID=${fnb.fnID }" title="" > 
${fnb.title }</a> 
</div> 
<div class="content"> 
<p class="time"><span class="time">${fnb.time }</span> 
</p> 
</div> 
</li> 
</c:if>
</c:forEach>




</ul></div> 
</div> 
</div> 
				
<div id="share" class="mod"> 
<div class="mod-header"> 
<div class="mod-header-in"> 
<a stats="pf_allshare" href="" class="more">�鿴ȫ��</a> 
<h4>����</h4> 
<a stats="pf_allshare" href="" class="count"></a> 
</div> 
</div> 
<div class="mod-body-out"> 
<div class="mod-body"> 
<ul class="share-list"> 

<c:forEach var="fnb" items="${MyFreshNews}">

<c:if test="${fnb.type==4}">

<li> 
<div class="title"> 
<img class="icons iBlog" src="personpage_img/blog.png"/> 
<a stats="pf_share" href="" title=""> 
${fnb.title }</a></div>	
<div class="content"> 
<p class="time"> 
<span>${fnb.time }</span> 
</p> 
</div>							
</li> 


</c:if>

</c:forEach>


</ul>

</div> 
</div> 
</div> 
</div></div>

<div class="col-center"> 
<div class="main-content"> 
<div id="latestPhotos"></div> 

<div id="comWall" class="com-wall"><div id="comfirm_diag" class="generic_dialog wallpro_dialog pop_dialog" style=""></div><div class="box-holder talk-box"> 

<div class="box" id="gossipBoard" stats="n2_gossipboard"><h4 class="box-header"> 
<span>
<a href="" class="count"></a> 
</span> 

</h4><div class="box-body"> 
<div class="m-editor" id="miniEditor"><form id="commentPostForm"> 
<div class="m-editor-textarea"> 
<table align="center">
	<tr>
		<td>
			<font><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��ӭ�����ҵĸ�����ҳ��</b></font>
		</td>
	</tr>
</table>


</div>        
<div class="m-editor-emo-holder" id="miniEditorEmoHolder" style="display:none"> 
          
<div class="emo-holder" id="miniEditorEmoList"></div> 
<div class="notVip-tip clearfix" id="notVipTip" style="display:none;"> 
<div class="emotion-icon"> 


</div> 

</div> 
</div>        
<div id="miniEditorAction" class="m-editor-action clearfix"></div>        
<div class="m-editor-submit"> 


</div> 

</form> 
</div> 

</div></div>
<div class="nav-tabs"><ul class="tabs clearfix"> 
<li class="c selected"> 
<a stats="pf_newsfeed" href="#nogo">������</a> 
</li> 
 
</ul> 
</div> 
<div id="miniFeed" > 
 
<div id="newsfeed-module-box">
<div class="feed-module" data-userid="254624350"> 

<div class="feed-list"> 

 <c:forEach var="fnb" items="${MyFreshNews }">


 <c:if test="${fnb.type==1 }">

 <article class="a-feed" > 
<aside> 
<figure class="newsfeed-user" data-id="" data-name="${user.name}"> 
	<a  href="" title="${user.name}" target="_blank"> 
        <img src="${user.userimg} " width="50" alt="ͷ��" title="${user.name}" /></a>
</figure> 
</aside> 
 
 
<h3> 
<a stats="${fnb.fnID }" href="" namecard="254624350" target="_blank">${user.name}��</a> &nbsp;${fnb.content }
</h3> 
 

 
<div class="details"> 
<div class="legend"> 
<span class="duration">${fnb.time }</span> 
	


 
</div> 
</div>
 
</article> 

 </c:if>
  <c:if test="${fnb.type==2 }">
   <article class="a-feed" id=""> 
<aside> 
<figure class="newsfeed-user" data-id="254624350" data-name="${user.name}"> 
	<a stats="${fnb.fnID }" href="" title="${user.name}" target="_blank"> 
        <img src="${user.userimg}" width="50" alt="ͷ��" title="${user.name}" /></a>
</figure> 
</aside> 
 
 
<h3> 
<a stats="${fnb.fnID }" href="" namecard="254624350" target="_blank">${user.name}��</a>&nbsp; ��������־��${fnb.content }
</h3> 
 

 
<div class="details"> 
<div class="legend"> 
<span class="duration">${fnb.time }</span> 
	

 
</div> 
 </div>
 
</article> 

  </c:if>
   <c:if test="${fnb.type==3 }">
    <article class="a-feed" > 
<aside> 
<figure class="newsfeed-user" data-id="" data-name="${user.name}"> 
	<a stats="${fnb.fnID }" href="" title="${user.name}" target="_blank"> 
        <img src="${user.userimg}" width="50" alt="ͷ��" title="${user.name}" /></a>
</figure> 
</aside> 
 
 
<h3> 

<a stats="${fnb.fnID }" href="" namecard="254624350" target="_blank">${user.name}��</a>&nbsp; ��&nbsp;${fnb.fatherName }&nbsp;������ϴ�����Ƭ��${fnb.title }
</h3> 
 

 
<div class="details"> 
<div class="legend"> 
<span class="duration">${fnb.time }</span> 
	

 </div>
</div> 
 
 
</article> 
   </c:if>
  <c:if test="${fnb.type==4 }">
    <article class="a-feed" > 
<aside> 
<figure class="newsfeed-user" data-id="" data-name="${user.name}"> 
	<a stats="${fnb.fnID }" href="" title="${user.name}" target="_blank"> 
        <img src="${user.userimg}" width="50" alt="ͷ��" title="${user.name}" /></a>
</figure> 
</aside> 
 
 
<h3> 

<a stats="${fnb.fnID }" href="" namecard="254624350" target="_blank">${user.name}��</a>&nbsp; ������&nbsp;${fnb.title }
</h3> 
 

 
<div class="details"> 
<div class="legend"> 
<span class="duration">${fnb.time }</span> 
	

 </div>
</div> 
 
 
</article> 
   </c:if>
 </c:forEach>

</div>


<div class="feed-footer"> 




</div> 
</div> 
</div> 


</div><div id="comment" class="comment-holder" style="display:none;"> 
				
<div class="nocomments" style="display:none;"><p class="self">���ƺ���û���յ��������ԣ�<br />��ȥ�����������԰ɣ�</p> 
</div><div class="cmt-more"> 
<a stats="n2_allgossip2" href="#">�鿴��������</a> 
</div> 
</div></div> 
</div></div> 
</div>		
	
<div class="col-right"> 
<div class="extra-side"> 

<div id="visitors" class="mod"> 
<div class="mod-header"> 
<div class="mod-header-in"> 
<a stats="pf_myfoot" href="" class="more">����</a> 
<h4>�������</h4><a stats="pf_myfoot" href="" class="count">(${allVisitorsCount })</a> 
</div></div> 
<div class="mod-body-out"> 
<div class="mod-body"> 
<ul class="people-list"> 
<c:forEach var="visitor" items="${allVisitors}" begin="0" end="2">
<li><span class="headpichold"> 
<a style="cursor:pointer;" namecard="" href="">
<img src="${visitor.userimg }" width="50" height="50" onload="roundify(this)" /></a> 
</span> 
<span class="clearfix"> 
<a  href="" namecard="225134350">${visitor.name }</a></span> 

</li>

</c:forEach>

</ul></div> 
</div> 
</div> 





		
</div></div>			
</div> 
</div> 

<div id="footer"> 
<div class="copyright"><span class="float-right"> 
<a href="">����</a><span class="pipe">|</span><a href="">����ƽ̨</a><span class="pipe">|</span><a href="">�ֻ�У��</a><span class="pipe">|</span><a href="">���</a><span class="pipe">|</span><a href="">��Ƹ</a><span class="pipe">|</span><a href="">�ͷ�����</a><span class="pipe">|</span><a href="">��˽</a> 
</span> 
<span>���ϳ�ɳУ�����Ƽ���չ���޹�˾��������[2009]169�� �Ļ����ල�������䣺wlwh@vip.sina.com</span> 
<p style="clear:both;margin-top:5px"> 
<span>У����<span title="revision$revxxx$; SJSWT38-40.opi.com">&copy;</span>2011&nbsp;&nbsp;<a style="color:#808080" href="" target="_blank">��ICP֤090254��</a>&nbsp;<span style="color:#808080">�湫������110000000009��</span>&nbsp;<span style="color:#808080">�ײ�����11002066</span></span> 
</p> 
</div> 
</div> 
<div class="hidden-area"></div> 
<div id="console_log" style="position:absolute;top:0;left:0;"></div> 
<!--[if gt IE 7]><!--><link type="text/css" rel="stylesheet" href="" /><!--<![endif]--> 
<!--[if IE 6]><link type="text/css" rel="stylesheet" href="http://s.xnimg.cn/a18115/n/core/webpager-ie6-min.css" /><style id="CSSID_9f2766a4"></style><![endif]--> 
<!--[if IE 7]><link type="text/css" rel="stylesheet" href="http://s.xnimg.cn/a18115/n/core/webpager-ie7-min.css" /><![endif]--> 
<!--[if gt IE 6]><script>if(window.ActiveXObject&&!window.XMLHttpRequest)XN.disableWebpager=true;</script><![endif]--><iframe id="imengine" name="imengine" src="http://wpi.renren.com/wtalk/ime.htm?v=5" frameBorder="0" style="position:absolute;left:-1000pt;top:20pt;width:200pt;height:100pt;"></iframe><div id="system-notification-box" style="display:none"> 
<article id="system-notification" class="system-notification"> 
<section> 
<article class="system-notification-item"> 
<header> 
<img class="icon" width="16" height="16" src="http://a.xnimg.cn/n/res/placeholder/icon.gif" alt="״̬" /> 
<a class="x-to-hide" href="#"></a> 
</header> 
<section></section> 
</article> 
</section> 
</article> 
</div> 
<div id="bottombar"></div> 
<script type="text/javascript" src="http://s.xnimg.cn/a12023/jspro/beacon.js"></script><script type="text/javascript"> 
COMSCORE.beacon({ c1:2, c2:6934070, c3:"", c4:"", c5:"", c6:"", c15:"" });
</script> 
<noscript> 
<img src="http://b.scorecardresearch.com/p?c1=2&c2=6934070&c3=&c4=&c5=&c6=&c15=&cj=1" /> 
</noscript> 
</body></html> 

