<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>校外网 - 写新日志</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="css/layout.css"rel="stylesheet" type="text/css" media="all" />


<script type="text/javascript">
XN = {get_check:'1511171133',env:{domain:'xiaowai.com',shortSiteName:'校外',siteName:'校外网'}};

function textareaValue(){
	var content = document.getElementById("input").value;
	alert(content);
	
}
</script>
<script type="text/javascript" src="css/base.css"></script>    
<link rel="stylesheet" href="css/style2.css" />
<script type="text/javascript" src="js/tinyeditor.js"></script>


<link
href="css/blog.css"
rel="stylesheet" type="text/css" media="all" />

<script type="text/javascript"
src="js/xn.ui.friendSelecotorMenu.js">
</script><script type="text/javascript" src="js/tiny_mce.js"></script>
<script type="text/javascript" src="js/xn.form.editor.js"></script>
<script type="text/javascript" src="js/xn.app.blog.js"></script>
<script type="text/javascript" src="js/mediaplayer.js"></script>

<script type="text/javascript">
function change(id) {
var editBlogControl = $("editBlogControl");
editBlogControl.value = '';
var password = $("password");
var passwordProtedted = $("passwordProtedted");
var blog_releative = $("blog_releative");
var blackCon = $('blackListContainer');
if (id === '4') {
password.show();
setTimeout(function() {
$('Password').focus();
}, 0);
passwordProtedted.value = '1';
blog_releative.hide();
} else {
if (id === '-1')
blog_releative.hide();
else
blog_releative.show();
password.hide();
passwordProtedted.value = '0';
}
}
var EDITOR_ACTION = 'new';
var EDITOR_FILE_VERSION = '52466';
var EDITOR_ALERT = true;function beforeSubmitWithPassWordCheck(form){
disableSubmit();
try{
tinyMCE.get('editor').save();
}catch(e){}
if( XN.STRING.isBlank( form.title.value ) )
{
XN.DO.showError('未填写日志标题');
enableSubmit();
return false;
}
if( form.body.value.length > 100 ){
stopAutoSave();
}
if( XN.STRING.isBlank( form.body.value.replace(/\&nbsp\;/ig,'').replace( /(?:<bar \/>|<p>|<\/p>)/ig , '' ) ) ){
XN.DO.showError('未填写日志内容');
enableSubmit();
return false;
}
if (form.blogControl.value == '4') {
if(XN.STRING.isBlank(form.passWord.value)){
XN.DO.showError('你还没有设定访问密码');
enableSubmit();
return false;
}
}
Blog.getBlogMedia();
stopAutoSave();
return true;
}
function saveToDraftWithPassWordCheck(){
var form = $('editorForm');
if(beforeSubmitWithPassWordCheck(form)){
var action;
if(EDITOR_ACTION == 'new'){
action = 'NewDraft.do';			
}else{
action = 'EditDraft.do';
}
$('relative_optype').value = 'saveDraft';
form.action = 'http://blog.' + XN.ENV.domain + '/' + action;var data=formToRequestString(form);
submitForm(form.action,data);
}
}
function saveWithPassWordCheck(){
var form = $('editorForm');
if(beforeSubmitWithPassWordCheck(form)){
var action;
if(EDITOR_ACTION == 'new'){
action = 'NewEntry.do';			
}else{
action = 'EditEntry.do';
}
$('relative_optype').value = 'saveDraft';
form.action = 'http://blog.' + XN.ENV.domain + '/' + action;var data=formToRequestString(form);
submitForm(form.action,data);
}
}
function formToRequestString(form_obj)
{
var query_string='';
var and='';
//alert(form_obj.length);
for (i=0;i<form_obj.length ;i++ )
{
e=form_obj[i];
if (e.name!='')
{
if (e.type=='select-one')
{
element_value=e.options[e.selectedIndex].value;
}
else if (e.type=='checkbox' || e.type=='radio')
{
if (e.checked==false)
{
continue;	
}
element_value=e.value;
}
else
{
element_value=e.value;
}
query_string+=and+e.name+'='+encodeURIComponent(element_value);
and="&"
}
}
return query_string;
}
function submitForm(sUrl,dataValue){
new XN.net.xmlhttp({
url: sUrl,
data: dataValue,
method: 'post',
onSuccess: function(r)
{
//请求成功后
if(r.responseText.indexOf("r:")>-1){
var text=r.responseText;
var url="";
if(r.responseText.indexOf("http:")>-1){
url=r.responseText;
}else{
url='http://blog.' + XN.ENV.domain +text.split(':')[1];
}               
window.location.href=url;
}else{
XN.DO.showError(r.responseText.split(':')[1]);
EDITOR_ALERT=true;
$('editorSaveToDraft').disabled=false;
//没有修改背景色
$('editorFormBtn').disabled=false;
$('editorFormBtn').value="发布";
$('editorFormBtn').className="input-submit";
}
},
onError: function()
{
XN.DO.showError("系统繁忙，请稍后再试！");
}
})
}function hideInfo() {
XN.cookie.set('homeNtcInf', "0", 10000, "/", 'blog.' + XN.ENV.domain);
if($('info')) $('info').hide();
}
function showInfo() {
if(XN.cookie.get("homeNtcInf") == null) {
if($('info')) $('info').show();
}
}
XN.DOM.readyDo(function(){
showInfo();
});window.onbeforeunload = function() {
var editor = tinyMCE.get('editor');
try{
editor.getRealContent();
}catch( e ){
editor.save();
}
if(EDITOR_ALERT == false ||( $('title').value =='' && $('editor').value ==''))
{
}else{
return '您确定不保存您的日志内容就离开页面吗?';
}
};XN.dom.ready(function() {	
if( $('title') ) XN.form.help($('title')).focus();
});

