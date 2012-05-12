<%@ page language="java" import="java.util.*" pageEncoding="utf-8"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "D HTML 4.01 Transitional//E">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>校外网百业信息</title>
<link href="css/shangjia.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/tabs.js"></script>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript">
	   
	   function cleartext(){
	   
	     document.getElementById('searchKey').value='';
	   }
	   
	   
	</script>

  </head>
  
  <body class="listpage">
<div class="header">
<div class="denglu">
<div class="dengluz"></div>
<div class="dengluy"><ul><li><span class="dengluy1"><img src="images/d2.png" alt="订餐" border="0"/></span><span class="dengluy2"><a href="/canyin/">订餐饮</a></span></li>
</ul><br></div>
</div>
<div class="logo">
<div class="logoz"><a ><font color="#00FF00" size="+6">校外商家网</font></a></div>
<div class="logozh">
<!-- 广告位置 -->
</div>
<div class="logoy"></div>
</div>
<div class="daohang">
<div class="daohangs">
<ul>
<li class="daohangsbk"><a href="XiaoWai_Store_Shouye.jsp" target="_blank">首页</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=休闲娱乐" target="_blank">休闲娱乐商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=餐饮" target="_blank">餐饮美食商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=超市" target="_blank">商场购物商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=教育" target="_blank">教育培训商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=服饰" target="_blank">服装饰品商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=其他" target="_blank">其他行业商家</a></li>
</ul>
</div>

<div class="syssnr">
<form action="/XiaoWai/StoreComSearchFromtitleServlet" method="Post" name="title" id="searchform">
<div class="syssnr1"></div><div class="syssnr2">搜索商品</div><blockquote><blockquote><blockquote><blockquote><div class="syssnr3"> 
<input type="text" id="searchKey" name="title" class="button" value="输入商品关键字搜索" onfocus="cleartext()"> 
<input type="hidden" name="show" value="title,zhuying,jianjie"> 
<input type="hidden" name="tempid" value="1"> 
<input type="hidden" name="tbname" value="shangjia"></div></blockquote></blockquote></blockquote></blockquote><div class="syssnr4"><input type="submit" value="搜索商品" /></div>
</form>
</div>
</div>
<div class="daohangx">
<ul>
<c:forEach begin="0" end="5" var="storebean" items="${allstorevec}"> 
   <li><a href="StoreSearchComfromstoreid?storeid=${storebean.storeid}" target="_blank">${storebean.storename}</a></li>
</c:forEach>
</ul>
</div>
<div class="daohangx1">
<ul><li><a href="XiaoWai_ErShou_Shouye.jsp">校外二手市场</a></li></ul>
</div>
</div>
<c:set var="storebean" value="${store}"></c:set>



<div class="spz">
<div class="spzdqwz">
<div class="spzdqwz1"></div>
<div class="spzdqwz2">您当前的位置&nbsp;>&nbsp;${storebean.storetype}&nbsp;>&nbsp;${storebean.storename}</div>
<div class="spzdqwz3"></div>
</div>
<div class="spdhnr">
<div class="spdhnrz">
<div class="spdhnrzdh">
<div class="spdhnrzdhbt">商家分类导航</div>
<div class="spdhnrzdhnr">
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=休闲娱乐" target="_blank">休闲娱乐商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=餐饮" target="_blank">餐饮美食商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=超市" target="_blank">商场购物商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=教育" target="_blank">教育培训商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=服饰" target="_blank">服装饰品商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=其他" target="_blank">其他行业商家</a></div>
</div>
</div>
<div class="tcwgsm">
<div class="spdhnrzdhbt"><a href="/bz/">校外网购问题</a></div>
<div class="tcwgsmnr">
<div class="tcwgsmnr1"><a href="bz/2.html" target="_blank">·开店绝招</a></div>
<div class="tcwgsmnr1"><a href="bz/14.html" target="_blank">·免责声明</a></div>
<div class="tcwgsmnr1"><a href="bz/15.html" target="_blank">·商家网络宣传推广的优势</a></div>
</div>
</div>
</div>
<%
  String mypage = request.getParameter("mypage");
%>
<c:set var="page" value="${0}"></c:set>
<c:set var="allpage" value="${qgoodsallpage}"></c:set>
<c:set var="mypage" value="<%=mypage%>"></c:set>
<c:if test="${mypage!=null}">
  <c:set var="page" value="${mypage}"></c:set>
</c:if>
<div class="spdhnry">
<div class="spdhnrybt"><div class="spdhnrybtz">${storebean.storename}</div><div class="spdhnrybty"><a>1.加盟我们的优势！</a> </div>
</div>
<div class="spdhnrynr">
<c:forEach var="goodsmap" items="${qgoodsmap}" begin="${page}" end="${page}">
    <c:set var="storecomvec" value="${goodsmap.value}"></c:set>
	<c:forEach var="combean" items="${storecomvec}">
		<div class="spzs">
		<div class="spzsimg"><a title="${combean.comname}" class="bs"><img src="${combean.comimg}" alt="${combean.comname}" border="0" class="spdhnrynrimg" /></a></div>
		<div class="spzsjj">
		<div class="spzsjjmz"><a title="${combean.comname}">${combean.comname}</a></div>
		<div class="spzsjjkf"><span class="hong">价格：</span>${combean.price}元/份</div>
		<div class="spzsjjdz"><span class="hong">联系电话：</span>${storebean.tel}</div>
		<div class="spzsjjtj"><span class="hong">店铺地址：</span>${storebean.address}</div>
		<div class="spzsjjdz"><a href="StoreComOrderServlet?comid=${combean.comid}" target="_blank"><font color="#00FF00" size="3">订  购</font></a></div>
		</div>
		</div>
	</c:forEach>
</c:forEach>
</div>
</div>
</div>

<div class="clear"></div>
<div class="fenye">
<c:if test="${allpage!=0}">
	第${page+1}页,总共${allpage}页.
	<c:if test="${page!=0}">
	   <a href="XiaoWai_Store_GoodsLiebiao.jsp?mypage=${page-1}">上一页</a>
	</c:if>
	<c:if test="${(page+1)!=allpage}">
	   <a href="XiaoWai_Store_GoodsLiebiao.jsp?mypage=${page+1}">下一页</a>
	</c:if>
</c:if>
<c:if test="${allpage==0}">
没有数据，不好意思的啦。。。
</c:if>
</div>

<!-- 全站底部 -->
<div class="footer">
<div class="footernr"><div class="footer1">
<a class="mBottomLink">加入收藏</a> | 
<a >关于我们</a> |
<a >联系方式</a> |
<a >留言反馈</a> |
<a >开店帮助</a> |
<a  >新手帮助</a> |
<a>广告服务</a></div>
<div class="footer2">Copyright @ 2006-2009 520435.COM All Right Reserved</div>
<div class="footer3">吉ICP备06006359号 
</div>
</div>
</div>
</body>
</html>
