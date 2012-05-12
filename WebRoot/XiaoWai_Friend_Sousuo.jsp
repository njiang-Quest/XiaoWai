<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    
    <script type="text/javascript">XN = {get_check:'-1682686075',env:{domain:'xiaowai.com',shortSiteName:'校外',siteName:'校外网'}};
</script> 

<link rel="shortcut icon" type="image/x-icon" href="http://a.xnimg.cn/favicon-rr.ico?ver=2" /> 
<link rel="apple-touch-icon" href="http://a.xnimg.cn/wap/apple_icon_.png" /> 
<!--[if IE]><script type="text/javascript" src="js/expressions.js"></script><![endif]--> 
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
<title>好友</title>
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
	
	width:569px;
	z-index:2;
}
#Layer3 {
	
	width:567px;
	z-index:1;
	
}
#Layer4 {

	width:565px;
	z-index:2;
	top: 51px;
}
#Layer1 {
	position:absolute;
	width:161px;
	z-index:3;
	
	top: 106px;
}
#Layer7 {
	width:388px;
	z-index:4;
	top: 117px;
	
}
#Layer8 {
	width:388px;
	height:29px;
	z-index:1;
	background-color: #3366FF;
}

#Layer5 {
	position:absolute;
	width:370px;
	height:350px;
	z-index:1002;
	background-color:#999999; 
	left: 301px;
	top: 97px;
	border: 16px solid #99FFCC; 
	filter: alpha(opacity=100);  
}
-->
</style>
<style>  
.black_overlay{  
display: none;  
position: absolute;  
top: 0%;  
left: 0%;  
width: 100%;  
height: 200%;  
background-color: white;  
z-index:1001;  
-moz-opacity: 0.8;  
opacity:.80;  
filter: alpha(opacity=80);  
}  

</style>  
<script language="JavaScript1.2">



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
<script language="javascript">
	function getOldAddfenzu(){
		
		var ftype = document.getElementById("oldfenzu").value;
	
		openAddfenzu(ftype);
		
	}
	var httprequest = false;
	function openAddfenzu(ftype){
	
		//window.open("addfriendfenzu.html","","width=380,height=380,top=200,left=200,titlebar=1");
		document.getElementById('fade').style.display='block';
		document.getElementById("Layer5").style.display="block";
		
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
	        		url ="FriendAjaxSearchServlet?ftype="+  ftype + "&date=" + date;
					httprequest.open("GET",url,true);
					httprequest.onreadystatechange=sends;
					httprequest.send(null);
	        	
	         }
	}
	
	function sends(){
			if(httprequest.readystate==4){
				if(httprequest.status==200){
					var message = httprequest.responseText;
					
					document.getElementById("fz").innerHTML=message;
					
				}
			}
		}
	
	function closeAddfenzu(){
		//window.open("addfriendfenzu.html","","width=380,height=380,top=200,left=200,titlebar=1");
		
		document.getElementById('fade').style.display='none';
		document.getElementById("Layer5").style.display="none";
	}


	function mousePosition(ev){ 
     if(ev.pageX || ev.pageY){ 
      return {x:ev.pageX, y:ev.pageY}; 
      } 
      return { 
       x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
       y:ev.clientY + document.body.scrollTop  - document.body.clientTop 
       }; 
	} 
var friid;
function xiugaifenzu(ev){ 
    ev = ev || window.event; 
    var mousePos = mousePosition(ev); 
    document.getElementById('Layer9').style.left = mousePos.x; 
    document.getElementById('Layer9').style.top = mousePos.y; 
	  document.getElementById('Layer9').style.display="block";
} 

function xiugaifenzus(op){ 
    friid=op;
    document.getElementById("modiffriid").value=op;
     xiugaifenzu();
     
} 
function deleFriend(op){
	window.location.href="FrienddeleFriend?friid=" +op;
}
function fenzuSumbit(){
	//var ftid = document.getElementById("friendfenzu").value;
	var ftid ;
 	  var radios = document.getElementsByName("friendfenzu");
 	    for(var i = 0 ; i< radios.length;i++){
 	    	  var radio = radios.item(i);
 	    	  if(radio.checked){
 	    	  	ftid = radio.value;
 	    	  }
 	    }
		//var ftid = document.modifenzu.friendfenzu.value;
	window.location.href="FriendModiffenzuServlet?modiffriid=" + friid + "&friendfenzu=" + ftid;
}
function closeFenzu(){
 document.getElementById('Layer9').style.display="none";
}

