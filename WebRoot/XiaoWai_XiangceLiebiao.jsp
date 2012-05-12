<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
 
     
    <title>相册</title>
    <script language="javascript">  
	   function mycreate(){
	   
	     var retvalue =  window.showModalDialog("XiaoWai_Xiangce_createXiangce.jsp","","dialogWidth=407px;dialogHeight=157px;status=no;help=no;scrollbars=no");
	      
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
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
  </head>
  
  <body>
  <c:set var="user" value="${user}"></c:set>
  <%@include file="XiaoWai_header.jsp" %>
  
  <c:set var="allpage" value="${albumallpage}"></c:set>
  
    <h3><a href="AlbumSearchFriendServlet">好友相册</a>&nbsp;&nbsp;&nbsp;<a href="AlbumSearchMyselfServlet?userid=${user.userId}">我的相册</a>&nbsp;&nbsp;&nbsp;<a href="javascript:mycreate()">创建相册</a>
   </h3>
   <c:set var="index" value="${albummypage}"></c:set>
   <c:set var="albumtype" value="${albumtype}"></c:set>
   <table cellspacing="30">
      <c:forEach var="albummap" items="${albummap}"  begin="${index}" end="${index}" >
       <c:set var="albumvec" value="${albummap.value}"></c:set>
	       <c:forEach var="AlbumBean"  items="${albumvec}" varStatus="status">
		       <c:if test="${status.index%3==0}">
		         <tr>
		       </c:if>
			    <td width="208">
				      <table>
					     <tr><td><a href="AlbumPhotoSearchFromalbidServlet?albid=${AlbumBean.albid}"><img src="${AlbumBean.albimg}" width="200" height="150"/></a></td></tr>
					     <tr><td><a href="AlbumPhotoSearchFromalbidServlet?albid=${AlbumBean.albid}">${AlbumBean.albtitle}</a></td></tr>
						 <tr><td><a href="AlbumSearchMyselfServlet?userid=${AlbumBean.userid}">${AlbumBean.username}</a></td></tr>
					  </table>
			    </td>
			  <c:if test="${status.index%3==2}">
			    </tr>
			  </c:if>
		  </c:forEach>
	</c:forEach>
   </table> 
  
    
    <div align="center">
     <c:if test="${allpage!=0}">
	    <c:if test="${albumtype==0}">
		    <c:if test="${index!=0}">
		       <a href="AlbumSearchFriendServlet?mypage=${index-1}">上一页</a>
		    </c:if>
		    <c:if test="${index!=(allpage-1)}">
		    <a href="AlbumSearchFriendServlet?mypage=${index+1}">下一页</a>  
		    </c:if>
	    </c:if>
	    <c:if test="${albumtype==1}">
		    <c:if test="${index!=0}">
		       <a href="AlbumSearchMyselfServlet?mypage=${index-1}">上一页</a>
		    </c:if>
		    <c:if test="${index!=(allpage-1)}">
		    <a href="AlbumSearchMyselfServlet?mypage=${index+1}">下一页</a>  
		    </c:if>
	    </c:if>
           第${index+1}页,总共${allpage}页
   </c:if>
   <c:if test="${allpage==0}">
      没有相册...
   </c:if>
   </div>
  </body>
</html>
