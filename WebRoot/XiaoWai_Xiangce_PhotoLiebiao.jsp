<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>照片列表</title>
<script language="javascript">
   function lookphoto(op){
	 var url = document.getElementById(op).src;
     document.getElementById("centerimg").src = url;
	 document.getElementById("div1").style.display = "block";
   }
   
   function closephoto(){
	 document.getElementById("div1").style.display = "none";
   }
   
   var httprequest = false; 
	   function sendRequest(op){
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
	      var imgurl = document.getElementById(op).src;
	      var albumid = document.getElementById('albumid').value;
	      var url = "AlbumUpdateAlbimgServlet?imgurl=" + imgurl + "&albumid="+albumid;
	      httprequest.open("POST",url,true);
	      httprequest.onreadystatechange = allright;
	      httprequest.send(null);
	   }
	   
	    function allright(){
	      if(httprequest.readyState==4){
	        if(httprequest.status==200){
		      var flag = httprequest.responseText;
		         if(flag=='ok'){
		           alert('修改成功');
		         }else{
		           alert('修改失败');
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
  <c:set var="myuser" value="${user}"></c:set>
  <c:set var="album" value="${albumbean}"></c:set>
  <c:set var="index" value="${photomypage}"></c:set>
  <c:set var="allpage" value="${photoallpage}"></c:set>
    <h3>
     <div style="display:none"><input type="text" value="${album.albid}" id="albumid"></div>
     <a href="AlbumSearchMyselfServlet?userid=${album.userid}">${album.username}的相册</a>>>${album.albtitle}：    
    </h3>
   <c:if test="${album.userid==myuser.userId}">
     <a href="XiaoWai_Xiangce_UpPhoto.jsp" >上传照片</a>
    </c:if>
 <table cellspacing="30">
    <c:forEach var="photomap" items="${photomap}" begin="${index}" end="${index}">
        <c:set var="photobeanvec" value="${photomap.value}"></c:set>
	      <c:forEach var="photobean" items="${photobeanvec}" varStatus="status">
	       <c:if test="${status.index%3==0}">
	         <tr>
	       </c:if>
	       
			    <td width="208">
				      <table>
					     <tr>
					     <td><a href="javascript:lookphoto(${status.index})"><img id="${status.index}" src="${photobean.content}" width="200" height="150" alt="${photobean.content}" title="${photobean.content}"/></a></td>
					         <div style="display:none"><input type="text" value="${photobean.content}"></div>
						 </tr>
					     <tr><td>${photobean.title}</td></tr>
					     <c:if test="${album.userid==myuser.userId}">
					       <tr><td>删除</td></tr>
					     <tr><td><a href="javascript:sendRequest(${status.index})">设为封面</a></td></tr>
					     </c:if>
					  </table>
			   </td>
			   
		  <c:if test="${status.index%3==2}">
	         </tr>
	       </c:if> 
	     </c:forEach>
     </c:forEach>
</table>
   

<div id="div1" style="display:none;position:absolute;width:95px;height:62px;z-index:2;left:306px;top:80px;" ><img id="centerimg" height="500px" width="500px"/>
  <div id="Layer3" style="display:block;position:absolute;width:34px;height:23px;z-index:1;left:267px;top: 1px;"><a href="javascript:closephoto()">关闭</a></div>
</div>
   <div align="center">
    
    <c:if test="${allpage!=0}"> 
	    <c:if test="${index!=0}">
	       <a href="AlbumPhotoSearchFromalbidServlet?mypage=${index-1}&albid=${album.albid}">上一页</a>
	    </c:if>
	    <c:if test="${index!=(allpage-1)}">
	    <a href="AlbumPhotoSearchFromalbidServlet?mypage=${index+1}&albid=${album.albid}">下一页</a>  
	    </c:if>
    
              第${index+1}页,总共${allpage}页
    </c:if>
    <c:if test="${allpage==0}">
    
      没有照片。。。
    </c:if>
     
    </div>
  </body>
</html>
