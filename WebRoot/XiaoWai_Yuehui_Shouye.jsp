<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <link rel="shortcut icon" type="image/x-icon" href="http://a.xnimg.cn/favicon-rr.ico?ver=2" /> 
<link rel="apple-touch-icon" href="http://a.xnimg.cn/wap/apple_icon_.png" /> 
<!--[if IE]><script type="text/javascript" src="js/expressions.js"></script><![endif]--> 
<script type="text/javascript">XN = {get_check:'-1682686075',env:{domain:'xiaowai.com',shortSiteName:'У��',siteName:'У����'}};
</script> 
<LINK href="css/friend.css" type=text/css rel=stylesheet>
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>Լ��</title>
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
 
  </head>
  
  <body>
  
  <script type="text/javascript">
      function pageJump(allPage,fl){
      	var newPage = document.getElementById("jumpPage").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		window.location.href="YueHuiSearchServlet?page=" + newPage + "&fenlei="+fl;
    	}
      }
      function pageJump2(allPage,fl){
      	var newPage = document.getElementById("jumpPage2").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		window.location.href="YueHuiSearchServlet?page=" + newPage + "&fenlei="+fl;
    	}
      }
      
      
      </script>
<%@include file="XiaoWai_header.jsp" %>
<c:if test="${list==null}">
  	  <script type="text/javascript">
  	  	window.location.href="YueHuiSearchServlet?page=1&fenlei=0";
  	  </script>
  </c:if>
<script type="text/javascript">
	var httprequest = false;
	var appids;
	function xiangying(appid){
		appids=appid;
			if(window.XMLHttpRequest){
	        	  httprequest = new window.XMLHttpRequest();
	      	   
	     	 }else if(window.ActiveXObject){//IE�������������
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
	        		document.getElementById(appid+"tk").innerHTML="<font color=red>�ֻ����벻��Ϊ��</font>&nbsp;&nbsp;&nbsp;";
	        		document.getElementById(appid+"t").focus();
	        	}else if(qq==""){
	        		document.getElementById(appid+"tk").innerHTML="";
	        		document.getElementById(appid+"qk").innerHTML="<font color=red>QQ���벻��Ϊ��</font>&nbsp;&nbsp;&nbsp;";
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
						document.getElementById(appids).innerHTML="<font color=red >��Ӧ�ɹ�</font>";
					}else{
						document.getElementById(appids+"d").style.display="none";
						document.getElementById(appids).innerHTML="<font color=red >��Ӧʧ��</font>";
						Thread.sleep(3000);
						document.getElementById(appids).innerHTML="<input type=button id=${appBean.appid } name=xingying value=��ӦԼ�� onClick=javascript:xiangyings(${appBean.appid})>";
					}
				}
			}
		}
