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
    
    <title>创建分组</title>
<LINK href="css/friend.css" type=text/css rel=stylesheet>
    
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
  <c:if test="${addTypeFriendList!=null}">
  
    <script type="text/javascript">
  	alert("ssss");
  	window.location.reload();
  	
  </script>
  </c:if>

   <table width="355" height="280" border="0" bgcolor="#FFFFFF">
   		<c:forEach var="friendBean" items="${addTypeFriendList}"varStatus="statue">
   		<c:if test="${statue.index%2==0}">
   			<tr>
       	</c:if>
              <td width="50%"><table width="162" border="1"bordercolor="#66FFFF" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="52" rowspan="2"><img src="${friendBean.userimg }" width="70" height="60"/></td>
                            <td height="21" colspan="2">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${friendBean.userid }">${friendBean.name }（${friendBean.sex }）</a></td>
                          </tr>
                          <tr>
                            <td width="84">${friendBean.ftname }</td>
                            <td width="26"><input type="checkbox" name="chfriend" value="${friendBean.friid }"/></td>
                          </tr>
                        </table></td>
   		</c:forEach>
          </table>
  </body>
</html>
