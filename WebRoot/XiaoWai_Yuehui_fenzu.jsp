<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'XiaoWai_Yuehui_fenzu.jsp' starting page</title>
    
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
   <div id="Layer1">
      <table cellSpacing=0 cellPadding=0  width="100%" height="300" border="0">
		  <tr >
			<td height="96">
			<hr />
			<table width="100%"   style="top:0px;" border="0">
              <tr onMouseover="changeto('lightgreen')" onMouseout="changeback('white')">
                <td height="27" colspan="2" ><input type="text" id="yuehuisousuo" name="yuehuisousuo" style="width:100%;height:100%;"></td>
              </tr>
			 
              <tr onMouseover="changeto('lightgreen')" onMouseout="changeback('white')">
                <td width="25%" height="28"><img src="images/sousuo.jpg" /></td>
                <td width="75%"><a href="javascript:sousuo(1)">搜索约会</a></td>
              </tr>
			 
			    <tr>
                <td height="30"></td>
                <td></td>
              </tr>
            </table></td>
		  </tr>
		  <tr>
			<td height="200" >
			 <div id="Layer6">
			  <table width="100%" height="198" cellSpacing=0 cellPadding=0 border="1" bordercolorlight="#CCFFFF" bordercolor="#CCFFFF">
				<tr>
					<td colspan="2" bgcolor="#CCFFFF"><font size="+1"><strong>约会分类</strong></font></td>
					
				</tr>
                <tr> 
					<td width="19%">&nbsp;</td>
                  <td width="81%" style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=K歌" >K歌(${fenzu.kegeCount })</a></td>
                </tr>
               <tr>
			   <td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=溜冰">溜冰(${fenzu.liubingCount })</a></td>
                </tr>
                <tr>
				<td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=看电影">看电影(${fenzu.kandianyingCount })</a></td>
                </tr>
               <tr>
			   <td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="./YueHuiSearchServlet?page=1&fenlei=烧烤">烧烤(${fenzu.shaokaoCount })</a></td>
                </tr>
                 <tr>
			   <td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=旅游">旅游(${fenzu.lvyouCount })</a></td>
                </tr>
                  <tr>
			   <td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=就餐">就餐(${fenzu.jiucanCount })</a></td>
                </tr>
				 <tr>
			   <td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=其他">其他(${fenzu.qitaCount })</a></td>
                </tr>
                 <tr>
			   <td>&nbsp;</td>
                  <td style="background-image:url(images/fenzu.jpg); background-repeat:no-repeat;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="YueHuiSearchServlet?page=1&fenlei=0">所有约会(${fenzu.allCount })</a></td>
                </tr>
              </table>
			</div>
			</td>
		  </tr>
</table></div>
  </body>
</html>
