<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>    
    <link rel="shortcut icon" type="image/x-icon" href="http://a.xnimg.cn/favicon-rr.ico?ver=2" /> 
<link rel="apple-touch-icon" href="http://a.xnimg.cn/wap/apple_icon_.png" /> 
<!--[if IE]><script type="text/javascript" src="js/expressions.js"></script><![endif]--> 
<script type="text/javascript">XN = {get_check:'-1682686075',env:{domain:'xiaowai.com',shortSiteName:'校外',siteName:'校外网'}};
</script> 
<LINK href="css/friend.css" type=text/css rel=stylesheet>
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>约会</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}

#Layer2 {
	position:absolute;
	width:569px;
	height:306px;
	z-index:2;
	top: 88px;
}
#Layer3 {
	position:absolute;
	width:567px;
	height:45px;
	z-index:1;
}
#Layer4 {
	position:absolute;
	width:565px;
	height:115px;
	z-index:2;
	left: 3px;
	top: 52px;
}
#Layer1 {
	position:absolute;
	width:161px;
	height:609px;
	z-index:3;
	
	top: 88px;
}
#Layer7 {
	position:absolute;
	width:388px;
	height:142px;
	z-index:4;
	top: 117px;
	
}
#Layer8 {
	
	width:388px;
	height:29px;
	
	z-index:1;
	background-color: #3366FF;
}


-->
</style>
<script language="JavaScript1.2">

/*
Highlight Table Cells Script- 
Last updated: 99/01/21
?Dynamic Drive (www.dynamicdrive.com)
For full source code, installation instructions,
100's more DHTML scripts, and Terms Of
Use, visit dynamicdrive.com
*/

function changeto(highlightcolor){
source=event.srcElement
if (source.tagName=="TR"||source.tagName=="TABLE")
return
while(source.tagName!="TD")
source=source.parentElement
if (source.style.backgroundColor!=highlightcolor&&source.id!="ignore")
source.style.backgroundColor=highlightcolor
}

function changeback(originalcolor){
if (event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="ignore")
return
if (event.toElement!=source)
source.style.backgroundColor=originalcolor
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
 <script type="text/javascript">
      function pageJump(allPage){
      	var newPage = document.getElementById("jumpPage").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		window.location.href="YuehuiMyxiangyingServlet?myXyPage=" + newPage;
    	}
      }
      function pageJump2(allPage){
      	var newPage = document.getElementById("jumpPage2").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		window.location.href="YuehuiMyxiangyingServlet?myXyPage=" + newPage;
    	}
      }
 </script>
 <script type="text/javascript">
var httprequest = false;
	var appTitle;
	function sousuo(op){
			
			if(window.XMLHttpRequest){
	        	  httprequest = new window.XMLHttpRequest();
	      	   
	     	 }else if(window.ActiveXObject){//IE浏览器创建对象
	        	 try{
	         	 httprequest = new window.ActiveXObject("Msxm12.XMLHTTP");
		       
		         }catch(e){
	         	 httprequest = new window.ActiveXObject("Microsoft.XMLHTTP");
	         	 }
	         }
	         if(httprequest){
	        	var date = new Date();
	        	
	        		appTitle = document.getElementById("yuehuisousuo").value;
	        	
	        		url ="YuehuiSousuoServlet?appTitle="+ appTitle + "&saPage="+ op + "&date=" + date;
					httprequest.open("GET",url,true);
					httprequest.onreadystatechange=sendsuo;
					httprequest.send(null);
	        	
	         }
	}
	function sendsuo(){
			if(httprequest.readystate==4){
				if(httprequest.status==200){
					var message = httprequest.responseText;
			
				document.getElementById("Layer2").innerHTML=message;
					
				}
			}
		}
 function pageJump3(allPage){
      	var newPage = document.getElementById("jumpPage3").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		sousuoNextPage(newPage);
    	}
      }
      function pageJump4(allPage){
      	var newPage = document.getElementById("jumpPage4").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		
    		sousuoNextPage(newPage);
    	}
      }
      function sousuoNextPage(page){
     		 var date = new Date();
      		url ="YuehuiSousuoServlet?appTitle="+ appTitle + "&saPage="+ page + "&date=" + date;
			httprequest.open("GET",url,true);
			httprequest.onreadystatechange=sendsuo;
			httprequest.send(null);
      }