</script>
  </head>
  
  <body id="blogeditor" class="blogeditor">
    <div id="container">	
<input type="hidden" id="userGuideType" value="true" />
<div id="showNewNav" style="display:none"></div>

<div id="dropmenuHolder" class="dropmenu-holder dropmenu-holder-new rr">
<div id="accountDropDownMenu" class="menu-dropdown" style="display: none">
<div class="menu-dropdown-border">
<div class="account-menu">
<div class="accounts" id="otherAccount" style="display:none"></div>
<div class="optionmenu options">

</div>
<a accesskey="0" href="http://www.xiaowai.com/Logout.do" class="logout">退出</a>
</div>
</div>
</div>


		
<div id="appMenu" class="menu-dropdown" style="display:none;left:-99999px;top:-99999px;">
<div class="menu-dropdown-border">


</div>

</div></div>
<div id="navBar" class="menu-bar rr"><div class="navigation-wrapper">
<div class="navigation navigation-new clearfix"><div id="logo2"><h1><a href="http://www.xiaowai.com" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏"><img alt="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" title="校外网 xiaowai.com - 校外网校外是一个真实的社交网络，联系朋友，一起玩游戏" height="35" width="120" src="index_img/logo.png"/></a></h1></div>										
<div class="nav-body clearfix"><div class="nav-main"> 
<div class="menu"><div class="menu-title"><a stats="Hd_home" accesskey="1" href="XiaoWai_Homepage.jsp">首页<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div id="profileMenuActive" class="menu-title with-drop-menu"><a id="showProfileMenu" accesskey="2" stats="Hd_Profile" href="XiaoWai_PersonalPage.jsp">个人主页<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
<div class="menu"> 
<div class="menu-title with-drop-menu" id="friendMenuActive"><a id="showFriendMenu" accesskey="3" stats="Hd_frd" href="XiaoWai_Friend_Shouye.jsp">好友<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div></div>	
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_Yuehui_Shouye.jsp" accesskey="4" id="showAppMenu">约会<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 	
</div>					
<div class="menu"><div class="menu-title with-drop-menu"><a href="XiaoWai_ErShou_Shouye.jsp" accesskey="4" id="showAppMenu">跳蚤市场<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a> 
</div> 
</div> 
<div class="menu"> 
<div class="menu-title"><a stats="Hd_game" accesskey="5" href="XiaoWai_Store_Shouye.jsp">商家<span>&nbsp;&nbsp;&nbsp;&nbsp;</span></a></div> 
</div> 
						</div> <div class="nav-other">
<div class="menu">
<div class="menu-title" id="searchMenuAction"><a accesskey="7" href="http://browse.xiaowai.com/search.do?_sgrf=navi" onMouseOver="" stats="Hd_sMenu">搜索</a></div>
</div><div id="navSearch">
<form method="post" id="globalSearchForm" action="http://browse.xiaowai.com/searchEx.do?from=opensearch">

