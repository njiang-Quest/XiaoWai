<%@ page language="java" import="java.util.*,com.csu.xiaowai.bean.UserBean;" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

	 
	 <c:set var="user" value="${user}"></c:set>
	 
  <head>
    <base href="<%=basePath%>">
    
    <title>У���� - ${user.name} </title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 

<style type="text/css">
<!--


#footer2{ position:fixed; _position:absolute;z-index:1000;bottom:0; right:0; _right:17px; height:0px; width:200px; height:20px;}
#footer3{ position:fixed; _position:absolute;z-index:1000;bottom:0; height:0px; width:500px; height:300px;}
#footer4{ position:fixed; _position:absolute;z-index:1000;bottom:0; height:0px; width:500px; height:320px;}
-->
</style>
<script language="javascript">
	var i=0;
	function change(op){
		var i=parseInt(op);
			if(i==1){
				document.getElementById("talk").style.display="";
				document.getElementById("talk2").style.display="none";
			}
			if(i==2){
				document.getElementById("talk").style.display="none";
				document.getElementById("talk2").style.display="";
			}
	}
	
	function refreshFreshNews(op){
		if(window.XMLHttpRequest){
			xmlHttpRequest = new XMLHttpRequest();
		}else{
			xmlHttpRequest = new window.ActiveXObject("Msxml2.XMLHTTP");	
		}
		if(!xmlHttpRequest){
			alert("�޷�����XMLHttpRequest����");
		}
		url ="/XiaoWai/HomepageRefreshServlet?userID=" + op+"&rd="+Math.random();
		url = encodeURI(url);
		xmlHttpRequest.open("GET",url,true);
		xmlHttpRequest.onreadystatechange=returnFreshNews;
		xmlHttpRequest.send(null);
	}
	function returnFreshNews(){
		if(xmlHttpRequest.readystate == 4){
				if(xmlHttpRequest.status == 200){	
					var result = xmlHttpRequest.responseText;
					document.getElementById("freshNews").innerHTML = result;
				}
			}
	}
	
	function refreshVisit(op){
		if(window.XMLHttpRequest){
			xmlHttpRequest = new XMLHttpRequest();
		}else{
			xmlHttpRequest = new window.ActiveXObject("Msxml2.XMLHTTP");	
		}
		if(!xmlHttpRequest){
			alert("�޷�����XMLHttpRequest����");
		}
		url ="/XiaoWai/RefreshVisitorsServlet?userID=" + op+"&rd="+Math.random();
		
		xmlHttpRequest.open("GET",url,true);
		xmlHttpRequest.onreadystatechange=returnVisit;
		xmlHttpRequest.send(null);
	}
		function returnVisit(){
		if(xmlHttpRequest.readystate == 4){
				if(xmlHttpRequest.status == 200){	
					var result = xmlHttpRequest.responseText;
					document.getElementById("myvisitors").innerHTML = result;
				}
			}
	}
</script>
  </head>
  
  <body  class="layout_home3cols">
    <!--������� {--> 
<input type="hidden" id="COLOR_CLOSE_FLAG" value=""/> 

<!--} �������--> 
	<div id="showNewNav" style="display:none"></div> 
<div id="dropmenuHolder" class="dropmenu-holder dropmenu-holder-new rr"> 
<div id="accountDropDownMenu" class="menu-dropdown" style="display: none"> 
<div class="menu-dropdown-border"> 
<div class="account-menu"> 
<div class="accounts" id="otherAccount" style="display:none"></div> 

<a accesskey="0" href="" class="logout">�˳�</a> 
</div> 
</div> 
</div> 


</div><div id="topbar"> 
</div><div id="container"> 
<div id="header"><div id="navBar" class="site-nav rr"> 
<div class="navigation-wrapper"> 
<div class="navigation navigation-new clearfix"> 
<div id="logo2"><h1><a href="" title="У���� xiaowai.com - У����У����һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ"><img alt="У���� xiaowai.com - У����У����һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ" title="У���� xiaowai.com - У����У����һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ" height="35" width="120" src="index_img/logo.png" /></a></h1></div> 
						<div class="nav-body clearfix"><div class="nav-main"> 
<div class="menu"><div class="menu-title"><a stats="Hd_home" accesskey="1" href="XiaoWai_Homepage.jsp">��ҳ<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 

<div id="profileMenuActive" class="menu-title with-drop-menu"><a id="showProfileMenu" accesskey="2" stats="Hd_Profile" href="/XiaoWai/PersonalPageServlet?userID=${user.userId }">������ҳ<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 

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
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="StoreSearchAllStore">�̼�<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
						</div> 
