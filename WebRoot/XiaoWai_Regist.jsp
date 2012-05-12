<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>校外网 - 注册</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script type="text/javascript" src="js/swfobject.js"></script><link href="css/guide-reg.css" rel="stylesheet" rev="stylesheet" media="all" />
<!-- 6253 -->
<script language="javascript" src="js/address.js"></script>
  </head>
  
  <body>
    <div class="main_wrap clearfix">
<div class="reg_logo">10秒找到你所有朋友</div>
<div class="guide-reg clearfix">
<div class="main_left">
<div class="form_wrap clearfix">
<span class="login">已有校外帐号，<a href="index.html" target="_blank">登录</a></span>
<div class="user_wrap clearfix">免费开通校外网帐号</div>
				

 <form method="post" id="regform"  name="regform" action="/XiaoWai/RegistServlet">
 <input type="hidden" id='msgId' value=''/>
<input type="hidden" name="fromUrl" id="fromUrl" />
<input type="hidden" name="iu" id="iu" />
<input type="hidden" name="ic" id="ic" />
<input type="hidden" name="uuid" id="uuid" />
<input type="hidden" name="ss" id="ss"  />
<input type="hidden" name="action_id" id="action_id"  />
 <input type="hidden" name="pageId" id="pageId" value="" /><input type="hidden" name="fs" id="fs" value="fnew" />
<input type="hidden" name="ref" id="ref" value="" />
<input type="hidden" name="fsid" id="fsid" value="page_600594626" />
<input type="hidden" name="accType" id="accType" value="1" /><input type="hidden" name="g" id="g" />
<input type="hidden" name="b" id="b" />

<dl id="d_email">
<dl id="d_xid" >
<dt><label for="nicknameId">输入帐号:</label></dt>
<dd><input type="text" name="username" id="nicknameId" class="inputtext" /><span id="mg"></span><span id="nicknameId_error_span" class="box-error"><b id="nicknameId_error_span_i"></b></span></dd>
</dl>

<dl>
<dt><label for="pwd">创建密码:</label></dt>
<dd><input type="password" maxlength="20" name="password" id="pwd" class="inputtext" /><span id="mmg"></span><span id="pwd_error_span" class="box-error"><b id="pwd_error_span_i"></b></span></dd>
</dl>
<dl class="dl_pad">
<dt><label for="name">真实姓名:</label></dt>
<dd><input type="text" name="name" id="name" class="inputtext" /><span id="xmg"></span><span id="name_error_span" class="box-error"><b id="name_error_span_i"></b></span></dd>
</dl>
<dl class="dl_gender">
<dt><label>性别:</label></dt>
<dd><label for="male"><input type="radio" name="gender" id="male" value="男生" />男</label><label for="female"><input type="radio" name="gender" id="female" value="女生" />女</label><span id="gender_error_span" class="box-error"><b id="gender_error_span_i"></b></span></dd>
</dl>
<dl id="p_birthday">
<dt><label>生日:</label></dt>
<dd><select name="birth_year">
<option value="">请选择</option>
 
<option value="2011">2011</option>
<option value="2010">2010</option>
<option value="2009">2009</option>
<option value="2008">2008</option>
<option value="2007">2007</option>
<option value="2006">2006</option>
<option value="2005">2005</option>
<option value="2004">2004</option>
<option value="2003">2003</option>
<option value="2002">2002</option>
<option value="2001">2001</option>
<option value="2000">2000</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1790">90后</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1780">80后</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>
<option value="1970">1970</option>
<option value="1770">70后</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>
<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1760">60后</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>
<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>
<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>
<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>
<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>
<option value="1916">1916</option>
<option value="1915">1915</option>
<option value="1914">1914</option>
<option value="1913">1913</option>
<option value="1912">1912</option>
<option value="1911">1911</option>
<option value="1910">1910</option>
<option value="1909">1909</option>
<option value="1908">1908</option>
<option value="1907">1907</option>
<option value="1906">1906</option>
<option value="1905">1905</option>
<option value="1904">1904</option>
<option value="1903">1903</option>
<option value="1902">1902</option>
<option value="1901">1901</option>
<option value="1900">1900</option>
</select> 年 <select name="birth_month" >
<option value="">--</option>

<option value="12">12</option>
<option value="11">11</option>
<option value="10">10</option>
<option value="9">9</option>
<option value="8">8</option>
<option value="7">7</option>
<option value="6">6</option>
<option value="5">5</option>
<option value="4">4</option>
<option value="3">3</option>
<option value="2">2</option>
<option value="1">1</option>
</select> 月 <select name="birth_day">
<option value="">--</option>

<option value="31">31</option>
<option value="30">30</option>
<option value="29">29</option>
<option value="28">28</option>
<option value="27">27</option>
<option value="26">26</option>
<option value="25">25</option>
<option value="24">24</option>
<option value="23">23</option>
<option value="22">22</option>
<option value="21">21</option>
<option value="20">20</option>
<option value="19">19</option>
<option value="18">18</option>
<option value="17">17</option>
<option value="16">16</option>
<option value="15">15</option>
<option value="14">14</option>
<option value="13">13</option>
<option value="12">12</option>
<option value="11">11</option>
<option value="10">10</option>
<option value="9">9</option>
<option value="8">8</option>
<option value="7">7</option>
<option value="6">6</option>
<option value="5">5</option>
<option value="4">4</option>
<option value="3">3</option>
<option value="2">2</option>
<option value="1">1</option>
</select> 日<span id="birthday_error_span" class="box-error"><b id="birthday_error_span_i"></b></span>
</dd>
</dl>
<dl>
<dt><label for="pwd">我现在:</label></dt>
<dd>
<select id="stage" name="university">
<option value="-1">请选择大学</option>
<option value="中南大学">中南大学</option>
<option value="中南林业科技大学">中南林业科技大学</option>
<option value="长沙理工大学">长沙理工大学</option>
<option value="其他大学">其他大学</option>
</select>
<select id="stage" name="academe">
<option value="-1">请选择学院</option>
<option value="软件学院">软件学院</option>
<option value="计算机学院">计算机学院</option>
<option value="数学院">数学院</option>
<option value="外语院">外语院</option>
</select>
(非常重要)<span id="stage_error_span"><font color="#FF0000">请选择大学</font></span>
</dd>
</dl>
<dl>
<dt>&nbsp;<label>家乡:</label></dt>
<dd>