<div id="search-input">
<input accesskey="/" stats="Hd_sInput" type="text" size="25" maxlength="100" id="navSearchInput" name="q" class="input-text" value="" tabindex="1" />
</div>
<div id="search-submit">
<a stats="Hd_sBtn" id="navSearchSubmit" class="submit" href="#">搜索</a>
</div>
</form>
</div>
<div class="menu account-action" id="accountMenu">
<div class="menu-title"><a href="javascript:;">退出</a></div>
</div></div>
</div>
</div>
</div>
</div>

<div id="opi" class="page-wrapper clearfix">
<div class="full-page-holder">
<div class="full-page clearfix">
<div id="content">
<div style="margin-bottom: 20px; display: none;" id="info">
<div class="msn-notice clearfix notice">
<a href="#nogo" onClick="hideInfo();return false;"
style="float: right;">关闭</a>
	
</div>
</div>

<div id="oak" class="gray">
&nbsp;&nbsp;<h1><img src="homepage_img/blog.png">&nbsp;发表新日志</h1> <br><br>
<form action="/XiaoWai/MessageSendServlet"
id="editorForm" name="writePassage" method="post">
<div id="single-column" style="position:relative">
<div><div>
<div>
<font size="+1">标题：</font><input type="text" name="title" size="100" style="height:25px; width:550px; " /></div>

</div>



<textarea id="input" name="mypassage" style="width:400px; height:200px"></textarea>

<input type="hidden" name="type" value="2">
<script type="text/javascript">
var instance = new TINY.editor.edit('editor',{
	id:'input',
	width:584,
	height:175,
	cssclass:'te',
	controlclass:'tecontrol',
	rowclass:'teheader',
	dividerclass:'tedivider',
	controls:['bold','italic','underline','strikethrough','|','subscript','superscript','|',
			  'orderedlist','unorderedlist','|','outdent','indent','|','leftalign',
			  'centeralign','rightalign','blockjustify','|','unformat','|','undo','redo','n',
			  'font','size','style','|','image','hr','link','unlink','|','cut','copy','paste','print'],
	footer:true,
	fonts:['Verdana','Arial','Georgia','Trebuchet MS'],
	xhtml:true,
	cssfile:'style.css',
	bodyid:'editor',
	footerclass:'tefooter',
	toggle:{text:'source',activetext:'wysiwyg',cssclass:'toggle'},
	resize:{cssclass:'resize'}
});
function post(){
	instance.post();
}
</script>

<div id="permissionBox" class="permission-box bd"><span class="legend">浏览权限:</span>								
<div class="pre-all pre-block pre-cur">
<label for="blogControl" title="所有人可见的日志将可以被分享">
<input type="radio" name="blogControl" id="blogControl" value="0"
onclick="change(this.value);this.blur();"  checked="checked">
所有人
</label>
<div class="pre-pass-input" >
<span>
所有人可见的日志将能被分享
</span>
</div>
</div>

<div class="pre-fri pre-block">
<label for="blogControl1" title="非所有人可见的日志将不可以被分享">
<input type="radio" name="blogControl" id="blogControl1" value="1"
onclick="change(this.value);this.blur();"  > 
仅好友
</label> 
<div class="pre-pass-input"  style="display:none">
<span>
仅好友可见的日志将不能被分享
</span>
</div>
</div>
<div class="pre-pass pre-block" >
 
<div class="pre-pass-input"  style="display:none">

<input id="passwordProtedted" type="hidden" value="" name="passwordProtedted" />
<span id="password"style="display: none"  >
<input id="Password" name="passWord" class="input-text" maxlength="16" style="width: 100px;" value="" />
<br/>
加密的日志将不能被分享
</span>
</div>
</div>
<div class="pre-me pre-block">
<label for="blogControl3" title="非所有人可见的日志将不可以被分享">
<input type="radio" name="blogControl" id="blogControl3" value="2" onClick="change(this.value);this.blur()"  >
仅自己
</label>  
<div class="pre-pass-input"  style="display:none">
<span>
仅自己可见的日志将不能被分享
</span>

</div>
</div>
<div class="pre-me pre-block">
 
<div class="black-list clearfix" style="display:none" id="blackListContainer"><div id="blackList">
<div id="blackList_selected" class="black-user-list tokenizer" style="margin-bottom:5px;display:none"></div>
<div style="display:none"><a href="#nogo" onClick="blackListToggle()" id="blackListToggle">展开(0)</a></div>
<div class="add-black-user">
<input type="text" maxlength="100" class="input-text" id="blackList_input"/>
<br/>
自定义黑名单的日志将不能被分享
</div> 
</div>

