<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
 
    <title>My JSP 'XiaoWai_Yuehui_Sousuo.jsp' starting page</title>
    
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
   	<div id="Layer3">
        <table border="0" background="images/beijing.jpg" style="left: 208px; width: 567px; top: 78px;">
        <tr>
          <td width="15%" height="35" align="center"><a 
                        href="YuehuiMyAppintmentServlet?myAppPage=1"><img 
                        height=30 src="images/myyuehui.jpg" width=76 
                        border=0 /></a></td>
          <td width="15%" align="center"><a href="XiaoWai_Yuehui_CreateYuehui.jsp"><img 
                        height=28 src="images/addyuehui.jpg" width=71 
                        border=0 /></a></td>
          <td width="15%"><a href="YuehuiMyxiangyingServlet?myXyPage=1"><img 
                        height=32 src="images/yuehuixiangying.jpg" width=81 
                        border=0 /></a></td>
          <td width="55%" align=right>当前&nbsp;${saPage}&nbsp;页&nbsp;/&nbsp;共&nbsp;${saAllPage}&nbsp;页
          <c:choose>
          <c:when test="${saPage==1}"><a href="javascript:void(0)">上一页</a></c:when>
          <c:otherwise><a href="javascript:sousuoNextPage(${saPage -1})">上一页</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${saPage==saAllPage}"><a href="javascript:void(0)">下一页</a></c:when>
          <c:otherwise><a href="javascript:sousuoNextPage(${saPage +1})">下一页</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage3 name=jumpPage style="width:30;"/>&nbsp;<a href="javascript:pageJump3(${saAllPage})">跳到</a>&nbsp;&nbsp;</td>
          </tr>
      </table>
</div>

<div id="Layer4">
        <table width="100%" height="90" border="0">
        	<c:forEach var="appBean" items="${list}" varStatus="status">
        		<tr>
            <td>
             
              <table width="100%" height="59" border="0">
                <caption> <hr />
                </caption>
                <tr>
                    <td width="10%" rowspan="2"><img src="${appBean.userimg }" width="70" height="60"/></td>
                    <td width="17%" height="27">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${appBean.userid }">${appBean.name}（${appBean.sex}）</a></td>
                    <td width="34%" align="center">主题</td>
                    <td width="11%" align="center">分类</td>
                    <td width="13%">约会时间</td>
                    <td width="15%" align="center">发约时间</td>
                </tr>
                  <tr>
                    <td height="27">&nbsp;${appBean.academe}</td>
                    <td align="center"><a href="XiaoWai_Yuehui_YuehuiInfo.jsp?appid=${appBean.appid }">${appBean.apptitle}</a></td>
                    <td width="11%" align="center">${appBean.type}</td>
                    <td width="13%">${appBean.apptime}</td>
                    <td width="20%" align="center">&nbsp; &nbsp;${appBean.time}</td>
                  </tr>
				   <tr>
				   	<td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="right">响应人数：</td>
                    <td width="11%" align="center">${appBean.requestCount}人</td>
                    <td width="13%" height="30">&nbsp;</td>
                    <td width="20%" align="center"><span align=center id=${appBean.appid} style="display:block;">
                    <c:if test="${appBean.isRequested eq 1}">
                    	<font color="red">已经响应</font>
                    </c:if>
                    <c:if test="${appBean.isRequested eq -1}">
                    	<input type="button" id=${appBean.appid } name="xingying" value="响应约会" onClick="javascript:xiangyings(${appBean.appid})">
                    </c:if>
                    </span></td>
                  </tr>
                  <tr>
                    <td colspan=7 align=right>
                       <dir id=${appBean.appid}d style="display:none;"> 
                    
                    <table>
                    	<tr>
                    		<td><span id=${appBean.appid}tk><font color="red">响应前请核实你的手机号</font>&nbsp;&nbsp;&nbsp;</span></td>
                    		<td>你的手机号码：</td>
                    		<td><input type="text" id=${appBean.appid}t /></td>
                    		<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    	</tr>
                    	<tr>
                    		<td><span id=${appBean.appid}qk><font color="red">响应前请核实你的Q号</font>&nbsp;&nbsp;&nbsp;</span></td>
                    		<td align=right>你的QQ:</td>
                    		<td><input type="text" id=${appBean.appid}q /></td>
                    		<td><input type=button name=btbutton value=确定 onClick="javascript:xiangying(${appBean.appid})"/>&nbsp;&nbsp;</td>	
                    	</tr>
                    </table>
                
                    </dir></td>
                  </tr>
              </table>
            </td>
          </tr>
        	</c:forEach>
          <tr>
          	<td>
          		 <table border="0" background="images/beijing.jpg" style="left: 208px; width: 567px; top: 78px;">
        <tr>
          <td width="15%" height="35" align="center"><a 
                        href="myyuehui.html"><img 
                        height=30 src="images/myyuehui.jpg" width=76 
                        border=0 /></a></td>
          <td width="15%" align="center"><a href="XiaoWai_Yuehui_CreateYuehui.jsp"><img 
                        height=28 src="images/addyuehui.jpg" width=71 
                        border=0 /></a></td>
          <td width="15%"><a href="yuehuixiangying.html"><img 
                        height=32 src="images/yuehuixiangying.jpg" width=81 
                        border=0 /></a></td>
          <td width="55%" align=right>当前&nbsp;${saPage}&nbsp;页&nbsp;/&nbsp;共&nbsp;${saAllPage}&nbsp;页
          <c:choose>
          <c:when test="${saPage==1}"><a href="javascript:void(0)">上一页</a></c:when>
          <c:otherwise><a href="javascript:sousuoNextPage(${saPage -1})">上一页</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${saPage==saAllPage}"><a href="javascript:void(0)">下一页</a></c:when>
          <c:otherwise><a href="javascript:sousuoNextPage(${saPage +1})">下一页</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage4 name=jumpPage style="width:30;"/>&nbsp;<a href="javascript:pageJump4(${saAllPage})">跳到</a>&nbsp;&nbsp;</td>
        </tr>
      </table>
          	</td>
          </tr>
          <tr>
          	<td height=50>&nbsp;</td>
          </tr>
        </table>
        </div>
  </body>
</html>
