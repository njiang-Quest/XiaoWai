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
<title>���Һ���</title>


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
	      	   
	     	 }else if(window.ActiveXObject){//IE�������������
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
						
						document.getElementById(fuserids).innerHTML="<font color=red>��ӳɹ���</font>";
		
					}else if("isFriend"==message){
						document.getElementById(fuserids).innerHTML="<font color=red >�Է���������ѣ�</font>";
					}else{
					
						document.getElementById(fuserids).innerHTML="<font color=red >����ʧ��!</font>";
					
						
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
        <td width="14%" align="center">ɸѡ��</td>
        <td width="7%"> <select id="gend" stype="base" skey="gend" name="gend">
        <option selected="selected" value="">�Ա�</option>
        <option value="����">��</option>
        <option value="Ů��">Ů</option>
      </select></td>
        <td width="10%">  <select id="ageStage" stype="age" skey="range" name="select">
        <option selected="selected" value="">�����</option>
        <option value="0">С��15��</option>
        <option value="1">16-22��</option>
        <option value="2">23-30��</option>
        <option value="3">31-40��</option>
        <option value="4">����40��</option>
      </select></td>
        <td width="33%">	<SELECT id=z05_1 onChange="changepro('z05_2','z05_1');" name=z05_1> 
              <OPTION value="" selected>ʡ/ֱϽ��</OPTION> <OPTION 
              value=������>������</OPTION> <OPTION value=�����>�����</OPTION> <OPTION 
              value=�ӱ�ʡ>�ӱ�ʡ</OPTION> <OPTION value=ɽ��ʡ>ɽ��ʡ</OPTION> <OPTION 
              value=���ɹ���>���ɹ���</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=����ʡ>����ʡ</OPTION> <OPTION value=������ʡ>������ʡ</OPTION> <OPTION 
              value=�Ϻ���>�Ϻ���</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=�㽭ʡ>�㽭ʡ</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=����ʡ>����ʡ</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=ɽ��ʡ>ɽ��ʡ</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=����ʡ>����ʡ</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=�㶫ʡ>�㶫ʡ</OPTION> <OPTION value=������>������</OPTION> <OPTION 
              value=����ʡ>����ʡ</OPTION> <OPTION value=������>������</OPTION> <OPTION 
              value=�Ĵ�ʡ>�Ĵ�ʡ</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=����ʡ>����ʡ</OPTION> <OPTION value=������>������</OPTION> <OPTION 
              value=����ʡ>����ʡ</OPTION> <OPTION value=����ʡ>����ʡ</OPTION> <OPTION 
              value=�ຣʡ>�ຣʡ</OPTION> <OPTION value=������>������</OPTION> <OPTION 
              value=�½���>�½���</OPTION> <OPTION value=̨��ʡ>̨��ʡ</OPTION> <OPTION 
              value=�������>�������</OPTION> <OPTION value=��������>��������</OPTION></SELECT> 
            <SELECT id=z05_2 onChange="changecity('z05_3','z05_2');" name=z05_2> 
              <OPTION value="" selected>��ѡ��</OPTION></SELECT></td>
        <td width="17%"><input name="text" type="text" class="input-text" id="work_place" value="ѧУ" /></td>
        <td width="13%"><a
	id="work_filter" href="#nogo" onClick="return false;"
	class="find-btn-left"><span class="find-btn-right">ɸѡ</span></a></td>
        <td width="6%">&nbsp;</td>
      </tr>
    </table>
  </div>
  <hr width="1" align="center">
  <div id="haoyou" >
  <form action="SearchFriendServlet" method="post">
<c:choose>
<c:when test="${sessionScope.curPage==1}">
 ��ҳ
 ��һҳ
</c:when>
<c:otherwise>
<a href="SearchFriendServlet?curPage=1">��ҳ</a>
<a href="SearchFriendServlet?curPage=${sessionScope.curPage-1}">��һҳ</a>
</c:otherwise>
</c:choose>

<c:choose>
<c:when test="${sessionScope.curPage==sessionScope.pageCount}">
 ��һҳ
 βҳ
</c:when>
<c:otherwise>
<a href="SearchFriendServlet?curPage=${sessionScope.curPage+1}">��һҳ</a>
<a href="SearchFriendServlet?curPage=${sessionScope.pageCount}">βҳ</a>
</c:otherwise>
</c:choose>

 <input type="submit" value="ת����">&nbsp;<input type="text" name="curPage" size="1" value="${sessionScope.curPage}">&nbsp;ҳ(��${sessionScope.pageCount}ҳ)
  </form>
 <table width="960" height="43" border="1">
   <c:forEach var="userBean" items="${sessionScope.SearchFriendlist}">  
   <tr>
		 <td>
		 <table width="100%"  border="0"  bgcolor="#99CCFF">
	      <caption><hr></caption>
	       <tr>
	           <td width="10%" rowspan="3"><img src="${userBean.userimg }" width="70" height="60" /></td>
	           <td width="7%"  align="right">������</td>
	           <td width="46%">&nbsp;<a href="/XiaoWai/PersonalPageServlet?userID=${user.userId }&visitorID=${userBean.userId }">${userBean.name}</a></td>
	           <td width="13%" rowspan="3">&nbsp;</td>
	           <td width="14%" rowspan="3">&nbsp;</td>
	           <td width="10%" rowspan="3" align="center"><span id =${userBean.userId } >&nbsp;<a href="javascript:addFriend(${userBean.userId })">��Ϊ����</a></span></td>
	       </tr>
	       <tr>
	           <td align="right">ѧУ��</td>
	            <td>${userBean.university}</td>
	        </tr>
	         <tr>
	           <td align="right">���磺</td>
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
         <td width="7%" height="44" align="right">������</td>
          <td width="46%">&nbsp;<a href="">��ʱ־</a></td>
          <td width="13%" rowspan="2">&nbsp;</td>
           <td width="14%" rowspan="2">&nbsp;</td>
           <td width="10%" rowspan="2" align="center">&nbsp;<a href="">��Ϊ����</a></td>
      </tr>
       <tr>
           <td align="right">ѧУ��</td>
            <td>��ɳ����ѧ</td>
            </tr>
			<caption><hr> </caption>
            </table></td>
	  </tr>
	 
 	 <tr>
	 <td><table width="100%"  border="0"  bgcolor="#99CCFF">
                   
                    <tr>
                      <td width="10%" rowspan="2"><img src="images/tiny_2V3Z_197335a019117.jpg" width="95" height="90" /></td>
                      <td width="7%" height="44" align="right">������</td>
                      <td width="46%">&nbsp;<a href="">��ʱ־</a></td>
                      <td width="13%" rowspan="2">&nbsp;</td>
                      <td width="14%" rowspan="2">&nbsp;</td>
                      <td width="10%" rowspan="2" align="center">&nbsp;<a href="">��Ϊ����</a></td>
                    </tr>
                    <tr>
                      <td align="right">ѧУ��</td>
                      <td>��ɳ����ѧ</td>
                    </tr>
					 <caption><hr> </caption>
                </table></td>
	 </tr>
	 
 	 <tr>
	 <td><table width="100%"  border="0"  bgcolor="#99CCFF">
                   
                    <tr>
                      <td width="10%" rowspan="2"><img src="images/tiny_2V3Z_197335a019117.jpg" width="95" height="90" /></td>
                      <td width="7%" height="44" align="right">������</td>
                      <td width="46%">&nbsp;<a href="">��ʱ־</a></td>
                      <td width="13%" rowspan="2">&nbsp;</td>
                      <td width="14%" rowspan="2">&nbsp;</td>
                      <td width="10%" rowspan="2" align="center">&nbsp;<a href="">��Ϊ����</a></td>
                    </tr>
                    <tr>
                      <td align="right">ѧУ��</td>
                      <td>��ɳ����ѧ</td>
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
