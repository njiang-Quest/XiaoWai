<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    
    <link href="css/friend.css" type=text/css rel=stylesheet>
<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 

<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
<link href="css/layout.css" rel="stylesheet" type="text/css" media="all" />
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>查找好友</title>


<script type="text/javascript" src="js/address.js">
	
</script>
 <script type="text/javascript">
 	function friendName()
	{
		
		var varname = document.getElementById("navSearchInput").value;
		window.location.href="SearchFriendServlet?name="+varname;
	
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
	var fuserids;
	function addFriend(fuserid){
		fuserids=fuserid;
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
	        		url ="FriendAddFriendServlet?fuserid="+ fuserid  +"&date=" + date;
					httprequest.open("GET",url,true);
					httprequest.onreadystatechange=sends;
					httprequest.send(null);
	        	
	         }
	}
	function sends(){
			if(httprequest.readystate==4){
				if(httprequest.status==200){
					var message = httprequest.responseText;
					if(message == "isSuccess"){
						
						document.getElementById(fuserids).innerHTML="<font color=red>添加成功！</font>";
		
					}else if("isFriend"==message){
						document.getElementById(fuserids).innerHTML="<font color=red >对方已是你好友！</font>";
					}else{
					
						document.getElementById(fuserids).innerHTML="<font color=red >操作失败!</font>";
					
						
					}
				}
			}
		}

</script>
  </head>
  
  <body>
<%@include file="XiaoWai_header.jsp" %>
 <hr width="960" align="center">
<div id="Layer1" align="center">
  <div id="Layer2">
    <table width="960" height="43" border="1" bgcolor="#99CCFF">
      <tr>
        <td width="14%" align="center">筛选：</td>
        <td width="7%"> <select id="gend" stype="base" skey="gend" name="gend">
        <option selected="selected" value="">性别</option>
        <option value="男生">男</option>
        <option value="女生">女</option>
      </select></td>
        <td width="10%">  <select id="ageStage" stype="age" skey="range" name="select">
        <option selected="selected" value="">年龄段</option>
        <option value="0">小于15岁</option>
        <option value="1">16-22岁</option>
        <option value="2">23-30岁</option>
        <option value="3">31-40岁</option>
        <option value="4">大于40岁</option>
      </select></td>
        <td width="33%">	<SELECT id=z05_1 onChange="changepro('z05_2','z05_1');" name=z05_1> 
              <OPTION value="" selected>省/直辖市</OPTION> <OPTION 
              value=北京市>北京市</OPTION> <OPTION value=天津市>天津市</OPTION> <OPTION 
              value=河北省>河北省</OPTION> <OPTION value=山西省>山西省</OPTION> <OPTION 
              value=内蒙古区>内蒙古区</OPTION> <OPTION value=辽宁省>辽宁省</OPTION> <OPTION 
              value=吉林省>吉林省</OPTION> <OPTION value=黑龙江省>黑龙江省</OPTION> <OPTION 
              value=上海市>上海市</OPTION> <OPTION value=江苏省>江苏省</OPTION> <OPTION 
              value=浙江省>浙江省</OPTION> <OPTION value=安徽省>安徽省</OPTION> <OPTION 
              value=福建省>福建省</OPTION> <OPTION value=江西省>江西省</OPTION> <OPTION 
              value=山东省>山东省</OPTION> <OPTION value=河南省>河南省</OPTION> <OPTION 
              value=湖北省>湖北省</OPTION> <OPTION value=湖南省>湖南省</OPTION> <OPTION 
              value=广东省>广东省</OPTION> <OPTION value=广西区>广西区</OPTION> <OPTION 
              value=海南省>海南省</OPTION> <OPTION value=重庆市>重庆市</OPTION> <OPTION 
              value=四川省>四川省</OPTION> <OPTION value=贵州省>贵州省</OPTION> <OPTION 
              value=云南省>云南省</OPTION> <OPTION value=西藏区>西藏区</OPTION> <OPTION 
              value=陕西省>陕西省</OPTION> <OPTION value=甘肃省>甘肃省</OPTION> <OPTION 
              value=青海省>青海省</OPTION> <OPTION value=宁夏区>宁夏区</OPTION> <OPTION 
              value=新疆区>新疆区</OPTION> <OPTION value=台湾省>台湾省</OPTION> <OPTION 
              value=香港特区>香港特区</OPTION> <OPTION value=澳门特区>澳门特区</OPTION></SELECT> 
            <SELECT id=z05_2 onChange="changecity('z05_3','z05_2');" name=z05_2> 
              <OPTION value="" selected>请选择</OPTION></SELECT></td>
        <td width="17%"><input name="text" type="text" class="input-text" id="work_place" value="学校" /></td>
        <td width="13%"><a
	id="work_filter" href="#nogo" onClick="return false;"
	class="find-btn-left"><span class="find-btn-right">筛选</span></a></td>
        <td width="6%">&nbsp;</td>
      </tr>
    </table>
  </div>
  <hr width="1" align="center">
  <div id="haoyou" >
  <form action="SearchFriendServlet" method="post">