function checkAddType(){

	var newFtname = document.addFTypeform.newFriendFenzu.value;
	var repName="";
			for(var i=0;i<newFtname.length;i++){
				if(newFtname.charAt(i)!=" "){
					repName= repName + newFtname.charAt(i);
				}	
			}
	if(newFtname==""||repName.length< newFtname.length){
		document.getElementById("addFtypediv").style.display="block";
		document.getElementById("newFriendFenzu").focus();
		return false;
	}
	 
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
      function pageJump(allPage,fname){
      	var newPage = document.getElementById("jumpPage").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		window.location.href="FriendSousuoServlet?friendPage=" + newPage+"&fname="+fname;
    	}
      }
      function pageJump2(allPage,fname){
      	var newPage = document.getElementById("jumpPage2").value;
    	if((newPage<allPage||newPage==allPage)&&newPage!=""){
    		window.location.href="FriendSousuoServlet?friendPage=" + newPage+"&fname="+fname;
    	}
      }
      function trueloves(friid,op){
      	if(op==1){
      		document.getElementById(friid+"loves").style.display="none";
      		document.getElementById(friid+"turelove").style.display="block";
      	}else if(op==0){
      		document.getElementById(friid+"loves").style.display="block";
      		document.getElementById(friid+"turelove").style.display="none";
      	}
      }
      function myloves(friid,op){
      	if(op==1){
      	
      		document.getElementById(friid+"mylove").style.display="none";
      		document.getElementById(friid+"movelove").style.display="block";
      	}else if(op==0){
      		document.getElementById(friid+"mylove").style.display="block";
      		document.getElementById(friid+"movelove").style.display="none";
      	}
      }
      
     
 </script>
 <script type="text/javascript">
  	var httprequest = false;
      
      	var friids;
	function sumbitLoves(friid,fuserid,index){
	
		friids=friid;
		
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
	        		url ="FriendLoveServelet?fuserid="+  fuserid +"&friid="+friid+ "&index="+ index+ "&date=" + date;
					httprequest.open("GET",url,true);
					httprequest.onreadystatechange=sendss;
					httprequest.send(null);
	        	
	         }
	}
	
	function sendss(){
			if(httprequest.readystate==4){
				if(httprequest.status==200){
					var message = httprequest.responseText;
					if(message=="loveSuccess"){
						document.getElementById(friids+"loves").innerHTML="<font color=red>暗恋成功</font>";
					
						
					}else if(message=="deleLoveSuccess"){
						document.getElementById(friids+"mylove").innerHTML="<font color=red>取消成功</font>";
					
					
					}
				}
			}
		}
 	function fsousuo(){
 		
 		var fname = document.getElementById("friendsousuo").value;
 	
 		if(fname!=""){
 		window.location.href="FriendSousuoServlet?friendPage=1&fname="+fname;
 		}
 	}
 </script>
  </head>
  
  <body>
  <%@include file="XiaoWai_header.jsp" %>

  <div id="Layer5" style="display:none;">
  <form action="FriendAddFenzuServlet" name="addFTypeform" method="post" onsubmit="return checkAddType()">
<table width="370" height="350" border="2" bgcolor="#FFFFCC"align="center">
  <tr>
    <td><table width="370" height="439" border="1" >
      <tr>
        <td height="30" colspan="3" bgcolor="#0099FF">&nbsp;&nbsp;<font size="+1" color="#FFFFFF"><strong>创建分组</strong></font></td>
      
        </tr>
      <tr>
        <td width="87" height="30"align="right" >&nbsp;组别名称：</td>
        <td width="80"><input type="text" id="newFriendFenzu" name="newFriendFenzu" /></td>
        <td width="160" align=center><div id=addFtypediv style="display:none;"><font color=red>组名不能为空</font></div></td>
      </tr>
      <tr>
        <td align="right" height="30">&nbsp;现有分组：</td>
        <td colspan="2"><select id="oldfenzu"   onChange="getOldAddfenzu()">
        <c:forEach var="fgBean" items="${fgList}">
			<option value="${fgBean.ftid}">${fgBean.ftname }</option>
		</c:forEach>
		</select></td>
      </tr>
      <tr>
        <td height="280" colspan="3"><div id="fzs"  style="height:270px; background-color:#FFFFFF;overflow-x:scroll;overflow-y:scroll;">
          <span id="fz"></span>
        </div></td>
        </tr>
      <tr>
        <td height="31" align="center"><input type="submit" value="确定" /></td>
        <td><input type="reset" value="取消" onClick="closeAddfenzu()" /></td>
        <td>&nbsp;</td>
      </tr>
    </table></td>
  </tr>
</table>
</form>
</div>
<div id="fade" class="black_overlay"></div>  
  
  

