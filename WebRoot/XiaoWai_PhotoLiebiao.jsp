<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>照片列表</title>
<script language="javascript">
   function lookphoto(op){
   
     
	 var url = document.getElementById(op).src;
	 alert(url);
     document.getElementById("centerimg").src = url;
	 document.getElementById("div1").style.display = "block";
	 
   }
   
   function closephoto(){

	 document.getElementById("div1").style.display = "none";
	 
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
    <h3>
     用户的相册>>相册名：    
    </h3>
    <a href="XiaoWai_Xiangce_UpPhoto.jsp" >上传照片</a>
 <table cellspacing="30">
      <tr>
	      <td width="208">
		      <table>
			     <tr><td><a href="javascript:lookphoto('img1')"><img id="img1" src="images/mm01.jpg" width="200" height="150"/></a></td>
				 </tr>
			     <tr><td>描述</td></tr>
			     <tr><td>删除</td></tr>
			  </table>
	    </td>
		  <td width="208">
		      <table>
			     <tr><td><img src="images/mm01.jpg" width="200" height="150"/></td></tr>
			     <tr><td>描述</td></tr>
			     <tr><td>删除</td></tr>
			  </table>
	    </td>
		  <td width="241">
		      <table>
			     <tr><td width="200"><img src="images/mm01.jpg" width="200" height="150"/></td>
			     </tr>
			     <tr><td>描述</td></tr>
			  </table>
	    </td>
	  </tr>   
         <tr>
	      <td>
		      <table>
			     <tr><td><img src="images/mm01.jpg" width="200" height="150"/></td></tr>
			     <tr><td>描述</td></tr>
			  </table>
		  </td>
		  <td>
		      <table>
			     <tr><td><img src="images/mm01.jpg" width="200" height="150"/></td></tr>
			     <tr><td>描述</td></tr>
			  </table>
		  </td>
		  <td>
		      <table>
			     <tr><td width="200"><img src="images/mm01.jpg" width="200" height="150"/></td>
			     </tr>
			     <tr><td>描述</td></tr>
			  </table>
		  </td>
	  </tr>   

</table>
   

<div id="div1" style=" display:none;position:absolute;width:95px;height:62px;z-index:2;left: 306px;top:80px;"><img id="centerimg"/>
  <div id="Layer3" style="display:block;position:absolute;width:34px;height:23px;z-index:1;left:267px;top: 1px;"><a href="javascript:closephoto()">关闭</a></div>
</div>
   <a href="">上一页</a> <a href="">下一页</a>
  </body>
</html>