</script>
<script type="text/javascript">
var httprequest = false;
	var appTitle;
	function sousuo(op){
			
			if(window.XMLHttpRequest){
	        	  httprequest = new window.XMLHttpRequest();
	      	   
	     	 }else if(window.ActiveXObject){//IE�������������
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
          <td width="94%" align="left"><strong><font size="+1">Լ��</font></strong>&nbsp;&nbsp;&nbsp;${user.name }</td>
        </tr>
    </table></td>
  </tr>
  <tr>
  		<td width="162" height="540"><%@include file="XiaoWai_Yuehui_fenzu.jsp" %>
	</td>
	<td width="588">
		<div id="Layer2">
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
          <td width="55%" align=right>��ǰ&nbsp;${page}&nbsp;ҳ&nbsp;/&nbsp;��&nbsp;${allPage}&nbsp;ҳ
          <c:choose>
          <c:when test="${page==1}"><a href="javascript:void(0)">��һҳ</a></c:when>
          <c:otherwise><a href="YueHuiSearchServlet?page=${page -1}&fenlei=${fenlei}">��һҳ</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${page==allPage}"><a href="javascript:void(0)">��һҳ</a></c:when>
          <c:otherwise><a href="YueHuiSearchServlet?page=${page +1}&fenlei=${fenlei}">��һҳ</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage name=jumpPage style="width:30;"/>&nbsp;<a href="javascript:pageJump(${allPage},'${fenlei}')">����</a>&nbsp;&nbsp;</td>
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
                    <td width="17%" height="27">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${appBean.userid }">${appBean.name}��${appBean.sex}��</a></td>
                    <td width="34%" align="center">����</td>
                    <td width="11%" align="center">����</td>
                    <td width="13%">Լ��ʱ��</td>
                    <td width="15%" align="center">��Լʱ��</td>
                </tr>
                  <tr>
                    <td height="27">&nbsp;${appBean.academe}</td>
                    <td align="center"><a href="XiaoWai_Yuehui_YuehuiInfo.jsp?appid=${appBean.appid }">${appBean.apptitle}</a></td>
                    <td width="11%" align="center">${appBean.type}</td>
                    <td width="13%">${appBean.apptime}</td>
                    <td width="20%" align="center">&nbsp;&nbsp;${appBean.time}</td>
                  </tr>
				   <tr>
				   	<td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="right">��Ӧ������</td>
                    <td width="11%" align="center">${appBean.requestCount}��</td>
                    <td width="13%" height="30">&nbsp;</td>
                    <td width="20%" align="center"><span align=center id=${appBean.appid} style="display:block;">
                    <c:if test="${appBean.isRequested eq 1}">
                    	<font color="red">�Ѿ���Ӧ</font>
                    </c:if>
                    <c:if test="${appBean.isRequested eq -1}">
                    	<input type="button" id=${appBean.appid } name="xingying" value="��ӦԼ��" onClick="javascript:xiangyings(${appBean.appid})">
                    </c:if>
                    </span></td>
                  </tr>
                  <tr>
                    <td colspan=7 align=right>
                       <dir id=${appBean.appid}d style="display:none;"> 
                    
                    <table>
                    	<tr>
                    		<td><span id=${appBean.appid}tk><font color="red">��Ӧǰ���ʵ����ֻ���</font>&nbsp;&nbsp;&nbsp;</span></td>
                    		<td>����ֻ����룺</td>
                    		<td><input type="text" id=${appBean.appid}t /></td>
                    		<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    	</tr>
                    	<tr>
                    		<td><span id=${appBean.appid}qk><font color="red">��Ӧǰ���ʵ���Q��</font>&nbsp;&nbsp;&nbsp;</span></td>
                    		<td align=right>���QQ:</td>
                    		<td><input type="text" id=${appBean.appid}q /></td>
                    		<td><input type=button name=btbutton value=ȷ�� onClick="javascript:xiangying(${appBean.appid})"/>&nbsp;&nbsp;</td>	
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
          <td width="55%" align=right>��ǰ&nbsp;${page}&nbsp;ҳ&nbsp;/&nbsp;��&nbsp;${allPage}&nbsp;ҳ
          <c:choose>
          <c:when test="${page==1}"><a href="javascript:void(0)">��һҳ</a></c:when>
          <c:otherwise><a href="YueHuiSearchServlet?page=${page -1}&fenlei=${fenlei}">��һҳ</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${page==allPage}"><a href="javascript:void(0)">��һҳ</a></c:when>
          <c:otherwise><a href="YueHuiSearchServlet?page=${page +1}&fenlei=${fenlei}">��һҳ</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage2 name=jumpPage style="width:30;"/>&nbsp;<a href="javascript:pageJump2(${allPage},'${fenlei}')">����</a>&nbsp;&nbsp;</td>
        </tr>
      </table>
          	</td>
          </tr>
          <tr>
          	<td height=50>&nbsp;</td>
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
                <td><a href=""><font size="+1">���;��䷫��Ь</font></a></td>
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
                <td><a href=""><font size="+1">��ѳ�������</font></a></td>
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
                <td><a href=""><font size="+1">��ƾ��Ͼ�����</font></a></td>
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