<SELECT id=z05_1 onChange="changepro('z05_2','z05_1');" name=z05_1> 
              <OPTION value="" selected>省/直辖市</OPTION> 
              <OPTION value=北京市>北京市</OPTION> 
              <OPTION value=天津市>天津市</OPTION>
              <OPTION value=河北省>河北省</OPTION> 
              <OPTION value=山西省>山西省</OPTION> 
              <OPTION value=内蒙古区>内蒙古区</OPTION> 
              <OPTION value=辽宁省>辽宁省</OPTION> 
              <OPTION value=吉林省>吉林省</OPTION> 
              <OPTION value=黑龙江省>黑龙江省</OPTION> 
              <OPTION value=上海市>上海市</OPTION> 
              <OPTION value=江苏省>江苏省</OPTION> 
              <OPTION value=浙江省>浙江省</OPTION> 
              <OPTION value=安徽省>安徽省</OPTION> 
              <OPTION value=福建省>福建省</OPTION> 
              <OPTION value=江西省>江西省</OPTION> 
              <OPTION value=山东省>山东省</OPTION> 
              <OPTION value=河南省>河南省</OPTION> 
              <OPTION value=湖北省>湖北省</OPTION> 
              <OPTION value=湖南省>湖南省</OPTION> 
              <OPTION value=广东省>广东省</OPTION> 
              <OPTION value=广西区>广西区</OPTION> 
              <OPTION value=海南省>海南省</OPTION> 
              <OPTION value=重庆市>重庆市</OPTION> 
              <OPTION value=四川省>四川省</OPTION> 
              <OPTION value=贵州省>贵州省</OPTION> 
              <OPTION value=云南省>云南省</OPTION> 
              <OPTION value=西藏区>西藏区</OPTION> 
              <OPTION  value=陕西省>陕西省</OPTION> 
              <OPTION value=甘肃省>甘肃省</OPTION> 
              <OPTION value=青海省>青海省</OPTION> 
              <OPTION value=宁夏区>宁夏区</OPTION> 
              <OPTION value=新疆区>新疆区</OPTION> 
              <OPTION value=台湾省>台湾省</OPTION> 
              <OPTION value=香港特区>香港特区</OPTION> 
              <OPTION value=澳门特区>澳门特区</OPTION>
              </SELECT> 
            <SELECT id=z05_2 onChange="changecity('z05_3','z05_2');" name=z05_2> 
              <OPTION value="" selected>请选择</OPTION>
              </SELECT> 
              <SELECT id=z05_3 name=z05_3> 
              <OPTION value="" selected>请选择</OPTION>
              </SELECT> 
<input type="hidden" value="regist1" name="flag">

<input type="hidden" name="key_id" value=78806845 /><span id="icode_error_span" class="box-error"><b id="icode_error_span_i"></b></span></dd>
</dl>
<dl>
<dt>&nbsp;<input type="hidden" name="activity" value="" id="activity" /><input type="hidden" name="iv" value="" id="iv" /><input type="hidden" name="from" value="" id="from" /></dt>
<dd>
<input type="image" src="regist_img/reg-btn.png"/>
</dd>
</dl>
</form>
<script type="text/javascript" src="js/register-simple.js"></script>
<script type="text/javascript">
function Change(){
	this.location = "XiaoWai_Regist2.jsp";
}
new RegCheck();
</script>

 <script type="text/javascript" src="js/form_control.js"></script>
<script>var valueSetter = new ChangeValue('regform');
valueSetter.setValue('action_id', '206253');valueSetter.setValue('g', '2345.com');valueSetter.setValue('b', '2345.com');valueSetter.setValue('fromUrl', 'none');valueSetter.setValue('ss', '17043');</script>
</div></div>
<div class="main_right">
<div class="youknow">
<img src="regist_img/intro-new.png" alt="" />
</div>
<dl>
<dt>最热门公共主页</dt>
<dd>
<img width="75" src="regist_img/zw.png" alt="" />
<span class="name">赵薇</span>
</dd>
<dd>
<a href="#"><img width="75" src="regist_img/lkf.jpg" alt="" /></a>
<span class="name">李开复</span>
</dd>
<dd>
<img width="75" src="regist_img/sj.png" alt="" />
<span class="name">商界</span>
</dd>
</dl>
<dl>
<dt>最热门游戏</dt>
<dd><img width="75" src="regist_img/xxzz.png" alt="" />
<span class="name">小小战争</span></dd>
<dd><img width="75" src="regist_img/rrnc.jpg" alt="" />
<span class="name">校外农场</span></dd>
</dl>
</div>	
<div class="b_text">
点击免费开通帐号表示您同意并遵守<a href="XiaoWai_Agreement.jsp" target="_blank">校外网服务条款</a>
</div>
</div>
</div>
  </body>
</html>