<c:choose>
<c:when test="${sessionScope.curPage==1}">
 首页
 上一页
</c:when>
<c:otherwise>
<a href="SearchFriendServlet?curPage=1">首页</a>
<a href="SearchFriendServlet?curPage=${sessionScope.curPage-1}">上一页</a>
</c:otherwise>
</c:choose>

<c:choose>
<c:when test="${sessionScope.curPage==sessionScope.pageCount}">
 下一页
 尾页
</c:when>
<c:otherwise>
<a href="SearchFriendServlet?curPage=${sessionScope.curPage+1}">下一页</a>
<a href="SearchFriendServlet?curPage=${sessionScope.pageCount}">尾页</a>
</c:otherwise>
</c:choose>

 <input type="submit" value="转到第">&nbsp;<input type="text" name="curPage" size="1" value="${sessionScope.curPage}">&nbsp;页(共${sessionScope.pageCount}页)
  </form>
 <table width="960" height="43" border="1">
   <c:forEach var="userBean" items="${sessionScope.SearchFriendlist}">  
   <tr>
		 <td>
		 <table width="100%"  border="0"  bgcolor="#99CCFF">
	      <caption><hr></caption>
	       <tr>
	           <td width="10%" rowspan="3"><img src="${userBean.userimg }" width="70" height="60" /></td>
	           <td width="7%"  align="right">姓名：</td>
	           <td width="46%">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${userBean.userId }">${userBean.name}</a></td>
	           <td width="13%" rowspan="3">&nbsp;</td>
	           <td width="14%" rowspan="3">&nbsp;</td>
	           <td width="10%" rowspan="3" align="center"><span id =${userBean.userId } >&nbsp;<a href="javascript:addFriend(${userBean.userId })">加为好友</a></span></td>
	       </tr>
	       <tr>
	           <td align="right">学校：</td>
	            <td>${userBean.university}</td>
	        </tr>
	         <tr>
	           <td align="right">家乡：</td>
	            <td>${userBean.hometown}</td>
	        </tr>
			
	        </table> 
	        </td>
	 </tr>
	 </c:forEach> 
</table>
<br><br>

<p></p><br><br><br><br>





<!--  


  <table width="960" height="43" border="1">
  
 	 <tr>
	 <td>
	 <table width="100%"  border="0"  bgcolor="#99CCFF">
     <tr>
         <td width="10%" rowspan="2"><img src="images/tiny_2V3Z_197335a019117.jpg" width="95" height="90" /></td>
         <td width="7%" height="44" align="right">姓名：</td>
          <td width="46%">&nbsp;<a href="">陈时志</a></td>
          <td width="13%" rowspan="2">&nbsp;</td>
           <td width="14%" rowspan="2">&nbsp;</td>
           <td width="10%" rowspan="2" align="center">&nbsp;<a href="">加为好友</a></td>
      </tr>
       <tr>
           <td align="right">学校：</td>
            <td>长沙理工大学</td>
            </tr>
			<caption><hr> </caption>
            </table></td>
	  </tr>
	 
 	 <tr>
	 <td><table width="100%"  border="0"  bgcolor="#99CCFF">
                   
                    <tr>
                      <td width="10%" rowspan="2"><img src="images/tiny_2V3Z_197335a019117.jpg" width="95" height="90" /></td>
                      <td width="7%" height="44" align="right">姓名：</td>
                      <td width="46%">&nbsp;<a href="">陈时志</a></td>
                      <td width="13%" rowspan="2">&nbsp;</td>
                      <td width="14%" rowspan="2">&nbsp;</td>
                      <td width="10%" rowspan="2" align="center">&nbsp;<a href="">加为好友</a></td>
                    </tr>
                    <tr>
                      <td align="right">学校：</td>
                      <td>长沙理工大学</td>
                    </tr>
					 <caption><hr> </caption>
                </table></td>
	 </tr>
	 
 	 <tr>
	 <td><table width="100%"  border="0"  bgcolor="#99CCFF">
                   
                    <tr>
                      <td width="10%" rowspan="2"><img src="images/tiny_2V3Z_197335a019117.jpg" width="95" height="90" /></td>
                      <td width="7%" height="44" align="right">姓名：</td>
                      <td width="46%">&nbsp;<a href="">陈时志</a></td>
                      <td width="13%" rowspan="2">&nbsp;</td>
                      <td width="14%" rowspan="2">&nbsp;</td>
                      <td width="10%" rowspan="2" align="center">&nbsp;<a href="">加为好友</a></td>
                    </tr>
                    <tr>
                      <td align="right">学校：</td>
                      <td>长沙理工大学</td>
                    </tr>
					 <caption><hr> </caption>
                </table></td>
	 </tr>
  </table>
  
  -->
  </div>
</div>
  </body>
</html>