<div class="nav-other"><div class="menu"> 
<div class="menu-title"> 

</div> 
</div> 
<div class="menu"> 

</div> 
 
<div id="navSearch"><form method="post" id="globalSearchForm" action=""> 
<div id="search-input"> 

</div> 
<div id="search-submit"> 
<form action="/XiaoWai/SearchUserServlet" method="post">
<input type="text" name="mysearchUser" size="25"  /> 
<input type="submit" value="����">
</form>
</div> 
</form> 
</div> 
<div class="menu account-action" id="accountMenu"> 
<div class="menu-title"><a href="javascript:;">�˳�</a>
</div> 
</div> 
</div></div> 
</div> 
</div> 
</div> 
</div> 
<div id="main"><div id="sidebar"> 
<div class="site-menu-box box"> 
 <div class="site-menu-user-box box"> 
<article class="site-menu-user"> 
<div class="figure"> 
<a href=""><img src="${user.userimg}" width="100" height="100" align="left" alt="${user.name}"  /></a> 
</div> 


<div class="site-menu-user-info"> 
<p class="name-and-icons"> 
<a class="name" href="#" title="${user.name}">${user.name}</a> 
</p> 
<p>
<a class="name" href="#" title="${user.university}">${user.university}</a>
</p>



<div class="user-score clearfix" id="" style="display:none"> 

<div id="scoreTipDiv" class="side-item-body" style="position:absolute;left:-9999px;"> 
<div class="new-point-tips" style="width:150px;"> 
<div class="left-arrow" style="top:8px;"></div> 
<div id="" class="tipsbody"> 

</div> 
</div>  
</div> 
<script type="text/javascript"> 
XN.dom.readyDo(function() {
setTimeout(function(){
var scroeTip = new XN.ui.fixPositionElement(
{
id: 'scoreTipDiv',
alignWith : 'homeUserScore',
alignType: '2-1',
tagName : 'div',
offsetX: 10,
offsetY: -5
});
setTimeout(function(){$('scoreTipDiv').hide();},3000);
},10000);
});
</script> 
</div>	
<div class="got-score"> 
<div class="increase-tips" style="display:block" id="loginTipDiv"> 

</div> 
<script type="text/javascript"> 
XN.dom.readyDo(function() {
setTimeout(function(){$('loginTipDiv').hide();},3000);
});
</script> 
</div> 
</div></article>	
</div> 
<div class="site-menu-nav-box box"> 
<article id="site-menu-nav" class="site-menu-nav"> 
<section> 
<div class="nav-item"> 
<div class="item-title single-item"> 
<span class="item-main"> 
<img class="icon" src="homepage_img/rr-connect.png" /><b>&nbsp;������</b>
</span></div> 
</div>
<br>
<div class="nav-item"> 
<div class="item-title"><span class="item-main"><a href="XiaoWai_Passage_Shouye.jsp" ui-async="async"><img class="icon" src="homepage_img/blog.png" /> ��־</a></span> 
<span class="item-operation"><a href="XiaoWai_Passage_Write.jsp" accesskey="p">����</a></span> 
</div>
</div>
<br>
<div class="nav-item"> 
<div class="item-title"><span class="item-main"><a href="AlbumSearchFriendServlet" ui-async="async" target="_blank"><img class="icon" src="homepage_img/photo.png" /> ���</a></span> 

</div>
</div>
<br>
<div class="nav-item"> 
<div class="item-title"><span class="item-main"><a href="XiaoWai_Fenxiang_Write.jsp" ui-async="async"><img class="icon" src="homepage_img/share.png" /> ����</a></span></div> 

</div> 

</section> 
</article>
</div>					
</div> 
<div id="ad100000000067"></div> 
 
</div> 
<div id="container2"> 
<div id="main2"> 
<div id="content" ui-rel="prefetchframe" class="x-prefetchframecontent"><div id="publisher_frame" class="publisher"> 

<div class="publisher-highlight"> 
<div class="status-publisher">
<form method="post" action="/XiaoWai/MessageSendServlet" > 
<textarea accesskey="s" style=""  name="status" id="publisher_statusInput" stats="Pub_Status"></textarea> 
<input type="hidden" name="type" value="1">
<div style="overflow: hidden;display: block;" id="publisher_tools" class="publisher-footer">	<span class="current-status" id="currentStatus"> 

   </span> 
