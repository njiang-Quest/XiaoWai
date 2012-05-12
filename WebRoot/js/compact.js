try{
document.domain=""+XN.env.domain+"";
}
catch(e){
try{
XN={env:{shortSiteName:"\u4eba\u4eba",siteName:"\u4eba\u4eba\u7f51",domain:window.location.hostname.split(".").reverse().slice(0,2).reverse().join(".")}};
document.domain=XN.env.domain;
}
catch(e){
}
}
function __DOMAIN(){
}
var DOMAIN=new __DOMAIN();
DOMAIN.img="http://img."+XN.env.domain+"/";
function getEl(el){
return document.all?document.all[el]:document.getElementById(el);
}
function setElementStyle(id,_3){
getEl(id).className=_3;
}
function check(id,_5,_6){
if(getEl(id).value==""){
alert(_5+"\u4e0d\u80fd\u4e3a\u7a7a");
getEl(id).select();
return false;
}
if(getEl(id).value==_5){
alert(_6);
getEl(id).select();
return false;
}
return true;
}
function hideLayer(_7){
if(_7!=""){
if(document.getElementById){
document.getElementById(_7).style.display="none";
}else{
if(document.all){
document.all[_7].style.display="none";
}else{
if(document.layers){
eval("document."+_7+".display = 'none'");
}
}
}
}
}
function showLayer(_8){
if(_8!=""){
if(document.getElementById){
document.getElementById(_8).style.display="block";
}else{
if(document.all){
document.all[_8].style.display="block";
}else{
if(document.layers){
eval("document."+_8+".display = 'block'");
}
}
}
}
}
function display(id,_a){
var el=document.all?document.all[id]:document.getElementById(id);
if(el){
el.style.display=_a?"":"none";
}
}
function add_comsch(_c){
var i=++getEl("max_com").value;
if(i<6){
if(_c=="com"){
getEl("comName"+i).value="";
getEl("comTitle"+i).value="";
getEl("comStarTime"+i).value="";
getEl("comEndTime"+i).value="";
display("comdiv"+i,true);
}else{
getEl("schName"+i).value="";
display("schdiv"+i,true);
}
}
}
function onReport(_e,_f){
var win;
var bl=confirm("\u672c\u8d34\u542b\u6709\u8fdd\u89c4\u5185\u5bb9\uff0c\u5c06\u5411\u7ad9\u957f\u4e3e\u62a5\u3002\u7ee7\u7eed\uff1f");
var _12="/Report.do?postId=";
_12+=_f;
_12+="&threadId=";
_12+=_e;
if(bl){
win=window.open(_12,"editPost","left=100,top=100,width=550,height=350,status=no,toolbar=no,menubar=no,scrollbars,resizable=yes");
win.focus();
}
return false;
}
function LTrim(str){
var _14=new String(" \t\n\r");
var s=new String(str);
if(_14.indexOf(s.charAt(0))!=-1){
var j=0,i=s.length;
while(j<i&&_14.indexOf(s.charAt(j))!=-1){
j++;
}
s=s.substring(j,i);
}
return s;
}
function RTrim(str){
var _19=new String(" \t\n\r");
var s=new String(str);
if(_19.indexOf(s.charAt(s.length-1))!=-1){
var i=s.length-1;
while(i>=0&&_19.indexOf(s.charAt(i))!=-1){
i--;
}
s=s.substring(0,i+1);
}
return s;
}
function Trim(str){
return RTrim(LTrim(str));
}
function checkISBN(_1d){
return !/(?=.{13}$)\d{1,5}([-])\d{1,7}\1\d{1,6}\1(\d|X|x)/.test(_1d);
}
function checkNum(str){
return !/\D/.test(str);
}
function isValidDate(str){
return /^(\d{1,4})(-|\/)(\d{2})\2(\d{2})$/.test(str);
}
function isEmail(_20){
if(_20.length==0){
alert("\u8bf7\u586b\u5199\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u5426\u5219\u6211\u4eec\u5c06\u65e0\u6cd5\u4e0e\u60a8\u8054\u7cfb\u3002");
return false;
}
var _21=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!_21.test(_20)){
alert("\u62b1\u6b49\uff0c\u7535\u5b50\u90ae\u7bb1\u683c\u5f0f\u4e0d\u5bf9\u6216\u8005\u5305\u542b\u4e0d\u5408\u6cd5\u5b57\u7b26");
return false;
}
return true;
}
function findPosX(obj){
var _23=0;
if(obj.offsetParent){
while(obj.offsetParent){
_23+=obj.offsetLeft;
obj=obj.offsetParent;
}
}else{
if(obj.x){
_23+=obj.x;
}
}
return _23;
}
function findPosY(obj){
var _25=0;
if(obj.offsetParent){
while(obj.offsetParent){
_25+=obj.offsetTop;
obj=obj.offsetParent;
}
}else{
if(obj.y){
_25+=obj.y;
}
}
return _25;
}
function mousePosX(e){
var _27=0;
if(!e){
var e=window.event;
}
if(e.pageX){
_27=e.pageX;
}else{
if(e.clientX&&document.body.scrollLeft){
_27=e.clientX+document.body.scrollLeft;
}else{
if(e.clientX&&document.documentElement.scrollLeft){
_27=e.clientX+document.documentElement.scrollLeft;
}else{
if(e.clientX){
_27=e.clientX;
}
}
}
}
return _27;
}
function mousePosY(e){
var _29=0;
if(!e){
var e=window.event;
}
if(e.pageY){
_29=e.pageY;
}else{
if(e.clientY&&document.body.scrollTop){
_29=e.clientY+document.body.scrollTop;
}else{
if(e.clientY&&document.documentElement.scrollTop){
_29=e.clientY+document.documentElement.scrollTop;
}else{
if(e.clientY){
_29=e.clientY;
}
}
}
}
return _29;
}
function debugOut(_2a){
if($("debugout")){
$("debugout").style.overflow="auto";
$("debugout").innerHTML=_2a+"<br>"+$("debugout").innerHTML;
}
}
function limitLen(str,len,_2d){
if(_2d){
str.replace("/</g","&lt;");
str.replace("/>/g","&gt;");
str.replace("/&/g","&amp;");
str.replace("/#/g","&#35;");
str.replace("/(/g","&#40;");
str.replace("/)/g","&#41;");
str.replace("/\"/g","&#34;");
str.replace("/'/g","&#39;");
}
if(str.length>len){
return false;
}else{
return true;
}
}
function cc(_2e){
var e,r;
if(_2e.srcElement){
e=_2e.srcElement;
r=e.createTextRange();
r.moveStart("character",0);
r.collapse(true);
r.select();
}else{
e=_2e.target;
e.selectionStart=0;
e.selectionEnd=0;
return true;
}
}
function noteme(el){
el.parentNode.nextSibling.className="hey";
}
function dontnoteme(el){
el.parentNode.nextSibling.className="note";
}
var oldload=(window.onload)?window.onload:function(){
};
window.onload=function(){
oldload();
var _33=document.body.id;
str="var regAction; if(typeof("+_33+"_onload) == \"function\") { regAction = "+_33+"_onload} else { regAction = function(){}};";
eval(str);
str="regAction()";
eval(str);
};
window.ow=function(win){
return getEl(win).contentWindow;
};
function GetHTML(_35){
if(typeof (_DEBUG)!="undefined"){
alert("inner GetHTML");
}
if(_35){
return ow(_35).getContent();
}
if(typeof (_DEBUG)!="undefined"){
alert("after getContent");
}
return null;
}
function isEmpty(_36){
if(_36){
return ow(_36).isEmpty();
}
}
function SetHTML(sz,_38){
if(_38){
ow(_38).setHtml(sz);
}
}
function SetFocus(_39){
if(_39){
ow(_39).setFocus();
}
}
function closeInfoWnd(_3a){
try{
div=document.getElementById(_3a);
if(div){
document.body.removeChild(div);
delete div;
div=null;
}
}
catch(E){
}
}
var IM=new Object();
var web5q=0;
function setPos(_3b,_3c,_3d){
alert(1);
alert(_3b);
var _3e=findPosX(getParentNode(_3b));
var _3f=findPosY(getParentNode(_3b));
alert(_3e+":"+_3f);
_3c.style.left=_3e-_3d-80+"px";
_3c.style.top=_3f+20+"px";
}
IM.setPos=function(el,_41){
var _42=findPosX(el);
var _43=findPosY(el);
_41.style.left=_42-20+"px";
_41.style.top=_43+20+"px";
};
function downloadIM(tp){
window.location="http://im."+XN.env.domain+"/setup/XiaoNeiSetup.exe";
closeInfoWnd("ImDownload");
}
IM.getimv=function(){
var _45="";
try{
web5q=web5q||new ActiveXObject("QImWeb.ImWebObj");
_45=web5q.GetImVersion();
}
catch(e){
}
return _45;
};
IM.startIM=function(_46,_47,f){
try{
web5q=web5q||new ActiveXObject("QImWeb.ImWebObj");
if(web5q!=null){
if(f==1){
web5q.Start5QIMNew(_46,_47);
}else{
web5q.Start5QIM(_46,_47);
}
}else{
IM.bigDownload(event,tp);
}
}
catch(e){
}
};
IM.openIM=function(_49,_4a,f,_4c,tp){
try{
web5q=web5q||new ActiveXObject("QImWeb.ImWebObj");
if(web5q!=null){
if(f==1){
web5q.Start5QIMPopupNew(_49,_4a);
}else{
web5q.Start5QIMPopup(_49,_4a);
}
}else{
IM.bigDownload(_4c,tp);
}
}
catch(e){
IM.bigDownload(_4c,tp);
}
};
IM.download=function(){
closeInfoWnd("ImDownload");
var div=document.createElement("div");
div.id="ImDownload";
div.className="popupwrap";
div.style.zIndex="5000";
var _4f="<div class=\"popup\"><h4>\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6216\u672a\u5b89\u88c5\u6821\u5185\u901a</h4><p>\u4e0b\u8f7d\u767b\u5f55\u6821\u5185\u901a\u540e\u5c31\u53ef\u4ee5\u804a\u5929\u4e86:)<br /><a href=\"http://im."+XN.env.domain+"\" target=\"_blank\">\u4e86\u89e3\u6821\u5185\u901a</a></p><p class=\"operation\"><input type=\"button\" value=\"\u7acb\u5373\u4e0b\u8f7d\" class=\"subbutton\" onclick=\"javascript:downloadIM(78);\" /><input type=\"button\" value=\"\u5173\u95ed\" class=\"canbutton\" onclick=\"closeInfoWnd('ImDownload');\" /></p></div>";
div.innerHTML=_4f;
document.body.appendChild(div);
IM.setPos(IM.srcEl,div,300);
div.style.display="block";
};
IM.log=function(gid,uid){
var _52=new Date;
var url="logIM.do";
var _54="c=1&gid="+gid+"&hid="+uid+"&t="+_52.getTime();
var _55=new Ajax.Request(url,{method:"get",parameters:_54});
};
IM.srcEl;
IM.myid;
IM.toid;
IM.em;
function writepipe(uin,_57){
if(uin>0){
var s=GetCookie("_pipe");
if(s){
s+=":";
}
SetCookie("_pipe",s+uin+":"+escape(_57),null,"/",""+XN.env.domain+"");
}
var _59=GetCookie("_wi");
if("opening"==_59){
}else{
if("running"==_59){
}else{
SetCookie("_wi","opening",null,"/",""+XN.env.domain+"");
window.wiw=window.open("http://"+XN.env.domain+"/webpager.do?toid="+uin,"_blank","height=600,width=650,resizable=yes,location=yes");
if(window.wiw_checker){
window.clearInterval(window.wiw_checker);
}
window.wiw_checker=window.setInterval(function(){
if(window.wiw.closed){
window.clearInterval(window.wiw_checker);
SetCookie("_wi","",null,"/",""+XN.env.domain+"");
}
},1000);
return true;
}
}
try{
if(window.wiw){
window.wiw.focus();
}
}
catch(e){
}
return false;
}
function tnx2(_5a,_5b,_5c,em,_5e){
if(IM.getimv()==""){
writepipe(_5c,_5e);
}else{
IM.srcEl=_5a.srcElement;
IM.myid=_5b;
IM.toid=_5c;
IM.em=em;
try{
var _5f=new Ajax.Request("tnx.do",{method:"get",parameters:"v="+IM.getimv(),onComplete:tnxy2,onFailure:tnxn});
}
catch(e){
}
}
}
function tnx(){
try{
var _60=new Ajax.Request("tnx.do",{method:"get",parameters:"v="+IM.getimv(),onComplete:tnxy,onFailure:tnxn});
}
catch(e){
}
}
function tnxy(r){
var p=r.responseText;
IM.startIM(tnxe,p.substring(0,p.length-1),p.substring(p.length-1,p.length));
}
function tnxy2(r){
var p=r.responseText;
if(document.all){
try{
IM.startIM(IM.em,p.substring(0,p.length-1),p.substring(p.length-1,p.length));
}
catch(e){
IM.download();
}
if(IM.toid>0){
try{
web5q.StartChat(IM.myid,IM.toid);
}
catch(e){
}
}
}else{
alert("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u529f\u80fd\uff01");
}
IM.log(IM.toid,IM.myid);
}
function tnxn(t){
}
function getErrorCode(str){
var _67=new Date;
var url="pages/jsError.jsp";
var _69="errorStr="+str+"&t="+_67.getTime();
var _6a=new Ajax.Request(url,{method:"post",parameters:_69,onComplete:getErrorCode_showResponse,onFailure:getErrorCode_showError});
}
function getErrorCode_showResponse(r){
return true;
}
function getErrorCode_showError(t){
}
function getIEVersonNumber(){
var ua=navigator.userAgent;
var _6e=ua.indexOf("MSIE ");
if(_6e<0){
return 0;
}
return parseFloat(ua.substring(_6e+5,ua.indexOf(";",_6e)));
}
function isIE6(){
return (getIEVersonNumber()==6);
}
function GetCookieVal(_6f){
var _70=document.cookie.indexOf(";",_6f);
if(_70==-1){
_70=document.cookie.length;
}
return unescape(document.cookie.substring(_6f,_70));
}
function GetCookie(_71){
var arg=_71+"=";
var _73=arg.length;
var _74=document.cookie.length;
var i=0;
while(i<_74){
var j=i+_73;
if(document.cookie.substring(i,j)==arg){
return GetCookieVal(j);
}
i=document.cookie.indexOf(" ",i)+1;
if(i==0){
break;
}
}
return null;
}
function SetCookie(_77,_78){
var _79=SetCookie.arguments;
var _7a=SetCookie.arguments.length;
var _7b=(_7a>2)?_79[2]:null;
var _7c=(_7a>3)?_79[3]:null;
var _7d=(_7a>4)?_79[4]:null;
var _7e=(_7a>5)?_79[5]:false;
document.cookie=_77+"="+escape(_78)+((_7b==null)?"":("; expires="+_7b.toGMTString()))+((_7c==null)?"":("; path="+_7c))+((_7d==null)?"":("; domain="+_7d))+((_7e==true)?"; secure":"");
}
String.prototype.trim=function(){
return this.replace(/^\s*|\s*$/g,"");
};
function formOnfocus(el){
el.onfocus=function(){
el.style.backgroundColor="#fcfcfc";
};
el.onblur=function(){
el.style.backgroundColor="#fff";
};
}
function upload(id,_81){
if(!id){
document.location.href="http://photo."+XN.env.domain+"/choosealbum.do";
}else{
if(_81>=120){
document.location.href="http://photo."+XN.env.domain+"/choosealbum.do?full=1";
return;
}
var _82=false;
try{
var _83=new ActiveXObject("xnalbum.Uploader");
if(_83){
_82=true;
}
}
catch(e){
}
if(_82&&document.all&&window.ActiveXObject&&navigator.userAgent.toLowerCase().indexOf("msie")>-1&&navigator.userAgent.toLowerCase().indexOf("opera")==-1){
document.location.href="http://photo."+XN.env.domain+"/tophotox.do?id="+id;
}else{
document.location.href="http://upload."+XN.env.domain+"/addphoto.do?id="+id;
}
}
}
window.loaded=true;
function gen_unique(){
return ++gen_unique._counter;
}
gen_unique._counter=0;
function ge(id){
if(typeof (id)=="undefined"){
Util.error("Tried to get an undefined element!");
return null;
}
var obj;
if(typeof (id)=="string"){
obj=document.getElementById(id);
if(!(ua.ie()>=7)){
return obj;
}
if(!obj){
return null;
}else{
if(typeof (obj.id)=="string"&&obj.id==id){
return obj;
}else{
var _86=document.getElementsByName(id);
if(!_86||!_86.length){
return null;
}
var _87=[];
for(var ii=0;ii<_86.length;ii++){
var c=_86[ii];
if(!c.id&&id){
continue;
}
if(typeof (c.id)=="string"&&c.id!=id){
continue;
}
_87.push(_86[ii]);
}
if(_87.length!=1){
Util.error("ge() failed in a bizarre complicated edge case. Check comments.");
return null;
}
return _87[0];
}
}
}else{
return id;
}
return null;
}
function $(){
var el=ge.apply(null,arguments);
if(!el){
Util.warn("Tried to get element %q, but it is not present in the page. (Use ge() "+"to test for the presence of an element.)",arguments[0]);
}
return el;
}
function show(){
for(var i=0;i<arguments.length;i++){
var _8c=ge(arguments[i]);
if(_8c&&_8c.style){
_8c.style.display="";
}
}
return false;
}
function hide(){
for(var i=0;i<arguments.length;i++){
var _8e=ge(arguments[i]);
if(_8e&&_8e.style){
_8e.style.display="none";
}
}
return false;
}
function shown(el){
el=ge(el);
return (el.style.display!="none");
}
function toggle(){
for(var i=0;i<arguments.length;i++){
var _91=$(arguments[i]);
_91.style.display=get_style(_91,"display")=="block"?"none":"block";
}
return false;
}
function is_descendent(_92,_93){
var _94=ge(_93);
if(_92==null){
return;
}
while(_92!=_94){
if(_92.parentNode){
_92=_92.parentNode;
}else{
return false;
}
}
return true;
}
function get_style(_95,_96){
function hyphenate(_97){
return _97.replace(/[A-Z]/g,function(_98){
return "-"+_98.toLowerCase();
});
}
if(window.getComputedStyle){
return window.getComputedStyle(_95,null).getPropertyValue(hyphenate(_96));
}
if(document.defaultView&&document.defaultView.getComputedStyle){
var _99=document.defaultView.getComputedStyle(_95,null);
if(_99){
return _99.getPropertyValue(hyphenate(_96));
}
if(_96=="display"){
return "none";
}
Util.error("Can't retrieve requested style %q due to a bug in Safari",_96);
}
if(_95.currentStyle){
return _95.currentStyle[_96];
}
return _95.style[_96];
}
function close_more_list(){
var _9a=ge("expandable_more");
if(_9a){
_9a.style.display="none";
removeEventBase(document,"click",_9a.offclick,_9a.id);
}
var _9b=ge("ssponsor");
if(_9b){
_9b.style.position="";
}
var _9c=ge("more_link");
if(_9c){
_9c.innerHTML="\u66f4\u591a";
_9c.className="expand_link more_apps";
}
}
function expand_more_list(){
var _9d=ge("expandable_more");
var _9e=ge("more_section");
if(_9e){
remove_css_class_name(_9e,"highlight_more_link");
}
if(_9d){
_9d.style.display="block";
_9d.offclick=function(e){
if(!is_descendent(event_get_target(e),"sidebar_content")){
close_more_list();
}
}.bind(_9d);
addEventBase(document,"click",_9d.offclick,_9d.id);
}
var _a0=ge("ssponsor");
if(_a0){
_a0.style.position="static";
}
var _a1=ge("more_link");
if(_a1){
_a1.innerHTML="\u9690\u85cf";
_a1.className="expand_link less_apps";
}
}
function toggle_more_list(){
var _a2=ge("expandable_more");
if(!_a2){
return false;
}
if(_a2.style.display=="none"){
expand_more_list();
}else{
close_more_list();
}
}
function remove_node(_a3){
if(_a3.removeNode){
_a3.removeNode(true);
}else{
for(var i=_a3.childNodes.length-1;i>=0;i--){
remove_node(_a3.childNodes[i]);
}
_a3.parentNode.removeChild(_a3);
}
return null;
}
function create_hidden_input(_a5,_a6){
var _a7=document.createElement("input");
_a7.name=_a5;
_a7.id=_a5;
_a7.value=_a6;
_a7.type="hidden";
return _a7;
}
function has_css_class_name(_a8,_a9){
return (_a8&&_a9)?new RegExp("\\b"+trim(_a9)+"\\b").test(_a8.className):false;
}
function swap_css_class_name(_aa,_ab,_ac){
for(var i=0;i<_aa.length;i++){
var _ae=ge(_aa[i]);
if(_ae.className.indexOf(_ab)!=-1){
_ae.className=_ae.className.replace(_ab,_ac);
}else{
_ae.className=_ae.className.replace(_ac,_ab);
}
}
}
function add_css_class_name(_af,_b0){
if(_af&&_b0){
if(_af.className){
if(has_css_class_name(_af,_b0)){
return false;
}else{
_af.className+=" "+trim(_b0);
return true;
}
}else{
_af.className=_b0;
return true;
}
}else{
return false;
}
}
function remove_css_class_name(_b1,_b2){
if(_b1&&_b2&&_b1.className){
_b2=trim(_b2);
var old=_b1.className;
_b1.className=_b1.className.replace(new RegExp("\\b"+_b2+"\\b"),"");
return _b1.className!=old;
}else{
return false;
}
}
function toggle_css_class_name(_b4,_b5){
if(has_css_class_name(_b4,_b5)){
remove_css_class_name(_b4,_b5);
}else{
add_css_class_name(_b4,_b5);
}
}
function set_inner_html(obj,_b7){
var _b8="<span style=\"display:none\">&nbsp</span>";
_b7=_b7.replace("<style",_b8+"<style");
_b7=_b7.replace("<STYLE",_b8+"<STYLE");
_b7=_b7.replace("<script",_b8+"<script");
_b7=_b7.replace("<SCRIPT",_b8+"<SCRIPT");
obj.innerHTML=_b7;
eval_inner_js(obj);
addSafariLabelSupport(obj);
}
function eval_inner_js(obj){
var _ba=obj.getElementsByTagName("script");
for(var i=0;i<_ba.length;i++){
if(_ba[i].src){
var _bc=document.createElement("script");
_bc.type="text/javascript";
_bc.src=_ba[i].src;
document.body.appendChild(_bc);
}else{
try{
eval_global(_ba[i].innerHTML);
}
catch(e){
if(typeof console!="undefined"){
console.error(e);
}
}
}
}
}
function eval_global(js){
var obj=document.createElement("script");
obj.type="text/javascript";
try{
obj.innerHTML=js;
}
catch(e){
obj.text=js;
}
document.body.appendChild(obj);
}
var KEYS={BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};
var KeyCodes={Left:63234,Right:63235};
function mouseX(_bf){
return _bf.pageX||(_bf.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));
}
function mouseY(_c0){
return _c0.pageY||(_c0.clientY+(document.documentElement.scrollTop||document.body.scrollTop));
}
function pageScrollX(){
return document.body.scrollLeft||document.documentElement.scrollLeft;
}
function pageScrollY(){
return document.body.scrollTop||document.documentElement.scrollTop;
}
function elementX(obj){
var _c2=obj.offsetLeft;
var op=obj.offsetParent;
while(obj.parentNode&&document.body!=obj.parentNode){
obj=obj.parentNode;
_c2-=obj.scrollLeft;
if(op==obj){
if(ua.safari()<500&&obj.tagName=="TR"){
_c2+=obj.firstChild.offsetLeft;
}else{
_c2+=obj.offsetLeft;
}
op=obj.offsetParent;
}
}
return _c2;
}
function elementY(obj){
var top=obj.offsetTop;
var op=obj.offsetParent;
while(obj.parentNode&&document.body!=obj.parentNode){
obj=obj.parentNode;
top-=obj.scrollTop;
if(op==obj){
if(ua.safari()<500&&obj.tagName=="TR"){
top+=obj.firstChild.offsetTop;
}else{
top+=obj.offsetTop;
}
op=obj.offsetParent;
}
}
return top;
}
function warn_if_unsaved(_c7){
onloadRegister(function(){
var _c8=[];
var _c9=ge(_c7);
var _ca=get_all_form_inputs();
for(var i=0;i<_ca.length;++i){
if(is_button(_ca[i])){
_ca[i].onclick=bind(null,function(old,e){
dont_warn_if_unsaved();
return old&&old(e);
},_ca[i].onclick);
}else{
if(is_descendent(_ca[i],_c9)){
_c8.push({"element":_ca[i],"value":_ca[i].value});
}
}
}
(function(_ce){
onbeforeunloadRegister(function(){
if(!document.unsaved_warning_disabled){
for(var i=0;i<_ce.length;++i){
var _d0=_ce[i].element;
var _d1=_ce[i].value;
if(_d0.value!=_d1){
return "You have unsaved changes.  Continue?";
}
}
}
});
})(_c8);
});
}
function dont_warn_if_unsaved(){
document.unsaved_warning_disabled=true;
}
function get_all_form_inputs(_d2){
var _d3={"input":1,"select":1,"textarea":1,"button":1};
_d2=_d2||document;
var ret=[];
for(var _d5 in _d3){
var _d6=_d2.getElementsByTagName(_d5);
for(var i=0;i<_d6.length;++i){
ret.push(_d6[i]);
}
}
return ret;
}
function serialize_form_helper(_d8,_d9,_da){
var _db=/([^\]]+)\[([^\]]*)\](.*)/.exec(_d9);
if(_db){
_d8[_db[1]]=_d8[_db[1]]||{};
if(_db[2]==""){
var i=0;
while(_d8[_db[1]][i]!=undefined){
i++;
}
}else{
i=_db[2];
}
if(_db[3]==""){
_d8[_db[1]][i]=_da;
}else{
serialize_form_helper(_d8[_db[1]],i.concat(_db[3]),_da);
}
}else{
_d8[_d9]=_da;
}
}
function serialize_form(obj){
var _de={};
var _df=obj.tagName=="FORM"?obj.elements:get_all_form_inputs(obj);
for(var i=_df.length-1;i>=0;i--){
if(_df[i].name&&!_df[i].disabled){
if(!(_df[i].type=="radio"||_df[i].type=="checkbox")||_df[i].checked||(!_df[i].type||_df[i].type=="text"||_df[i].type=="password"||_df[i].type=="hidden"||_df[i].tagName=="TEXTAREA"||_df[i].tagName=="SELECT")){
serialize_form_helper(_de,_df[i].name,_df[i].value);
}
}
}
return _de;
}
function is_button(_e1){
var _e2=_e1.tagName.toUpperCase();
if(_e2=="BUTTON"){
return true;
}
if(_e2=="INPUT"&&_e1.type){
var _e3=_e1.type.toUpperCase();
return _e3=="BUTTON"||_e3=="SUBMIT";
}
return false;
}
function addEventBase(obj,_e5,fn,_e7){
if(obj.addEventListener){
obj.addEventListener(_e5,fn,false);
}else{
if(obj.attachEvent){
obj["e"+_e5+fn+_e7]=fn;
obj[_e5+fn+_e7]=function(){
obj["e"+_e5+fn+_e7](window.event);
};
obj.attachEvent("on"+_e5,obj[_e5+fn+_e7]);
}
}
}
function removeEventBase(obj,_e9,fn,_eb){
if(obj.removeEventListener){
obj.removeEventListener(_e9,fn,false);
}else{
if(obj.detachEvent){
obj.detachEvent("on"+_e9,obj[_e9+fn+_eb]);
obj[_e9+fn+_eb]=null;
obj["e"+_e9+fn+_eb]=null;
}
}
}
function placeholderSetup(id){
var el=ge(id);
if(!el){
return;
}
if(el.type=="search"){
return;
}
var ph=el.getAttribute("placeholder");
if(!ph||ph==""){
return;
}
if(el.value==ph){
el.value="";
}
el.is_focused=(el.value!="");
if(!el.is_focused){
el.value=ph;
el.style.color="#777";
el.is_focused=0;
}
addEventBase(el,"focus",placeholderFocus);
addEventBase(el,"blur",placeholderBlur);
}
function placeholderFocus(){
if(!this.is_focused){
this.is_focused=1;
this.value="";
this.style.color="#000";
var rs=this.getAttribute("radioselect");
if(rs&&rs!=""){
var re=document.getElementById(rs);
if(!re){
return;
}
if(re.type!="radio"){
return;
}
re.checked=true;
}
}
}
function placeholderBlur(){
var ph=this.getAttribute("placeholder");
if(this.is_focused&&ph&&this.value==""){
this.is_focused=0;
this.value=ph;
this.style.color="#777";
}
}
function optional_drop_down_menu(_f2,_f3,_f4,_f5,_f6,_f7){
if(_f4.style.display=="none"){
_f4.style.display="block";
var _f8=_f7?_f7:_f2.className;
if(_f3){
_f3.className="active";
}
_f2.className=_f6?_f6:"global_menu_arrow_active";
var _f9=true;
var _fa=ge(_f4.id+"_iframe");
if(_fa){
_fa.style.top=_f4.style.top;
_fa.style.right=_f4.style.right;
_fa.style.display="block";
_fa.style.width=(_f4.offsetWidth+2)+"px";
_fa.style.height=(_f4.offsetHeight+2)+"px";
}
_f4.offclick=function(e){
if(!_f9){
hide(this);
if(_f3){
_f3.className="";
}
_f2.className=_f8;
var _fc=ge(_f4.id+"_iframe");
if(_fc){
_fc.style.display="none";
_fc.style.width=_f4.offsetWidth+"px";
_fc.style.height=_f4.offsetHeight+"px";
}
removeEventBase(document,"click",this.offclick,_f4.id);
}else{
_f9=false;
}
}.bind(_f4);
addEventBase(document,"click",_f4.offclick,_f4.id);
}
return false;
}
function position_app_switcher(){
var _fd=ge("app_switcher");
var _fe=ge("app_switcher_menu");
_fe.style.top=(_fd.offsetHeight-1)+"px";
_fe.style.right="0px";
}
function addSafariLabelSupport(_ff){
if(ua.safari()<500){
var _100=(_ff||document.body).getElementsByTagName("label");
for(i=0;i<_100.length;i++){
_100[i].addEventListener("click",addLabelAction,true);
}
}
}
function addLabelAction(_101){
var id=this.getAttribute("for");
var item=null;
if(id){
item=document.getElementById(id);
}else{
item=this.getElementsByTagName("input")[0];
}
if(!item||_101.srcElement==item){
return;
}
if(item.type=="checkbox"){
item.checked=!item.checked;
}else{
if(item.type=="radio"){
var _104=document.getElementsByTagName("input");
for(i=0;i<_104.length;i++){
if(_104[i].name==item.name&&_104[i].form==item.form){
_104.checked=false;
}
}
item.checked=true;
}else{
item.focus();
}
}
if(item.onclick){
item.onclick(_101);
}
}
function escapeURI(u){
if(encodeURIComponent){
return encodeURIComponent(u);
}
if(escape){
return escape(u);
}
}
function goURI(href){
window.location.href=href;
}
function is_email(_107){
return /^[\w!.%+]+@[\w]+(?:\.[\w]+)+$/.test(_107);
}
function getViewportWidth(){
var _108=0;
if(document.documentElement&&document.documentElement.clientWidth){
_108=document.documentElement.clientWidth;
}else{
if(document.body&&document.body.clientWidth){
_108=document.body.clientWidth;
}else{
if(window.innerWidth){
_108=window.innerWidth-18;
}
}
}
return _108;
}
function getViewportHeight(){
var _109=0;
if(window.innerHeight){
_109=window.innerHeight-18;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
_109=document.documentElement.clientHeight;
}else{
if(document.body&&document.body.clientHeight){
_109=document.body.clientHeight;
}
}
}
return _109;
}
function getPageScrollHeight(){
var _10a;
if(typeof (window.pageYOffset)=="number"){
_10a=window.pageYOffset;
}else{
if(document.body&&document.body.scrollTop){
_10a=document.body.scrollTop;
}else{
if(document.documentElement&&document.documentElement.scrollTop){
_10a=document.documentElement.scrollTop;
}
}
}
if(isNaN(_10a)){
return 0;
}
return _10a;
}
function getRadioFormValue(obj){
for(i=0;i<obj.length;i++){
if(obj[i].checked){
return obj[i].value;
}
}
return null;
}
function getTableRowShownDisplayProperty(){
if(ua.ie()){
return "inline";
}else{
return "table-row";
}
}
function showTableRow(){
for(var i=0;i<arguments.length;i++){
var _10d=ge(arguments[i]);
if(_10d&&_10d.style){
_10d.style.display=getTableRowShownDisplayProperty();
}
}
return false;
}
function getParentRow(el){
el=ge(el);
while(el.tagName&&el.tagName!="TR"){
el=el.parentNode;
}
return el;
}
function stopPropagation(e){
if(!e){
var e=window.event;
}
e.cancelBubble=true;
if(e.stopPropagation){
e.stopPropagation();
}
}
function show_standard_status(_110){
s=ge("standard_status");
if(s){
var _111=s.firstChild;
_111.innerHTML=_110;
show("standard_status");
}
}
function hide_standard_status(){
s=ge("standard_status");
if(s){
hide("standard_status");
}
}
function remove_node(node){
if(node.removeNode){
node.removeNode(true);
}else{
for(var i=node.childNodes.length-1;i>=0;i--){
remove_node(node.childNodes[i]);
}
node.parentNode.removeChild(node);
}
return null;
}
function adjustImage(obj,_115,max){
var pn=obj.parentNode;
if(_115==null){
_115="note_content";
}
if(max==null){
while(pn.className.indexOf(_115)==-1){
pn=pn.parentNode;
}
if(pn.offsetWidth){
max=pn.offsetWidth;
}else{
max=400;
}
}
if(navigator.userAgent.indexOf("AppleWebKit/4")==-1){
obj.style.position="absolute";
obj.style.left=obj.style.top="-32000px";
}
obj.className=obj.className.replace("img_loading","img_ready");
if(obj.width>max){
if(window.ActiveXObject){
try{
var _118=document.createElement("div");
_118.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\""+obj.src.replace("\"","%22")+"\", sizingMethod=\"scale\")";
_118.style.width=max+"px";
_118.style.height=((max/obj.width)*obj.height)+"px";
if(obj.parentNode.tagName=="A"){
_118.style.cursor="pointer";
}
obj.parentNode.insertBefore(_118,obj);
obj.removeNode(true);
}
catch(e){
obj.style.width=max+"px";
}
}else{
obj.style.width=max+"px";
}
}
obj.style.left=obj.style.top=obj.style.position="";
}
function imageConstrainSize(src,maxX,maxY,_11c){
var _11d=new Image();
_11d.onload=function(){
if(_11d.width>0&&_11d.height>0){
var _11e=_11d.width;
var _11f=_11d.height;
if(_11e>maxX||_11f>maxY){
var _120=maxY/maxX;
var _121=_11f/_11e;
if(_121>_120){
_11e=_11e*(maxY/_11f);
_11f=maxY;
}else{
_11f=_11f*(maxX/_11e);
_11e=maxX;
}
}
var _122=ge(_11c);
var _123=document.createElement("img");
_123.src=src;
_123.width=_11e;
_123.height=_11f;
_122.parentNode.insertBefore(_123,_122);
_122.parentNode.removeChild(_122);
}
};
_11d.src=src;
}
function set_opacity(obj,_125){
try{
obj.style.opacity=(_125==1?"":_125);
obj.style.filter=(_125==1?"":"alpha(opacity="+_125*100+")");
}
catch(e){
}
}
function get_opacity(obj){
var _127=get_style(obj,"filter");
var val=null;
if(_127&&(val=/(\d+(?:\.\d+)?)/.exec(_127))){
return parseFloat(val.pop())/100;
}else{
if(_127=get_style(obj,"opacity")){
return parseFloat(_127);
}else{
return 1;
}
}
}
function get_caret_position(obj){
obj.focus();
if(document.selection){
if(obj.tagName=="INPUT"){
var _12a=document.selection.createRange();
return {start:-_12a.moveStart("character",-obj.value.length),end:-_12a.moveEnd("character",-obj.value.length)};
}else{
if(obj.tagName=="TEXTAREA"){
var _12a=document.selection.createRange();
var _12b=_12a.duplicate();
_12b.moveToElementText(obj);
_12b.setEndPoint("StartToEnd",_12a);
var end=obj.value.length-_12b.text.length;
_12b.setEndPoint("StartToStart",_12a);
return {start:obj.value.length-_12b.text.length,end:end};
}else{
return {start:undefined,end:undefined};
}
}
}else{
return {start:obj.selectionStart,end:obj.selectionEnd};
}
}
function set_caret_position(obj,_12e,end){
if(document.selection){
if(obj.tagName=="TEXTAREA"){
var i=obj.value.indexOf("\r",0);
while(i!=-1&&i<end){
end--;
if(i<_12e){
_12e--;
}
i=obj.value.indexOf("\r",i+1);
}
}
var _131=obj.createTextRange();
_131.collapse(true);
_131.moveStart("character",_12e);
if(end!=undefined){
_131.moveEnd("character",end-_12e);
}
_131.select();
}else{
obj.selectionStart=_12e;
obj.selectionEnd=end==undefined?_12e:end;
obj.focus();
}
}
function focus_login(){
var _132=ge("email");
var pass=ge("pass");
var _134=ge("doquicklogin");
if(_132&&pass){
if(_132.value!=""&&pass.value==""){
pass.focus();
}else{
if(_132.value==""){
_132.focus();
}else{
if(_132.value!=""&&pass.value!=""){
_134.focus();
}
}
}
}
}
function login_form_change(){
var _135=ge("persistent");
if(_135){
_135.checked=false;
}
}
function array_indexOf(arr,val,_138){
if(!_138){
_138=0;
}
for(var i=_138;i<arr.length;i++){
if(arr[i]==val){
return i;
}
}
return -1;
}
var ua={ie:function(){
return this._ie;
},firefox:function(){
return this._firefox;
},opera:function(){
return this._opera;
},safari:function(){
return this._safari;
},windows:function(){
return this._windows;
},osx:function(){
return this._osx;
},populate:function(){
var _13a=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso).(\d+\.\d+))|(?:Opera.(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/.exec(navigator.userAgent);
var os=/(Mac OS X;)|(Windows;)/.exec(navigator.userAgent);
if(_13a){
ua._ie=_13a[1]?parseFloat(_13a[1]):NaN;
ua._firefox=_13a[2]?parseFloat(_13a[2]):NaN;
ua._opera=_13a[3]?parseFloat(_13a[3]):NaN;
ua._safari=_13a[4]?parseFloat(_13a[4]):NaN;
}else{
ua._ie=ua._firefox=ua._opera=ua._safari=NaN;
}
if(os){
ua._osx=!!os[1];
ua._windows=!!os[2];
}else{
ua._osx=ua._windows=false;
}
},adjustBehaviors:function(){
onloadRegister(addSafariLabelSupport);
if(ua.ie()<7){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(ignored){
}
}
}};
var DOM={setText:function(el,text){
if(ua.firefox()){
el.textContent=text;
}else{
el.innerText=text;
}
},getText:function(el){
if(ua.firefox()){
return el.textContent;
}else{
return el.innerText;
}
}};
if(Object.prototype.eval){
window.eval=Object.prototype.eval;
}
delete Object.prototype.eval;
delete Object.prototype.valueOf;
Array.prototype.forEach=null;
Array.prototype.every=null;
Array.prototype.some=null;
Array.prototype.reduce=null;
Array.prototype.reduceRight=null;
Array.prototype.filter=null;
Array.prototype.sort=(function(sort){
return function(_140){
return (this==window)?null:(_140?sort.call(this,function(a,b){
return _140(a,b);
}):sort.call(this));
};
})(Array.prototype.sort);
Array.prototype.reverse=(function(_143){
return function(){
return (this==window)?null:_143.call(this);
};
})(Array.prototype.reverse);
Array.prototype.concat=(function(_144){
return function(){
return (this==window)?null:_144.apply(this,arguments);
};
})(Array.prototype.concat);
Array.prototype.slice=(function(_145){
return function(){
return (this==window)?null:_145.apply(this,arguments);
};
})(Array.prototype.slice);
Function.prototype.extend=function(_146){
var _147=__metaprototype(_146,0);
var _148=__metaprototype(this,_147.prototype.__level+1);
_148.parent=_147;
};
function __metaprototype(obj,_14a){
if(obj.__metaprototype){
return obj.__metaprototype;
}
var _14b=new Function();
_14b.construct=__metaprototype_construct;
_14b.prototype.construct=__metaprototype_wrap(obj,_14a,true);
_14b.prototype.__level=_14a;
_14b.base=obj;
obj.prototype.parent=_14b;
obj.__metaprototype=_14b;
return _14b;
}
function __metaprototype_construct(_14c){
__metaprototype_init(_14c.parent);
var _14d=[];
var obj=_14c;
while(obj.parent){
_14d.push(new_obj=new obj.parent());
new_obj.__instance=_14c;
obj=obj.parent;
}
_14c.parent=_14d[1];
_14d.reverse();
_14d.pop();
_14c.__parents=_14d;
_14c.__instance=_14c;
return _14c.parent.construct.apply(_14c.parent,arguments);
}
var aiert;
if(!aiert){
aiert=alert;
}
function __metaprototype_init(_14f){
if(_14f.initialized){
return;
}
var base=_14f.base.prototype;
if(_14f.parent){
__metaprototype_init(_14f.parent);
var _151=_14f.parent.prototype;
for(i in _151){
if(i!="__level"&&i!="construct"&&base[i]===undefined){
base[i]=_14f.prototype[i]=_151[i];
}
}
}
_14f.initialized=true;
var _152=_14f.prototype.__level;
for(i in base){
if(i!="parent"){
base[i]=_14f.prototype[i]=__metaprototype_wrap(base[i],_152);
}
}
}
function __metaprototype_wrap(_153,_154,_155){
if(typeof _153!="function"||_153.__prototyped){
return _153;
}
var func=function(){
var _157=this.__instance;
if(_157){
var _158=_157.parent;
_157.parent=_154?_157.__parents[_154-1]:null;
if(_155){
var args=[];
for(var i=1;i<arguments.length;i++){
args.push(arguments[i]);
}
var ret=_153.apply(_157,args);
}else{
var ret=_153.apply(_157,arguments);
}
_157.parent=_158;
return ret;
}else{
return _153.apply(this,arguments);
}
};
func.__prototyped=true;
return func;
}
function xdp(_15c){
var _15d="";
var n=20;
for(var _15f in _15c){
try{
_15d+=(_15f+" => "+_15c[_15f]+"\n");
}
catch(exception){
_15d+=(_15f+" => "+exception+"\n");
}
if(!n--){
aiert(_15d);
_15d="";
n=20;
}
}
if(_15d!=""){
aiert(_15d);
}else{
aiert(_15c);
}
}
function adClick(id){
ajax=new XnAjax();
ajax.get("/ajax/redirect.php",{"id":id},true);
return true;
}
function abTest(data,_162){
AsyncRequest.pingURI("/ajax/abtest.php",{data:data,"post_form_id":null},true);
if(!_162){
return true;
}
}
function ac(_163){
AsyncRequest.pingURI("/ajax/ac.php",{"meta":_163},true);
return true;
}
function setCookie(_164,_165,_166){
var _167=new Date();
var _168=new Date();
if(_166==null||_166==0){
_166=1;
}
_168.setTime(_167.getTime()+3600000*24*_166);
document.cookie=_164+"="+escape(_165)+"; expires="+_168.toGMTString()+"; path=/; domain=.facebook.com";
}
function clearCookie(_169){
document.cookie=_169+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=/; domain=.facebook.com";
}
function getCookie(name){
var _16b=name+"=";
var ca=document.cookie.split(";");
for(i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_16b)==0){
return unescape(c.substring(_16b.length,c.length));
}
}
return null;
}
function do_post(url){
var _16f=/(^([^?])+)\??(.*)$/.exec(url);
var form=document.createElement("form");
form.action=_16f[1];
form.method="post";
form.style.display="none";
var _171=/([\w]+)(?:=([^&]+)|&|$)/g;
var _172=null;
if(ge("post_form_id")){
_16f[3]+="&post_form_id="+ge("post_form_id").value;
}
while(_172=_171.exec(_16f[3])){
var _173=document.createElement("input");
_173.type="hidden";
_173.name=_172[1];
_173.value=_172[2];
form.appendChild(_173);
}
document.body.appendChild(form);
form.submit();
return false;
}
function dynamic_post(url,_175){
var form=document.createElement("form");
form.action=url;
form.method="POST";
form.style.display="none";
if(ge("post_form_id")){
_175["post_form_id"]=ge("post_form_id").value;
}
for(var _177 in _175){
var _178=document.createElement("input");
_178.type="hidden";
_178.name=_177;
_178.value=_175[_177];
form.appendChild(_178);
}
document.body.appendChild(form);
form.submit();
return false;
}
function anchor_set(_179){
window.location=window.location.href.split("#")[0]+"#"+_179;
}
function anchor_get(){
return window.location.href.split("#")[1]||null;
}
function event_get(e){
return e||window.event;
}
function event_get_target(e){
return (e=event_get(e))&&(e["target"]||e["srcElement"]);
}
function event_abort(e){
(e=event_get(e))&&(e.cancelBubble=true)&&e.stopPropagation&&e.stopPropagation();
return false;
}
function event_get_keypress_keycode(_17d){
switch(_17d.keyCode){
case 63232:
return 38;
case 63233:
return 40;
case 63234:
return 37;
case 63235:
return 39;
case 63272:
case 63273:
case 63275:
return null;
case 63276:
return 33;
case 63277:
return 34;
}
if(_17d.shiftKey){
switch(_17d.keyCode){
case 33:
case 34:
case 37:
case 38:
case 39:
case 40:
return null;
}
}else{
return _17d.keyCode;
}
}
function env_get(k){
return typeof (window["Env"])!="undefined"&&Env[k];
}
function cavalry_log(_17f){
var _end=new Date();
var _181;
try{
_181=deconcept.SWFObjectUtil.getPlayerVersion();
}
catch(x){
_181={major:0,minor:0,rev:666};
}
(new Image()).src="/common/instrument_endpoint.php?g="+_17f+"&uri="+encodeURIComponent(window.location)+"&d="+(_end.getTime()-Env.start)+"&c="+Env.cache+"&p="+Env.pkgv+"&k="+(document.cookie.length)+"&fmj="+_181.major+"&fmn="+_181.minor+"&frv="+_181.rev+"&"+Math.random();
}
function chain(u,v){
var _184=[];
for(var ii=0;ii<arguments.length;ii++){
_184.push(arguments[ii]);
}
return function(){
for(var ii=0;ii<_184.length;ii++){
if(_184[ii]&&_184[ii].apply(null,arguments)===false){
return false;
}
}
return true;
};
}
function onloadRegister(_187){
window.loaded?_runHook(_187):_addHook("onloadhooks",_187);
}
function onafterloadRegister(_188){
window.loaded?_runHook(_188):_addHook("onafterloadhooks",_188);
}
function onbeforeunloadRegister(_189){
_addHook("onbeforeunloadhooks",_189);
}
function onunloadRegister(_18a){
_addHook("onunloadhooks",_18a);
}
function _onloadHook(){
_runHooks("onloadhooks");
window.loaded=true;
}
function _runHook(_18b){
try{
_18b();
}
catch(ex){
Util.error("Uncaught exception in hook (run after page load): %x",ex);
}
}
function _runHooks(_18c){
var _18d=(_18c=="onbeforeunloadhooks");
var warn=null;
do{
var h=window[_18c];
if(!_18d){
window[_18c]=null;
}
if(!h){
break;
}
for(var ii=0;ii<h.length;ii++){
try{
if(_18d){
warn=warn||h[ii]();
}else{
h[ii]();
}
}
catch(ex){
Util.error("Uncaught exception in hook (%q) #%d: %x",_18c,ii,ex);
}
}
if(_18d){
break;
}
}while(window[_18c]);
if(_18d){
if(warn){
return warn;
}else{
window.exiting=true;
}
}
}
function _addHook(_191,_192){
(window[_191]?window[_191]:(window[_191]=[])).push(_192);
}
function _bootstrapEventHandlers(){
if(document.addEventListener){
if(ua.safari()){
var _193=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
_onloadHook();
clearTimeout(_193);
}
},10);
}else{
document.addEventListener("DOMContentLoaded",_onloadHook,true);
}
}else{
var src="javascript:void(0)";
if(window.location.protocol=="https:"){
src="//:";
}
document.write("<script onreadystatechange=\"if(this.readyState=='loaded' || this.readyState=='complete'){var This = this;if(this.loaded){return;}this.loaded=true;setTimeout(function(){This.parentNode.removeChild(This);_onloadHook();},0);}\" defer=\"defer\" "+"src=\""+src+"\"></script>");
}
window.onload=chain(window.onload,function(){
_onloadHook();
_runHooks("afterloadhooks");
});
window.onbeforeunload=function(){
return _runHooks("onbeforeunloadhooks");
};
window.onunload=chain(window.onunload,function(){
_runHooks("onunloadhooks");
});
}
function iterTraverseDom(root,_196){
var c=root,n=null;
var it=0;
do{
n=c.firstChild;
if(!n){
if(_196(c)==false){
return;
}
n=c.nextSibling;
}
if(!n){
var tmp=c;
do{
n=tmp.parentNode;
if(n==root){
break;
}
if(_196(n)==false){
return;
}
tmp=n;
n=n.nextSibling;
}while(!n);
}
c=n;
}while(c!=root);
}
function prependChild(_19b,elem){
if(_19b.firstChild){
_19b.insertBefore(elem,_19b.firstChild);
}else{
_19b.appendChild(elem);
}
}
ua.populate();
_bootstrapEventHandlers();
ua.adjustBehaviors();
function bind(obj,_19e){
var args=[];
for(var ii=2;ii<arguments.length;ii++){
args.push(arguments[ii]);
}
return function(){
var _obj=obj||this;
var _1a2=args.slice();
for(var jj=0;jj<arguments.length;jj++){
_1a2.push(arguments[jj]);
}
if(typeof (_19e)=="string"){
if(_obj[_19e]){
return _obj[_19e].apply(_obj,_1a2);
}
}else{
return _19e.apply(_obj,_1a2);
}
};
}
Function.prototype.bind=function(_1a4){
var argv=[arguments[0],this];
var argc=arguments.length;
for(var ii=1;ii<argc;ii++){
argv.push(arguments[ii]);
}
return bind.apply(null,argv);
};
function copy_properties(u,v){
for(var k in v){
u[k]=v[k];
}
return u;
}
var Try={these:function(){
var len=arguments.length;
var res;
for(var ii=0;ii<len;ii++){
try{
res=arguments[ii]();
return res;
}
catch(anIgnoredException){
}
}
return res;
}};
var Util={isDevelopmentEnvironment:function(){
return env_get("dev");
},warn:function(){
Util.log(sprintf.apply(null,arguments),"warn");
},error:function(){
Util.log(sprintf.apply(null,arguments),"error");
},log:function(msg,type){
if(Util.isDevelopmentEnvironment()){
if(typeof (window["infoConsole"])!="undefined"){
infoConsole.addEvent(new fbinfoconsole.ConsoleEvent(["js",type],nl2br(msg)));
}else{
if(typeof (console)!="undefined"&&console.error){
console.error(msg);
}else{
if(type!="deprecated"){
aiert(msg);
}
}
}
}else{
if(type=="error"){
msg+="\n\n"+Util.stack();
(typeof (window["debug_rlog"])=="function")&&debug_rlog(msg);
}
}
},deprecated:function(what){
if(!Util._deprecatedThings[what]){
Util._deprecatedThings[what]=true;
var msg=sprintf("Deprecated: %q is deprecated.\n\n%s",what,Util.whyIsThisDeprecated(what));
Util.log(msg,"deprecated");
}
},stack:function(){
try{
try{
({}).llama();
}
catch(e){
if(e.stack){
var _1b2=[];
var _1b3=[];
var _1b4=/^([^@]+)@(.+)$/mg;
var line=_1b4.exec(e.stack);
do{
_1b2.push([line[1],line[2]]);
}while(line=_1b4.exec());
for(var i=0;i<_1b2.length;i++){
_1b3.push("#"+i+" "+_1b2[i][0]+" @ "+(_1b2[i+1]?_1b2[i+1][1]:"?"));
}
return _1b3.join("\n");
}else{
var _1b3=[];
var pos=arguments.callee;
var _1b8=[];
while(pos){
for(var i=0;i<_1b8.length;i++){
if(_1b8[i]==pos){
_1b3.push("#"+_1b3.length+" ** recursion ** @ ?");
return _1b3.join("\n");
}
}
_1b8.push(pos);
var args=[];
for(var i=0;i<pos.arguments.length;i++){
if(pos.arguments[i] instanceof Function){
var func=/function ?([^(]*)/.exec(pos.arguments[i].toString()).pop();
args.push(func?func:"anonymous");
}else{
if(pos.arguments[i] instanceof Array){
args.push("Array");
}else{
if(pos.arguments[i] instanceof Object){
args.push("Object");
}else{
if(typeof pos.arguments[i]=="string"){
args.push("\""+pos.arguments[i].replace(/("|\\)/g,"\\$1")+"\"");
}else{
args.push(pos.arguments[i]);
}
}
}
}
}
_1b3.push("#"+_1b3.length+" "+/function?([^(]*)/.exec(pos).pop()+"("+args.join(", ")+") @ ?");
if(_1b3.length>100){
break;
}
pos=pos.caller;
}
return _1b3.join("\n");
}
}
}
catch(e){
return "No stack trace available";
}
},whyIsThisDeprecated:function(what){
return Util._deprecatedBecause[what.toLowerCase()]||"No additional information is available about this deprecation.";
},_deprecatedBecause:{},_deprecatedThings:{}};
var Configurable={getOption:function(opt){
if(typeof (this.option[opt])=="undefined"){
Util.warn("Failed to get option %q; it does not exist.",opt);
return null;
}
return this.option[opt];
},setOption:function(opt,v){
if(typeof (this.option[opt])=="undefined"){
Util.warn("Failed to set option %q; it does not exist.",opt);
}else{
this.option[opt]=v;
}
return this;
},getOptions:function(){
return this.option;
}};
function Ad(){
}
copy_properties(Ad,{refreshRate:10000,lastRefreshTime:new Date(),refresh:function(){
var _1bf=(new Date().getTime()-Ad.lastRefreshTime.getTime());
if(_1bf>Ad.refreshRate){
var f=Ad.getFrame();
if(f){
if(!f.osrc){
f.osrc=f.src;
}
f.src=f.osrc+"?"+Math.random();
Ad.lastRefreshTime=new Date();
}
}
},getFrame:function(){
return ge("ssponsor")&&ge("ssponsor").getElementsByTagName("iframe")[0];
}});
function URI(uri){
this.parse(uri||"");
}
copy_properties(URI,{expression:/(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,explodeQuery:function(q){
if(!q){
return {};
}
var ii,t,r={};
q=q.split("&");
for(ii=0,l=q.length;ii<l;ii++){
t=q[ii].split("=");
r[decodeURIComponent(t[0])]=(typeof (t[1])=="undefined")?"":decodeURIComponent(t[1]);
}
return r;
},implodeQuery:function(obj,name){
name=name||"";
var r=[];
if(obj instanceof Array){
for(var ii=0;ii<obj.length;ii++){
try{
r.push(URI.implodeQuery(obj[ii],name?name+"["+ii+"]":ii));
}
catch(ignored){
}
}
}else{
if(typeof (obj)=="object"){
for(var k in obj){
try{
r.push(URI.implodeQuery(obj[k],name?name+"["+k+"]":k));
}
catch(ignored){
}
}
}else{
if(name&&name.length){
r.push(encodeURIComponent(name)+"="+encodeURIComponent(obj));
}else{
r.push(encodeURIComponent(obj));
}
}
}
return r.join("&");
}});
copy_properties(URI.prototype,{parse:function(uri){
var m=uri.toString().match(URI.expression);
copy_properties(this,{protocol:m[3]||"",domain:m[4]||"",port:m[6]||"",path:m[7]||"",query:URI.explodeQuery(m[9]||""),fragment:m[11]||""});
return this;
},setProtocol:function(p){
this.protocol=p;
return this;
},getProtocol:function(){
return this.protocol;
},setQueryData:function(o){
this.query=o;
return this;
},addQueryData:function(o){
return this.setQueryData(copy_properties(this.query,o));
},getQueryData:function(){
return this.query;
},setFragment:function(f){
this.fragment=f;
return this;
},getFragment:function(){
return this.fragment;
},setDomain:function(d){
this.domain=d;
return this;
},getDomain:function(){
return this.domain;
},setPort:function(p){
this.port=p;
return this;
},getPort:function(){
return this.port;
},setPath:function(p){
this.path=p;
return this;
},getPath:function(){
return this.path;
},toString:function(){
var r="";
var q=URI.implodeQuery(this.query);
this.protocol&&(r+=this.protocol+"://");
this.domain&&(r+=this.domain);
this.port&&(r+=":"+this.port);
if(this.domain&&!this.path){
r+="/";
}
this.path&&(r+=this.path);
q&&(r+="?"+q);
this.fragment&&(r+="#"+this.fragment);
return r;
},isSameOrigin:function(_1d6){
var uri=_1d6||window.location.href;
if(!(uri instanceof URI)){
uri=new URI(uri.toString());
}
if(this.getProtocol()&&this.getProtocol()!=uri.getProtocol()){
return false;
}
if(this.getDomain()&&this.getDomain()!=uri.getDomain()){
return false;
}
return true;
},coerceToSameOrigin:function(_1d8){
var uri=_1d8||window.location.href;
if(!(uri instanceof URI)){
uri=new URI(uri.toString());
}
if(this.isSameOrigin(uri)){
return true;
}
if(this.getProtocol()!=uri.getProtocol()){
return false;
}
var dst=uri.getDomain().split(".");
var src=this.getDomain().split(".");
if(dst.pop()=="com"&&src.pop()=="com"){
if(dst.pop()=="facebook"&&src.pop()=="facebook"){
this.setDomain(uri.getDomain());
return true;
}
}
return false;
}});
function EventController(_1dc){
copy_properties(this,{queue:[],ready:false,responder:_1dc});
}
copy_properties(EventController.prototype,{startQueue:function(){
this.ready=true;
this.dispatchEvents();
return this;
},pauseQueue:function(){
this.ready=false;
return this;
},addEvent:function(_1dd){
if(_1dd.toLowerCase()!==_1dd){
Util.warn("Event name %q contains uppercase letters; events should be lowercase.",_1dd);
}
var args=[];
for(var ii=1;ii<arguments.length;ii++){
args.push(arguments[ii]);
}
this.queue.push({type:_1dd,args:args});
if(this.ready){
this.dispatchEvents();
}
return event_abort(event_get(arguments[1]));
},dispatchEvents:function(){
if(!this.responder){
Util.error("Event controller attempting to dispatch events with no responder! "+"Provide a responder when constructing the controller.");
}
for(var ii=0;ii<this.queue.length;ii++){
var _1e1="on"+this.queue[ii].type;
if(typeof (this.responder[_1e1])!="function"&&typeof (this.responder[_1e1])!="null"){
Util.warn("Event responder is unable to respond to %q event! Implement a %q "+"method. Note that method names are case sensitive; use lower case "+"when defining events and event handlers.",this.queue[ii].type,_1e1);
}else{
if(this.responder[_1e1]){
this.responder[_1e1].apply(this.responder,this.queue[ii].args);
}
}
}
this.queue=[];
}});
function htmlspecialchars(text){
if(typeof (text)=="undefined"||!text.toString){
return "";
}
if(text===false){
return "0";
}else{
if(text===true){
return "1";
}
}
return text.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escape_js_quotes(text){
if(typeof (text)=="undefined"||!text.toString){
return "";
}
return text.toString().replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,"\\x22").replace(/'/g,"\\'").replace(/</g,"\\x3c").replace(/>/g,"\\x3e").replace(/&/g,"\\x26");
}
function trim(text){
if(typeof (text)=="undefined"||!text.toString){
return "";
}
return text.toString().replace(/^\s*|\s*$/g,"");
}
function nl2br(text){
if(typeof (text)=="undefined"||!text.toString){
return "";
}
return text.toString().replace(/\n/g,"<br />");
}
function sprintf(){
if(arguments.length==0){
Util.warn("sprintf() was called with no arguments; it should be called with at "+"least one argument.");
return "";
}
var args=["This is an argument vector."];
for(var ii=arguments.length-1;ii>0;ii--){
if(typeof (arguments[ii])=="undefined"){
Util.log("You passed an undefined argument (argument "+ii+" to sprintf(). "+"Pattern was: `"+(arguments[0])+"'.","error");
args.push("");
}else{
if(arguments[ii]===null){
args.push("");
}else{
if(arguments[ii]===true){
args.push("true");
}else{
if(arguments[ii]===false){
args.push("false");
}else{
if(!arguments[ii].toString){
Util.log("Argument "+(ii+1)+" to sprintf() does not have a toString() "+"method. The pattern was: `"+(arguments[0])+"'.","error");
return "";
}
args.push(arguments[ii]);
}
}
}
}
}
var _1e8=arguments[0];
_1e8=_1e8.toString().split("%");
var _1e9=_1e8.length;
var _1ea=_1e8[0];
for(var ii=1;ii<_1e9;ii++){
if(args.length==0){
Util.log("Not enough arguments were provide to sprintf(). The pattern was: "+"`"+(arguments[0])+"'.","error");
return "";
}
if(!_1e8[ii].length){
_1ea+="%";
continue;
}
switch(_1e8[ii].substr(0,1)){
case "s":
_1ea+=htmlspecialchars(args.pop().toString());
break;
case "h":
_1ea+=args.pop().toString();
break;
case "d":
_1ea+=parseInt(args.pop());
break;
case "f":
_1ea+=parseFloat(args.pop());
break;
case "q":
_1ea+="`"+htmlspecialchars(args.pop().toString())+"'";
break;
case "e":
_1ea+="'"+escape_js_quotes(args.pop().toString())+"'";
break;
case "L":
var list=args.pop();
for(var ii=0;ii<list.length;ii++){
list[ii]="`"+htmlspecialchars(args.pop().toString())+"'";
}
if(list.length>1){
list[list.length-1]="and "+list[list.length-1];
}
_1ea+=list.join(", ");
break;
case "x":
x=args.pop();
var line="?";
var src="?";
try{
if(typeof (x["line"])!="undefined"){
line=x.line;
}else{
if(typeof (x["lineNumber"])!="undefined"){
line=x.lineNumber;
}
}
if(typeof (x["sourceURL"])!="undefined"){
src=x["sourceURL"];
}else{
if(typeof (x["fileName"])!="undefined"){
src=s["fileName"];
}
}
}
catch(exception){
}
var s="[An Exception]";
try{
s=x.message||x.toString();
}
catch(exception){
}
_1ea+=s+" [at line "+line+" in "+src+"]";
break;
default:
_1ea+="%"+_1e8[ii].substring(0,1);
break;
}
_1ea+=_1e8[ii].substring(1);
}
if(args.length>1){
Util.log("Too many arguments ("+(args.length-1)+" extras) were passed to "+"sprintf(). Pattern was: `"+(arguments[0])+"'.","error");
}
return _1ea;
}
String.prototype._split=String.prototype.split;
String.prototype.split=function(_1ef,_1f0){
var _1f1="";
if(_1ef===null||_1f0===null){
return [];
}else{
if(typeof _1ef=="string"){
return this._split(_1ef,_1f0);
}else{
if(_1ef===undefined){
return [this.toString()];
}else{
if(_1ef instanceof RegExp){
if(!_1ef._2||!_1ef._1){
_1f1=_1ef.toString().replace(/^[\S\s]+\//,"");
if(!_1ef._1){
if(!_1ef.global){
_1ef._1=new RegExp(_1ef.source,"g"+_1f1);
}else{
_1ef._1=1;
}
}
}
separator1=_1ef._1==1?_1ef:_1ef._1;
var _1f2=(_1ef._2?_1ef._2:_1ef._2=new RegExp("^"+separator1.source+"$",_1f1));
if(_1f0===undefined||_1f0<0){
_1f0=false;
}else{
_1f0=Math.floor(_1f0);
if(!_1f0){
return [];
}
}
var _1f3,_1f4=[],_1f5=0,i=0;
while((_1f0?i++<=_1f0:true)&&(_1f3=separator1.exec(this))){
if((_1f3[0].length===0)&&(separator1.lastIndex>_1f3.index)){
separator1.lastIndex--;
}
if(separator1.lastIndex>_1f5){
if(_1f3.length>1){
_1f3[0].replace(_1f2,function(){
for(var j=1;j<arguments.length-2;j++){
if(arguments[j]===undefined){
_1f3[j]=undefined;
}
}
});
}
_1f4=_1f4.concat(this.substring(_1f5,_1f3.index),(_1f3.index===this.length?[]:_1f3.slice(1)));
_1f5=separator1.lastIndex;
}
if(_1f3[0].length===0){
separator1.lastIndex++;
}
}
return (_1f5===this.length)?(separator1.test("")?_1f4:_1f4.concat("")):(_1f0?_1f4:_1f4.concat(this.substring(_1f5)));
}else{
return this._split(_1ef,_1f0);
}
}
}
}
};
Util._deprecatedBecause={extend:"extend() has been renamed copy_properties() to avoid confusion with "+"Function.extend(). Use Function.extend() or subclass() to establish class"+"inheritence, and copy_properties() to copy properties between objects.",ajaxrequest:"AjaxRequest has been renamed AsyncRequest. The interface has not "+"changed.",ajaxresponse:"AjaxResponse has been renamed AsyncResponse. The interface has not "+"changed.",ajax:"The `Ajax' class has been deprecated for sucking. Use AsyncRequest "+"and AsyncResponse to make remote HTTP requests. Prefer JSON to XML as "+"a transport encoding, but never say \"AJAJ\". AND WRITE ERROR HANDLERS! ",ajaxloadindicator:"No ajaxLoadIndicator element is ever generated, so this code is "+"apparently never used.",toggleinlineflyer:"This function is not used anywhere.",checkagree:"This function is marked as deprecated and not used anywhere.",dynamicdialog:"Dynamicdialog is deprecated in favor of dialogpro."};
function extend(u,v){
Util.deprecated("extend");
return copy_properties(u,v);
}
function checkAgree(){
Util.deprecated("checkagree");
if(document.frm.pic.value){
if(document.frm.agree.checked){
document.frm.submit();
}else{
show("error");
}
}
}
function toggleInlineFlyer(_1fa){
Util.deprecated("toggleinlineflyer");
if(_1fa.innerHTML=="hide flyer"){
_1fa.innerHTML="show flyer";
}else{
_1fa.innerHTML="hide flyer";
}
toggle("inline_flyer_content");
}
var ajaxLoadIndicatorRefCount=0;
function ajaxShowLoadIndicator(){
Util.deprecated("ajaxloadindicator");
indicatorDiv=ge("ajaxLoadIndicator");
if(!indicatorDiv){
indicatorDiv=document.createElement("div");
indicatorDiv.id="ajaxLoadIndicator";
indicatorDiv.innerHTML="Loading";
indicatorDiv.className="ajaxLoadIndicator";
document.body.appendChild(indicatorDiv);
}
indicatorDiv.style.top=(5+pageScrollY())+"px";
indicatorDiv.style.left=(5+pageScrollX())+"px";
indicatorDiv.style.display="block";
ajaxLoadIndicatorRefCount++;
}
function ajaxHideLoadIndicator(){
ajaxLoadIndicatorRefCount--;
if(ajaxLoadIndicatorRefCount==0){
ge("ajaxLoadIndicator").style.display="";
}
}
function XnAjax(_1fb,_1fc){
if(location.href.indexOf("intern/data")==-1){
Util.deprecated("ajax");
}
newAjax=this;
this.onDone=_1fb;
this.onFail=_1fc;
this.transport=this.getTransport();
this.transport.onreadystatechange=ajaxTrampoline(this);
}
XnAjax.prototype.get=function(uri,_1fe,_1ff){
_1ff=_1ff||false;
if(_1fe&&(typeof _1fe!="string")){
_1fe=URI.implodeQuery(_1fe);
}
fullURI=uri+(_1fe?("?"+_1fe):"");
this.transport.open("GET",fullURI,!_1ff);
this.transport.send("");
};
XnAjax.prototype.post=function(uri,data,_202,_203){
_202=_202||false;
_203=_203||false;
if(data&&(typeof data!="string")){
data=URI.implodeQuery(data);
}
if(!_203){
var _204=ge("post_form_id");
if(_204){
data+="&post_form_id="+_204.value;
}
}
this.transport.open("POST",uri,!_202);
this.transport.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
this.transport.send(data);
};
XnAjax.prototype.stateDispatch=function(){
try{
if(this.transport.readyState==1&&this.showLoad){
ajaxShowLoadIndicator();
}
if(this.transport.readyState==4){
if(this.showLoad){
ajaxHideLoadIndicator();
}
if(this.transport.status>=200&&this.transport.status<300&&this.transport.responseText.length>0){
try{
if(this.onDone){
this.onDone(this,this.transport.responseText);
}
}
catch(tempError){
console?console.error(tempError):false;
}
}else{
try{
if(this.onFail){
this.onFail(this);
}
}
catch(tempError){
console?console.error(tempError):false;
}
}
}
}
catch(error){
if(this.onFail){
this.onFail(this);
}
}
};
XnAjax.prototype.getTransport=function(){
var ajax=null;
try{
ajax=new XMLHttpRequest();
}
catch(e){
ajax=null;
}
try{
if(!ajax){
ajax=new ActiveXObject("Msxml2.XMLHTTP");
}
}
catch(e){
ajax=null;
}
try{
if(!ajax){
ajax=new ActiveXObject("Microsoft.XMLHTTP");
}
}
catch(e){
ajax=null;
}
return ajax;
};
function ajaxTrampoline(_206){
return function(){
_206.stateDispatch();
};
}
function toggle_dynamic_dialog_custom(_207,_208){
Util.deprecated("dynamicdialog");
var _209;
_209="<div id=\"ie_iframe_holder\"></div>";
_209+="<div style=\"position: absolute; z-index: 100;\">";
_208=_209+_208+"</div>";
var _20a=ge("dynamic_dialog");
if(_20a){
if(shown(_20a)&&same_place(_207,_20a)){
hide(_20a);
}else{
move_here(_207,_20a);
_20a.innerHTML=_208;
show("dynamic_dialog");
}
}else{
var _20a=document.createElement("div");
_20a.id="dynamic_dialog";
_20a.innerHTML=_208;
move_here(_207,_20a);
ge("content").appendChild(_20a);
}
var _20b,_20c,_20d;
_20b=ge("dialog").offsetHeight;
_20c=ge("dialog").offsetWidth;
_20d="<iframe width=\""+_20c+" \"height="+_20b+"\" ";
_20d+="style=\"position: absolute; z-index: 99; border: none;\"></iframe>";
ge("ie_iframe_holder").innerHTML=_20d;
return false;
}
function same_place(_20e,_20f){
Util.deprecated("dynamicdialog");
if(_20e=ge(_20e)){
if(elementY(_20e)+20==elementY(_20f)){
return true;
}
}
return false;
}
function move_here(_210,el){
Util.deprecated("dynamicdialog");
var x=getViewportWidth()/2-120;
var y=elementY(_210)+20;
el.style.left=x+"px";
el.style.top=y+"px";
}
function toggle_dynamic_dialog_post(_214,_215,_216,_217,_218,_219){
Util.deprecated("dynamicdialog");
var _21a=(ge("post_form_id")?("<input type=\"hidden\" name=\"post_form_id\" value=\""+ge("post_form_id").value+"\"/>"):"");
var _21b="";
for(var _21c in _219){
_21b+="<input type=\"hidden\" name=\""+_21c+"\" value=\""+_219[_21c]+"\"/>";
}
var _21d="<table id=\"dialog\" border=\"0\" cellspacing=\"0\" width=\"360\">"+"<tr>"+"<td class=\"dialog\">"+"<h4>"+_215+"</h4>"+"<p>"+_216+"</p>"+"<div class=\"buttons\">"+"<form action=\""+_218+"\" method=\"post\">"+_21a+_21b+"<input type=\"hidden\" name=\"next\" value=\""+window.location+"\"/>"+"<input type=\"submit\" id=\"confirm\" name=\"confirm\" class=\"inputsubmit\" "+"value=\""+_217+"\"/>&nbsp;<input type=\"button\" id=\"cancel\" "+"name=\"cancel\" onclick=\"hide('dynamic_dialog');\" class=\"inputbutton\" "+"value=\"Cancel\" />"+"</form>"+"</div>"+"</td>"+"</tr>"+"</table>";
return toggle_dynamic_dialog_custom(_214,_21d);
}
function toggle_dynamic_dialog(_21e,_21f,_220,_221,_222){
Util.deprecated("dynamicdialog");
var _223=(ge("post_form_id")?("<input type=\"hidden\" name=\"post_form_id\" value=\""+ge("post_form_id").value+"\"/>"):"");
var _224="<form action=\""+_222+"\" method=\"post\">\n"+"<table id=\"dialog\" border=\"0\" cellspacing=\"0\" width=\"360\">"+"<tr>\n"+"<td class=\"dialog\">\n"+"<h4>"+_21f+"</h4>\n"+"<p>"+_220+"</p>"+"<div class=\"buttons\">\n"+_223+"<input type=\"hidden\" name=\"next\" value=\""+window.location+"\"/>\n"+"<input type=\"submit\" id=\"confirm\" name=\"confirm\" class=\"inputsubmit\" value=\""+_221+"\"/>&nbsp;<input type=\"button\" id=\"cancel\" name=\"cancel\" onclick=\"hide('dynamic_dialog');\" class=\"inputbutton\" value=\"Cancel\" />\n"+"</div>\n"+"</td>\n"+"</tr>\n"+"</table>\n"+"</form>\n";
return toggle_dynamic_dialog_custom(_21e,_224);
}
function toggle_dynamic_dialog_js(_225,_226,_227,_228,_229,_22a){
Util.deprecated("dynamicdialog");
var _22b="<table id=\"dialog\" border=\"0\" cellspacing=\"0\" width=\"360\">"+"<tr>\n"+"<td class=\"dialog\">\n"+"<h4>"+_226+"</h4>\n"+"<p>"+_227+"</p>"+"<div class=\"buttons\">\n"+"<input type=\"button\" id=\"confirm\" name=\"confirm\" class=\"inputsubmit\"  value=\""+_228+"\" onclick=\""+_229+"\"/>&nbsp;";
if(!_22a){
_22b+="<input type=\"button\" id=\"cancel\" name=\"cancel\" onclick=\"hide('dynamic_dialog');\" class=\"inputbutton\" value=\"Cancel\" />\n";
}
_22b+="</div>\n"+"</td>\n"+"</tr>\n"+"</table>\n";
return toggle_dynamic_dialog_custom(_225,_22b);
}
var MAX_APP_LIST_END=275;
var MAX_SIDENAV_LINKS=7;
var MOVING_THRESHOLD=10;
var saved_message=null;
function track_moveable(_22c,_22d){
_22d.ondrag=function(e){
event.cancelBubble=true;
return false;
}.bind(this);
this.listContainer=_22c;
this.link=_22d;
this.listContainer.onmousedown=function(e){
return this._onclick(e?e:window.event);
}.bind(this);
}
track_moveable.prototype._onclick=function(e){
this.clickMouseY=mouseY(e);
document.onselectstart=function(e){
return false;
};
document.onmousemove=function(e){
return this._track_move(e?e:window.event);
}.bind(this);
document.onmouseup=function(e){
this._track_drop(e?e:window.event);
}.bind(this);
return false;
};
track_moveable.prototype._track_move=function(e){
if(Math.abs(mouseY(e)-this.clickMouseY)>MOVING_THRESHOLD){
var _235=new moveable_app(this.listContainer,this.link);
_235._onclick(null,this.clickMouseY);
}
};
track_moveable.prototype._track_drop=function(e){
document.onmouseout=document.onmouseup=document.onmousemove=document.onclick=null;
this.link.onclick=function(e){
return true;
};
};
function moveable_app(_238,_239){
this.listContainer=_238;
this.link=_239;
this.listContainer.onmousedown=function(e){
return this._onclick(e?e:window.event);
}.bind(this);
}
moveable_app.prototype._onclick=function(e,_23c){
add_css_class_name(this.listContainer,"floating_container");
var _23d=ge("app_list");
this.listContainer.lowerBoundY=elementY(_23d.firstChild?_23d.firstChild:_23d);
this.oldListID=this.listContainer.parentNode.parentNode.id;
this.justOpened=false;
var _23e=ge("app_non_nav_list");
this.listContainer.upperBoundY=elementY(_23e.lastChild?_23e.lastChild:_23e);
var _23f=(ua.ie()||ua.safari())?this.listContainer.offsetHeight:this.listContainer.offsetHeight+1;
this.listContainer.parentNode.style.height=(_23f)+"px";
this.listContainer.top=elementY(this.listContainer);
_23c=_23c?_23c:mouseY(e);
this.mouseOffset=_23c-this.listContainer.top;
this.listContainer.style.top=this.listContainer.top+"px";
document.onmousemove=function(e){
return this._move(e?e:window.event);
}.bind(this);
document.onmouseup=function(e){
this._drop(e?e:window.event);
}.bind(this);
this._calculateBoundaries();
return false;
};
moveable_app.prototype._calculateBoundaries=function(){
var list=this.listContainer.parentNode.parentNode;
var _243=this.listContainer.parentNode.previousSibling;
this.listContainer.prevList=null;
this.listContainer.previousNodeY=null;
if(_243){
this.listContainer.previousNodeY=elementY(_243)+7;
this.newList=false;
}else{
if(list.id=="app_non_nav_list"){
this.listContainer.prevList=ge("app_list");
var _244=null;
if(this.listContainer.prevList.lastChild){
_244=this.listContainer.prevList.lastChild;
}else{
_244=this.listContainer.prevList;
}
this.newList=true;
this.listContainer.previousNodeY=elementY(_244)+20;
}
}
var _245=this.listContainer.parentNode.nextSibling;
this.listContainer.nextList=null;
this.listContainer.nextNodeY=null;
if(_245){
this.listContainer.nextNodeY=elementY(_245)-7;
this.newList=false;
}else{
if(list.id=="app_list"){
this.listContainer.nextList=ge("app_non_nav_list");
var _244=null;
this.newList=true;
if(this.listContainer.nextList.parentNode.style.display=="none"){
this.justOpened=true;
this.listContainer.nextNodeY=elementY(ge("more_link"))-18;
}else{
if(this.listContainer.nextList.firstChild){
_244=this.listContainer.nextList.firstChild;
}else{
_244=this.listContainer.nextList;
}
this.listContainer.nextNodeY=elementY(_244)-20;
}
}
}
};
moveable_app.prototype._move=function(e){
this.listContainer.top=mouseY(e)-this.mouseOffset;
var _247=this.listContainer.parentNode;
if(this.listContainer.nextNodeY&&this.listContainer.top>this.listContainer.nextNodeY){
if(this.listContainer.nextList==null){
var _248=_247.nextSibling;
_248.appendChild(this.listContainer);
_247.style.height=null;
_247.appendChild(_248.firstChild);
}else{
if(this.newList){
expand_more_list();
var _248=document.createElement("div");
_248.className="list_item";
this.listContainer.nextList.insertBefore(_248,this.listContainer.nextList.firstChild);
_248.appendChild(this.listContainer);
_247.parentNode.removeChild(_247);
}
}
}else{
if(this.listContainer.previousNodeY&&this.listContainer.top<this.listContainer.previousNodeY){
if(this.listContainer.prevList==null){
var _248=_247.previousSibling;
_248.appendChild(this.listContainer);
_247.style.height=null;
_247.appendChild(_248.firstChild);
}else{
var _248=document.createElement("div");
_248.className="list_item";
this.listContainer.prevList.appendChild(_248);
_248.appendChild(this.listContainer);
_247.parentNode.removeChild(_247);
}
}
}
if(this.listContainer.parentNode!=_247){
_247.style.height=null;
this.listContainer.parentNode.style.height=(this.listContainer.offsetHeight+1)+"px";
this._calculateBoundaries();
}
if((is_first_child(this.listContainer.parentNode,"app_list")&&this.listContainer.top<elementY(this.listContainer.parentNode))||(is_last_child(this.listContainer.parentNode,"app_non_nav_list")&&this.listContainer.top>elementY(this.listContainer.parentNode))){
this.listContainer.style.top=(elementY(this.listContainer.parentNode)-1)+"px";
}else{
this.listContainer.style.top=this.listContainer.top+"px";
}
return false;
};
function is_first_child(elem,_24a){
return (elem.parentNode.id==_24a)&&(elem.parentNode.firstChild==elem);
}
function is_last_child(elem,_24c){
return (elem.parentNode.id==_24c)&&(elem.parentNode.lastChild==elem);
}
function onload_side_nav_check(){
enforce_app_list_limits_and_save(false,"onload_side_nav");
}
function enforce_app_list_limits_and_save(_24d,_24e){
var _24f="";
var _250=ge("app_list");
var _251=ge("app_non_nav_list");
var _252="";
var _253=false;
var _254=0;
var _255=ge("rearrange_message");
if(_255){
_254=_255.offsetHeight+6;
}
var _256=MAX_APP_LIST_END+elementY(ge("sidebar"))+_254;
while(elementY(_250)+_250.offsetHeight>_256||_250.childNodes.length>MAX_SIDENAV_LINKS){
if(_251.firstChild){
_251.insertBefore(_250.lastChild,_251.firstChild);
}else{
_251.appendChild(_250.lastChild);
}
_253=true;
}
if(_253||_24d){
for(var i=0;i<_250.childNodes.length;i++){
if(i!=0){
_24f+=":";
}
try{
_24f+=_250.childNodes[i].firstChild.id;
}
catch(e){
}
}
for(var i=0;i<_251.childNodes.length;i++){
if(i!=0){
_252+=":";
}
try{
_252+=_251.childNodes[i].firstChild.id;
}
catch(e){
}
}
var ajax=new XnAjax(function(obj,text){
eval(text);
});
var _25b={"display_list":_24f,"more_list":_252,"context":_24e};
ajax.post("/savemenu.do",_25b);
}
}
moveable_app.prototype._drop=function(e){
remove_css_class_name(this.listContainer,"floating_container");
this.listContainer.style.top=null;
this.listContainer.parentNode.style.height=null;
enforce_app_list_limits_and_save(true,"rearrange_order");
if(this.listContainer.parentNode.parentNode.id!="app_non_nav_list"&&this.justOpened){
window.setTimeout("close_more_list()",500);
}
document.onmouseout=document.onmouseup=document.onmousemove=document.onclick=null;
if(this.link){
this.link.onclick=function(e){
return false;
};
}
return false;
};
function change_status_message(_25e,_25f){
var _260=ge("rearrange_message");
_260.className=_25e;
_260.innerHTML=_25f;
}
function change_to_apps_menu(_261){
var _262=_261.firstChild;
var _263=_262.firstChild;
_263.setAttribute("onclick","move_lists(this.parentNode.parentNode, 'app_non_nav_list', change_to_non_menu, true); return false;");
_263.setAttribute("class","action_item");
_263.innerHTML="remove";
var _264=document.createElement("div");
_264.setAttribute("class","handle");
_264.setAttribute("onmousedown","new moveable_app(this.parentNode);");
_262.insertBefore(_264,_262.firstChild.nextSibling);
}
function change_to_non_menu(_265){
var _266=_265.firstChild;
var _267=_266.firstChild;
var _268=_266.firstChild.nextSibling;
_266.removeChild(_268);
_267.setAttribute("onclick","move_lists(this.parentNode.parentNode, 'app_list', change_to_apps_menu); return false;");
_267.setAttribute("class","action_item_add");
_267.innerHTML="add to menu";
}
function move_lists(obj,_26a,_26b,_26c){
to_list_obj=ge(_26a);
if(_26b){
_26b(obj);
}
if(_26c){
to_list_obj.insertBefore(obj,to_list_obj.firstChild);
}else{
to_list_obj.appendChild(obj);
}
}
var apps_menu_timout_id;
function try_expand(obj){
if(obj.innerHTML=="\u66f4\u591a"){
apps_menu_timout_id=window.setTimeout("expand_more_list()",500);
}else{
}
}
function untry_expand(){
window.clearTimeout(apps_menu_timout_id);
}
function generic_dialog(_26e,_26f){
this.className=_26e;
this.content=null;
this.obj=null;
this.popup=null;
this.overlay=null;
this.modal=null;
this.iframe=null;
this.hidden_objects=[];
if(_26f==true){
this.modal=true;
}
}
generic_dialog.dialog_stack=null;
generic_dialog.prototype.should_hide_objects=ua.osx();
generic_dialog.prototype.should_use_iframe=ua.ie()<7||(ua.osx()&&ua.firefox());
generic_dialog.prototype.show_dialog=function(html){
if(!this.obj){
this.build_dialog();
}
set_inner_html(this.content,html);
if(generic_dialog.prototype.should_hide_objects){
var imgs=this.content.getElementsByTagName("img");
for(var i=0;i<imgs.length;i++){
imgs[i].onload=imgs[i].onload?function(){
this.onload.apply(this.img,arguments);
this.dialog.hide_objects();
}.bind({img:imgs[i],dialog:this,onload:imgs[i].onload}):this.hide_objects.bind(this);
}
}
this.show();
this.focus_first_textbox();
this.on_show_callback&&this.on_show_callback();
return this;
};
generic_dialog.prototype.focus_first_textbox=function(){
function focus_textbox(node){
var _274=(node.tagName=="INPUT"&&node.type.toLowerCase()=="text")||(node.tagName=="TEXTAREA");
if(_274){
try{
node.focus();
return false;
}
catch(e){
}
}
return true;
}
iterTraverseDom(this.content,focus_textbox);
};
generic_dialog.prototype.set_top=function(top){
return this;
};
generic_dialog.prototype.make_modal=function(){
if(this.modal){
return;
}
this.modal=true;
if(ua.ie()==7){
this.build_iframe();
}
this.build_overlay();
this.reset_iframe();
};
generic_dialog.prototype.show_loading=function(_276){
return this.show_dialog("<div id=\"structs\" class=\"share_composer share_status_post\"><div class=\"loading\"><p>"+_276+"</p></div></div>");
};
generic_dialog.prototype.show_ajax_dialog_custom_loader=function(html,src,_279){
_279=_279||false;
this.show_loading(html);
var _27a=this;
var ajax=new XnAjax(function(obj,text){
_27a.show_dialog(text);
});
if(_279){
ajax.post(src,_279);
}else{
ajax.get(src);
}
return this;
};
generic_dialog.prototype.show_ajax_dialog=function(src,_27f){
_27f=_27f||false;
var load="\u8f7d\u5165\u4e2d...";
return this.show_ajax_dialog_custom_loader(load,src,_27f);
};
generic_dialog.prototype.show_prompt=function(_281,_282){
return this.show_dialog("<h2><span>"+_281+"</span></h2><div class=\"dialog_content\">"+_282+"</div>");
};
generic_dialog.prototype.show_message=function(_283,_284,_285){
if(_285==null){
_285="Okay";
}
return this.show_choice(_283,_284,_285,function(){
generic_dialog.get_dialog(this).fade_out(100);
});
};
generic_dialog.prototype.show_choice=function(_286,_287,_288,_289,_28a,_28b,_28c,_28d,_28e){
var _28f="<div class=\"dialog_buttons\" id=\"dialog_buttons\">";
if(typeof (_28c)!="undefined"){
_28f+="<div class=\"dialog_buttons_left_msg\">";
_28f+=_28c;
_28f+="</div>";
}
_28f+="<input class=\"inputsubmit\" type=\"button\" value=\""+_288+"\" id=\"dialog_button1\" />";
if(_28a){
_28f+="<input class=\"inputsubmit\" type=\"button\" value=\""+_28a+"\" id=\"dialog_button2\" />";
}
if(_28d){
_28f+="<input class=\"inputsubmit\" type=\"button\" value=\""+_28d+"\" id=\"dialog_button3\" />";
}
this.show_prompt(_286,this.content_to_markup(_287)+_28f);
var _290=this.obj.getElementsByTagName("input");
if(_28d){
button1obj=_290[_290.length-3];
button2obj=_290[_290.length-2];
button3obj=_290[_290.length-1];
}else{
if(_28a){
button1obj=_290[_290.length-2];
button2obj=_290[_290.length-1];
}else{
button1obj=_290[_290.length-1];
}
}
if(_289&&_288){
if(typeof _289=="string"){
eval("button1js = function(){"+_289+"}");
}
button1obj.onclick=_289;
}
if(_28b&&_28a){
if(typeof _28b=="string"){
eval("button2js = function(){"+_28b+"}");
}
button2obj.onclick=_28b;
}
if(_28e&&_28d){
if(typeof _28e=="string"){
eval("button3js = function(){"+_28e+"}");
}
button3obj.onclick=_28e;
}
if(!this.modal){
document.onkeyup=function(e){
var _292=(e&&e.which)?e.which:event.keyCode;
var _293=(typeof button2obj!="undefined");
var _294=(typeof button3obj!="undefined");
var _295=ua.safari();
if(_295&&_292==13){
button1obj.click();
}
if(_292==27){
if(_294){
button3obj.click();
}else{
if(_293){
button2obj.click();
}else{
button1obj.click();
}
}
}
document.onkeyup=function(){
};
};
button1obj.focus();
}
return this;
};
generic_dialog.prototype.show_choice_ajax=function(_296,_297,_298,_299,_29a,_29b,_29c,_29d,_29e){
this.show_loading("Loading...");
var _29f=function(_2a0){
this.show_choice(_296,_2a0.getPayload(),_298,_299,_29a,_29b,_29c,_29d,_29e);
}.bind(this);
new AsyncRequest().setURI(_297).setHandler(_29f).send();
return this;
};
generic_dialog.prototype.show_form_ajax=function(_2a1,src,_2a3,_2a4){
this.show_loading("Loading...");
var _2a5="dialog_ajax_form__"+gen_unique();
var _2a6=function(_2a7,_2a8){
if(_2a8.getError()!=true){
_2a7.hide();
ErrorDialog.showAsyncError(_2a8);
}else{
_2a7.show_choice(_2a1,_2a8.getPayload(),"Okay",function(){
_2a7.fade_out(200);
});
}
}.bind(null,this);
var _2a9=function(_2aa,_2ab){
var _2ac="<form id=\""+_2a5+"\" onsubmit=\"return false;\">"+_2ab.getPayload()+"</form>";
_2aa.show_choice(_2a1,_2ac,_2a3,submitHandler,"Cancel",function(){
_2aa.fade_out(200);
});
}.bind(null,this);
var _2ad=function(){
new AsyncRequest().setURI(src).setData(serialize_form(ge(_2a5))).setHandler(_2ae).setErrorHandler(_2af).send();
};
var _2ae=function(_2b0,_2b1){
_2b0.show_choice(_2a1,_2b1.getPayload(),"Okay",function(){
_2b0.fade_out(200);
});
if(_2a4){
window.location.reload();
}else{
setTimeout(function(){
_2b0.fade_out(500);
},750);
}
}.bind(null,this);
var _2af=function(_2b2,_2b3){
if(_2b3.getError()==1346001){
_2a9(_2b3);
}else{
if(_2b3.getError()!=true){
ErrorDialog.showAsyncError(_2b3);
}else{
_2a6(_2b3);
}
}
}.bind(null,this);
new AsyncRequest().setURI(src).setReadOnly(true).setHandler(_2a9).setErrorHandler(_2a6).send();
return this;
};
generic_dialog.prototype.show_form=function(_2b4,_2b5,_2b6,_2b7){
_2b5="<form action=\""+_2b7+"\" method=\"post\">"+this.content_to_markup(_2b5);
var _2b8=ge("post_form_id");
if(_2b8){
_2b5+="<input type=\"hidden\" name=\"post_form_id\" value=\""+_2b8.value+"\" />";
}
_2b5+="<div class=\"dialog_buttons\"><input class=\"inputsubmit\" name=\"confirm\" type=\"submit\" value=\""+_2b6+"\" />";
_2b5+="<input type=\"hidden\" name=\"next\" value=\""+htmlspecialchars(document.location.href)+"\"/>";
_2b5+="<input class=\"inputsubmit\" type=\"button\" value=\"Cancel\" onclick=\"generic_dialog.get_dialog(this).fade_out(100)\" /></form>";
this.show_prompt(_2b4,_2b5);
return this;
};
generic_dialog.prototype.content_to_markup=function(_2b9){
return (typeof _2b9=="string")?"<div class=\"dialog_body\">"+_2b9+"</div>":"<div class=\"dialog_summary\">"+_2b9.summary+"</div><div class=\"dialog_body\">"+_2b9.body+"</div>";
};
generic_dialog.prototype.hide=function(_2ba){
if(this.obj){
this.obj.style.display="none";
}
if(this.iframe){
this.iframe.style.display="none";
}
if(this.overlay){
this.overlay.style.display="none";
}
if(this.timeout){
clearTimeout(this.timeout);
this.timeout=null;
return;
}
if(this.hidden_objects.length){
for(var i=0,il=this.hidden_objects.length;i<il;i++){
this.hidden_objects[i].style.visibility="";
}
this.hidden_objects=[];
}
clearInterval(this.active_hiding);
if(!_2ba){
if(generic_dialog.dialog_stack){
var _2bd=generic_dialog.dialog_stack;
for(var i=_2bd.length-1;i>=0;i--){
if(_2bd[i]==this){
_2bd.splice(i,1);
}
}
if(_2bd.length){
_2bd[_2bd.length-1].show();
}
}
if(this.obj){
this.obj.parentNode.removeChild(this.obj);
this.obj=null;
}
}
return this;
};
generic_dialog.prototype.fade_out=function(_2be,_2bf){
if(!this.popup){
return this;
}
animation(this.obj).duration(_2bf?_2bf:0).checkpoint().to("opacity",0).hide().duration(_2be?_2be:350).ondone(this.hide.bind(this)).go();
return this;
};
generic_dialog.prototype.show=function(){
if(this.obj&&this.obj.style.display){
this.obj.style.visibility="hidden";
this.obj.style.display="";
this.reset_dialog();
this.obj.style.visibility="";
this.obj.dialog=this;
}else{
this.reset_dialog();
}
this.hide_objects();
clearInterval(this.active_hiding);
this.active_hiding=setInterval(this.active_resize.bind(this),500);
var _2c0=generic_dialog.dialog_stack?generic_dialog.dialog_stack:generic_dialog.dialog_stack=[];
for(var i=_2c0.length-1;i>=0;i--){
if(_2c0[i]==this){
_2c0.splice(i,1);
}else{
_2c0[i].hide(true);
}
}
_2c0.push(this);
return this;
};
generic_dialog.prototype.enable_buttons=function(_2c2){
var _2c3=this.obj.getElementsByTagName("input");
for(var i=0;i<_2c3.length;i++){
if(_2c3[i].type=="button"||_2c3[i].type=="submit"){
_2c3[i].disabled=!_2c2;
}
}
};
generic_dialog.prototype.active_resize=function(){
if(this.last_offset_height!=this.content.offsetHeight){
this.hide_objects();
this.last_offset_height=this.content.offsetHeight;
}
};
generic_dialog.prototype.hide_objects=function(){
var _2c5=[];
var _2c6=["",0,1,2,4,5,9,3];
for(var i=0;i<_2c6.length;i++){
var _2c8=ge("ad_"+_2c6[i]);
if(_2c8!=null){
_2c5.push(_2c8);
this.should_hide_objects=true;
}
}
if(!this.should_hide_objects){
return;
}
var rect={x:elementX(this.content),y:elementY(this.content),w:this.content.offsetWidth,h:this.content.offsetHeight};
var _2ca=document.getElementsByTagName("iframe");
for(var i=0;i<_2ca.length;i++){
if(_2ca[i].className.indexOf("share_hide_on_dialog")!=-1){
_2c5.push(_2ca[i]);
}
}
var swfs=document.getElementsByTagName("embed");
for(var i=0;i<swfs.length;i++){
_2c5.push(swfs[i]);
}
for(var i=0;i<_2c5.length;i++){
var node=_2c5[i].offsetHeight?_2c5[i]:_2c5[i].parentNode;
swf_rect={x:elementX(node),y:elementY(node),w:node.offsetWidth,h:node.offsetHeight};
if(!is_descendent(_2c5[i],this.content)&&rect.y+rect.h>swf_rect.y&&swf_rect.y+swf_rect.h>rect.y&&rect.x+rect.w>swf_rect.x&&swf_rect.x+swf_rect.w>rect.w&&array_indexOf(this.hidden_objects,node)==-1){
this.hidden_objects.push(node);
node.style.visibility="hidden";
node.style.visibility="hidden";
}
}
};
generic_dialog.prototype.build_dialog=function(){
if(!this.obj){
this.obj=document.createElement("div");
}
this.obj.className="generic_dialog"+(this.className?" "+this.className:"");
this.obj.style.display="none";
onloadRegister(function(){
document.body.appendChild(this.obj);
}.bind(this));
if(this.should_use_iframe||(this.modal&&ua.ie()==7)){
this.build_iframe();
}
if(!this.popup){
this.popup=document.createElement("div");
this.popup.className="generic_dialog_popup";
}
this.popup.style.left=this.popup.style.top="";
this.obj.appendChild(this.popup);
if(this.modal){
this.build_overlay();
}
};
generic_dialog.prototype.build_iframe=function(){
if(!this.iframe&&!(this.iframe=ge("generic_dialog_iframe"))){
this.iframe=document.createElement("iframe");
this.iframe.id="generic_dialog_iframe";
}
this.iframe.frameBorder="0";
onloadRegister(function(){
document.body.appendChild(this.iframe);
}.bind(this));
};
generic_dialog.prototype.build_overlay=function(){
this.overlay=document.createElement("div");
this.overlay.id="generic_dialog_overlay";
if(document.body.clientHeight>document.documentElement.clientHeight){
this.overlay.style.height=document.body.clientHeight+"px";
}else{
this.overlay.style.height=document.documentElement.clientHeight+"px";
}
onloadRegister(function(){
document.body.appendChild(this.overlay);
}.bind(this));
};
generic_dialog.prototype.reset_dialog=function(){
if(!this.popup){
return;
}
onloadRegister(function(){
this.reset_dialog_obj();
this.reset_iframe();
}.bind(this));
};
generic_dialog.prototype.reset_iframe=function(){
if(!this.should_use_iframe&&!(this.modal&&ua.ie()==7)){
return;
}
if(this.modal){
this.iframe.style.left="0px";
this.iframe.style.top="0px";
this.iframe.style.width="100%";
if((document.body.clientHeight>document.documentElement.clientHeight)&&(document.body.clientHeight<10000)){
this.iframe.style.height=document.body.clientHeight+"px";
}else{
if((document.body.clientHeight<document.documentElement.clientHeight)&&(document.documentElement.clientHeight<10000)){
this.iframe.style.height=document.documentElement.clientHeight+"px";
}else{
this.iframe.style.height="10000px";
}
}
}else{
this.iframe.style.left=elementX(this.frame)+"px";
this.iframe.style.top=elementY(this.frame)+"px";
this.iframe.style.width=this.frame.offsetWidth+"px";
this.iframe.style.height=this.frame.offsetHeight+"px";
}
this.iframe.style.display="";
};
generic_dialog.prototype.reset_dialog_obj=function(){
};
generic_dialog.prototype.set_width=function(w){
this.obj.style.width=w?w+"px":"";
};
generic_dialog.get_dialog=function(obj){
while(!obj.dialog&&obj.parentNode){
obj=obj.parentNode;
}
return obj.dialog?obj.dialog:false;
};
function pop_dialog(_2cf,_2d0,_2d1){
this.top=125;
this.parent.construct(this,_2cf,_2d1);
this.on_show_callback=_2d0;
}
pop_dialog.extend(generic_dialog);
pop_dialog.prototype.build_dialog=function(){
this.parent.build_dialog();
this.obj.className+=" pop_dialog";
this.popup.innerHTML="<table id=\"pop_dialog_table\" class=\"pop_dialog_table\">"+"<tr><td class=\"pop_topleft\"></td><td class=\"pop_border\"></td><td class=\"pop_topright\"></td></tr>"+"<tr><td class=\"pop_border\"></td><td class=\"pop_content\" id=\"pop_content\"></td><td class=\"pop_border\"></td></tr>"+"<tr><td class=\"pop_bottomleft\"></td><td class=\"pop_border\"></td><td class=\"pop_bottomright\"></td></tr>"+"</table>";
this.frame=this.popup.getElementsByTagName("tbody")[0];
this.content=this.popup.getElementsByTagName("td")[4];
};
pop_dialog.prototype.reset_dialog_obj=function(){
this.popup.style.top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+this.top+"px";
};
pop_dialog.prototype.set_top=function(top){
this.top=top;
};
function contextual_dialog(_2d3){
this.parent.construct(this,_2d3);
}
contextual_dialog.extend(generic_dialog);
contextual_dialog.prototype.set_context=function(obj){
this.context=obj;
return this;
};
contextual_dialog.prototype.build_dialog=function(){
this.parent.build_dialog();
this.obj.className+=" contextual_dialog";
this.popup.innerHTML="<div class=\"contextual_arrow\"><span>^_^keke1</span></div><div class=\"contextual_dialog_content\"></div>";
this.arrow=this.popup.getElementsByTagName("div")[0];
this.content=this.frame=this.popup.getElementsByTagName("div")[1];
};
contextual_dialog.prototype.reset_dialog_obj=function(){
var x=elementX(this.context);
var _2d6=(document.body.offsetWidth-this.popup.offsetWidth)/2;
if(x<document.body.offsetWidth/2){
this.arrow.className="contextual_arrow_rev";
var left=Math.min(_2d6,x+this.context.offsetWidth-this.arrow_padding_x);
var _2d8=x-left+this.context.offsetWidth+this.arrow_padding_x;
}else{
this.arrow.className="contextual_arrow";
var left=Math.max(_2d6,x-this.popup.offsetWidth+this.arrow_padding_x);
var _2d8=x-left-this.arrow_padding_x-this.arrow_width;
}
this.popup.style.top=(elementY(this.context)+this.context.offsetHeight-this.arrow.offsetHeight+this.arrow_padding_y)+"px";
this.popup.style.left=left+"px";
this.arrow.style.backgroundPosition=_2d8+"px";
};
contextual_dialog.prototype._remove_resize_events=function(){
if(this._scroll_events){
for(var i=0;i<this._scroll_events.length;i++){
removeEventBase(this._scroll_events[i].obj,this._scroll_events[i].event,this._scroll_events[i].func);
}
}
this._scroll_events=[];
};
contextual_dialog.prototype.show=function(){
this._remove_resize_events();
var obj=this.context;
while(obj){
if(obj.id!="content"&&(obj.scrollHeight&&obj.offsetHeight&&obj.scrollHeight!=obj.offsetHeight)||(obj.scrollWidth&&obj.offsetWidth&&obj.scrollWidth!=obj.offsetWidth)){
var evt={obj:obj,event:"scroll",func:this.reset_dialog_obj.bind(this)};
addEventBase(evt.obj,evt.event,evt.func);
}
obj=obj.parentNode;
}
var evt={obj:window,event:"resize",func:this.reset_dialog_obj.bind(this)};
addEventBase(evt.obj,evt.event,evt.func);
this.parent.show();
};
contextual_dialog.prototype.hide=function(){
this._remove_resize_events();
this.parent.hide();
};
contextual_dialog.prototype.arrow_padding_x=5;
contextual_dialog.prototype.arrow_padding_y=10;
contextual_dialog.prototype.arrow_width=13;
function ErrorDialog(){
this.parent.construct(this,"errorDialog",null,true);
return this;
}
ErrorDialog.extend(pop_dialog);
copy_properties(ErrorDialog.prototype,{showError:function(_2dc,_2dd){
return this.show_message(_2dc,_2dd);
}});
copy_properties(ErrorDialog,{showAsyncError:function(_2de){
try{
return (new ErrorDialog()).showError(_2de.getErrorSummary(),_2de.getErrorDescription());
}
catch(ex){
aiert(_2de);
}
}});