</script>
  </head>
  
  <body>
   <%@include file="XiaoWai_header.jsp" %>

<table width="980" border="0" align="center">
  <tr>
    <td height="50" colspan="3">
      <table width="100%" border="0">
        <tr>
          <td width="6%">&nbsp;&nbsp;&nbsp;<img src="images/haoyou.jpg" /></td>
          <td width="94%"><strong><font size="+1">约会</font></strong></td>
        </tr>
    </table></td>
  </tr>
  <tr>
  <td width="162" height="540">
  <%@include file="XiaoWai_Yuehui_fenzu.jsp" %>
  	</td>
  	 <td width="588">
  	<div id="Layer2">
  	<div id="Layer3">
  		<table width="100%" height="41" border="0" background="images/beijing.jpg">
        <tr>
          <td width="19%" height="35" align="center"><a 
                        href="YuehuiMyAppintmentServlet?myAppPage=1"><img 
                        height=30 src="images/myyuehui.jpg" width=76 
                        border=0 /></a></td>
          <td width="15%" align="center"><a href="XiaoWai_Yuehui_CreateYuehui.jsp"><img 
                        height=28 src="images/addyuehui.jpg" width=71 
                        border=0 /></a></td>
          <td width="15%"><a href="YuehuiMyxiangyingServlet?myXyPage=1"><img 
                        height=32 src="images/yuehuixiangying.jpg" width=81 
                        border=0 /></a></td>
          <td width="51%">当前&nbsp;${myXyPage}&nbsp;页&nbsp;/&nbsp;共&nbsp;${allXyPage}&nbsp;页
          <c:choose>
          <c:when test="${myXyPage==1}"><a href="javascript:void(0)">上一页</a></c:when>
          <c:otherwise><a href="YuehuiMyxiangyingServlet?myXyPage=${myXyPage -1}">上一页</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${myXyPage==allXyPage}"><a href="javascript:void(0)">下一页</a></c:when>
          <c:otherwise><a href="YuehuiMyxiangyingServlet?myXyPage=${myXyPage + 1}">下一页</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage name=jumpPage style="width:30;"/>&nbsp;<a href="javascript:pageJump(${allXyPage})">跳到</a>&nbsp;&nbsp;</td>
        </tr>
      </table>
  	</div>
       <div id="Layer4">
        <table width="100%" height="90" border="0">
        <c:forEach var="myXyApp" items="${myXyAppList}">
        
        	<tr>
            <td>  
              <table width="100%" height="59" border="0">
                <caption> <hr/>
                  </caption>
                <tr>
                    <td width="10%" rowspan="2"><img src="${myXyApp.userimg }" width="70" height="60"/></td>
                    <td width="17%" height="27">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${myXyApp.userid }">${myXyApp.name }（${myXyApp.sex }）</a></td>
                    <td width="31%" align="center">主题</td>
                    <td width="11%" align="center">分类</td>
                    <td width="16%">约会时间</td>
                    <td width="15%" align="center">回应状态</td>
                  </tr>
                  <tr>
                    <td>&nbsp;${myXyApp.academe}</td>
                    <td align="center"><a href="XiaoWai_Yuehui_YuehuiInfo_xingying.jsp?appid=${myXyApp.appid}">${myXyApp.apptitle}</a></td>
                    <td width="11%" align="center">${myXyApp.type}</td>
                    <td width="16%">${myXyApp.apptime}</td>
                    	<td width="15%" align="center">
                    	 <c:if test="${myXyApp.isRequested eq 1}">
                    	 对方已同意
                   		 </c:if> 
                     <c:if test="${myXyApp.isRequested eq 0}">
                    	等待对方回应
                    </c:if>
                    <c:if test="${myXyApp.isRequested eq -1}">
                    	对方已拒绝
                    </c:if>
                    </td>
                  </tr>
                 
                  	<tr>
				   	<td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="right">&nbsp;</td>
                    <td width="11%" align="center">&nbsp;</td>
                    <td width="16%" height="30"> <c:if test="${myXyApp.isRequested eq 1}">
                    QQ在线联系：</c:if></td>
                    <td width="15%" align="center"><c:if test="${myXyApp.isRequested eq 1}"><a href="http://wpa.qq.com/msgrd?V=1&amp;Uin=${myXyApp.QQ }&amp;Menu=yes"><img src="images/yuehuiQQ.gif" /></a>
                    </c:if>
                    </td>
                  </tr>
                  
				   
                </table>
              </td>
          </tr>
            
        </c:forEach>
          <tr>
          	<td><table width="100%" height="41" border="0" background="images/beijing.jpg">
        <tr>
          <td width="19%" height="35" align="center"><a 
                        href="YuehuiMyAppintmentServlet?myAppPage=1"><img 
                        height=30 src="images/myyuehui.jpg" width=76 
                        border=0 /></a></td>
          <td width="15%" align="center"><a href="XiaoWai_Yuehui_CreateYuehui.jsp"><img 
                        height=28 src="images/addyuehui.jpg" width=71 
                        border=0 /></a></td>
          <td width="15%"><a href="YuehuiMyxiangyingServlet?myXyPage=1"><img 
                        height=32 src="images/yuehuixiangying.jpg" width=81 
                        border=0 /></a></td>
          <td width="51%">当前&nbsp;${myXyPage}&nbsp;页&nbsp;/&nbsp;共&nbsp;${allXyPage}&nbsp;页
          <c:choose>
          <c:when test="${myXyPage==1}"><a href="javascript:void(0)">上一页</a></c:when>
          <c:otherwise><a href="YuehuiMyxiangyingServlet?myXyPage=${myXyPage -1}">上一页</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${myXyPage==allXyPage}"><a href="javascript:void(0)">下一页</a></c:when>
          <c:otherwise><a href="YuehuiMyxiangyingServlet?myXyPage=${myXyPage + 1}">下一页</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage2 name=jumpPage2 style="width:30;"/>&nbsp;<a href="javascript:pageJump2(${allXyPage})">跳到</a>&nbsp;&nbsp;</td>
        </tr>
      </table></td>
          </tr>
		   <tr>
		   	<td><br><br><br><br></td>
		   </tr>
        </table>
      </div> 
</div>
  	</td>
  	<td>
  	<div id="Layer5">
      <table width="100%" height="81" border="0">
        <tr>
          <td><table width="100%" border="0">
              <caption>
                <hr />
            </caption>
            <tr>
                <td><a href=""><font size="+1">凡客经典帆布鞋</font></a></td>
            </tr>
              <tr>
                <td><img src="images/guanggao1.jpg" /></td>
              </tr>
          </table></td>
        </tr>
        <tr>
          <td><table width="100%" border="0">
              <caption>
                <hr />
            </caption>
            <tr>
                <td><a href=""><font size="+1">免费唱歌的软件</font></a></td>
            </tr>
              <tr>
                <td><img src="images/guanggao2.png" /></td>
              </tr>
          </table></td>
        </tr>
        <tr>
          <td><table width="100%" border="0">
              <caption>
                <hr />
            </caption>
            <tr>
                <td><a href=""><font size="+1">买酒就上酒仙网</font></a></td>
            </tr>
              <tr>
                <td><img src="images/guanggao3.jpg" /></td>
              </tr>
          </table></td>
        </tr>
      </table>
</div>
  	</td>
  </tr>
  </table>

  </body>
</html>
