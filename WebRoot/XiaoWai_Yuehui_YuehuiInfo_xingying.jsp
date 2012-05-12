<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>约会信息</title>
<link href="css/friend.css" type=text/css rel=stylesheet>
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
<LINK href="css/friend.css" type=text/css rel=stylesheet>
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
<script type="text/javascript">
	var httprequest = false;
	var appids;
	function xiangying(appid){
		appids=appid;
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
	        	
	        	var tele = document.getElementById(appid+"t").value;
	        	var qq = document.getElementById(appid+"q").value;
	        	if(tele==""){
	        		document.getElementById(appid+"qk").innerHTML="";
	        		document.getElementById(appid+"tk").innerHTML="<font color=red>手机号码不能为空</font>&nbsp;&nbsp;&nbsp;";
	        		document.getElementById(appid+"t").focus();
	        	}else if(qq==""){
	        		document.getElementById(appid+"tk").innerHTML="";
	        		document.getElementById(appid+"qk").innerHTML="<font color=red>QQ号码不能为空</font>&nbsp;&nbsp;&nbsp;";
	        		document.getElementById(appid+"q").focus();
	        	}else{
	        		url ="YuehuiXiangyingServlet?appid="+ appid + "&tele=" + tele + "&qq=" + qq + "&date=" + date;
					httprequest.open("GET",url,true);
					httprequest.onreadystatechange=sends;
					httprequest.send(null);
	        	}
				
	        	
	         }
	}
	function sends(){
			if(httprequest.readystate==4){
				if(httprequest.status==200){
					var message = httprequest.responseText;
					if(message == "isSuccess"){
						document.getElementById(appids+"d").style.display="none";
						document.getElementById(appids).innerHTML="<font color=red >响应成功</font>";
					}else{
						document.getElementById(appids+"d").style.display="none";
						document.getElementById(appids).innerHTML="<font color=red >响应失败</font>";
						Thread.sleep(3000);
						document.getElementById(appids).innerHTML="<input type=button id=${appBean.appid } name=xingying value=响应约会 onClick=javascript:xiangyings(${appBean.appid})>";
					}
				}
			}
		}
</script>
<script type="text/javascript">
	function xiangyings(appid){
		var ss = document.getElementById(appid+"d").style.display;
		if(ss=="none"){
			document.getElementById(appid+"d").style.display="block";
		}else if(ss=="block"){
			document.getElementById(appid+"d").style.display="none";
		}
		
	}
</script>
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
  	<td width="588"><div id="Layer2">
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
          <td width="51%">&nbsp;</td>
        </tr>
      </table>
</div>
<div id="Layer4">
      <c:forEach var="appBean" items="${myXyAppList}">
      	<c:if test="${appBean.appid eq param.appid}">
      		<table width="100%" height="168" border="1" cellpadding="0" cellspacing="0">
          <tr>
            <td height="40" colspan="2"><table width="145" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="51" rowspan="2"><img src="${appBean.userimg }" width="70" height="60" /></td>
                <td width="94" height="21">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${appBean.userid }">${appBean.name }（${appBean.sex }）</a></td>
              </tr>
              <tr>
                <td>${appBean.academe }</td>
              </tr>
            </table></td>
            <td width="73%" colspan=2 align="left">
				<span align=center id=${appBean.appid} style="display:block;">
                   <c:if test="${appBean.isRequested eq 1}">
                    	 QQ在线联系：&nbsp;&nbsp;<a href="http://wpa.qq.com/msgrd?V=1&amp;Uin=${myXyApp.QQ }&amp;Menu=yes"><img src="images/yuehuiQQ.gif" /></a>
                   		 </c:if> 
                     <c:if test="${appBean.isRequested eq 0}">
                    	等待对方回应
                    </c:if>
                    <c:if test="${appBean.isRequested eq -1}">
                    	对方已拒绝
                    </c:if>
                    </span>
				
				</td>
            
          </tr>
          
          <tr>
            <td width="4%" height="25">&nbsp;</td>
            <td width="20%" align="right">主题：</td>
            <td align="center">${appBean.apptitle }</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="25">&nbsp;</td>
            <td  align="right">分类：</td>
            <td align="center">${appBean.type }</td>
            <td>&nbsp;</td>
          </tr>
		  <tr>
            <td height="25">&nbsp;</td>
            <td align="right">邀约人数：</td>
            <td align="center">${appBean.count}人</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="25">&nbsp;</td>
            <td align="right">应约要求：</td>
           	<c:choose>
           		<c:when test="${appBean.requirement==1}">
           		  <td align="center">只邀请男生</td>
           		</c:when>
           		<c:when test="${appBean.requirement==2}">
           			<td align="center">只邀请女生</td>
           		</c:when>
           		<c:otherwise>
           			<td align="center">不限</td>
           		</c:otherwise>
           	</c:choose>
          
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="25">&nbsp;</td>
            <td align="right">约会时间：</td>
            <td align="center">${appBean.apptime}</td>
            <td>&nbsp;</td>
          </tr>
		   <tr>
            <td height="25">&nbsp;</td>
            <td align="right">发约时间：</td>
            <td align="center">${appBean.time} </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="25">&nbsp;</td>
            <td align="right">手机号码：</td>
            <td align="center">   <c:if test="${appBean.isRequested eq 1}">${appBean.tel}</c:if>
            	<c:if test="${appBean.isRequested != 1}"><font color=red>约会成功后方可获取对方手机号码</font></c:if>
            	</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="25">&nbsp;</td>
            <td align="right">QQ：</td>
            <td align="center"> <c:if test="${appBean.isRequested eq 1}">${appBean.QQ}</c:if>
            	<c:if test="${appBean.isRequested != 1}"><font color=red>约会成功后方可获取对方QQ号码</font></c:if></td>
            <td>&nbsp;</td>
          </tr>
          <tr >
            <td>&nbsp;</td>
            <td align="right">活动流程说明：</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
		   <tr>
            <td  height="100">&nbsp;</td>
            <td>&nbsp;</td>
            <td><div><span>${appBean.context}</span></div></td>
            <td>&nbsp;</td>
          </tr>
		
        </table>
      	
      	</c:if>
      
      </c:forEach>
        
      
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