<div id="publisher_attach" style="display:none"> 
<span class="status-attachments"> 
<a href="javascript:;" class="pub-emtion" id="publisher_emobtn" onFocus="this.blur();" style="display:none;">����</a> 
<a class="share-video" stats="Pub_Share" href="javascript:;" id="publisher_share_video">��Ƶ</a> 
<a class="share-link" stats="Pub_Share" href="javascript:;" id="publisher_share_link">����</a> 
<a class="share" stats="Pub_Share" href="javascript:;" id="publisher_share" style="display:none;">����</a> 
<a href="javascript:;" class="photo"> 
��Ƭ<input type="file" name="file" size="1" class="addfile" style="*margin-left:-20px;*margin-top:-22px;" id="publisher_file" stats="Pub_Photo" /> 
</a> 
<iframe id="publisher_upload" style="display: none;" src="" name="publisher_upload"></iframe> 
</span> 
</div>				
</div> 
<div style="position:relative;overflow: hidden; height: 0px;" id="publisher_action_frame"> 
<div class="status-attachment" id="publisher_action_rframe"> 
<h4><img src="" id="publisher_action_title_img" class="iPhoto icon" /> <span id="publisher_action_title" href="#">��Ƭ</span></h4> 
<a id="publisher_action_close" class="close" href="#">�ر�</a> 
<div class="attachment" id="publisher_action_content"></div> 
</div> 
</div> 
<input stats="Pub_Send" type="submit" value="����"  class="submit" id="publisher_submit" autoComplete="false"/>			
<input type="hidden" id="publisher_form_ticket" value="-1682686075" />		
</form>	
</div> 
</div> 
</div>
<div id="notice_system"></div> 
<div id="replyDiv" class="reply-notify news-feed" style="display:none"><div class="section-header"><h2>�����Լ��ظ�<span class="stat" id="gossipReplyCount"></span></h2> 
</div> 
<div id="opilist" class="feed-story"></div> 
</div> 
<div id="newsfeed-module-box" class="newsfeed-module-box box"> 
<div class="feed-module" data-loadonscroll="true" data-host=""><div class="feed-header-new"> 
<div class="feed-tools"> 
<menu type="toolbar"> 
<li class="refresh"> 
<a class="reload-feed" href="javascript:refreshFreshNews(${user.userId })">ˢ��</a> 
</li> 
<li class="setting" style="display: none;"> 
<a class="feed-setting" href="">���ù�ע����</a> 
</li> 
<li class="types"> 
<menu class="feed-categories category-filter"> 
<label id="feedTabCategories" data-id="old" class="s"> 
<span class="label"> 
<span class="text">������</span> 
<span class="arrow-down"></span> 
</span> 
</label> 
 
</menu> 
<menu class="feed-attention"> 
<label id="feedTabAttention" data-id="attention"> 
<span class="label"> 

 
</span> 
</label> 
</menu> 
</li> 
</menu> 
</div> 
</div>
<br>
<div id="freshNews" class="feed-list">


<c:forEach var="fnb" items="${allFreshNews}">
	<c:if test="${fnb.type==1}">
		<article class="a-feed"> 
	
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }"  target="_blank"><img width="50" height="50" 

align="left" src="${fnb.userImg }" /></a>		
			</figure> 
	</aside> 
	
	<h3> 
		<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }" target="_blank">${fnb.userName }</a> ����״̬ 
		<a stats="" href="/XiaoWai/FreshNewsReadServlet?fnbID=${fnb.fnID }&visitorID=${user.userId }" target="_blank">${fnb.content }</a> 
	</h3> 
	<br>
	
	<div class="details"> 
		<div class="legend"> 
			<span class="duration">${fnb.time }</span> 
			<span class="seperator">|</span> 
			<a stats="NF_9173398761_2012_600002133" href="#nogo"  

onclick="create_share_feed(723896855,600002133,'pageBlog');" >����</a> 
		</div> 
		<div id="media723896855"></div> 
		<div id="feedbody723896855" style="display:none;" class="replies"></div> 
		
	</div> 
	
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
			 
		</menu>	</div> 
<hr color="#E3EEF8">
</article> 
<br>
	</c:if>
	
	<c:if test="${fnb.type==2}">
	
	<article class="a-feed" id=""> 
	
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }"  target="_blank"><img width="50" height="50"  

