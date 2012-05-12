<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>发布信息</title>
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
				document.getElementById('bi'+op).value = '';
				alert('输入整数');
				return false;
				}
		     }
	   }
	   
	}
	
	function tijiao(){
	   var b1 = document.getElementById("bi1").value;
	   var b2 = document.getElementById("bi2").value;
	   if(b1==''||b2==''){
	       alert("请将必填项天完整");
	   }
	}
	
	function yanzheng(){
		 
		 var count = document.getElementById('price1').value;
		 for(a=0;a<count.length;a++)
		  {
				var fchar = count.charAt(a);
				if(!((fchar>=0&&fchar<=9)||fchar=='.')){
				document.getElementById('price1').value = '';
				alert('输入整数或小数');
				return false;
		 		}
		  }
	}
	
	var httprequest = false; 
	   function sendRequest(){
	      //非IE浏览器创建XMLHttpRequest对象
	      if(window.XMLHttpRequest){
	          httprequest = new window.XMLHttpRequest();
	         
	      }else if(window.ActiveXObject){//IE浏览器创建对象
	         try{
	          httprequest = new window.ActiveXObject("Msxm12.XMLHTTP");
	       
	         }catch(e){
	          httprequest = new window.ActiveXObject("Microsoft.XMLHTTP");
	   
	         }
	      }
	      if(!httprequest){
	      alert("无法创建XMLHttpRequest对象");
	      }
	      var url="ErshouShangchuantupian";
	      httprequest.open("POST",url,true);
	      httprequest.onreadystatechange = allright;
	      httprequest.send("multipart/form-data");
	   }
	   
	    function allright(){
	      if(httprequest.readyState==4){
	        if(httprequest.status==200){
		      var flag = httprequest.responseText;
		         if(flag=='ok'){
		           alert('创建成功');
		         }else{
		           alert('创建失败');
		         }
	      }
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

<span id="promote"></span>
</span>
<a href="">中南校外网</a> &raquo; 免费发布信息
<div style="clear:both"></div>

</div><!--header-->
<div id="container">
<div id="subheader">
<div style="display:none" id="mktGameHeader"></div>
<h1 id="postTitle">免费发布信息</h1>
<div class="line"></div>
</div><!--subheader-->

<div id="postTable">
	<form id="postForm" method="POST" action="ErshouInsertComServlet" autocomplete="off" class="form" >
	<div id="formInputBox">	
	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name required"><span class="red"> * </span>选择类目：</td>
		    <td>
			  <select name="uctype" >			    
					<option value="1" selected>二手台式电脑</option>
					<option value="4">电脑配件/宽带</option>
					<option value="5">二手手机</option>
					<option value="2">二手笔记本</option>
					<option value="3">二手车交易</option>
					<option value="6">服装和饰品</option>
					<option value="7">其他</option>
			  </select>
			</td>

		  </tr>
		</table>
	</div>
	<!--class item end-->

    <div class="item">
		<table class="row">
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>标题：</td>
			<td valign="top" class="inputTd"><input type="text" name="biaoti" size="50"  maxlength="25" class="input required field"></td>
			<td><div style="display:none" id="div1"><font color="#FF0000">请填写</font></div></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"></span>价格：</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="price" id="price1" maxlength="25" class="input required field" value="" onblur="yanzheng()"/></td>
			
		  </tr>
		   <tr>
			<td valign="top" class="name required"><span class="red"> * </span>电话：</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="tel" id="bi1" maxlength="25" class="input required field" onBlur="displaybi('1')"/></td>
			<td><div style="display:none" id="div2"><font color="#FF0000">请填写</font></div></td>
		  </tr>
		   
		  <tr>
			<td valign="top" class="name required"><span class="red"></span>地址：</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="address" id="cre" maxlength="25" class="input required field" value="" /></td>
			
		  </tr>
		    <tr>  
			<td valign="top" class="name required"><span class="red"></span>QQ：</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="qq" id="bi2" maxlength="25" class="input required field" value="" onblur="displaybi('2')" /></td>
			
		  </tr>
		</table>
	</div>
	<!--class item end-->

		<!--class item end-->


	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name">内容：</td>
		    <td valign="top" class="inputTd">
       <textarea name="content" style="width:500px" id="description" rows="7" cols="70" class = "input field">
       </textarea>
			</td>
		  </tr>
		</table>
	</div>

	<div class="item" align="center">
	  <table class="row" align="center" >
        <tr align="center">
          <td align="center" colspan="2"><button type="submit" class="submit" id="postSubmit" v="立即免费发布" onClick="tijiao()">立即免费发布</button></td>
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
	&copy;2011<a target="_blank" href="" rel="nofollow">关于校外网</a> |
	<a target="_blank" href="">校外网公约</a> |
	<a href="" target="_blank">联系我们</a>
	</td>
	</tr>
	</table>
</div>
    
  </body>
</html>
