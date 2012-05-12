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
    
    <title>填写订单</title>
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
			alert('输入整数');
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
<a href="XiaoWai_Store_Shouye.jsp">中南校外商家网</a> &raquo;订单
<div style="clear:both"></div>

</div><!--header-->
<link href="css/post__25078__[1].css" rel="stylesheet" type="text/css" />
<div id="container">
<div id="subheader">
<div style="display:none" id="mktGameHeader"></div>
<h1 id="postTitle">填写订单</h1>
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
		    <td valign="top" class="name required">商家名称：</td>
		    <td><label>${store.storename}</label></td>
		  </tr>
		  <tr>
		    <td valign="top" class="name required">商品名称：</td>
		    <td><label>${combean.comname}</label></td>
		  </tr>
		  <tr>
		    <td valign="top" class="name required">商品价格：</td>
		    <td><input type="text"  id="label1" value="${combean.price}" readonly="readonly"></td>
			<td>元/件</td>
		  </tr>
		</table>
	</div>
	<!--class item end-->
    <!--class item end-->

	

    <div class="item">
		<table class="row">
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>订购人：</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="name" maxlength="25" class="input required field"/></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>数量：</td>
			<td valign="top" class="inputTd"><input type="text"  id="count1" size="50" name="count" maxlength="25" class="input required field" onblur="mychange()"/></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>联系电话：</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="tel" maxlength="25" class="input required field"/></td>
		  </tr>
		   <tr>
			<td valign="top" class="name required"><span class="red"> * </span>地址：</td>
		    <td valign="top" class="inputTd"><input type="text" size="50" name="address" maxlength="25" class="input required field"/></td>	
		  </tr>
		</table>
	</div>

	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name">内容：</td>
		    <td valign="top" class="inputTd">
       <textarea name="content" style="width:500px" id="description" rows="7" cols="70" class="input field">
       </textarea>
			</td>
		  </tr>
		  <tr align="right"><td align="right">小计</td><td><input type="text" readonly="readonly" name="price" id="pay1"></td></tr>
		</table>
	</div>
	<div class="item" align="center">
	  <table class="row">
        <tr align="right">
          <td align="center" colspan="2"><button type="submit" class="submit" id="postSubmit">提交订单</button></td>
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
	&copy;2011<a target="_blank" href="" rel="nofollow">关于校外网</a> |

	<a target="_blank" href="">校外网公约</a> |
	<a href="" target="_blank">联系我们</a>
	</td>
	</tr>
	</table>
</div>

</body>
</html>