align="left" src="${fnb.userImg }" /></a>		
			</figure> 
	</aside> 
	
	<h3> 
		<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }" target="_blank">${fnb.userName }</a> ������־ 
		<a stats="" href="/XiaoWai/FreshNewsReadServlet?fnbID=${fnb.fnID }&visitorID=${user.userId }" target="_blank">${fnb.title }</a> 
	</h3> 
	
	<div class="content"> 
			<div > 
				<a stats="" target="_blank" href="#">${fnb.content }</a>	

		
			</div> 
			
	</div> 
	
	<div class="details"> 
		<div class="legend"> 
			<span class="duration">${fnb.time }</span> 
			<span class="seperator">|</span> 
			<a stats="NF_9173398761_2012_600002133" href="#nogo"  

onclick="create_share_feed(723896855,600002133,'pageBlog');" >����</a> 
		</div> 
		<div id="media723896855"></div> 
		<div id="feedbody723896855" style="display:none;" class="replies"></div> 
		
	</div> 
	
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
				
		</menu>	</div> 
<hr color="#E3EEF8">	
</article> 
<br>
	</c:if>
	
	<c:if test="${fnb.type==3}">
	
		<article class="a-feed" id=""> 
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }"  target="_blank"><img width="50" height="50"  

align="left" src="${fnb.userImg }" /></a>		</figure> 
	</aside> 
	<h3> 
		<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }" target="_blank">${fnb.userName }</a> 
		&nbsp; ��&nbsp;${fnb.fatherName }&nbsp;������ϴ�����Ƭ��
		<a stats="" href="/XiaoWai/FreshNewsReadServlet?fnbID=${fnb.fnID }&visitorID=${user.userId }" target="_blank">${fnb.title }</a> 
	</h3> 
	<br>
	<div class="details"> 
		<div class="legend"> 
			<span class="duration">${fnb.time }</span> 
				
			
			<a stats="" href="#nogo" id="replyKey388725280" 

onClick="getReplyOfTheDoing('388725280','600002595','254624350','f',false,'2','','album')"> 
				<span id=""></span> 
			</a> 
			<span class="seperator">|</span> 
			<a stats="NF_9177465673_2013_600002595" href="#nogo"  

onclick="create_share_feed(388725280,600002595,'pageAlbum');" >����</a> 
		</div> 
		<div id="media388725280"></div> 
		<div id="feedbody388725280" style="display:none;" class="replies"></div> 
		
	</div> 
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
			
		</menu>	</div> 
	
 <hr color="#E3EEF8">
</article> 
 <br>
	</c:if>
	
	<c:if test="${fnb.type==4}">
		<article class="a-feed" id=""> 
	
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }"  target="_blank"><img width="50" height="50"  

align="left" src="${fnb.userImg}" /></a>		
			</figure> 
	</aside> 
	
	<h3> 
		<a stats="" href="/XiaoWai/PersonalPageServlet?userID=${fnb.userID }&visitorID=${user.userId }" target="_blank">${fnb.userName }</a> ������
		<a stats="" href="/XiaoWai/FreshNewsReadServlet?fnbID=${fnb.fnID }&visitorID=${user.userId }" target="_blank">${fnb.title }</a> 
		
	</h3> 
	
	<div class="content"> 
			<div > 
				<a stats="" target="_blank" href="#">${fnb.content }</a>	

		
			</div> 
			
	</div> 
	
	<div class="details"> 
		<div class="legend"> 
			<span class="duration">${fnb.time }</span> 
			<span class="seperator">|</span> 
			<a stats="NF_9173398761_2012_600002133" href="#nogo"  

onclick="create_share_feed(723896855,600002133,'pageBlog');" >����</a> 
		</div> 
		<div id="media723896855"></div> 
		<div id="feedbody723896855" style="display:none;" class="replies"></div> 
		
	</div> 
	
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
			
		</menu>	</div> 
<hr color="#E3EEF8">	
</article> 
<br>
	</c:if>

</c:forEach>




 
 


</div>
</div> 
 
</div> 


</div><div id="sidebar2" ui-rel="prefetchframe" class="x-prefetchframecontent"> 
	
 
<div class="side-item footprint with-arrow" id="footPrint">
<div class="side-item-header clearfix"> 
<h4>�������<span> (${allVisitorsCount })</span></h4> 
</div> 
<div class="side-item-body clearfix"> 

<div style="width:195px;overflow:hidden;margin-top:-40px;padding-top:40px;*position:relative;" id="myvisitors"> 
<ul class="people-list" id="footPrintList" style="margin-left:0px;"> 

