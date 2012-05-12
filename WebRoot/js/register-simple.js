var nU=navigator.userAgent,nA=navigator.appVersion;
var Env={IE:!!(window.attachEvent&&!window.opera),IE7:nA.indexOf("MSIE 7")!=-1,IE6:nA.indexOf("MSIE 6")!=-1,Opera:!!window.opera,Safari:nU.indexOf(" AppleWebKit/")!=-1,KHTML:(/Konqueror|Safari|KHTML/).test(nU),Gecko:nU.indexOf("Gecko")!=-1&&!nU.indexOf("KHTML")!=-1};
nU=nA=null;
function extend(d,s){
for(p in s){
if(s[p]!==null){
d[p]=(typeof (s[p])=="object"&&!(s[p].nodeType)&&!(s[p] instanceof Array))?extend({},s[p]):s[p];
}
}
return d;
}
var forEach=function(_3,fn){
if(!_3){
return;
}
var _5=(_3[0]&&_3[0].nodeName&&_3[0].nodeType==1)?true:false;
if(_3 instanceof Array||_3 instanceof Function||_5){
for(var i=0;i<_3.length;i++){
fn.call(_3,_3[i],i);
}
}else{
if(typeof (_3)=="string"){
for(var i=0;i<_3.length;i++){
fn.call(_3,_3.charAt(i),i);
}
}else{
if(typeof (_3)=="object"){
for(var i in _3){
if(typeof Object.prototype[i]=="undefined"&&typeof Element.prototype[i]=="undefined"){
fn.call(_3,_3[i],i);
}
}
}
}
}
_5=null;
};
extend(Function.prototype,{bind:function(_7){
var fn=this;
return function(){
return fn.apply(_7,arguments);
};
},listen:function(_9){
var fn=this;
return function(_b){
fn.call(_9,_b||window.event);
};
}});
extend(String.prototype,{camelCase:function(){
return this.replace(/-\D/gi,function(_c){
return _c.charAt(_c.length-1).toUpperCase();
});
},trim:function(){
return this.replace(/^(\s|\r|\n|\r\n)*|(\s|\r|\n|\r\n)*$/g,"");
},tranColor:function(){
var _d=this;
var _e=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/i;
while(m=_e.exec(_d)){
var s="#";
for(i=1;i<=3;i++){
var _s=(m[i]-0).toString(16);
s+=(m[i]<16)?("0"+_s):_s;
}
_d=_d.replace(_e,s);
}
return _d;
}});
extend(Array.prototype,{indexOf:function(obj){
for(var i=0;i<this.length;i++){
if(this[i]==obj){
return i;
}
}
return -1;
},has:function(obj){
return this.indexOf(obj)!==-1;
},each:function(fn,obj){
for(var i=0;i<this.length;i++){
fn.call(obj,this[i],i);
}
}});
if(typeof Array.prototype.push=="undefined"){
extend(Array.prototype,{push:function(obj){
this[this.length]=obj;
}});
}
var Event={target:function(e){
return e.target||e.srcElement;
},stop:function(e){
try{
e.preventDefault();
e.stopPropagation();
}
catch(er){
e.returnValue=false;
e.cancelBubble=true;
}
}};
var Element=function(el,arg,doc){
doc=doc?doc:document;
var _1d=arguments[1]||{};
if(typeof (el)=="string"){
el=reg_gel(doc.createElement(el));
if(_1d.style){
el.setStyle(_1d.style);
_1d.style=null;
}
extend(el,_1d);
}
return el;
};
Element.prototype={clean:function(){
for(var i=0;i<this.childNodes.length;i++){
var _1f=this.childNodes[i];
if(_1f.nodeType==3&&/\s/.test(_1f.nodeValue)){
this.removeChild(_1f);
}
}
return this;
},addEvent:function(_20,fn){
fn=fn.listen(this);
var el=this;
Unload.listeners.push([el,_20,fn]);
if(this.addEventListener){
if(_20.toLowerCase()=="onmousewheel"){
_20="DOMMouseScroll";
}
this.addEventListener(_20,fn,false);
}else{
if(this.attachEvent){
this.attachEvent("on"+_20,fn);
}
}
return this;
},addEvents:function(arg){
for(var i in arg){
this.addEvent(i,arg[i]);
}
return this;
},addClass:function(_25){
if(_25&&!this.hasClass(_25)){
this.className+=(this.className?" ":"")+_25;
}
return this;
},hasClass:function(_26){
return this.allClass().has(_26);
},allClass:function(){
return this.className.trim().split(/\s+/);
},dropClass:function(_27){
var _28=this.allClass();
if(_27&&_28.has(_27)){
_28.splice(_28.indexOf(_27),1);
}
this.className=_28.join(" ");
return this;
},dropEvent:function(_29,fn){
if(this.removeEventListener){
this.removeEventListener(_29,fn,false);
}else{
if(this.detachEvent){
this.detachEvent("on"+_29,fn);
}
}
return this;
},within:function(x,y){
var o=this.getOffset(),s=this.getSize();
return (y>=o[1]&&y<=o[1]+s[1]&&x>=o[0]&&x<=o[0]+s[0]);
},getOffset:function(_2f){
var el=this,_31=[0,0];
do{
_31[0]+=el.offsetLeft||0;
_31[1]+=el.offsetTop||0;
el=reg_gel(el.offsetParent);
if(!_2f&&el){
p=el.getStyle("position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(el);
el=null;
return _31;
},setStyle:function(_32){
var _33;
for(var _34 in _32){
_33=_32[_34];
if(_34.toLowerCase().trim()=="opacity"){
this.setOpacity(_33);
}else{
if(_33!==""&&!isNaN(_33)){
_33+="px";
}
}
try{
this.style[_34.camelCase()]=_33;
}
catch(e){
}
}
return this;
},getStyle:function(_35){
var _36=_35.camelCase();
var _37=this.style[_36];
if((typeof _37=="undefined"||_37=="")){
if(document.defaultView){
_37=document.defaultView.getComputedStyle(this,null).getPropertyValue(_35);
if(Env.Opera&&(_35=="width"||_35=="height")){
_37="";
}
}else{
if(this.currentStyle){
_37=this.currentStyle[_36];
}
}
if(["margin","padding"].has(_36)&&_37==""){
return [this.getStyle(_36+"-top")||0,this.getStyle(_36+"-right")||0,this.getStyle(_36+"-bottom")||0,this.getStyle(_36+"-left")||0].join(" ");
}
}
if(typeof _37=="undefined"){
_37="";
}
return _37.toString().tranColor();
},setOpacity:function(_38){
_38=parseFloat(_38);
if(Env.IE){
this.style.filter=(_38>=1)?"":"alpha(opacity="+_38*100+")";
}else{
this.style.opacity=this.style["MozOpacity"]=_38;
}
return this;
},getSize:function(){
if(this.style.display.toLowerCase()!=="none"){
return [this.offsetWidth,this.offsetHeight];
}
var oV=this.style.visibility,oP=this.style.position;
this.setStyle({visibility:"hidden",position:"absolute",display:"block"});
var _3b=[this.offsetWidth,this.offsetHeight];
this.setStyle({visibility:oV,position:oP,display:"none"});
return _3b;
}};
extend(document,Element.prototype);
extend(document,{getScroll:function(){
return [document.body.scrollLeft||document.documentElement.scrollLeft||window.pageXOffset||0,document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0];
}});
function reg_gel(el,doc){
doc=doc?doc:document;
if(typeof (el)=="string"){
el=doc.getElementById(el);
}
if(el&&((el.nodeName&&el.nodeType==1)||el.nodeType==9)){
if(Unload.elements.has(el)){
return el;
}
if(typeof el.addEvent=="undefined"){
extend(el,Element.prototype);
}
Unload.elements.push(el);
return el;
}
return false;
}
function $s(_3e,att,doc){
this.options=extend({tag:"*",parent:document,nested:true},_3e||{});
this.att=att||{};
if(typeof this.att.id!=="undefined"){
return reg_gel(this.att.id);
}
var tag=this.options.tag?this.options.tag.toLowerCase():"*";
if(!this.options.parent||!this.options.parent.nodeType){
this.options.parent=doc?doc:document;
}
var _42=[];
var els=this.options.nested?this.options.parent.getElementsByTagName(tag):this.options.parent.childNodes;
Outer:
for(var i=0;i<els.length;i++){
if(!this.options.nested&&(els[i].nodeName.toLowerCase()!==tag||els[i].nodeType!==1)){
continue;
}
for(var att in this.att){
var _45=att;
att=att.toLowerCase();
if(att==="for"){
_45="htmlFor";
}
if(!(att=="class"&&els[i].className.trim().split(/\s+/).has(this.att[att]))&&els[i][_45]!==this.att[att]){
continue Outer;
}
}
_42.push(reg_gel(els[i]));
}
return _42;
}
var Load=[];
var Unload={events:[],elements:[],listeners:[],functions:[],unload:function(){
var i;
for(i=0;i<Unload.functions.length;i++){
Unload.functions[i]();
}
for(i=0;i<Unload.listeners.length;i++){
var el=Unload.listeners[i][0];
var _48=Unload.listeners[i][1];
var fn=Unload.listeners[i][2];
if(el.dropEvent){
el.dropEvent(_48,fn);
}
Unload.listeners[i][0]=null;
Unload.listeners[i][2]=null;
}
el=null;
fn=null;
for(i=0;i<Unload.elements.length;i++){
Unload.elements[i]=null;
}
Unload=null;
for(i=0;i<Load.length;i++){
Load[i]=null;
}
Load=null;
}};
window.addEvent=Element.prototype.addEvent;
window.addEvent("unload",Unload.unload);
var X=function(n){
this.options=extend({method:"post",url:null,vars:{},timeOut:60000,evalScripts:false,onStart:null,onLoad:null,onFail:null,onTimeout:null},arguments[0]||{});
this.options.method=this.options.method.toLowerCase();
["Start","Load","Fail","Timeout"].each(function(v,i){
if(this.options["on"+v]){
this["on"+v]=this.options["on"+v];
}
},this);
this.reset().setVars(this.options.vars);
return this;
};
X.prototype={reset:function(){
clearTimeout(this.timer);
this.loading=false;
this.data="";
this.vars={};
return this;
},getXmlHttp:function(){
if(window.XMLHttpRequest){
return new XMLHttpRequest();
}else{
if(window.ActiveXObject){
var a=["Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP.1.0","Microsoft.XMLHTTP.1","Microsoft.XMLHTTP"];
for(var i=0;i<a.length;i++){
try{
return new ActiveXObject(a[i]);
}
catch(e){
}
}
}
}
return false;
},setVars:function(_4f){
var _50=this.vars,t;
if(_4f){
forEach(_4f,function(v,k){
if(v instanceof Array){
t=[];
v.each(function(vv){
t.push(encodeURIComponent(vv));
});
}else{
t=encodeURIComponent(v);
}
_50[encodeURIComponent(k.trim())]=t;
});
}
this.vars=_50;
return this;
},getData:function(){
var _55=[];
forEach(this.vars,function(v,k){
if(k!==""){
if(v instanceof Array){
v.each(function(vv){
_55.push(k+"="+vv);
});
}else{
_55.push(k+"="+v);
}
}
});
this.data=_55.join("&");
return this;
},initProxy:function(_59){
try{
document.domain=window.location.hostname.split(".").reverse().slice(0,2).reverse().join(".");
}
catch(e){
}
var _5a="http://"+_59+"/ajaxproxy.htm";
if(!this.proxyIFrame){
this.proxyIFrame=new Element("IFRAME",{src:"about:blank",style:{display:"none"}});
this.proxyIFrame.addEvent("load",this.proxyIFrameLoaded.bind(this));
document.body.insertBefore(this.proxyIFrame,document.body.childNodes[0]);
this.proxyIFrame.src=_5a;
}else{
this.proxyIFrameLoaded();
}
},proxyIFrameLoaded:function(){
this.xmlhttp=this.proxyIFrame.contentWindow.getTransport();
this.send();
},getUrlDomain:function(url){
var a=new Element("a");
a.href=url;
return a.hostname.toLowerCase();
},send:function(url){
if(this.loading){
return;
}
if(url){
this.options.url=url;
}
var _5e=document.domain.toLowerCase(),_5f=this.getUrlDomain(url);
if(_5e!==_5f){
if(!this.xmlhttp){
this.initProxy(_5f);
return;
}
}else{
if(!this.xmlhttp){
this.xmlhttp=this.getXmlHttp();
}
}
if(this.xmlhttp){
this.loading=true;
this.onStart();
var _60=this;
this.xmlhttp.onreadystatechange=function(){
if(_60.xmlhttp.readyState==4){
_60.response=_60.xmlhttp.responseText;
if(_60.options.evalScripts){
_60.evalScripts(_60.response);
}
_60.status=_60.xmlhttp.status;
_60.reset().onLoad();
_60.xmlhttp.onreadystatechange=function(){
};
_60.xmlhttp=null;
_60=null;
}
};
}else{
this.onFail();
return this;
}
this.setVars({"rndval":new Date().getTime()}).getData();
if(this.options.method=="get"){
this.xmlhttp.open("get",this.options.url+"?"+this.data,true);
}else{
this.xmlhttp.open("post",this.options.url,true);
this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(this.xmlhttp.overrideMimeType){
this.xmlhttp.setRequestHeader("Connection","close");
}
}
this.xmlhttp.send(this.data);
this.timer=setTimeout(this.onTimeout.bind(this),this.options.timeOut);
return this;
},abort:function(){
if(this.loading){
this.xmlhttp.abort();
}
},evalScripts:function(_61){
if(scripts=_61.match(/<script[^>]*?>[\S\s]*?<\/script>/g)){
forEach(scripts,function(_62){
try{
eval(_62.replace(/^<script[^>]*?>/,"").replace(/<\/script>$/,""));
}
catch(e){
}
});
}
},getJSON:function(){
if(this.response!==""){
try{
return eval("("+this.response+")");
}
catch(e){
}
}
return false;
},onStart:function(){
},onLoad:function(){
},onFail:function(){
},onTimeout:function(){
}};
var AutoComplete=function(el){
this.el=reg_gel(el);
this.el.autocomplete="off";
this.options=extend({url:null,form:null,mode:"request"},arguments[1]||{});
if(this.options.form){
this.options.form=reg_gel(this.options.form);
}
this.panel=new Element("ul",{"className":"autocomplete_panel","style":{"border":"1px solid #ccc","background":"#f5f5f5","padding":"1px","margin":"0","list-style":"none","position":"absolute","display":"none"}});
var _64=document.body;
_el=_64.childNodes[0];
_64.insertBefore(this.panel,_el);
this.el.addEvents({"keydown":this.keydown.bind(this),"keyup":this.keyup.bind(this),"blur":this.hidePanelBlur.bind(this)});
document.addEvent("mousedown",this.hidePanel.bind(this));
window.addEvent("blur",this.hidePanel.bind(this));
this.items=[];
this.show=false;
};
AutoComplete.prototype={keydown:function(e){
if(e.keyCode==13){
Event.stop(e);
return false;
}
},keyup:function(e){
if(this.move(e.keyCode,e)===false){
this.update();
Event.stop(e);
}
},move:function(_67,e){
if(this.el.value.trim()===""){
return;
}
if(_67==27){
this.hidePanel();
}else{
if(_67==38){
this._move(-1);
}else{
if(_67==13){
this[(this.show===true)?"hidePanel":"showPanel"]();
}else{
if(_67==40){
this._move(1);
}else{
return false;
}
}
}
}
return true;
},_move:function(_69){
var c,l=this.items.length;
if(!this.show){
this.panel.style.display="block";
this.show=true;
return this._move(_69);
}
if(typeof (this.currentItemIndex)=="undefined"){
this.currentItemIndex=-1;
}
c=this.currentItemIndex+_69;
if(c<-1){
c=l-1;
}
if(this.items[this.currentItemIndex]){
this.items[this.currentItemIndex].setStyle({"background":""});
}
if(c<0||c>=l){
this.el.value=this.value;
this.currentItemIndex=-1;
}else{
this.el.value=this.items[c].value;
this.items[c].setStyle({"background":"#d2e3ff"});
this.currentItemIndex=c;
}
},update:function(){
this.value=this.el.value.trim();
var v=this.value,_6d,_6e;
if(v!==""&&/^[^@]+@.+$/i.test(v)){
_6d=v.replace(/@.*$/,"");
_6e=v.replace(/^[^@]+@/,"");
if(_6d!==""&&/^yah/i.test(_6e)&&("yahoo.com.cn".indexOf(_6e)===0||"yahoo.cn".indexOf(_6e)===0)){
this.valueItems=[v,[_6d+"@yahoo.com.cn",_6d+"@yahoo.cn",_6d+"@yahoo.com"]];
this.showPanel();
}else{
this.hidePanel();
}
}else{
this.hidePanel();
}
},showPanel:function(){
if(!this.valueItems){
return;
}
var p=this.el.getOffset(true),s=this.el.getSize();
items=this.valueItems[1];
this.panel.innerHTML="";
var i,l=items.length,_73,li,a;
if(l<1){
this.hidePanel();
return;
}
this.items=[];
this.currentItemIndex=-1;
for(i=0;i<l;i++){
_73=items[i];
li=new Element("li",{style:{}});
a=li.appendChild(new Element("span",{innerHTML:_73,style:{"line-height":"1.8em","display":"block","padding":"0 5px","cursor":"pointer"}}));
a.addEvents({"mouseover":function(){
if(this.getStyle("background-color")=="#d2e3ff"){
return;
}
this.style.backgroundColor="#fff";
},"mouseout":function(){
if(this.getStyle("background-color")=="#d2e3ff"){
return;
}
this.style.backgroundColor="";
}});
a.value=_73;
a.addEvent("click",this.setValue.bind(this));
this.items.push(a);
this.panel.appendChild(li);
}
this.show=true;
this.panel.setStyle({"display":"block","left":p[0],"top":p[1]+s[1]-1,"width":s[0]-4});
this.panel.style.zIndex=500;
},hidePanelBlur:function(e){
setTimeout(this.hidePanel.bind(this),500);
},hidePanel:function(e,_78){
if(e&&!_78){
var s=document.getScroll();
if(this.panel.within(e.clientX+s[0],e.clientY+s[1])){
return;
}
}
this.show=false;
if(this.items[this.currentItemIndex]){
this.items[this.currentItemIndex].setStyle({"background":""});
}
this.currentItemIndex=-1;
this.panel.setStyle({"display":"none"});
},setValue:function(e){
var el=Event.target(e);
if(e.nodeName=="LI"){
el=el.childNode[0];
}
this.el.value=el.value;
this.hidePanel(null,true);
this.el.focus();
Event.stop(e);
}};
function strlen(str){
var len=0;
for(var i=0;i<str.length;i++){
if(str.charCodeAt(i)>255){
len+=2;
}else{
len++;
}
}
return len;
}
function chinese(str){
var _80=0;
for(var i=0;i<str.length;i++){
if(str.charCodeAt(i)>255){
_80++;
}
}
return _80;
}
var LoginCheck=function(){
this.email=reg_gel("email").addEvents({"focus":this.emailFocus.bind(this),"blur":this.emailBlur.bind(this)});
this.form=reg_gel("loginForm").addEvent("submit",this.checkLoginForm.bind(this));
this.emailFocus();
this.emailBlur();
};
LoginCheck.prototype={emailFocus:function(){
if(this.email.value=="\u7528\u6237\u90ae\u7bb1/\u624b\u673a\u53f7/\u7528\u6237\u540d"){
this.email.value="";
this.email.style.color="#333";
}
},emailBlur:function(){
if(this.email.value==""){
this.email.value="\u7528\u6237\u90ae\u7bb1/\u624b\u673a\u53f7/\u7528\u6237\u540d";
this.email.style.color="#888";
}
},checkLoginForm:function(e){
var _83=true;
if(reg_gel("email").value=="\u7528\u6237\u90ae\u7bb1/\u624b\u673a\u53f7/\u7528\u6237\u540d"||reg_gel("email").value==""){
reg_gel("errorMessage").innerHTML="\u60a8\u8fd8\u6ca1\u6709\u586b\u5199\u5e10\u53f7";
reg_gel("errorMessage").style.display="block";
Event.stop(e);
}else{
if(reg_gel("password").value==""){
reg_gel("errorMessage").innerHTML="\u60a8\u8fd8\u6ca1\u6709\u586b\u5199\u5bc6\u7801";
reg_gel("errorMessage").style.display="block";
reg_gel("password").focus();
Event.stop(e);
}else{
if(_83===false){
Event.stop(e);
return false;
}
}
}
}};
var defaultTip={"regEmail":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\uff0c\u5b8c\u6210\u6ce8\u518c","nicknameId":"6-10\u4f4d\u5b57\u6bcd\u6216\u6570\u5b57\uff0c\u63a8\u8350\u7528<strong style=\"color:#f00;\">QQ</strong>\u53f7\u6ce8\u518c","regMobile":"\u8bf7\u8f93\u5165\u771f\u5b9e\u7684\u624b\u673a\u53f7","pwd":"\u5bc6\u7801\u5fc5\u987b\u75316-20\u4e2a\u5b57\u7b26\u7ec4\u6210","name":"\u8bf7\u8f93\u5165<span style=\"color: red;font-weight: bold\">\u771f\u5b9e\u4e2d\u6587\u59d3\u540d</span>\uff0c\u65b9\u4fbf\u670b\u53cb\u67e5\u627e","icode":"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"};
var GetRequest=function(){
var url=location.search;
var _85=new Object();
if(url.indexOf("?")!=-1){
var str=url.substr(1);
strs=str.split("&");
for(var i=0;i<strs.length;i++){
_85[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
}
}
return _85;
};
var FORM_AUTH_URL="http://reg.renren.com/AjaxRegisterAuth.do";
var RegCheck=function(){
if((reg_gel("accType"))&&reg_gel("accType").value=="2"){
reg_gel("d_email").style.display="none";
reg_gel("d_xid").style.display="block";
reg_gel("verifyPic").src=reg_gel("verifyPic").src.split("&")[0]+"&rk=600&rnd="+Math.random();
this.regType="userId";
}
this.form=reg_gel("regform").addEvent("submit",this.checkForm.bind(this));
if(reg_gel("regEmail")){
reg_gel("regEmail").addEvents({"focus":this.showEmailTip.bind(this),"blur":this.checkEmail.bind(this)});
}
if(reg_gel("regMobile")){
reg_gel("regMobile").addEvents({"focus":this.showMobileTip.bind(this),"blur":this.checkMobile.bind(this),"keyup":this.changeMobilechangeMobile.bind(this)});
}
if(reg_gel("btn_getcode")){
reg_gel("btn_getcode").addEvent("click",this.getCode.bind(this));
this.changeMobilechangeMobile();
}
if(reg_gel("re_getcode")){
reg_gel("re_getcode").addEvent("click",this.getCode.bind(this));
}
reg_gel("name").addEvents({"focus":this.shownameTip.bind(this),"blur":this.checkUsername.bind(this)});
reg_gel("pwd").addEvents({"blur":this.checkPassword.bind(this),"focus":this.showPassWordTip.bind(this)});
if(reg_gel("icode")){
reg_gel("icode").addEvents({"focus":this.showCodeTip.bind(this),"blur":this.hideCodeTip.bind(this)});
}
if(reg_gel("recommend")){
reg_gel("recommend").addEvents({"focus":this.hideRecommendTips.bind(this),"blur":this.showRecommendTips.bind(this)});
}
if(reg_gel("refriend")){
reg_gel("refriend").addEvents({"focus":this.hideRefriendTips.bind(this),"blur":this.showRefriendTips.bind(this)});
}
if(reg_gel("birtips")){
reg_gel("birtips").addEvents({"click":this.ShowBirTips.bind(this)});
}
if(reg_gel("stage")){
reg_gel("stage").addEvents({"change":this.ShowStageTips.bind(this)});
}
var _88=$s({tag:"div"},{"class":"errors_div"});
if(_88&&_88.length>0){
showPop();
}
for(tip in defaultTip){
var t=reg_gel(tip);
if(t){
t.setAttribute("autocomplete","off");
}
}
if(reg_gel("regEmail")){
new AutoComplete("regEmail");
}
this.useDate=false;
this.defaultShowTip=(typeof defaultShowTip==="undefined")?false:true;
if(this.defaultShowTip){
for(tip in defaultTip){
this.showRegMessage(tip,defaultTip[tip]);
}
}
var _8a=document.getElementsByName("gender");
if(_8a&&_8a.length>0){
for(var i=0;i<_8a.length;i++){
reg_gel(_8a[i]).addEvent("click",this.checkGender.bind(this));
}
}
if(reg_gel("email")){
new LoginCheck();
}
if(reg_gel("d_xid")){
this.useId=true;
reg_gel("nicknameId").addEvents({"focus":this.showUserIdTip.bind(this),"blur":this.checkUserId.bind(this)});
}
if(reg_gel("d_mobile")){
this.regMobile=true;
reg_gel("regMobile").addEvents({"focus":this.showMobileTip.bind(this),"blur":this.checkMobile.bind(this)});
}
if((reg_gel("accType"))&&reg_gel("accType").value=="1"){
this.regType="regEmail";
}
if(reg_gel("xid_reg_handle")){
reg_gel("xid_reg_handle").addEvent("click",this.switchTypeId.bind(this));
}
if(reg_gel("regmail_reg_handle")){
reg_gel("regmail_reg_handle").addEvent("click",this.switchTypeEmail.bind(this));
}
if(reg_gel("p_birthday")){
this.birthYear=reg_gel(this.form.birth_year).addEvent("change",this.chageDate.bind(this));
this.birthMonth=reg_gel(this.form.birth_month).addEvent("change",this.chageDate.bind(this));
this.birthDay=reg_gel(this.form.birth_day).addEvent("change",this.chageDate.bind(this));
this.chageDate();
}
};
RegCheck.prototype={switchTypeId:function(e){
var sr=reg_gel("verifyPic").src.split("&")[0]+"&rk=600&rnd=";
reg_gel("d_xid").style.display="block";
reg_gel("d_email").style.display="none";
this.regType="userId";
if(reg_gel("accType")){
reg_gel("accType").value="2";
}
reg_gel("verifyPic").src=sr+Math.random();
reg_gel("icode").value="";
if(e){
Event.stop(e);
}
},switchTypeEmail:function(e){
var sr=reg_gel("verifyPic").src.split("&")[0]+"&rk=600&rnd=";
reg_gel("d_email").style.display="block";
reg_gel("d_xid").style.display="none";
this.regType="regEmail";
if(reg_gel("accType")){
reg_gel("accType").value="1";
}
reg_gel("verifyPic").src=sr+Math.random();
reg_gel("icode").value="";
if(e){
Event.stop(e);
}
},chageDate:function(){
var _90=parseInt(this.birthYear.value);
var _91=parseInt(this.birthMonth.value);
var day=parseInt(this.birthDay.value);
var _93=30;
_o=parseFloat(_90)/4;
if([1,3,5,7,8,10,12].has(_91)){
_93=31;
}else{
if(_91==2){
_93=(_o==Math.ceil(_o))?29:28;
}
}
this.birthDay.options.length=0;
this.birthDay.options[0]=new Option("--","");
for(var i=0;i<_93;i++){
this.birthDay.options[i+1]=new Option(_93-i,_93-i);
if(_93-i==day){
this.birthDay.options[i+1].selected=true;
}
}
if(this.useId&&this.useDate){
var _95=new Date().getFullYear(),_96;
if(!isNaN(_90)){
if(/^17/.test(_90)){
_90=_90+200;
}
_96=_95-_90;
if(_96<18){
this.switchTypeId();
}else{
this.switchTypeEmail();
}
}
}
if(this.birthYear.value!=""&&this.birthMonth.value!=""&&this.birthDay.value!=""){
this.hideRegError("birthday",true);
}
},showEmailTip:function(){
if(reg_gel("regEmail").value===""){
this.showRegMessage("regEmail",defaultTip["regEmail"],true);
}
},showUserIdTip:function(){
if(reg_gel("nicknameId").value===""){
this.showRegMessage("nicknameId",defaultTip["nicknameId"],true);
}
},showMobileTip:function(){
if(reg_gel("regMobile").value===""){
this.showRegMessage("regMobile",defaultTip["regMobile"],true);
}
},showPassWordTip:function(){
if(reg_gel("pwd").value===""){
this.showRegMessage("pwd",defaultTip["pwd"],true);
}
},shownameTip:function(){
if(reg_gel("name").value===""){
this.showRegMessage("name",defaultTip["name"],true);
}
},showCodeTip:function(){
this.showRegMessage("icode",defaultTip["icode"],true);
},hideCodeTip:function(){
this.hideRegError("icode");
},checkForm:function(e){
var _98=true;
var _99=reg_gel("regEmail").value.toString().toLowerCase().split("@")[1];
if(reg_gel("regEmail_error_span")){
if(reg_gel("regEmail_error_span").hasClass("box-error-error")===true&&reg_gel("regEmail").regType==="regEmail"&&_98===true&&reg_gel("regEmail_error_span").style.display=="inline-block"){
Event.stop(e);
return false;
}
if(reg_gel("nicknameId_error_span")&&_98===true&&reg_gel("userId").regType==="userId"&&reg_gel("nicknameId_error_span").style.display=="block"){
Event.stop(e);
return false;
}
if(reg_gel("regMobile_error_span")&&_98===true&&reg_gel("regMobile_error_span").style.display=="block"){
Event.stop(e);
return false;
}
}
if(reg_gel("name_error_span")&&reg_gel("name_error_span").hasClass("box-error-error")===true){
if(_98===true&&reg_gel("name_error_span").style.display=="block"){
Event.stop(e);
return false;
}
}
if(reg_gel("regEmail")&&(reg_gel("regEmail").id==="regEmail")&&reg_gel("accType").value=="1"&&false===this.checkEmail(null,true)){
_98=false;
}else{
if(reg_gel("nicknameId")&&this.regType==="userId"&&false===this.checkUserId(null,true)){
_98=false;
}else{
if(!reg_gel("regEmail")&&reg_gel("nicknameId")&&false===this.checkUserId(null,true)){
_98=false;
}else{
if(reg_gel("regMobile")&&false===this.checkMobile(null,true)){
_98=false;
}else{
if(false===this.checkPassword(null,true)){
_98=false;
}else{
if(false===this.checkUsername(null,true)){
_98=false;
}else{
if(false===this.checkGender(null,true)){
_98=false;
}else{
if(false===this.checkBirthday(null,true)){
_98=false;
}else{
if(false===this.checkStage(null,true)){
_98=false;
}else{
if(reg_gel("icode")&&false===this.checkCode(null,true)){
_98=false;
}
}
}
}
}
}
}
}
}
}
if(_98===false){
Event.stop(e);
return false;
}else{
if(reg_gel("regEmail")&&_98===true&&(reg_gel("action_id").value=="205243"||reg_gel("action_id").value=="205237")){
showAjaxReg();
Event.stop(e);
}
}
},checkEmail:function(e,_9b){
this.hideRegError("regEmail");
var _9c=reg_gel("regEmail").value;
if(!_9b&&_9c===""){
if(reg_gel("dmmg")){
reg_gel("dmmg").style.display="none";
}
return;
}
if(_9c.length>50){
this.showRegError("regEmail","\u7535\u5b50\u90ae\u7bb1\u4e0d\u80fd\u591a\u4e8e50\u4e2a\u5b57\u7b26");
return false;
}else{
var _9d=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
}
if(!_9d.test(_9c)){
this.showRegError("regEmail","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\uff0c\u5b8c\u6210\u6ce8\u518c");
error=true;
return false;
}
var _9e=[/eyou\.com$/i,/yaoyaobuluo\.cn$/i,/love126\.com$/i],k;
if(typeof filterQQ!=="undefined"){
_9e.push(/qq\.com$/i);
}
for(k=0;k<_9e.length;k++){
if(_9e[k].test(_9c)){
this.showRegError("regEmail","\u4f60\u7684\u90ae\u7bb1\u53ef\u80fd\u6536\u4e0d\u5230\u6fc0\u6d3b\u4fe1");
return false;
}
}
this.checkEmailAjax();
reg_gel("dmmg").style.display="inline-block";
return true;
},checkEmailAjax:function(){
var _a0=reg_gel("regEmail").value;
if(!this.x){
this.x=new X();
}
this.x.onLoad=this.checkEmailAjaxLoad.bind(this);
this.x.setVars({"authType":"email","value":_a0,"t":(new Date()).getTime()});
this.x.send(FORM_AUTH_URL);
},checkEmailAjaxLoad:function(){
var rt=this.x.response;
if(rt!="OK"){
if(rt==""){
this.hideRegError("regEmail");
}else{
this.showRegError("regEmail",rt);
return false;
}
}else{
this.hideRegError("regEmail");
reg_gel("dmmg").style.display="inline-block";
return true;
}
},checkUserId:function(e,_a3){
reg_gel("mg").style.display="none";
this.hideRegError("nicknameId");
var _a4=reg_gel("nicknameId").value;
if(!_a3&&_a4===""){
return;
}
if(_a4.length>10){
this.showRegError("nicknameId","\u5e10\u53f7\u4e0d\u80fd\u591a\u4e8e10\u4e2a\u5b57\u7b26");
return false;
}
if(!(/^[a-z0-9_]{6,10}$/i.test(_a4))){
this.showRegError("nicknameId","6-10\u4f4d\u5b57\u6bcd\u6216\u6570\u5b57\uff0c\u63a8\u8350\u7528<strong style=\"color:#f00;\">QQ</strong>\u53f7\u6ce8\u518c");
return false;
}
this.checkUserIdAjax();
return true;
},checkUserIdAjax:function(){
var _a5=reg_gel("nicknameId").value;
if(!this.x){
this.x=new X();
}
this.x.onLoad=this.checkUserIdAjaxLoad.bind(this);
this.x.setVars({"authType":"xid","value":_a5,"t":(new Date()).getTime()});
this.x.send(FORM_AUTH_URL);
},checkUserIdAjaxLoad:function(){
var rt=this.x.response;
if(rt!="OK"){
if(rt==""){
this.hideRegError("nicknameId");
}else{
this.showRegError("nicknameId",rt);
return false;
}
}else{
this.hideRegError("nicknameId");
reg_gel("mg").style.display="inline-block";
return true;
}
},checkMobile:function(e,_a8){
reg_gel("rmg").style.display="none";
this.hideRegError("regMobile");
var _a9=reg_gel("regMobile").value;
if(!_a8&&_a9===""){
return;
}
if(_a9.length>11){
this.showRegError("regMobile","\u624b\u673a\u53f7\u4e0d\u80fd\u591a\u4e8e11\u4e2a\u5b57\u7b26");
return false;
}
if(!(/^(((13[0-9]{1})|159|(15[0-9]{1})|18|(18[0-9]{1}))+\d{8})$/.test(_a9))){
this.showRegError("regMobile","\u8bf7\u6b63\u786e\u586b\u519911\u4f4d\u7684\u624b\u673a\u53f7");
return false;
}
this.checkMobileAjax();
reg_gel("rmg").style.display="inline-block";
return true;
},checkMobileAjax:function(){
var _aa=reg_gel("regMobile").value;
if(!this.x){
this.x=new X();
}
this.x.onLoad=this.checkMobileAjaxLoad.bind(this);
this.x.setVars({"authType":"email","value":_aa,"stage":"3","t":(new Date()).getTime()});
this.x.send(FORM_AUTH_URL);
},checkMobileAjaxLoad:function(){
var rt=this.x.response;
if(rt!="OK"){
if(rt==""){
this.hideRegError("regMobile");
}else{
this.mobileChecked=false;
this.showRegError("regMobile",rt);
return false;
}
}else{
this.mobileChecked=true;
this.hideRegError("regMobile");
reg_gel("rmg").style.display="inline-block";
return true;
}
},getCode:function(e,_ad){
if(!this.mobileChecked){
return;
}
var _ae=reg_gel("regMobile").value;
if(!_ad&&_ae===""){
return;
}
if(!_ad){
this.getCodeAjax();
}
return true;
},getCodeAjax:function(){
var _af=reg_gel("regMobile").value;
if(_af===""){
return false;
}
var url="http://reg.renren.com/ajax-mobile-code.do?opt=1&mn="+_af;
this.codeAjax=new X();
this.codeAjax.send(url);
reg_gel("btn_getcode").value="\u9a8c\u8bc1\u7801\u5df2\u7ecf\u53d1\u9001";
reg_gel("btn_getcode").style.background="#ccc";
reg_gel("btn_getcode").style.cursor="default";
reg_gel("btn_getcode").disabled="disabled";
},changeMobilechangeMobile:function(){
this.setGetcodebuttonDisabled(/^(1(3|5|8)[0-9]{9})$/.test(reg_gel("regMobile").value.trim())?false:true);
},setGetcodebuttonDisabled:function(_b1){
if(_b1){
reg_gel("btn_getcode").disabled="disabled";
reg_gel("btn_getcode").value="\u514d\u8d39\u83b7\u53d6\u9a8c\u8bc1\u7801";
reg_gel("btn_getcode").style.background="#ccc";
reg_gel("btn_getcode").style.cursor="default";
}else{
reg_gel("btn_getcode").disabled="";
reg_gel("btn_getcode").value="\u514d\u8d39\u83b7\u53d6\u9a8c\u8bc1\u7801";
reg_gel("btn_getcode").style.background="#005EAC";
reg_gel("btn_getcode").style.cursor="pointer";
}
},changeMobile:function(e,_b3){
var _b4=reg_gel("regMobile").value.trim();
if(!_b3&&_b4===""){
return;
}
if(!(/^(1(3|5|8)[0-9]{9})$/.test(_b4))){
this.showRegError("regMobile","\u8bf7\u6b63\u786e\u586b\u519911\u4f4d\u7684\u624b\u673a\u53f7");
return false;
}
this.setGetcodebuttonDisabled(true);
},checkUsername:function(e,_b6){
reg_gel("xmg").style.display="none";
this.hideRegError("name");
var _b7=reg_gel("name").value;
if(!_b6&&_b7===""){
return;
}
if(strlen(_b7)>12){
this.showRegError("name","\u59d3\u540d\u4e0d\u80fd\u591a\u4e8e6\u4e2a\u6c49\u5b57\u6216\u800512\u4e2a\u5b57\u7b26");
reg_gel("name_tip").style.display="none";
return false;
}
if(chinese(_b7)<2){
this.showRegError("name","\u8bf7\u8f93\u5165<span style=\"color: red;font-weight: bold\">\u771f\u5b9e\u4e2d\u6587\u59d3\u540d</span>");
reg_gel("name_tip").style.display="none";
return false;
}
this.checkUsernameAjax();
return true;
},checkUsernameAjax:function(e,_b9){
this.hideRegError("name");
var _ba=reg_gel("name").value;
if(!this.xName){
this.xName=new X();
}
this.xName.onLoad=this.checkUsernameAjaxLoad.bind(this);
this.xName.setVars({"authType":"name","value":_ba,"t":(new Date()).getTime()});
this.xName.send(FORM_AUTH_URL);
},checkUsernameAjaxLoad:function(){
var rt=this.xName.response;
if(rt!="OKNAME"&&rt!="OK"){
if(rt==""){
this.hideRegError("name");
reg_gel("xmg").style.display="inline-block";
}else{
this.showRegError("name",rt);
return false;
}
}else{
this.hideRegError("name");
reg_gel("xmg").style.display="inline-block";
return true;
}
},checkPassword:function(e,_bd){
this.hideRegError("pwd");
var _be=reg_gel("pwd").value;
reg_gel("mmg").style.display="none";
if(!_bd&&_be===""){
return;
}
_be=_be.trim();
if(_be===""){
this.showRegError("pwd","\u8bf7\u8f93\u5165\u5bc6\u7801\uff0c\u4e0d\u80fd\u5168\u90e8\u4e3a\u7a7a\u683c");
return false;
}
if(_be.length<6||_be.length>20){
this.showRegError("pwd","\u5bc6\u7801\u5e94\u8be5\u57286\u523020\u4f4d\u4e4b\u95f4");
return false;
}
if(this.isPwdTooSimple(_be)===true){
this.showRegError("pwd","\u5bc6\u7801\u8fc7\u4e8e\u7b80\u5355\uff0c\u8bf7\u4fee\u6539");
return false;
}
reg_gel("mmg").style.display="inline-block";
return true;
},checkBirthday:function(){
if(reg_gel("p_birthday")){
this.hideRegError("birthday",true);
if(this.birthYear.value==""||this.birthMonth.value==""||this.birthDay.value==""){
if($("birtherror")){
this.showRegError("birthday","\u8bf7\u586b\u5199\u771f\u5b9e\u751f\u65e5\uff0c\u751f\u65e5\u5f53\u5929\u6709\u60ca\u559c\u54e6",true);
}else{
this.showRegError("birthday","\u8bf7\u586b\u5199\u751f\u65e5",true);
}
return false;
}
}
return true;
},checkStage:function(){
if(reg_gel("stage")){
if(reg_gel("stage").value==-1){
this.showRegError("stage","\u8bf7\u9009\u62e9\u8eab\u4efd",true);
return false;
}
}
return true;
},checkCode:function(){
if(!reg_gel("icode")){
return true;
}
this.hideRegError("icode");
var _bf=reg_gel("icode").value;
if(_bf===""){
this.showRegError("icode",defaultTip["icode"]);
return false;
}
return true;
},isPwdTooSimple:function(pwd){
var _c1=/^(\w|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\{|\}|\:|\"|\||\<|\>|\?|\=|\-|\]|\[|\\|\'|\;|\/|\.|\,)\1*$/;
var num="12345678909876543210";
if(pwd.length<6){
return true;
}else{
if(_c1.test(pwd)==true){
return true;
}else{
if(num.indexOf(pwd)!=-1){
return true;
}else{
return false;
}
}
}
},checkGender:function(){
var _c3=false;
var r=document.getElementsByName("gender");
for(var i=0;i<r.length;i++){
if(r[i].checked){
_c3=true;
}
}
if(!_c3){
this.showRegError("gender","\u8bf7\u9009\u62e9\u6027\u522b",true);
return false;
}
this.hideRegError("gender",true);
return true;
},showRegMessage:function(_c6,_c7,_c8){
if(reg_gel(_c6+"_error_span_i")){
reg_gel(_c6+"_error_span_i").innerHTML=_c7;
reg_gel(_c6+"_error_span").addClass(_c8?"box-error-focus":"").dropClass("box-error-error").style.display="inline-block";
}
},showRegError:function(_c9,_ca,_cb){
reg_gel("gender_error_span").style.display="none";
reg_gel("birthday_error_span").style.display="none";
var _cc=reg_gel(_c9+"_error_span"),_cd;
if(_c9==="name"){
if(!reg_gel("name_tip")){
_cd=new Element("div",{"id":"name_tip","innerHTML":"\u5982\u679c\u7cfb\u7edf\u8bef\u5224\u4f60\u7684\u59d3\u540d\uff0c\u8bf7\u6362\u4e2a\u540d\u5b57\u5148\u6ce8\u518c\uff0c\u6ce8\u518c\u540e\u53ef\u7533\u8bf7\u6539\u540d","style":{"display":"none","clear":"both","color":"#f00"}});
reg_gel("name_error_span").parentNode.appendChild(_cd);
_cd.style.display="none";
}else{
}
}
if(!_cc){
return;
}
if(_c9=="regEmail"){
reg_gel("dmmg").style.display="none";
}
if(_c9=="nicknameI d"){
reg_gel("mg").style.display="none";
}
if(_c9=="regMobile"){
reg_gel("rmg").style.display="none";
}
if(_c9=="name"){
reg_gel("xmg").style.display="none";
}
if(_c9=="pwd"){
reg_gel("mmg").style.display="none";
}
reg_gel(_c9+"_error_span_i").innerHTML=_ca;
_cc.dropClass("box-error-focus").addClass("box-error-error").style.display="inline-block";
if(_cb===true){
_cc.addClass("box-error-pop");
var p=reg_gel(_cc.parentNode);
if(p.className=="input_wrap"){
}
}
},hideRegError:function(_cf,_d0){
var _d1=reg_gel(_cf+"_error_span");
if(!_d1){
return;
}
_d1.dropClass("box-error-focus").dropClass("box-error-error");
if(!this.defaultShowTip||_d0===true){
_d1.style.display="none";
if(_cf==="name"&&reg_gel("name_tip")){
reg_gel("name_tip").style.display="none";
}
}else{
if(defaultTip[_cf]){
reg_gel(_cf+"_error_span_i").innerHTML=defaultTip[_cf];
}
}
},hideRecommendTips:function(){
if(reg_gel("recommend").nodeName=="INPUT"&&reg_gel("recommend").value=="\u586b\u5199\u771f\u5b9e\u76ee\u7684\uff0c\u83b7\u53d6\u66f4\u4f18\u670d\u52a1"){
reg_gel("recommend").value="";
reg_gel("recommend").style.color="#000";
}
},showRecommendTips:function(){
if(reg_gel("recommend").nodeName=="INPUT"&&reg_gel("recommend").value==""){
reg_gel("recommend").value="\u586b\u5199\u771f\u5b9e\u76ee\u7684\uff0c\u83b7\u53d6\u66f4\u4f18\u670d\u52a1";
reg_gel("recommend").style.color="#999";
}
},hideRefriendTips:function(){
if(reg_gel("refriend").value=="\u4ecb\u7ecd\u4f60\u6765\u4eba\u4eba\u7f51\u7684\u597d\u53cb\u59d3\u540d"){
reg_gel("refriend").value="";
reg_gel("refriend").style.color="#000";
}
},showRefriendTips:function(){
if(reg_gel("refriend").value==""){
reg_gel("refriend").value="\u4ecb\u7ecd\u4f60\u6765\u4eba\u4eba\u7f51\u7684\u597d\u53cb\u59d3\u540d";
reg_gel("refriend").style.color="#999";
}
},ShowBirTips:function(){
XN.DO.alert("\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u540c\u65f6\u4e3a\u4e86\u4fdd\u8bc1\u4eba\u4eba\u7f51\u7528\u6237\u7684\u771f\u5b9e\u6027\uff0c\u51e1\u6ce8\u518c\u4eba\u4eba\u7f51\u7528\u6237\u90fd\u9700\u8981\u586b\u5199\u771f\u5b9e\u7684\u51fa\u751f\u65e5\u671f\u3002<br /><span class='gray'>\u4f60\u53ef\u4ee5\u5728\u4e2a\u4eba\u4e3b\u9875\u4e0a\u9690\u85cf\u4f60\u7684\u51fa\u751f\u65e5\u671f\u3002</span>","\u4e3a\u4ec0\u4e48\u9700\u8981\u63d0\u4f9b\u6211\u7684\u751f\u65e5\u65e5\u671f\uff1f");
},ShowStageTips:function(){
if(reg_gel("stage").value==-1){
this.showRegError("stage","\u8bf7\u9009\u62e9\u8eab\u4efd",true);
}else{
this.hideRegError("stage",false);
}
}};
function refreshCode(){
if((reg_gel("accType"))&&reg_gel("accType").value=="2"){
reg_gel("verifyPic").src=reg_gel("verifyPic").src.split("&")[0]+"&rk=600&rnd="+Math.random();
}else{
reg_gel("verifyPic").src=reg_gel("verifyPic").src.split("&")[0]+"&rk=600&rnd="+Math.random();
}
}
function showPop(){
if(reg_gel("mask_layer")){
reg_gel("mask_layer").style.display=reg_gel("reg_layer").style.display="block";
}
}
if(!window.XN){
$=reg_gel;
var XN={};
XN.DO=XN.Do={};
var currentConfirm=null;
XN.DO.confirmHide=function(e){
if(reg_gel("maskLayer")){
reg_gel("maskLayer").style.display="none";
}
if(reg_gel("dialog")){
reg_gel("dialog").style.display="none";
}
Event.stop(e);
};
XN.DO.alert=function(_d3,_d4,_d5,yes,no,X,Y,w,h){
var _dc=["<table style=\"width: 100%; height: 100%;\" class=\"pop_dialog_table\">","<tbody>","<tr>","<td class=\"pop_topleft\"></td>","<td class=\"pop_border\"></td>","<td class=\"pop_topright\"></td>","</tr>","<tr>","<td class=\"pop_border\"></td>","<td class=\"pop_content\" id=\"pop_content\">","<div  style=\"position:relative\" id=\"pop_content_box_wrap\"><div id=\"pop_content_box\" style=\"top:0;left:0;z-index:600;width:100%\"><h2><span id=\"ui_dialog_header\"></span></h2>","<div class=\"dialog_content\">","<div id=\"ui_dialog_body\" class=\"dialog_body\"></div>","<div id=\"ui_dialog_footer\" class=\"dialog_buttons\"><input value=\"\u786e\u5b9a\" id=\"ui_dialog_button_confirm\" class=\"input-submit\" type=\"button\" /></div>","</div></div><iframe id=\"pop_iframe\" style=\"display:none;position:absolute;top:0;left:0;z-index:500;border:0\" frameborder=\"0\"></iframe></div>","</td>","<td class=\"pop_border\"></td>","</tr>","<tr>","<td class=\"pop_bottomleft\"></td>","<td class=\"pop_border\"></td>","<td class=\"pop_bottomright\"></td>","</tr>","</tbody>","</table>"].join("");
var _dd;
if(reg_gel("maskLayer")){
_dd=reg_gel("maskLayer");
_dd.style.display="block";
}else{
_dd=new Element("div",{"id":"maskLayer"});
document.body.appendChild(_dd);
_dd.setStyle({"position":"absolute","top":"0","left":"0","right":"0","bottom":"0","height":"100%","width":"100%"});
_dd.style.zIndex=1000;
}
if(reg_gel("dialog")){
var _de=reg_gel("dialog");
_de.style.display="block";
}else{
_de=new Element("div",{"id":"dialog"});
_de.innerHTML=_dc;
_dd.appendChild(_de);
_de.style.display="block";
reg_gel("ui_dialog_button_confirm").addEvent("click",XN.DO.confirmHide);
_de.setStyle({"width":"400","margin":"0 auto"});
}
reg_gel("ui_dialog_body").innerHTML=_d3;
reg_gel("ui_dialog_header").innerHTML=_d4?_d4:"\u63d0\u793a";
if(Env.IE6){
var s=reg_gel("pop_content_box").getSize();
reg_gel("pop_content_box_wrap").setStyle({height:s[1]});
reg_gel("pop_iframe").setStyle({width:s[0],height:s[1],"display":"block"});
reg_gel("pop_content_box").setStyle({"position":"absolute"});
}
var _e0=_de.offsetHeight;
var _e1=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0;
var _e2=window.innerHeight||document.documentElement.clientHeight||0;
var top="217px";
_de.style.marginTop=top;
};
function load_jebe_ads(){
}
}
function showAjaxReg(){
var _e4=reg_gel("regEmail").value.toLowerCase();
var xId=reg_gel("nicknameId").value.toLowerCase();
var _e6=reg_gel("pwd").value;
var _e7=reg_gel("name").value;
var _e8=reg_gel("icode").value;
var _e9=function(){
var _ea=false;
var r=document.getElementsByName("gender");
for(var i=0;i<r.length;i++){
if(r[i].checked){
return r[i].value;
}
}
};
var x=new X();
x.onLoad=function(){
formCheckAjaxLoad(x);
};
x.setVars({"regEmail":_e4,"nicknameId":xId,"pwd":_e6,"name":_e7,"gender":_e9(),"birth_year":reg_gel("regform").birth_year.value,"birth_month":reg_gel("regform").birth_month.value,"birth_day":reg_gel("regform").birth_day.value,"icode":_e8,"key_id":reg_gel("regform").key_id.value,"fromUrl":reg_gel("fromUrl").value,"iu":reg_gel("iu").value,"ic":reg_gel("ic").value,"uuid":reg_gel("uuid").value,"ss":reg_gel("ss").value,"action_id":reg_gel("action_id").value,"pageId":reg_gel("pageId").value,"accType":reg_gel("accType").value,"g":reg_gel("g").value,"b":reg_gel("b").value,"t":(new Date()).getTime()});
x.send("http://reg.renren.com/ajax/sb/asreg");
}
function formCheckAjaxLoad(x){
var m=x.getJSON();
var _f0=m.code,msg=m.msg;
var _f2=new Object();
_f2=GetRequest();
var ss;
ss=_f2["ss"];
if(_f0=="0"){
if(ss=="17047"){
window.location.href="http://gamestat.renren.com/game/772";
}else{
if(ss=="10773"){
window.location.href="http://gamestat.renren.com/game/820";
}else{
if(ss=="10781"){
window.location.href="http://gamestat.renren.com/game/921";
}else{
if(ss=="10725"){
window.location.href="http://gamestat.renren.com/game/923";
}else{
window.location.href="http://www.renren.com";
}
}
}
}
}else{
alert(msg);
refreshCode();
reg_gel("icode").value="";
}
}