<table width="980" border="0"cellSpacing=0 cellPadding=0  align="center">
  <tr>
    <td height="50" colspan="3"><table width="100%" border="0">
      <tr>
        <td width="6%">&nbsp;&nbsp;&nbsp;<img src="images/haoyou.jpg" /></td>
        <td width="94%"><strong><font size="+1">好友</font></strong></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td width="163" height="100"><div id="Layer1">
      <hr />
      <table cellspacing=0 cellpadding=0  width="100%" height="300" border="0">
        <tr >
          <td height="96">
                <table width="100%"   style="top:0px;" border="0">
                  <tr onMouseOver="changeto('lightgreen')" onMouseOut="changeback('white')">
                  	 <td height="28" colspan=2 align =center><input type=text id="friendsousuo"></td>
                  </tr>
                  <tr onMouseOver="changeto('lightgreen')" onMouseOut="changeback('white')">
                  	 <td width="25%" ><img src="images/sousuo.jpg" /></td>
                    <td><a href="javascript:fsousuo()">搜索好友</a></td>
                  </tr>
                  <tr>
                    <td height="30"><img src="images/haoyou.jpg" /></td>
                    <td width="75%"><a href="FriendSearchServlet?friendPage=1&friendType=0&index=0">全部好友
                     
                    </a></td>
                    <td></td>
                  </tr>
              </table></td>
        </tr>
        <tr>
          <td height="200" ><div id="Layer6">
            <table width="100%" height="198" cellspacing=0 cellpadding=0border="1" bordercolorlight="#CCFFFF" bordercolor="#CCFFFF">
              <tr>
                <td colspan="2" bgcolor="#CCFFFF"><font size="+1"><strong>好友分组</strong></font></td>
              </tr>
              <c:forEach var="fgBean" items="${fgList}">
              	 <tr>
	                <td width="19%">&nbsp;</td>
	                <td width="81%" height=25 style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="FriendSearchServlet?friendPage=1&friendType=${fgBean.ftid }&index=1" >${fgBean.ftname}(${fgBean.count })</a></td>
              </tr>
              </c:forEach>
            </table>
          </div></td>
        </tr>
      </table>
    </div></td>
    <td width="567"><div id="Layer2">
      <div id="Layer3">
        <table width="566" border="0" background="images/beijing.jpg">
          <tr>
            <td width="15%" height="35" align="center"> <input type="image" name="xiugaifenzu2" src="images/chuangjinfenzu.jpg" onClick="openAddfenzu(35)"/></td>
            <td width="14%" align="center">
            <c:if test="${oldFriendType!=0}">
            <a href="FriendDeleFtypeServlet"><img 
                        height=20 src="images/delefenzu.jpg" width=59 
                        border=0 alt="删除好友分组将删除组别里面所有的好友"/></a>
            </c:if>
            </td>
            <td width="16%">&nbsp;</td>
            <td width="55%">&nbsp;当前&nbsp;${friendPage}&nbsp;页&nbsp;/&nbsp;共&nbsp;${FriendAllPage}&nbsp;页
          <c:choose>
          <c:when test="${friendPage==1}"><a href="javascript:void(0)">上一页</a></c:when>
          <c:otherwise><a href="FriendSousuoServlet?friendPage=${friendPage -1}&fname=${fname}">上一页</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${friendPage==FriendAllPage}"><a href="javascript:void(0)">下一页</a></c:when>
          <c:otherwise><a href="FriendSousuoServlet?friendPage=${friendPage +1}&fname=${fname}">下一页</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage name=jumpPage style="width:30;"/>&nbsp;<a href="javascript:pageJump(${FriendAllPage},${fname })">跳到</a>&nbsp;&nbsp;</td>
          </tr>
        </table>
      </div>
      <div id="Layer4">
        <table width="100%" height="90" border="0">
          <c:forEach var="friendBean" items="${friendMesList}">
          	<tr><td><hr></td></tr>
          	<tr>
            <td>
                  <table width="100%"  border="0">
                    <caption>&nbsp;
                    </caption>
                    <tr>
                      <td width="10%" rowspan="2"><img src="${friendBean.userimg }" width="70" height="60" /></td>
                      <td width="15%" height="27">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${friendBean.userid }">${friendBean.name }(${ friendBean.sex})</a></td>
                      <td width="30%"></td>
                      <td width="20%" rowspan="2" align=center><c:if test="${friendBean.isLove eq 1 }">
                      <div id=${friendBean.friid }mylove style="display:block;"><input type="image" name="xiugaifenzu" src="images/mylove.jpg"  onmouseover="javascript:myloves(${friendBean.friid },'1')"/></div>
                      <div id=${friendBean.friid }movelove style="display:none;"><input type="image" name="xiugaifenzu" src="images/movelove.jpg"  onmouseout="javascript:myloves(${friendBean.friid },'0')" onclick="javascript:sumbitLoves(${friendBean.friid },'${friendBean.userid }','-1')"/></div>
                   
                      </c:if>
                      <c:if test="${friendBean.isLove ==null}">
                      <div id=${friendBean.friid }loves style="display:block;"><input type="image" name="xiugaifenzu" src="images/anlianhaoyou.jpg" onmouseover="javascript:trueloves(${friendBean.friid },'1')"/></div> 
                      <div id=${friendBean.friid }turelove style="display:none;"><input type="image" name="xiugaifenzu" src="images/truelove.jpg" onmouseout="javascript:trueloves(${friendBean.friid },'0')" onclick="javascript:sumbitLoves(${friendBean.friid },'${friendBean.userid}','1')"/></div> 
                     
                      </c:if>
                     </td>
                      <td width="14%" rowspan="2"><input type="image" name="xiugaifenzu" src="images/xiugaifenzu.jpg" onClick="xiugaifenzus(${friendBean.friid})"/></td>
                      <td width="10%" rowspan="2" align="center"><input type="image" name="delefriend" src="images/shanchuhaoyou.jpg" alt="删除好友" onClick="deleFriend(${friendBean.friid })"/></td>
                    </tr>
                    <tr>
                      <td>&nbsp;${friendBean.ftname }</td>
                      <td>&nbsp;</td>
                    </tr>
                </table></td>
          </tr>
          
          </c:forEach>
          <tr><td><hr></td></tr>
         <tr><td > 
          <table width="571"  border="0" background="images/beijing.jpg">
          <tr>
            <td width="16%" height="35" align="center"> <input type="image" name="xiugaifenzu2" src="images/chuangjinfenzu.jpg" onClick="openAddfenzu()"/></td>
            <td width="14%" align="center">  <c:if test="${oldFriendType!=0}">
            <a href="FriendDeleFtypeServlet"><img 
                        height=20 src="images/delefenzu.jpg" width=59 
                        border=0 /></a>
            </c:if></td>
            <td width="16%">&nbsp;</td>
            <td width="55%">&nbsp;当前&nbsp;${friendPage}&nbsp;页&nbsp;/&nbsp;共&nbsp;${FriendAllPage}&nbsp;页
          <c:choose>
          <c:when test="${friendPage==1}"><a href="javascript:void(0)">上一页</a></c:when>
          <c:otherwise><a href="FriendSousuoServlet?friendPage=${friendPage -1}&fname=${fname }">上一页</a></c:otherwise>
          </c:choose>
          <c:choose>
          <c:when test="${friendPage==FriendAllPage}"><a href="javascript:void(0)">下一页</a></c:when>
          <c:otherwise><a href="FriendSousuoServlet?friendPage=${friendPage +1}&fname=${fname }">下一页</a></c:otherwise>
          </c:choose>
          &nbsp;<input type=text id=jumpPage name=jumpPage2 style="width:30;"/>&nbsp;<a href="javascript:pageJump2(${FriendAllPage},${fname })">跳到</a>&nbsp;&nbsp;</td>
          </tr>
        </table>
              	</td>
          </tr>
          <tr><td><br><br><br><br></td></tr>
          
        </table>
      </div>
    </div></td>
    <td width="228"></td>
  </tr>
</table>
<div id="Layer9"  style="position:absolute;width:138px;height:170px;z-index:4;left: 603px;
	top: 186px; background-color:#99CCFF;display:none;">
<form action="javascript:void(0)" name=modifenzu>
<table width="135" height="170" border="1">
		<tr>
		<td><div style="width:138px;height:120px;overflow-x:scroll;overflow-y:scroll;" >
			<table width="88%"  border="0">
		<c:forEach var="fgFriend" items="${fgList}">
			<tr>
      		<td width="27%" align="right">
      		<input type="hidden" id=modiffriid name= friid/>
      		<input type="radio" id=friendfenzu name="friendfenzu" value="${fgFriend.ftid }"/></td>
     		 <td width="73%">${fgFriend.ftname }</td>
    		</tr>
		
		</c:forEach>
  </table>

		</div></td>
		</tr>
		<tr>
		<td><input type="button" value="确定" onclick="fenzuSumbit()" />&nbsp;&nbsp;<input type="button" value="取消" onClick="closeFenzu()" /></td>
		</tr>
</table>
  </form></div>
  </body>
</html>
