<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>������Ϣ</title>
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
	
	function yanzheng(){
		 
		 var count = document.getElementById('price1').value;
		 for(a=0;a<count.length;a++)
		  {
				var fchar = count.charAt(a);
				if(!((fchar>=0&&fchar<=9)||fchar=='.')){
				document.getElementById('price1').value = '';
				alert('����������С��');
				return false;
		 		}
		  }
	}
	
	var httprequest = false; 
	   function sendRequest(){
	      //��IE���������XMLHttpRequest����
	      if(window.XMLHttpRequest){
	          httprequest = new window.XMLHttpRequest();
	         
	      }else if(window.ActiveXObject){//IE�������������
	         try{
	          httprequest = new window.ActiveXObject("Msxm12.XMLHTTP");
	       
	         }catch(e){
	          httprequest = new window.ActiveXObject("Microsoft.XMLHTTP");
	   
	         }
	      }
	      if(!httprequest){
	      alert("�޷�����XMLHttpRequest����");
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
		           alert('�����ɹ�');
		         }else{
		           alert('����ʧ��');
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
<a href="">����У����</a> &raquo; ��ѷ�����Ϣ
<div style="clear:both"></div>

</div><!--header-->
<div id="container">
<div id="subheader">
<div style="display:none" id="mktGameHeader"></div>
<h1 id="postTitle">��ѷ�����Ϣ</h1>
<div class="line"></div>
</div><!--subheader-->

<div id="postTable">
	<form id="postForm" method="POST" action="ErshouInsertComServlet" autocomplete="off" class="form" >
	<div id="formInputBox">	
	<div class="item">
		<table class="row">
		  <tr>
		    <td valign="top" class="name required"><span class="red"> * </span>ѡ����Ŀ��</td>
		    <td>
			  <select name="uctype" >			    
					<option value="1" selected>����̨ʽ����</option>
					<option value="4">�������/���</option>
					<option value="5">�����ֻ�</option>
					<option value="2">���ֱʼǱ�</option>
					<option value="3">���ֳ�����</option>
					<option value="6">��װ����Ʒ</option>
					<option value="7">����</option>
			  </select>
			</td>

		  </tr>
		</table>
	</div>
	<!--class item end-->

    <div class="item">
		<table class="row">
		  <tr>
			<td valign="top" class="name required"><span class="red"> * </span>���⣺</td>
			<td valign="top" class="inputTd"><input type="text" name="biaoti" size="50"  maxlength="25" class="input required field"></td>
			<td><div style="display:none" id="div1"><font color="#FF0000">����д</font></div></td>
		  </tr>
		  <tr>
			<td valign="top" class="name required"><span class="red"></span>�۸�</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="price" id="price1" maxlength="25" class="input required field" value="" onblur="yanzheng()"/></td>
			
		  </tr>
		   <tr>
			<td valign="top" class="name required"><span class="red"> * </span>�绰��</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="tel" id="bi1" maxlength="25" class="input required field" onBlur="displaybi('1')"/></td>
			<td><div style="display:none" id="div2"><font color="#FF0000">����д</font></div></td>
		  </tr>
		   
		  <tr>
			<td valign="top" class="name required"><span class="red"></span>��ַ��</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="address" id="cre" maxlength="25" class="input required field" value="" /></td>
			
		  </tr>
		    <tr>  
			<td valign="top" class="name required"><span class="red"></span>QQ��</td>
			<td valign="top" class="inputTd"><input type="text" size="50" name="qq" id="bi2" maxlength="25" class="input required field" value="" onblur="displaybi('2')" /></td>
			
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
       <textarea name="content" style="width:500px" id="description" rows="7" cols="70" class = "input field">
       </textarea>
			</td>
		  </tr>
		</table>
	</div>

	<div class="item" align="center">
	  <table class="row" align="center" >
        <tr align="center">
          <td align="center" colspan="2"><button type="submit" class="submit" id="postSubmit" v="������ѷ���" onClick="tijiao()">������ѷ���</button></td>
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
