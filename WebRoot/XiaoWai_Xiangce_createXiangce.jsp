<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>���������</title>
<script language="javascript">
  
  
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
	      
	      var name = document.form1.xiangname.value;
	      
	      var quanxian = document.form1.select1.value;
	      
	      var url = "AlbumCreateServlet?albtitle=" + name + "&popedom="+quanxian+"&rd="+Math.random();
	      httprequest.open("GET",url,true);
	      httprequest.onreadystatechange = allright;
	      httprequest.send(null);
	   }
	   
	    function allright(){
	      if(httprequest.readyState==4){
	        if(httprequest.status==200){
		      var flag = httprequest.responseText;
		         if(flag=='ok'){
		           alert('�����ɹ�');
		           window.close();
		         }else{
		           alert('����ʧ��');
		           window.close();
		         }
	      }
	   }
	 }
	 
	 function myclose(){
	   window.close();
	 
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
    <form name="form1" action="/AlbumCreateServlet" >
   <table align="center">
      <tr>
	    <td>�������</td>
		<td><input type="text" name="xiangname"/></td>
	  </tr>
	  <tr>
	    <td>˭�����</td>
		<td><select name="select1">
		  <option value="all">���������</option>
          <option value="friend">�������</option>
          <option value="self">�Լ����</option>
        </select></td>
	  </tr>
	  <tr>
	     <td><input name="save" type="button" value="��  ��" align="right" onclick="sendRequest()" /></td>
	<td align="right"><input name="close" type="button" value="ȡ  ��" onclick="myclose()" /></td>
	  </tr>
   </table>
   
</form>

  </body>
</html>
