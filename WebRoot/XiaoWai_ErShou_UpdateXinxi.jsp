<%@ page  language="java" import="java.util.*,com.csu.xiaowai.dao.*,com.csu.xiaowai.bean.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath(); 
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>"> 
    
    <title>�޸���Ϣ</title>
<link href="css/bases__25078__[1].css" rel="stylesheet" type="text/css" />
<script language="javascript">
function displaybi(op){
	   var dis = document.getElementById('bi'+op).value;
	   if(dis==''){
	      document.getElementById('div' + op).style.display ="block";
	   }else{
	      document.getElementById('div' + op).style.display ="none"; 
	      for(a=0;a<dis.length;a++)
		    {
				var fchar = dis.charAt(a);
				if(!(fchar>=0&&fchar<=9)){
				alert('��������');
				return false;
				}
		     }
	   }
	}
	
	function tijiao(){
	   var b1 = document.getElementById("bi1").value;
	   var b2 = document.getElementById("bi2").value;
	   if(b1==''||b2==''){
	       alert("�뽫������������");
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

  </head>
  
  <body>
    <div id="header" class="nohist">
<span id="header_links" style="float:right;text-align:right">

<span id="loginBox">
</span>
<c:set var="user" value="${user}"></c:set>
<a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}" rel="nofollow">��ѷ�����Ϣ</a> <span id="promote"></span>
</span>
<a href="">����У����</a> &raquo; �޸���Ϣ
<div style="clear:both"></div>

</div><!--header-->
<link href="css/post__25078__[1].css" rel="stylesheet" type="text/css" />
<div id="container">
<div id="subheader">
<div style="display:none" id="mktGameHeader"></div>
<h1 id="postTitle">�޸���Ϣ</h1>
<div class="line"></div>
</div><!--subheader-->
<div id="postTable">
<%
   String ucid = request.getParameter("ucid");
   UserDao userdao = new UserDao();
   UsedCommodityBean ucb = (UsedCommodityBean)userdao.SearchUsedGoodsfromUcid(ucid);
   String uctypeid = ucb.getUctypeid();
   String biaoti = ucb.getUctitle();
   String price = ucb.getPrice();
   String address = ucb.getAddress();
   String tel = ucb.getTel();
   String content = ucb.getContent();
   String imgurl = ucb.getUcimg();
   String qq = ucb.getQq();
%>
	<form id="postForm" method="POST" action="ErshouUpdateComservlet?ucid=<%=ucid%>" autocomplete="off" class="form">
	<div id="formInputBox">	
	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name required"><span class="red"> * </span>ѡ����Ŀ��</td>
			<td>
			  <select name="uctype" selected=<%=uctypeid%>>
			        
			        <c:set var="typeid" value="<%=uctypeid%>"></c:set>
			        
			        <c:choose>
			        	<c:when test="${1==typeid}">
			        	<option value="1" selected>����̨ʽ����</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="1">����̨ʽ����</option>
			        	</c:otherwise>
			        </c:choose>
			        <c:choose>
			        	<c:when test="${2==typeid}">
			        	<option value="2" selected>���ֱʼǱ�</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="2">���ֱʼǱ�</option>
			        	</c:otherwise>
			        </c:choose>
			        <c:choose>
			        	<c:when test="${3==typeid}">
			        	<option value="3" selected>���ֳ�����</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="3">���ֳ�����</option>
			        	</c:otherwise>
			        </c:choose>
			        <c:choose>
			        	<c:when test="${4==typeid}">
			        	     <option value="4" selected>�������/���</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="4">�������/���</option>
			        	</c:otherwise>
			        </c:choose>
			        <c:choose>
			        	<c:when test="${5==typeid}">
			        	     <option value="5" selected>�����ֻ�</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="5">�����ֻ�</option>
			        	</c:otherwise>
			        </c:choose>
			        <c:choose>
			        	<c:when test="${6==typeid}">
			        	     <option value="6" selected>��װ����Ʒ</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="6">��װ����Ʒ</option>
			        	</c:otherwise>
			        </c:choose>
			        <c:choose>
			        	<c:when test="${7==typeid}">
			        	     <option value="7" selected>����</option>
			        	</c:when>
			        	<c:otherwise>
			        		<option value="7">����</option>
			        	</c:otherwise>
			        </c:choose>
			  </select><%=uctypeid%>
			</td>
		  </tr>
		</table>
	</div>
	<!--class item end-->
    <!--class item end-->

	

    <div class="item">
		<table class="row">
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>���⣺</td>
			<td valign="top" class="inputTd"><input type="text" name="biaoti" value="<%=biaoti%>" size="50" id="bi1" maxlength="25" class="input required field" onBlur="displaybi('1')"/></td>
			<td><div style="display:none" id="div1"><font color="#FF0000">����д</font></div></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"></span>�۸�</td>
			<td valign="top" class="inputTd"><input type="text" value="<%=price %>" size="50" name="price" id="cre" maxlength="25" class="input required field" value="" /></td>
			
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>�绰��</td>
			<td valign="top" class="inputTd"><input type="text" value="<%=tel %>" size="50" name="tel" id="bi2" maxlength="25" class="input required field" onBlur="displaybi('2')"/></td>
			<td><div style="display:none" id="div2"><font color="#FF0000">����д</font></div></td>
		  </tr>
		   
		  <tr>
			<td valign="top" class="name required"><span class="red"></span>��ַ��</td>
			<td valign="top" class="inputTd"><input type="text"  value="<%=address%>" size="50" name="address" id="cre" maxlength="25" class="input required field" value="" /></td>
			
		  </tr>
		    <tr>
			<td valign="top" class="name required"><span class="red"></span>QQ��</td>
			<td valign="top" class="inputTd"><input type="text" value="<%=qq %>" size="50" name="qq" id="cre" maxlength="25" class="input required field" value="" /></td>
			
		  </tr>
		</table>
	</div>
	<!--class item end-->

		<!--class item end-->


	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name">���ݣ�</td>
		    <td valign="top" class="inputTd">
       <textarea name="content" style="width:500px" id="description"  rows="7" cols="70" class="input field">
       <%=content%>
       </textarea>
			</td>
		  </tr>
		</table>
	</div>
         ͼƬ��Ϣ��<img src="<%=imgurl%>">
    
	<div class="item" align="right">
	  <table class="row" align="center">
        <tr>
          <td align="right" colspan="2"><button type="submit" class="submit" id="postSubmit" v="������ѷ���" onClick="tijiao()">ȷ���޸�</button></td>
        </tr>
      </table>
	  <!--class item end-->
</div>
	<!-- formInputBox end -->
</form>
</div>



<div id="footer" class="nohist">
	<table width="100%"  border="0" cellspacing="0" cellpadding="0">
	<tr>
	<td>
	&copy;2011<a target="_blank" href="" rel="nofollow">����У����</a> |
	<a target="_blank" href="">У������Լ</a> |
	<a href="" target="_blank">��ϵ����</a>
	</td>
	</tr>
	</table>
</div>
  </body>
</html>