<c:forEach var="visitor" items="${allVisitors}" begin="0" end="2">
<li><span class="headpichold"> 
<a style="cursor:pointer;" namecard="" href="/XiaoWai/PersonalPageServlet?userID=${visitor.userId}&visitorID=${user.userId }">
<img src="${visitor.userimg}" width="50" height="50" onload="roundify(this)" /></a> 
</span> 
<span class="clearfix"> 
<a  href="" namecard="225134350">${visitor.name }</a></span> 

</li>

</c:forEach>
 
</ul>
</div> 
 
<a style="position:absolute;top:17px;*top:-22px;_top:-23px;right:0;" href="javascript:refreshVisit(${user.userId })">ˢ��</a>		
</div><input type="hidden" value="810" id="visitCount" /> 
<input type="hidden" value="254624350" id="userIdFP" /> 
</div> 
 <div class="side-item"><div class="side-item-header clearfix"> 
<h4>վ�ڹ���</h4> 
</div> 
<div class="side-item-body clearfix"> 
<ul class="web-function"> 
<li> 
<a href="#"><img src="homepage_img/client3.png" width="15" height="15" alt="" /></a><a stats="Side_Select_Desk"  href="#" target="_black">У������2.6</a>-���ȫ����+�������!<img src="" class="new" /> 
</li> 
<li><a href="#"><img src="homepage_img/mobile-app-v2.png" width="16" height="16" alt="" /></a>��ʱ��¼�������ϴ���<a href="#" target="_blank">�ֻ��ͻ���</a> 
</li> 
<li> 
<a href="#"><img src="homepage_img/phone.png" width="16" height="16" alt="" /></a>�ֻ���¼����ʣ�<a href="#" target="_blank">3g.xiaowai.com</a> 
</li> 
<li><a href="#"><img src="homepage_img/rr-connect.png" width="16" height="16" alt="" /></a>��У���ʺţ�<a href="#" target="_blank">���ξ�����վ</a>��</li> 
</ul></div> 
</div> 
 
  <div class="side-item"><div class="side-item-header clearfix"> 
<h4>������</h4> 
</div> 
<div class="side-item-body clearfix">
  ��ӭ���ʹ��У����
  
</div> 

<div id="sponsorsWidget" style="display:none"></div> 


 
 </div> 
</div> 
</div> 
<div id="footer"> 
		
<div class="site-footer"> 
<span class="copyright">���ϳ�ɳУ�����Ƽ���չ���޹�˾��������[2009]169�� �Ļ����ල�������䣺wlwh@vip.sina.com</span><p style="color:#808080;clear:both;line-height:2;*position:relative;*top:-10px;">У����<span title="revision$revxxx$; SJSWT38-130.opi.com">&copy;</span>2011&nbsp;&nbsp;<a class="beian" href="" target="_blank">��ICP֤090254��</a>&nbsp;<span style="color:#808080">�湫������110000000009��</span>&nbsp;<span style="color:#808080">�ײ�����11002066</span></p></div> 
</div> 
</div>
 <div id="footer2" >
 	<table>
		<tr>
		<td>
		<select name="friend" onChange="chat(this)">
			
			<option value="����" >����</option>
			<option value="����">����</option>
			<option value="��ʱ־">��ʱ־</option>
			<option value="������">������</option>
			<option value="������">������</option>
			<option value="���">���</option>
			<option value="001">001</option>
			<option value="002">002</option>
			<option value="003">003</option>
		</select>
		</td>
		</tr>
	</table>
</div>
<div id="footer4" style="display:none">
	<table>
		<tr>
			<td>
			<label id="chatName"></label>
			</td>
			<td align="right" onClick="closeChat()">
			<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�ر�</label>
			</td>
		</tr>
	</table>
 <div id="footer3">
 	<table id="chat01" style="display:none">
		<tr>
		<td>
			<textarea cols="38" rows="10" disabled="disabled"></textarea>
		</td>
		</tr>
		<tr>
		<td>
			<textarea cols="38" rows="3"></textarea>
		</td>
		</tr>
		<tr>
		<td align="right">
			<input type="button" value="����">
		</td>
		</tr>
	</table>
</div>

 	
	
</div>
<script language="javascript">
	function chat(op){
		var name = op.value;
		document.getElementById("chatName").innerText=name;
		document.getElementById("chat01").style.display="";
		document.getElementById("footer4").style.display="";
	}
	function closeChat(){
		document.getElementById("chat01").style.display="none";
		document.getElementById("footer4").style.display="none";
	}
</script>
  </body>
</html>