</div>
<input type="hidden" name="editBlogControl" id="editBlogControl" value="99" />
</div>

<input type="hidden" name="postFormId" id="postFormId" value="1511171133" />
<span id="permissionClew" style="color: #888888; display: none;">设置为非所有人可见的内容将不能被分享</span>
</div>
<script type="text/javascript">
function refreshCode() {
var sr = $('blogVerifyPic').src.split("&")[0] + "&rnd="
$('blogVerifyPic').src = sr + Math.random();
}
</script><input type="hidden" value="" id="newLetterId"
name="newLetterId" />


<p class="actions align-left">
<input type="hidden" name="relative_optype" id="relative_optype" />
<input type="submit" value="发布" class="input-submit"
id="editorFormBtn" tabindex="4" onClick="post()" />
<input type="hidden" name="isVip" id="isVip"
value="false" />
<input type="hidden" name="jf_vip_em" id="jf_vip_em"
value="true" />
<input type="reset" class="input-button gray" value="重置"
id="editorSaveToDraft"
onclick="EDITOR_ALERT=false;saveToDraftWithPassWordCheck()" />
</p>
</div>
<div id="blog_releative"><div id="blog-releative">

<div class="added">
<div id="relatives" class="list">
</div>

</div></div>
</div>
</form>
</div>
</div></div>
</div>
</div>
</div>
<div id="footer"><div class="copyright">
<span class="float-right">
<a href="http://www.xiaowai.com/siteinfo/about">关于</a><span class="pipe">|</span><a href="http://dev.xiaowai.com">开放平台</a><span class="pipe">|</span><a href="http://mobile.xiaowai.com/mobilelink.do?psf=40002">手机校外</a><span class="pipe">|</span><a href="http://ads.xiaowai.com">广告</a><span class="pipe">|</span><a href="http://job.xiaowai.com/">招聘</a><span class="pipe">|</span><a href="http://support.xiaowai.com/helpcenter">客服帮助</a><span class="pipe">|</span><a href="">隐私</a>

</span>
<span>北京千橡网景科技发展有限公司：文网文[2009]169号 文化部监督电子邮箱：wlwh@vip.sina.com</span>
<p style="clear:both;margin-top:5px">
<span>校外网<span title="revision51549; SJSWT46-163.opi.com">&copy;</span>2011&nbsp;&nbsp;<a style="color:#808080" href="http://www.miibeian.gov.cn/" target="_blank">京ICP证090254号</a>&nbsp;<span style="color:#808080">京公网安备110000000009号</span>&nbsp;<span style="color:#808080">甲测资字11002066</span></span>
</p>
</div>
</div>
<div class="hidden-area"></div>
<div id="console_log" style="position:absolute;top:0;left:0;"></div>
<!--[if gt IE 7]><!--><link type="text/css" rel="stylesheet" href="" /><!--<![endif]-->
<!--[if IE 6]><link type="text/css" rel="stylesheet" href="http://s.xnimg.cn/a18115/n/core/webpager-ie6-min.css" /><style id="CSSID_9f2766a4"></style><![endif]-->

<!--[if IE 7]><link type="text/css" rel="stylesheet" href="http://s.xnimg.cn/a18115/n/core/webpager-ie7-min.css" /><![endif]--><!--[if gt IE 6]><script>if(window.ActiveXObject&&!window.XMLHttpRequest)XN.disableWebpager=true;</script><![endif]--><iframe id="imengine" name="imengine" src="" frameBorder="0" style="position:absolute;left:-1000pt;top:20pt;width:200pt;height:100pt;"></iframe>
<div id="system-notification-box" style="display:none">
<article id="system-notification" class="system-notification">
<section>
<article class="system-notification-item">
<header>
<img class="icon" width="16" height="16" src="" alt="状态" />
<a class="x-to-hide" href="#"></a>
</header>
<section>
</section>
</article>
</section>
</article>
</div>
<div id="bottombar"></div>

<script type="text/javascript" src="js/beacon.js"></script>
<script type="text/javascript">
COMSCORE.beacon({ c1:2, c2:6934070, c3:"", c4:"", c5:"", c6:"", c15:"" });
</script>




  </body>
</html>
