<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>��д����</title>
    <link href="css/bases__25078__[1].css" rel="stylesheet" type="text/css" />
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script type="text/javascript">
  function mychange(){
     
     var count = document.getElementById("count1").value;
     for(a=0;a<count.length;a++)
		{
			var fchar = count.charAt(a);
			
			if(!(fchar>=0&&fchar<=9)){
			alert('��������');
			return false;
			}
		}
   
     var result = document.getElementById("label1").value * document.getElementById("count1").value;
     document.getElementById("pay1").value=result;
  }

</script>
  </head>
  
  <body>

<div id="header" class="nohist">
<span id="header_links" style="float:right;text-align:right">

<span id="loginBox">
</span>

<span id="promote"></span>
</span>
<a href="XiaoWai_Store_Shouye.jsp">����У���̼���</a> &raquo;����
<div style="clear:both"></div>

</div><!--header-->
<link href="css/post__25078__[1].css" rel="stylesheet" type="text/css" />
<div id="container">
<div id="subheader">
<div style="display:none" id="mktGameHeader"></div>
<h1 id="postTitle">��д����</h1>
<div class="line"></div>
</div><!--subheader-->
<c:set var="storebean" value="${store}"></c:set>
<c:set var="combean" value="${combean}"></c:set>
<div id="postTable">

	<form id="postForm" method="POST" action="/XiaoWai/StoreInsertComorderServlet"  class="form">
	<div id="formInputBox">	
	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name required">�̼����ƣ�</td>
		    <td><label>${store.storename}</label></td>
		  </tr>
		  <tr>
		    <td valign="top" class="name required">��Ʒ���ƣ�</td>
		    <td><label>${combean.comname}</label></td>
		  </tr>
		  <tr>
		    <td valign="top" class="name required">��Ʒ�۸�</td>
		    <td><input type="text"  id="label1" value="${combean.price}" readonly="readonly"></td>
			<td>Ԫ/��</td>
		  </tr>
		</table>
	</div>
	<!--class item end-->
    <!--class item end-->

	

    <div class="item">
		<table class="row">
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>�����ˣ�</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="name" maxlength="25" class="input required field"/></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>������</td>
			<td valign="top" class="inputTd"><input type="text"  id="count1" size="50" name="count" maxlength="25" class="input required field" onblur="mychange()"/></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>��ϵ�绰��</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="tel" maxlength="25" class="input required field"/></td>
		  </tr>
		   <tr>
			<td valign="top" class="name required"><span class="red"> * </span>��ַ��</td>
		    <td valign="top" class="inputTd"><input type="text" size="50" name="address" maxlength="25" class="input required field"/></td>	
		  </tr>
		</table>
	</div>

	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name">���ݣ�</td>
		    <td valign="top" class="inputTd">
       <textarea name="content" style="width:500px" id="description" rows="7" cols="70" class="input field">
       </textarea>
			</td>
		  </tr>
		  <tr align="right"><td align="right">С��</td><td><input type="text" readonly="readonly" name="price" id="pay1"></td></tr>
		</table>
	</div>
	<div class="item" align="center">
	  <table class="row">
        <tr align="right">
          <td align="center" colspan="2"><button type="submit" class="submit" id="postSubmit">�ύ����</button></td>
        </tr>
      </table>
	  <!--class item end-->
    </div>
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
