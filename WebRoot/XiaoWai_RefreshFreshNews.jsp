<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'XiaoWai_RefreshFreshNews.jsp' starting page</title>
    
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
  
   <c:forEach var="fnb" items="${allFreshNews2}">
  
	<c:if test="${fnb.type==1}">
		<article class="a-feed"> 
	
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href=""  target="_blank"><img width="50" height="50" align="left" src="${fnb.userImg }" /></a>		
			</figure> 
	</aside> 
	
	<h3> 
		<a stats="" href="" target="_blank">${fnb.userName }</a> 发表状态 
		<a stats="" href="" target="_blank">${fnb.content }</a> 
	</h3> 
	<br>
	
	<div class="details"> 
		<div class="legend"> 
			<span class="duration">${fnb.time }</span> 
			<span class="seperator">|</span> 
			<a stats="NF_9173398761_2012_600002133" href="#nogo"  onclick="create_share_feed(723896855,600002133,'pageBlog');" >分享</a> 
		</div> 
		<div id="media723896855"></div> 
		<div id="feedbody723896855" style="display:none;" class="replies"></div> 
		
	</div> 
	
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
				<li><a stats="NF_NEWSDEL_9173398761_2012_600002133" href="javascript:;" class="delete">删除</a></li> 
		</menu>	</div> 
<hr color="#E3EEF8">
</article> 
<br>
	</c:if>
	
	<c:if test="${fnb.type==2}">
	
	<article class="a-feed" id=""> 
	
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href=""  target="_blank"><img width="50" height="50"  align="left" src="${fnb.userImg }" /></a>		
			</figure> 
	</aside> 
	
	<h3> 
		<a stats="" href="" target="_blank">${fnb.userName }</a> 发表日志 
		<a stats="" href="" target="_blank">${fnb.title }</a> 
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
			<a stats="NF_9173398761_2012_600002133" href="#nogo"  onclick="create_share_feed(723896855,600002133,'pageBlog');" >分享</a> 
		</div> 
		<div id="media723896855"></div> 
		<div id="feedbody723896855" style="display:none;" class="replies"></div> 
		
	</div> 
	
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
				<li><a stats="NF_NEWSDEL_9173398761_2012_600002133" href="javascript:;" class="delete">删除</a></li> 
		</menu>	</div> 
<hr color="#E3EEF8">	
</article> 
<br>
	</c:if>
	
	<c:if test="${fnb.type==3}">
	
		<article class="a-feed" id=""> 
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href=""  target="_blank"><img width="50" height="50"  align="left" src="${fnb.userImg }" /></a>		</figure> 
	</aside> 
	<h3> 
		<a stats="" href="" target="_blank">${fnb.userName }</a> 
		&nbsp; 向&nbsp;${fnb.fatherName }&nbsp;相册中上传了相片：
		<a stats="" href="" target="_blank">${fnb.title }</a> 
	</h3> 
	<br>
	<div class="details"> 
		<div class="legend"> 
			<span class="duration">${fnb.time }</span> 
				
			
			<a stats="" href="#nogo" id="replyKey388725280" onClick="getReplyOfTheDoing('388725280','600002595','254624350','f',false,'2','','album')"> 
				<span id=""></span> 
			</a> 
			<span class="seperator">|</span> 
			<a stats="NF_9177465673_2013_600002595" href="#nogo"  onclick="create_share_feed(388725280,600002595,'pageAlbum');" >分享</a> 
		</div> 
		<div id="media388725280"></div> 
		<div id="feedbody388725280" style="display:none;" class="replies"></div> 
		
	</div> 
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
			
			
				<li><a stats="NF_NEWSDEL_9177465673_2013_600002595" href="javascript:;" class="delete">删除</a></li> 
		</menu>	</div> 
	
 <hr color="#E3EEF8">
</article> 
 <br>
	</c:if>
	
	<c:if test="${fnb.type==4}">
		<article class="a-feed" id=""> 
	
	<aside> 
		<figure class="newsfeed-user" data-id="" data-name="${fnb.userName }" > 
			<a stats="" href=""  target="_blank"><img width="50" height="50"  align="left" src="${fnb.userImg }" /></a>		
			</figure> 
	</aside> 
	
	<h3> 
		<a stats="" href="" target="_blank">${fnb.userName }</a> 分享了
		<a stats="" href="" target="_blank">${fnb.title }</a> 
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
			<a stats="NF_9173398761_2012_600002133" href="#nogo"  onclick="create_share_feed(723896855,600002133,'pageBlog');" >分享</a> 
		</div> 
		<div id="media723896855"></div> 
		<div id="feedbody723896855" style="display:none;" class="replies"></div> 
		
	</div> 
	
	<div class="feed-toolbar"> 
		<menu type="toolbar"> 
				<li><a stats="NF_NEWSDEL_9173398761_2012_600002133" href="javascript:;" class="delete">删除</a></li> 
		</menu>	</div> 
<hr color="#E3EEF8">	
</article> 
<br>
	</c:if>

</c:forEach>
  </body>
</html>
