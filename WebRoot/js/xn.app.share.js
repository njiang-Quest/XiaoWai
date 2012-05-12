XN.namespace("app.share");
XN.namespace("config.share");
XN.config.share.enableSyncComment=false;
XN.app.share.action=function(_1){
this.config={reqeustURI:"http://share."+XN.env.domain+"/share/submit.do",commentLength:300};
$extend(this.config,_1);
};
XN.app.share.action.prototype={getConfig:function(_2){
return this.config[_2];
},add:function(p){
var _4=this.getConfig("commentLength");
if(p.body.length>_4){
this.fireEvent("checkError","\u8bc4\u8bba\u5b57\u6570\u4e0d\u80fd\u8d85\u8fc7"+_4);
return;
}
this.request(p);
},send:function(p){
var _6=this.getConfig("commentLength");
if(p.ids.length===0){
this.fireEvent("checkError","\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u597d\u53cb");
return;
}
if(p.body.length>_6){
this.fireEvent("checkError","\u8bc4\u8bba\u5b57\u6570\u4e0d\u80fd\u8d85\u8fc7"+_6);
return;
}
this.request(p);
},_addParamInEditor:function(){
if($("isfromshare")){
return;
}
var _7;
if(XN.browser.IE){
_7=$element("<input name=\"isfromshare\" />");
}else{
_7=$element("input");
_7.name="isfromshare";
}
_7.id="isfromshare";
_7.type="hidden";
_7.value="1";
$("cmtbody").parentNode.insertBefore(_7,$("cmtbody"));
},commentBlog:function(p){
if(window.addNewCommentEntry&&$("cmtbody")){
$("cmtbody").value=p.body;
this._addParamInEditor();
$("isfromshare").value="1";
if($("feedComment")){
$("feedComment").checked=false;
}
if($("cmttoid")){
$("cmttoid").value="";
}
if($("whisper1")){
$("whisper1").value="0";
}
addNewCommentEntry();
$("isfromshare").value="0";
return;
}
var _9=this;
var _a=XN.string.getQuery("id",p.link);
var _b=XN.string.getQuery("owner",p.link);
new XN.net.xmlhttp({url:"http://blog."+XN.env.domain+"/PostComment.do",data:"id="+_a+"&owner="+_b+"&body="+encodeURIComponent(p.body)+"&to=0&only_to_me=0&isfromshare=1",onSuccess:function(r){
_9.fireEvent("commentBlogSuccess",r.responseText);
},onError:function(){
_9.fireEvent("commentBlogError");
}});
},commentPhoto:function(p){
if($("cmtbody")&&window.XN&&XN.page.albumPhoto){
$("cmtbody").value=p.body;
this._addParamInEditor();
$("isfromshare").value="1";
XN.PAGE.albumPhoto.commentEditorSave();
$("isfromshare").value="0";
return;
}
var _e=XN.string.getQuery("id",p.link);
var _f=XN.string.getQuery("owner",p.link);
new XN.net.xmlhttp({url:"http://photo."+XN.env.domain+"/ajaxcommentphoto2.do",data:"id="+_e+"&owner="+_f+"&body="+encodeURIComponent(p.body)+"&isfromshare=1",onSuccess:function(r){
This.fireEvent("commentPhotoSuccess",r.responseText);
},onError:function(){
This.fireEvent("commentPhotoError");
}});
},request:function(p){
var _12=this;
this.fireEvent("beforePost");
var tsc=p.tsc;
delete p.tsc;
XN.log("\u6b64\u6b21\u5206\u4eab\u6536\u96c6\u7684\u53c2\u6570\u5982\u4e0b:");
XN.log(p);
new XN.net.xmlhttp({url:this.getConfig("reqeustURI"),data:"tsc="+tsc+"&post="+encodeURIComponent(XN.json.build(p)),onComplete:function(){
_12.fireEvent("postComplete");
},onSuccess:function(r){
try{
var rs=XN.json.parse(r.responseText);
}
catch(e){
_12.fireEvent("postError");
}
if(rs.status===0){
_12.fireEvent("postSuccess",rs.msg,rs);
XN.app.share.fireEvent("postSuccess",p,rs);
if(new RegExp("(page|org)."+XN.env.domain_reg+"(/\\d+)?/note").test((p.link||p.form.link))){
new XN.net.xmlhttp({url:"http://"+location.host+"/note/addShareCount",method:"post",data:"id="+(p.noteId||p.form.noteId)+"&pid="+(p.fromno||p.form.formno)});
}
if(!XN.config.share.enableSyncComment){
return;
}
if(!p.body||XN.string.isBlank(p.body)){
return;
}
if(!p.sendcomment){
return;
}
if(p.pic&&p.pic!==""){
_12.commentPhoto(p);
}else{
if(new RegExp("blog."+XN.env.domain_reg).test(p.link)){
_12.commentBlog(p);
}
}
}else{
_12.fireEvent("postError",rs.msg);
}
},onError:function(){
_12.fireEvent("postError");
}});
}};
XN.event.enableCustomEvent(XN.app.share);
XN.event.enableCustomEvent(XN.app.share.action.prototype);
function checkShareAuth(el){
if(!XN.config.share.enableSyncComment){
return;
}
if(!XN.app.share.pop.sysMode){
return;
}
if(String(el.value)!="99"){
$("pop_share_syscomment").hide();
$("pop_share_sendcomment").disabled=true;
}else{
$("pop_share_syscomment").show();
$("pop_share_sendcomment").disabled=false;
}
}
(function(){
var _17;
XN.form=XN.FORM;
var _18=null;
var _19=true;
var XHR=function(obj){
var _1c=false,_1d=$extend({},obj),_1e=null;
if(obj.waitTime&&obj.onTimeout){
_1c=true;
_1d.onSuccess=function(r){
window.clearTimeout(_1e._timeoutTimer);
obj.onSuccess(r);
};
}
_1e=new XN.net.xmlhttp(_1d);
if(_1c){
_1e._timeoutTimer=setTimeout(function(){
obj.onTimeout.call(_1e);
try{
_1e.abort();
}
catch(e){
XN.log(e);
}
},obj.waitTime);
}
};
XN.app.share.pop=function(url,_21,_22){
var _23=XN.APP.share.onlyShowSendContent||false;
var _24,_25,_26;
var _27={};
$extend(_27,_21);
var _28={add:false,send:false,fav:false};
if(!_21.tabDefault){
_21.tabDefault="add";
}
if(_23){
_21.tabDefault="send";
}
switch(_21.tabDefault){
case "send":
_28.send=true;
break;
case "fav":
_28.fav=true;
break;
case "add":
_28.add=true;
break;
default:
return false;
}
var _29=_21.sysn===true?_21.sysn:false;
_25="\u7ad9\u5185\u4fe1\u7ed9\u597d\u53cb";
_26="\u53d1\u4fe1\u7ed9";
if(_23){
_24="\u7ad9\u5185\u4fe1\u7ed9\u597d\u53cb";
}else{
_24="\u5206\u4eab";
}
if(!_18&&!_19){
new XN.NET.xmlhttp({url:"http://page."+XN.env.domain+"/myPages",method:"get",onSuccess:function(r){
try{
var rsp=XN.JSON.parse(r.responseText);
if(rsp.pages&&rsp.pages.length>0){
_18=rsp.pages;
}
XN.app.share.pop(url,_21);
}
catch(e){
}
},onComplete:function(){
_19=true;
}});
return false;
}
var _2c=_21.tabDefault;
if(!_17){
_17=new XN.ui.multiFriendSelector({url:"http://friend."+XN.env.domain+"/friendsSelector.do",maxNum:10});
_17.addEvent("overMaxNum",function(n){
XN.DO.showError("\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u5206\u4eab\u7ed9"+n+"\u4f4d\u597d\u53cb^_^");
});
}
if(_21.tid){
_21="tid="+_21.tid+"&tribeId="+_21.tribeId;
}else{
_21="post="+encodeURIComponent(XN.json.build(_21));
}
var _2e="";
if(_18){
for(var i=0;i<_18.length;i++){
_2e+="<option value=\""+_18[i].id+"\">"+_18[i].name+"</option>";
}
}
var _30="<div id=\"popShareContainer\" style=\"display:none;\"><div class=\"share_header\">"+"\t\t<div class=\"tabs clearfix\">"+"\t\t\t\t<ul class=\"toggle_tabs clearfix\">"+"\t\t\t\t\t<li class=\"first\">"+"\t\t\t\t\t\t<a id=\"shareSendTab\" onfocus=\"this.blur()\" href=\"javascript:void(0)\">"+_25+"</a>"+"\t\t\t\t\t</li>";
if(_18){
_30+="<li class=\"middle\">"+"\t\t\t\t\t\t<a id=\"sharePageTab\" onfocus=\"this.blur()\" href=\"javascript:void(0)\">\u5206\u4eab\u5230\u516c\u5171\u4e3b\u9875</a>"+"\t\t\t\t\t</li>";
}
if(!_23){
_30+="<li class=\"middle\">"+"\t<a id=\"shareAddTab\" onfocus=\"this.blur()\" href=\"javascript:void(0)\">\u53d1\u9001\u5230\u65b0\u9c9c\u4e8b</a>"+"</li>";
}
if(!_23){
_30+="<li class=\"last\">"+"   <a id=\"shareFavTab\" onfocus=\"this.blur()\" href=\"javascript:void(0)\">\u81ea\u5df1\u6536\u85cf</a>"+"</li>";
}
_30+="\t\t\t\t</ul>"+"\t\t\t</div>"+"\t\t</div>"+"\t\t<div id=\"shareSendContent\" class=\"share_send\">"+"\t\t\t<div class=\"share_fields\">"+"\t\t\t\t<dl class=\"composer_fields clearfix\">"+"\t\t\t\t\t<dt id=\"dt_to_field\">"+"\t\t\t\t\t\t<label for=\"to_field\">"+_26+": </label>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_to_field\">"+"\t\t\t\t\t\t<div id=\"shareSelectFriends\" class=\"composer\"></div>"+"\t\t\t\t\t</dd>"+"\t\t\t\t\t<dt id=\"dt_subject_field\">"+"\t\t\t\t\t\t<label for=\"subject_field\">\u6807\u9898: </label>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_subject_field\">"+"\t\t\t\t\t\t<input id=\"popShareSubjectInput\" value=\"\" class=\"inputtext\" type=\"text\">"+"\t\t\t\t\t</dd>"+"\t\t\t\t\t<dt id=\"dt_message_field\">"+"                       <img src=\""+XN.env.CDNstaticRoot+"a.gif\" class=\"shareSend_HeadImg\"/>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_message_field\">"+"\t\t\t\t\t\t<textarea name=\"send_message\" id=\"popShareSendMessage\"></textarea>"+"\t\t\t\t\t</dd>"+"\t\t\t\t</dl>"+"\t\t\t</div>"+"\t\t</div>";
if(_18){
_30+="\t\t<div id=\"sharePageContent\" class=\"share_send\" style=\"display:block;\">"+"\t\t\t<div class=\"share_fields\">"+"\t\t\t\t<dl class=\"composer_fields clearfix\">"+"\t\t\t\t\t<dt id=\"dt_to_field\">"+"\t\t\t\t\t\t<label for=\"to_field\">\u5206\u4eab\u7ed9: </label>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_to_field\">"+"\t\t\t\t\t\t<select id=\"pagePid\" name=\"pid\" class=\"select float-left\">"+_2e+"</select>"+"\t\t\t\t\t</dd>"+"\t\t\t\t\t<dt id=\"dt_subject_field\" style=\"display:none;\">"+"\t\t\t\t\t\t<label for=\"subject_field\">\u6807\u9898: </label>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_subject_field\" style=\"display:none;\">"+"\t\t\t\t\t\t<input id=\"popShareSubjectInputForPage\" value=\"\" class=\"inputtext\" type=\"text\">"+"\t\t\t\t\t</dd>"+"\t\t\t\t\t<dt id=\"dt_message_field\">"+"                       <img src=\""+XN.env.CDNstaticRoot+"a.gif\"  class=\"shareSend_HeadImg\"/>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_message_field\">"+"\t\t\t\t\t\t<textarea name=\"send_message\" id=\"popShareSendMessageForPage\"></textarea>"+"\t\t\t\t\t</dd>"+"\t\t\t\t</dl>"+"\t\t\t</div>"+"\t\t</div>";
}
if(!_23){
_30+="\t\t<div id=\"shareAddContent\" class=\"share_post\">"+"\t\t\t<div class=\"share_fields\">"+"\t\t\t\t<dl class=\"composer_fields clearfix\">"+"\t\t\t\t\t<dt id=\"dt_message_field\">"+"                       <img src=\""+XN.env.CDNstaticRoot+"a.gif\"  class=\"shareSend_HeadImg\"/>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_message_field\">"+"\t\t\t\t\t\t<textarea name=\"message\" id=\"sharer_popup_message\"></textarea>"+"\t\t\t\t\t</dd>";
if(_29){
_30+="           <dt>&nbsp;</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_privacy_field\">"+"                       <span id=\"pop_share_syscomment\" class=\"float-right\">"+"                       <label id=\"pop_share_sclabel\" style=\"font-weight:normal\" >"+"                           <input  type=\"checkbox\" checked=\"true\" id=\"pop_share_sendcomment\" name=\"sendcomment\" />"+"                           \u540c\u65f6\u8bc4\u8bba\u5230\u539f\u5185\u5bb9"+"                       </label>"+"                       </span>"+"\t\t\t\t\t</dd>";
}
_30+="\t\t\t\t</dl>"+"\t\t\t</div>"+"\t\t</div>";
_30+="    <div id=\"shareFavContent\" class=\"share_post\">"+"       <div class=\"share_fields\">"+"\t\t\t\t<dl class=\"composer_fields clearfix\">"+"\t\t\t\t\t<dt id=\"dt_message_field\">"+"                       <img src=\""+XN.env.CDNstaticRoot+"a.gif\"  class=\"shareSend_HeadImg\"/>"+"\t\t\t\t\t</dt>"+"\t\t\t\t\t<dd class=\"field\" id=\"dd_message_field\">"+"\t\t\t\t\t\t<textarea name=\"message\" id=\"sharer_fav_message\"></textarea>"+"\t\t\t\t\t</dd>"+"\t\t\t\t</dl>"+"       </div>"+"    </div>";
}
_30+="\t <div id=\"shareAjaxResult\"></div>"+"</div>"+"<div class=\"loading\" id=\"popShareLoading\"><p>\u8f7d\u5165\u4e2d...</p></div>";
var _31=XN.DO.confirm({title:_24,message:_30,callBack:function(r){
if(r){
this.preventHide();
getData();
}else{
if(_23){
XN.APP.share.onlyShowSendContent=false;
}
XN.dom.enable();
this.remove();
}
},submit:"\u5206\u4eab",params:{addIframe:true},width:465,Y:XN.event.scrollTop()+100});
_31.setIndex(600);
_31.body.addClass("share_popup");
_31.header.hide();
_31.footer.hide();
$("shareSelectFriends").setContent(_17);
_17.reset();
XN.form.help($("popShareSendMessage")).setDefaultValue("\u6211\u5206\u4eab\u7684\u7406\u7531\u662f...");
XN.form.help($("sharer_popup_message")).setDefaultValue("\u6211\u5206\u4eab\u7684\u7406\u7531\u662f...");
XN.form.help($("sharer_fav_message")).setDefaultValue("\u6211\u6536\u85cf\u7684\u539f\u56e0\u662f...");
Mention.init([{obj:$("sharer_popup_message"),ugcId:"",ugcType:"share",ownerId:XN.user.id}]);
this.fireEvent("dialogPop",_31);
function loadSuccess(r){
var _34=r.responseText;
if(XN.string.isBlank(_34)){
$("popShareLoading").innerHTML="<p>\u8be5\u5206\u4eab\u4e0d\u5b58\u5728\u6216\u8005\u5df2\u88ab\u5220\u9664</p>";
setTimeout(function(){
_31.hide();
},1500);
return false;
}else{
try{
var j=XN.json.parse(_34);
if(j.code){
XN.DO.showError(j.msg);
}
_31.hide();
return false;
}
catch(e){
XN.log(e);
}
}
$("shareAjaxResult").innerHTML=_34;
$("popShareSubjectInput").value=$("popShareTitle").value;
try{
var _36=XN.dom.getElementsByClassName("shareSend_HeadImg",$("popShareContainer"),"img");
var _37=$("popShareParams").currenUserTinyurl.value;
XN.array.each(_36,function(i,v){
v.src=_37;
});
}
catch(e){
XN.log(e);
}
$("popShareContainer").show();
$("popShareLoading").hide();
_31.header.show();
_31.footer.show();
var _3a=$("popShareParams").link.value;
XN.app.share.pop.sysMode=false;
if(XN.config.share.enableSyncComment){
if(new RegExp("^http://blog."+XN.env.domain_reg).test(_3a)){
$("pop_share_syscomment").show();
$("pop_share_sclabel").innerHTML="\u8bc4\u8bba\u540c\u6b65\u53d1\u9001\u5230\u65e5\u5fd7";
XN.app.share.pop.sysMode=true;
}else{
if(new RegExp("^http://photo."+XN.env.domain_reg).test(_3a)){
$("pop_share_syscomment").show();
$("pop_share_sclabel").innerHTML="\u8bc4\u8bba\u540c\u6b65\u53d1\u9001\u5230\u7167\u7247";
XN.app.share.pop.sysMode=true;
}else{
XN.app.share.pop.sysMode=false;
}
}
}
$("sharer_popup_message").focus();
_31.refresh();
updateOuterShareTip();
return true;
}
function loadError(){
XN.DO.showError("\u83b7\u53d6\u5206\u4eab\u5931\u8d25,\u8bf7\u7a0d\u5019\u91cd\u8bd5");
}
var _3b=new XN.ui.tabView({selectedClass:"selected"}).addTab({label:"shareSendTab",content:"shareSendContent",active:_28.send,onActive:function(){
$("shareSendContent").show();
_2c="send";
var _3c=$("shareSelectFriends").getElementsByTagName("input");
XN.array.each(_3c,function(i,v){
if(v.id.indexOf("mfs_")!=-1){
v.focus();
}
});
}});
if(_18){
_3b.addTab({label:"sharePageTab",content:"sharePageContent",onActive:function(){
$("sharePageContent").show();
_2c="page";
}});
}
if(!_23){
_3b.addTab({label:"shareAddTab",content:"shareAddContent",active:_28.add,onActive:function(){
_2c="add";
$("sharer_popup_message").focus();
}});
_3b.addTab({label:"shareFavTab",content:"shareFavContent",active:_28.fav,onActive:function(){
_2c="fav";
$("sharer_fav_message").focus();
_31.getButton("\u5206\u4eab").setText("\u6536\u85cf");
},onInactive:function(){
_31.getButton("\u6536\u85cf").setText("\u5206\u4eab");
}});
}
if(_23){
$("shareSendContent").style.display="block";
}
XHR({url:url,data:_21,onSuccess:loadSuccess,onError:loadError,waitTime:5000,onTimeout:function(){
$("popShareLoading").innerHTML="<p>\u83b7\u53d6\u5206\u4eab\u6570\u636e\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5</p>";
setTimeout(function(){
_31.hide();
},1500);
}});
var rq=new XN.app.share.action(_22||{});
rq.addEvent("checkError",function(msg){
XN.DO.showError(msg);
});
var _41=null,_42=this;
rq.addEvent("beforePost",function(){
_41=XN.DO.confirm({msg:"<div id=\"share_msg_dialog\" class=\"share-success clearfix large\">\u6b63\u5728\u53d1\u9001\u8bf7\u6c42...</div><div id=\"pop_share_ads\"></div>",width:460,params:{showCloseButton:true}});
_41.footer.hide();
});
rq.addEvent("postSuccess",function(r,_44){
var _45,_46={a:"\u5206\u4eab\u6210\u529f",b:"\u4f60\u8fd8\u53ef\u4ee5<a href=\"javascript:void(0)\" onclick=\"pop_share_sendDefault()\">\u53d1\u9001\u7ed9\u90e8\u5206\u597d\u53cb</a>",c:"\u89c2\u770b\u66f4\u591a\u7cbe\u5f69\u5206\u4eab\uff0c<a target=\"_blank\" href=\"http://share."+XN.env.domain+"\">\u8bf7\u70b9\u51fb\u8fd9\u91cc\uff01</a>"};
if(_2c==="send"){
_46.b="\u5bf9\u65b9\u4f1a\u901a\u8fc7\u7ad9\u5185\u4fe1\u6536\u5230\u6b64\u5206\u4eab\u5185\u5bb9\u3002";
}else{
if(_2c==="fav"){
_46.a="\u6536\u85cf\u6210\u529f\uff01";
_46.b="\u6b64\u5185\u5bb9\u5df2\u6dfb\u52a0\u5230\u4f60\u7684\u6536\u85cf\u4e2d\uff0c\u5e76\u4e14\u4ec5\u4f60\u81ea\u5df1\u53ef\u89c1\u3002";
}
}
var _47=_44.adObjArry||[{url:"http://samsungdrama.renren.com/",img:"http://a.xnimg.cn/imgpro/share/samsung/ad.jpg"},{url:"http://caihongtang.renren.com/",img:"http://a.xnimg.cn/imgpro/share/caihongtang/b1101.jpg"}];
var _48=_47[Math.floor(_47.length*Math.random())];
_45=" <div class=\"share-success-tip\">"+"\t<p><img src=\"http://a.xnimg.cn/imgpro/share/share-success.gif\"/></p>"+"\t<p>"+_46.a+"</p>"+"</div>"+"<div class=\"share-success-more\">"+"<div id=\"share_success_link\"></div>"+"\t<p>"+_46.b+"</p>"+"\t<p>"+_46.c+"</p>"+"<p>"+"   <a href=\""+_48.url+"\" target=\"_blank\" >"+"       <img height=\"80\" width=\"280\" src=\""+_48.img+"\" />"+"   </a>"+"</p>"+"</div>";
$("share_msg_dialog").setContent(_45);
if(_2c=="add"){
var url=(_44.type==1?"http://blog.":"http://share.")+XN.env.domain+"/share/"+_44.userid+"/"+_44.shareid;
var _4a="<p class=\"gray\">\u590d\u5236\u5206\u4eab\u94fe\u63a5,\u901a\u8fc7QQ\u6216\u8005MSN\u53d1\u9001\u7ed9\u4f60\u7684\u597d\u53cb.</p>"+"<p><input type=\"text\" class=\"text-box\" style=\"width:210px;height:20px\" value=\""+url+"\" id=\"share_success_val\" />"+"<input type=\"button\" class=\"input-submit\" value=\"\u590d\u5236\" id=\"share_success_btn\" class=\"share_success_btn\" /></p>";
$("share_success_link").setContent(_4a);
copyExtralLink.init("share_success_btn",$("share_success_val").value);
}
_42.fireEvent("postSuccessDialogPop",_41);
window.closeShareSucTimer=setTimeout(function(){
XN.dom.enable();
try{
copyExtralLink.clip.hide();
_41.remove();
}
catch(e){
XN.log(e);
}
},5000);
});
rq.addEvent("postError",function(r){
XN.DO.showError(r||"\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5");
_41.hide();
});
function getRealVal(id){
var _v=$(id).value;
return _v.replace("\u6211\u5206\u4eab\u7684\u7406\u7531\u662f...","").replace("\u6211\u6536\u85cf\u7684\u539f\u56e0\u662f...","");
}
function getData(){
var _4e={},str;
if(_2c=="add"){
_4e=XN.form.serialize("popShareParams","hash");
if($("pop_share_sendcomment")&&!$("pop_share_sendcomment").disabled){
_4e["sendcomment"]=$("pop_share_sendcomment").checked;
}
_4e["tsc"]=$("tsc_popShare").value;
_4e["action"]="add";
_4e["auth"]=99;
_4e["body"]=getRealVal("sharer_popup_message");
if($("summary")){
_4e["summary"]=$("summary").innerHTML;
}
_4e["noteId"]=$("noteId")?$("noteId").value:0;
if(location.href.indexOf("http://page."+XN.env.domain+"")==0){
_4e.pageId=_4e.fromno||($("fromno")&&$("fromno").value);
}
rq.add(_4e);
}else{
if(_2c=="send"){
if(_23){
XN.APP.share.onlyShowSendContent=false;
}
_4e["tsc"]=$("tsc_popShare").value;
_4e["action"]="sharetofriend";
_4e["ids"]=_17.getIds();
_4e["form"]=XN.form.serialize("popShareParams","hash");
if($("summary")){
_4e["form"]["summary"]=$("summary").innerHTML;
}
_4e["body"]=getRealVal("popShareSendMessage");
_4e["subject"]=$("popShareSubjectInput").value;
_4e["noteId"]=$("noteId")?$("noteId").value:0;
rq.send(_4e);
}else{
if(_2c=="page"){
_4e=XN.form.serialize("popShareParams","hash");
_4e["sendcomment"]=false;
_4e["tsc"]=$("tsc_popShare").value;
_4e["action"]="add";
_4e["auth"]="99";
_4e["body"]=getRealVal("popShareSendMessageForPage");
if($("summary")){
_4e["summary"]=$("summary").innerHTML;
}
_4e["pageId"]=$("pagePid").value;
_4e["noteId"]=$("noteId")?$("noteId").value:0;
rq.add(_4e);
}else{
if(_2c==="fav"){
_4e=XN.form.serialize("popShareParams","hash");
_4e["sendcomment"]=false;
_4e["tsc"]=$("tsc_popShare").value;
_4e["action"]="add";
_4e["auth"]=-1;
_4e["body"]=getRealVal("sharer_fav_message");
if($("summary")){
_4e["summary"]=$("summary").innerHTML;
}
_4e["noteId"]=$("noteId")?$("noteId").value:0;
if(location.href.indexOf("http://page."+XN.env.domain+"")==0){
_4e.pageId=_4e.fromno||($("fromno")&&$("fromno").value);
}
rq.add(_4e);
}
}
}
}
}
pop_share_sendDefault=function(){
if(window.closeShareSucTimer){
clearTimeout(window.closeShareSucTimer);
}
$extend(_27,{tabDefault:"send"});
XN.app.share.pop(url,_27);
};
};
XN.app.share.showDialog=XN.app.share.pop;
XN.app.share.del=function(id,_51,_52,pid){
XN.DO.confirm({msg:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u6b64\u5206\u4eab\u5417",callBack:function(r){
if(r){
var url="http://share."+XN.env.domain+"/share/EditShare.do";
var _56="action=del&sid="+id;
if(pid){
_56+="&pid="+pid;
}
if(_51!=""){
_56+="&type="+_51;
}
if(pid&&location.href.indexOf("http://page."+XN.env.domain)==0){
url="http://page."+XN.env.domain+"/share/del";
_56="id="+id+"&pid="+pid;
}
if(pid&&location.href.indexOf("http://org."+XN.env.domain)==0){
url="http://org."+XN.env.domain+"/share/del";
_56="id="+id+"&pid="+pid;
}
new XN.NET.xmlhttp({url:url,data:_56,onSuccess:function(){
$("share_"+id).remove();
var _57=XN.dom.getElementsByClassName("share-itembox","shareList","div");
if(_57&&_57.length==0){
window.location.reload();
}
},onError:function(){
alert("\u5220\u9664\u9519\u8bef");
}});
}
}});
};
})();
function pop_share_new(url,_59){
XN.APP.share.showDialog(url,_59);
}
function create_share_div(id,_5b,_5c,ref){
var url="http://share."+XN.env.domain+"/share/ajax.do",_5f={};
if(ref){
_5f.reqeustURI="http://share."+XN.env.domain+"/share/submit.do?ref="+ref;
}
XN.APP.share.showDialog(url,{id:id,owner:_5b,host:_5c},_5f);
}
function create_share_feed(id,_61,_62){
var _63,_64;
if(_62=="pageThread"||_62=="pageBlog"||_62=="pageAlbum"){
if(!(XN.user&&!XN.string.isBlank(XN.user.id))){
XN.DO.showError("\u8bf7\u5148\u767b\u5f55\uff01");
return;
}
}
_63=function(_65){
switch(_65){
case "blog":
return "http://blog."+XN.env.domain+"/blog/"+_61+"/"+id+"/homeShare";
case "album":
return "http://photo."+XN.env.domain+"/photo/"+_61+"/album-"+id+"/share";
case "photo":
return "http://photo."+XN.env.domain+"/photo/"+_61+"/photo-"+id+"/share";
case "forum":
return "http://xiaozu."+XN.env.domain+"/xiaozu/"+id+"/js";
case "thread":
return "http://xiaozu."+XN.env.domain+"/xiaozu/"+id+"/thread/"+_61+"/share";
case "clike":
return "http://app."+XN.env.domain+"/like/likeInfo?feed_id="+id;
case "pageThread":
return "http://page."+XN.env.domain+"/"+id+"/group/"+_61+"/getShareData";
case "pageBlog":
return "http://page."+XN.env.domain+"/"+_61+"/note/"+id+"/share";
case "pageAlbum":
return "http://page."+XN.env.domain+"/"+_61+"/album/"+id+"/share";
}
};
var _66=function(_67){
switch(_67){
case "blog":
return "\u65e5\u5fd7";
case "album":
return "\u76f8\u518c";
case "photo":
return "\u7167\u7247";
case "forum":
return "\u5c0f\u7ec4";
case "thread":
return "\u5e16\u5b50";
case "pageThread":
return "\u8bdd\u9898";
case "pageBlog":
return "\u65e5\u5fd7";
case "pageAlbum":
return "\u76f8\u518c";
}
};
var _68=function(p,s){
new XN.net.xmlhttp({url:"http://blog."+XN.env.domain+"/share/incShareCount.do",data:"link="+encodeURIComponent((p.link||p.form.link))});
};
if(_62=="blog"&&!XN.app.share.hasBlogListener){
XN.app.share.hasBlogListener=true;
XN.app.share.addEvent("postSuccess",_68);
}
new XN.net.xmlhttp({url:_63(_62),method:"GET",onSuccess:function(r){
if(!XN.string.isJSON(r.responseText)){
if(r.responseText.indexOf("isProtected")!==-1){
XN.DO.showMessage("\u53ea\u6709\u6240\u6709\u4eba\u53ef\u89c1\u7684"+_66(_62)+"\u624d\u80fd\u88ab\u5206\u4eab :)","\u53cb\u60c5\u63d0\u793a");
}
if(r.responseText.indexOf("error")!==-1){
XN.DO.showMessage(_66(_62)+"\u5df2\u7ecf\u88ab\u5220\u9664 :(");
}
return;
}
try{
var _6c=XN.json.parse(r.responseText);
if(_6c.isProtected){
XN.DO.showMessage("\u53ea\u6709\u6240\u6709\u4eba\u53ef\u89c1\u7684"+_66(_62)+"\u624d\u80fd\u88ab\u5206\u4eab :)","\u53cb\u60c5\u63d0\u793a");
return;
}
if(_6c.albumid){
_6c.albumid=new Number(_6c.albumid).toString();
}
var url="http://share."+XN.env.domain+"/share/popup.do";
pop_share_new(url,_6c);
}
catch(e){
XN.log(e.description);
}
},onError:function(r){
XN.DO.showError("\u83b7\u53d6\u5206\u4eab\u9519\u8bef!");
}});
}
function create_share2friend_div(id,_70,_71){
var url="http://share."+XN.env.domain+"/share/ajax.do";
XN.APP.share.onlyShowSendContent=true;
pop_share_new(url,{id:id,owner:_70,host:_71});
}
function create_share_div_send(id,_74,_75){
var url="http://share."+XN.env.domain+"/share/ajax.do";
pop_share_new(url,{id:id,owner:_74,host:_75,tabDefault:"send",sysn:true});
}
function create_share_nosysn_send(id,_78,_79){
var url="http://share."+XN.env.domain+"/share/ajax.do";
pop_share_new(url,{id:id,owner:_78,host:_79,tabDefault:"send",sysn:false});
}
function create_share_nosysn(id,_7c,_7d){
var url="http://share."+XN.env.domain+"/share/ajax.do";
pop_share_new(url,{id:id,owner:_7c,host:_7d,sysn:false});
}
function create_share_sysn(id,_80,_81){
var url="http://share."+XN.env.domain+"/share/ajax.do";
pop_share_new(url,{id:id,owner:_80,host:_81,sysn:true});
}
function create_share_jebe(_83,_84){
var url="http://share."+XN.env.domain+"/share/ajax.do";
XN.app.share.showDialog(url,_83,{reqeustURI:_84});
}
function create_thread_share_div(tid,_87){
var url="/getshare.do";
url="http://share."+XN.env.domain+""+url;
pop_share_new(url,{tid:tid,tribeId:_87});
}
function create_share_edm(id,_8a,_8b){
var url="http://edm."+XN.env.domain+"/feedshare.do?id="+id;
new XN.net.xmlhttp({url:url,method:"GET",onSuccess:function(r){
if(!XN.string.isJSON(r.responseText)){
XN.DO.showMessage("\u670d\u52a1\u5668\u8fd4\u56de\u9519\u8bef");
return;
}
try{
var _8e=XN.json.parse(r.responseText);
var url="http://share."+XN.env.domain+"/share/popup.do";
pop_share_new(url,_8e);
}
catch(e){
XN.log(e.description);
}
},onError:function(r){
XN.DO.showError("\u83b7\u53d6\u5206\u4eab\u9519\u8bef!");
}});
}
function create_share_popup(_91){
var url="http://share."+XN.env.domain+"/share/ajax.do";
pop_share_new(url,_91);
}
function getShowTipText(val){
switch(val){
case "1":
return "\u65e5\u5fd7";
case "2":
return "\u76f8\u7247";
case "8":
return "\u76f8\u518c";
}
return "\u5185\u5bb9";
}
function pop_share(){
if($("isProtected")&&$("isProtected").value=="true"){
XN.DO.showMessage("\u53ea\u6709\u6240\u6709\u4eba\u53ef\u89c1\u7684"+getShowTipText($("type").value)+"\u624d\u80fd\u88ab\u5206\u4eab :)","\u53cb\u60c5\u63d0\u793a");
return false;
}
var _94={};
try{
_94=XN.FORM.serialize("popShareParams","hash");
}
catch(e){
_94.link=$("link").value;
_94.type=$("type").value;
_94.title=$("title").value;
_94.pic=$("pic").value;
_94.fromno=$("fromno").value;
_94.fromname=$("fromname").value;
_94.fromuniv=$("fromuniv").value;
_94.albumid=$("albumid").value;
_94.largeurl=$("largeurl").value;
}
_94.summary=$("summary").innerHTML;
var url="http://share."+XN.env.domain+"/share/popup.do";
pop_share_new(url,_94);
}
function pop_share_for_list(_96){
if($("isProtected")){
var _97=$("popShareParams_"+_96).getElementsByTagName("input");
var i=0;
while(i<_97.length){
if(_97[i].getAttribute("id")=="isProtected"){
if(_97[i].value=="true"){
var _99;
for(var j=0;j<_97.length;j++){
if(_97[j].getAttribute("name")=="type"){
_99=_97[j].value;
}
}
XN.DO.showMessage("\u53ea\u6709\u6240\u6709\u4eba\u53ef\u89c1\u7684"+getShowTipText(_99)+"\u624d\u80fd\u88ab\u5206\u4eab :)","\u53cb\u60c5\u63d0\u793a");
return false;
}
break;
}
i++;
}
}
var _9b=XN.FORM.serialize("popShareParams_"+_96,"hash");
_9b.summary=$("summary_"+_96).innerHTML;
_9b.sysn=false;
var url="http://share."+XN.env.domain+"/share/popup.do";
pop_share_new(url,_9b);
var _9d=function(p,s){
new XN.net.xmlhttp({url:"http://blog."+XN.env.domain+"/share/incShareCount.do",data:"link="+encodeURIComponent((p.link||p.form.link))});
};
if(_9b.type=="1"&&!XN.app.share.hasBlogListener){
XN.app.share.hasBlogListener=true;
XN.app.share.addEvent("postSuccess",_9d);
}
}
function delete_share(id,_a1,_a2,pid){
XN.APP.share.del(id,_a1,_a2,pid);
}
function pop_share_msg(){
var url="http://share."+XN.env.domain+"/share/popup.do";
var _a5=XN.form.serialize($("popShareParams"),"hash");
pop_share_new(url,_a5);
}
function show_or_hide(_a6,_a7,_a8){
if(_a6=="show"){
$("share_comment_"+_a7).style.display="block";
}else{
if(_a6=="hide"){
$("share_comment_"+_a7).style.display="none";
$("share_footer_"+_a7).style.display="block";
$("share_"+_a7).scrollIntoView();
}
}
}
function share_hide_comments(_a9,_aa){
ge("share_comment_"+_a9).style.display="none";
show_or_hide("hide",_a9,_aa);
}
function share_show_comments(_ab,_ac,_ad){
var _ae=$("boxcont_"+_ab);
var _af={share_id:_ab,share_owner:_ac};
new XN.net.xmlhttp({url:"http://share."+XN.env.domain+"/share/showcomment.do",data:"post="+XN.json.build(_af),onSuccess:function(r){
_ae.innerHTML=r.responseText;
$("comment"+_ab).focus();
Mention.init([{obj:$("comment"+_ab),ugcId:"",ugcType:"share",ownerId:XN.user.id}]);
},onError:function(){
alert("\u52a0\u8f7d\u56de\u590d\u5931\u8d25");
}});
show_or_hide("show",_ab,_ac);
}
function share_reply_comment(_b1,id,_b3){
var _b4=$("comment_form_"+_b1);
_b4.repetNo.value=id;
if(!window._replyTextFix){
window._replyTextFix={};
}
var _b5=_b4.comment.value;
if(!!_replyTextFix[_b1]){
_b5=_b5.replace(_replyTextFix[_b1].preText,"");
}
_replyTextFix[_b1]={preText:"\u56de\u590d"+_b3+":"};
_b4.comment.value=_replyTextFix[_b1].preText+_b5;
new XN.FORM.inputHelper(_b4.comment).focus();
}
function share_add_comment_submit(_b6){
var _b7=$("comment_form_"+_b6);
var _b8=_b7.comment.value;
if(XN.STRING.isBlank(_b8)){
XN.DO.showError("\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");
return false;
}
if(_b8.length>500){
XN.DO.showError("\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u8d85\u8fc7500\u5b57");
return false;
}
var _b9=$("ajax_msgerror");
if(_b9){
_b9.parentNode.removeChild(_b9);
}
_b7.submit_comment.disabled=true;
new XN.net.xmlhttp({url:"http://share."+XN.env.domain+"/share/addcomment.do",data:XN.form.serialize("comment_form_"+_b6),onSuccess:function(r){
var _bb=r.responseText;
if(!_bb.match(/<.+?>/g)||_bb.match(/<.+?>/g).length===0){
if(_bb=="needVerfy"){
try{
if(!$("shareVerifyPic_"+_b6)){
var img=new Image();
img.className="validate-num";
img.id="shareVerifyPic_"+_b6;
img.onclick="this.src+=Math.random();return false";
img.src="http://icode."+XN.env.domain+"/getcode.do?t=shareInfoCode"+_b6+"&r="+Math.random();
$("shareVerify_"+_b6).appendChild(img);
}
$("shareVerify_"+_b6).show();
}
catch(e){
XN.log(e.description);
}
XN.DO.alert("\u60a8\u7684\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u9a8c\u8bc1\u7801");
}else{
if(!_bb.length==0){
XN.DO.alert(_bb);
}
}
}else{
var rps=XN.dom.getElementsByClassName("replies",$("commContainer_"+_b6));
var _be=$(rps[rps.length-1]);
_be.show();
_be.appendHTML(_bb);
if(!_bb.match("ajax_msgerror")){
_b7.comment.value="";
}
try{
if($("sysnblog")){
$("sysnblog").checked=true;
$("sysnblog").disabled=false;
}
}
catch(e){
}
}
try{
if($("shareVerifyPic_"+_b6)){
$("shareVerifyPic_"+_b6).src+=Math.random();
$("shareInfoCode"+_b6).value="";
$("shareInfoCode"+_b6).blur();
}
}
catch(e){
XN.log(e.description);
}
_b7.submit_comment.disabled=false;
_b7.repetNo.value=0;
},onError:function(){
alert("\u56de\u590d\u5931\u8d25");
_b7.submit_comment.disabled=false;
}});
}
function share_delete_comment(obj,_c0,_c1,_c2){
var _c3="\u786e\u5b9a\u8981\u5220\u9664\u5417?";
if(XN.page&&XN.page.data&&XN.page.data.type==1&&XN.page.data.isAdmin){
_c3+="<label style=\"display:block;margin-top:5px;\"><input id=\"banReply\" type=\"checkbox\" value=\"1\"> \u540c\u65f6\u5c06\u8be5\u7528\u6237\u52a0\u5165\u9ed1\u540d\u5355</label>";
}
XN.DO.confirm({title:"\u5220\u9664\u8be5\u8bc4\u8bba",msg:_c3,callBack:function(r){
if(r){
try{
var _c5=Sizzle("#comment_"+_c2+" > a.avatar")[0].getAttribute("href");
_c5=_c5.match(/\bid=(\d+)\b/)[1];
var ban=jQuery("#banReply").is(":checked")?1:0;
if(ban){
jQuery.post("http://page.renren.com/ajaxBanFans",{pid:XN.page.data.id,ban:ban,createId:_c5});
}
}
catch(e){
XN.log(e);
}
var _c7={share_id:_c0,share_owner:_c1,comment_id:_c2};
var _c8=$("comment_"+_c2);
_c8.setContent(new XN.NET.xmlhttp({url:"http://share."+XN.env.domain+"/share/deletecomment.do",data:"post="+encodeURIComponent(XN.JSON.build(_c7)),onSuccess:function(){
_c8.parentNode.removeChild(_c8);
try{
var _c9=XN.dom.getElementsByClassName("replies");
var _ca=_c9[_c9.length-1].getElementsByTagName("dd").length;
if(_ca==0){
XN.element.hide(_c9[_c9.length-1]);
}
}
catch(e){
XN.log(e);
}
},onError:function(){
alert("\u5220\u9664\u9519\u8bef");
}}));
}
}});
}
function share_show_add_comment(obj,_cc){
var _cd=obj.parentNode;
remove_node(_cd);
var _ce=$("add_comment_input"+_cc);
show(_ce);
var _cf=$("add_comment_button"+_cc);
_cf.disabled=false;
var _d0="comment"+_cc;
$(_d0).focus();
return false;
}
function share_show_more_comments(_d1,_d2){
var url="http://share."+XN.env.domain+"/share/getmorecomment.do";
var _d4=function(){
var _d5=$("commContainer_"+_d1).getElementsByTagName("dd")[0];
return _d5.id.match(/\d+/)[0];
};
var _d6=function(_d7,_d8){
var dl=$element("dl");
dl.className="replies";
var _da="",_db;
var _dc=parseInt(XN.cookie.get("id"),10);
var _dd=false;
if($("isAdmin")){
$("isAdmin").value=="true"?true:false;
}
for(var i=0;_d7[i];i++){
_db=_d7[i];
var _df=_db.keepUse?" lively-user":"";
var _e0=_db.keepUse?"\u8fde\u7eed\u767b\u5f557\u5929, \u5373\u53ef\u83b7\u5f97\u6a59\u540d\u7279\u6743":_db.name;
var _e1="";
var _e2="http://admin.renren.com/admin/newuserreport.do?type=30&owner="+_d2+"&contentId="+_db.id+"&userId="+_db.author+"&origURL="+encodeURIComponent(document.location.href);
if(!_db.showDelete){
_e1="<span class=\"float-right\"><a target=\"_blank\" href=\""+_e2+"\" class=\"reply-report\">\u4e3e\u62a5</a></span>";
}
_da+="<dd id=\"comment_"+_db.id+"\">"+_e1+"     <a class=\"avatar\" title=\""+_db.name+"\" href=\"http://www."+XN.env.domain+"/profile.do?id="+_db.author+"\">"+"            <img height=\"50\" width=\"50\" src=\""+_db.headUrl+"\" alt=\""+_db.name+"\" class=\"avatar\"/>"+"     </a>"+"     <div class=\"info\">";
if(_db.showDelete){
_da+="            <span class=\"float-right\">"+"                 <a class=\"x-to-hide\" onclick=\"share_delete_comment(this,"+_d8+","+_d2+","+_db.id+");\" href=\"javascript:void(0)\"></a>"+"            </span>";
}
_da+="            <a title=\""+_e0+"\" href=\"http://www."+XN.env.domain+"/profile.do?id="+_db.author+"\" class=\""+_df+"\">"+_db.name+"</a> "+"            <span class=\"time\"> "+_db.time+" </span>"+"      </div>"+"      <div class=\"reply\">"+"            <p class=\"content\">"+_db.body+"            </p>";
if(_dc!==_db.author){
_da+="<a onclick=\"share_reply_comment("+_d8+","+_db.author+",'"+_db.name+"');return false\" href=\"#nogo\">\u56de\u590d</a>";
}
_da+="      </div>"+"</dd>";
}
dl.innerHTML=_da;
return dl;
};
var _e3={shareId:_d1,owner:_d2,commentId:_d4()};
$("tempLoading_"+_d1).style.visibility="visible";
var xhr=new XN.net.xmlhttp({url:url,data:XN.array.toQueryString(_e3),onSuccess:function(r){
$("tempLoading_"+_d1).style.visibility="hidden";
var j=XN.json.parse(r.responseText);
if(j.code!==0){
XN.DO.alert(j.msg);
return;
}
if(j.code==0){
if(!j.hasMore){
$("showMore_"+_d1).hide();
}
var _e7=$("commContainer_"+_d1);
_e7.insertBefore(_d6(j.comments,_d1),_e7.findFirstClass("replies"));
}
},onError:function(r){
XN.DO.showError("\u670d\u52a1\u5668\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
}});
}
function shareonkeydown(e){
var k=(e.which)?e.which:window.event.keyCode;
if(k==13){
sharelink1();
return;
}
}
function sharelink1(){
var _eb=$("sharelink").weblink.value;
var _ec=/\s/ig;
_eb=_eb.replace(_ec,"");
if((_eb=="")||(_eb=="http://")||(_eb=="\u5728\u8fd9\u91cc\u8f93\u5165\u4f60\u8981\u5206\u4eab\u7684\u7ad9\u5916\u94fe\u63a5\u3001\u89c6\u9891\u3001\u97f3\u9891\u7684\u5730\u5740")){
alert("\u8bf7\u8f93\u5165\u4e00\u4e2a\u7f51\u5740");
return false;
}
if(_eb.substr(0,7)!="http://"&&_eb.substr(0,6)!="ftp://"&&_eb.substr(0,8)!="https://"){
_eb="http://"+_eb;
$("isUrl").value=_eb;
}
if(new RegExp("^http://([A-Za-z0-9.]*)"+XN.env.domain_reg,"i").test(_eb)){
alert("\u7ad9\u5185\u5185\u5bb9\u53ef\u4ee5\u76f4\u63a5\u5206\u4eab\uff0c\u6b64\u5904\u8bf7\u5206\u4eab\u7ad9\u5916\u5185\u5bb9");
return false;
}
var _ed=$("share-pre");
_ed.style.display="none";
document.sharelink.submit();
var _ee=$("share-pre-hidden");
_ee.style.display="block";
_ee.src="http://s.xnimg.cn/img/upload_progress.gif";
}
XN.dom.ready(function(){
var _ef=$("friendsPanel");
if(_ef){
var s=new XN.ui.friendSelectorWithMenu({autoSelectFirst:true});
_ef.setContent(s);
s.menu.setWidth(s.input.offsetWidth);
s.addEvent("select",function(p){
if(location.href.indexOf("http://blog."+XN.env.domain+"")!=-1){
location.href="http://blog."+XN.env.domain+"/friendsBlog.do?friend="+p.id;
}else{
if(location.href.indexOf("http://share."+XN.env.domain+"")!=-1){
location.href="http://share."+XN.env.domain+"/share/ShareList.do?select=1&id="+p.id;
}
}
});
new XN.FORM.inputHelper(s.input).setDefaultValue("\u8f93\u5165\u597d\u53cb\u59d3\u540d...");
}
});
function updateOuterShareTip(){
function copyShareUrl(){
if(window.clipboardData.setData("Text",$("shareLinkVal").value)){
$("copyTip").innerHTML="(\u94fe\u63a5\u5df2\u590d\u5236)";
}else{
$("shareLinkVal").select();
$("copyTip").innerHTML="(\u8bf7\u624b\u52a8\u590d\u5236)";
}
}
var _f2=$("copyTip");
if(!_f2||!$("shareLinkVal")){
return;
}
if(window.clipboardData){
$("shareLinkVal").style.width="210px";
_f2.innerHTML="<a href=\"javascript:;\" style=\"margin-left:5px;\">\u590d\u5236</a>";
_f2.getElementsByTagName("a")[0].onclick=copyShareUrl;
}else{
_f2.innerHTML="(Ctrl+C\u6216\u53f3\u952e\u590d\u5236)";
}
_f2.show();
}
$extend(XN.app.share,{shareSubmit:function(){
var _f3=XN.DOM.getElementsByClassName("vote-item","input");
var _f4;
for(var i=0;i<_f3.length;i++){
if(_f3[i].value.length>20){
XN.DO.alert("\u6bcf\u4e2a\u6295\u7968\u9009\u9879\u4e0d\u80fd\u8d85\u8fc720\u4e2a\u5b57");
return false;
}
}
var _f6=XN.DOM.getElementsByClassName("input-button",$("shareForm"))[0];
_f6.disabled=true;
var _f7=XN.form.serialize($("shareForm"));
var _f8="/share/ajaxSaveShare.do";
var xhr=new XN.net.xmlhttp({url:_f8,data:_f7,onSuccess:function(r){
if(r.responseText.indexOf("<title>\u6821\u5185 \u4eba\u4eba\u7f51 - \u62b1\u6b49\uff0c\u51fa\u9519\u4e86\u3002</title>")!=-1){
XN.DO.alert("\u670d\u52a1\u5668\u51fa\u9519,\u8bf7\u7a0d\u5019\u91cd\u8bd5");
return;
}
var _fb=XN.JSON.parse(r.responseText);
if(_fb.code!=0){
_f6.disabled=false;
if(_fb.code==-7){
XN.DO.confirm({msg:_fb.msg,title:"\u63d0\u793a",callBack:function(r){
location.href="http://share."+XN.env.domain;
}});
return false;
}
XN.DO.alert(_fb.msg);
}else{
location.href=_fb.msg;
}
},onError:function(){
XN.DO.alert("\u670d\u52a1\u5668\u51fa\u9519,\u8bf7\u7a0d\u5019\u91cd\u8bd5");
_f6.disabled=false;
}});
return false;
},checkForm:function(){
var _fd=XN.DOM.getElementsByClassName("vote-item","input");
if(_fd.length==0){
return;
}
for(var i=0;i<_fd.length;i++){
(function(){
var m;
XN.event.addEvent(_fd[i],"focus",function(e){
m=new checkMaxLength(XN.event.element(e||window.event));
m.startCheck();
});
XN.event.addEvent(_fd[i],"blur",function(e){
if(m){
m.stopCheck();
}
});
})();
}
},updateVoteUI:function(_102){
var _103=XN.DOM.getElementsByClassName("pitem",$("share-vote-info"),"div");
$("totalVoteCount").innerHTML=parseInt($("totalVoteCount").innerHTML,10)+1;
var _104=_102.options;
for(var i=0;i<_103.length;i++){
(function(_106){
var id=_103[_106].id.replace("item_","");
$("bar_"+id).style.width=parseInt(_104[_106].percent*160/100,10)+"px";
$("itemCount_"+id).innerHTML=_104[_106].count;
$("itemPercent_"+id).innerHTML="("+_104[_106].percent+"%)";
})(i);
}
},toggleVoteItems:function(){
if(!!!$("summary-wrap")){
return;
}
var _108=$("summary-wrap").getElementsByTagName("a")[0];
if($("vote-item-list")){
XN.EVENT.addEvent(_108,"click",function(e){
XN.EVENT.element(e||window.event).toggleClass("itemsClose");
$("vote-item-list").toggleClass("hide");
});
}
},itemToggle:function(){
var _10a=XN.DOM.getElementsByClassName("pitem",$("share-vote-info"),"div");
if(_10a.length==0){
return;
}
var _10b="/share/ajaxVoteShare.do";
for(var i=0;i<_10a.length;i++){
_10a[i].onmousemove=(function(i){
return function(){
var tip=XN.DOM.getElementsByClassName("voteTip",this)[0];
this.style.background="#c9dcec";
tip.style.visibility="visible";
};
})(i);
_10a[i].onmouseout=(function(i){
return function(){
var tip=XN.DOM.getElementsByClassName("voteTip",this)[0];
this.style.background="#FFFFFF";
tip.style.visibility="hidden";
};
})(i);
_10a[i].onclick=(function(i){
return function(){
var _112=XN.array.toQueryString({optionId:this.id.replace("item_",""),shareId:$("shareSourceId").value,shareOwner:$("shareSourceOwner").value,tsc:$("shareTsc").value});
var xhr=new XN.net.xmlhttp({url:_10b,data:_112,onSuccess:function(r){
var _115=XN.json.parse(r.responseText);
if(_115.code!=0){
XN.DO.showMessage(_115.msg,"\u53cb\u60c5\u63d0\u9192");
}else{
XN.app.share.updateVoteUI(_115);
if(parseInt($("shareSourceOwner").value,10)!=XN.cookie.get("id")){
XN.app.share.shareAfterVote();
}
}
},onError:function(r){
XN.DO.alert("\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u5019\u91cd\u8bd5");
}});
};
})(i);
}
},shareAfterVote:function(){
var c=XN.DO.confirm({title:"\u5206\u4eab\u7ed9\u597d\u53cb",message:"\u5185\u5bb9\u5f88\u7cbe\u5f69\uff0c\u5206\u4eab\u7ed9\u597d\u53cb\uff1f",callBack:function(r){
if(r){
var xhr=new XN.net.xmlhttp({url:"/share/ajaxSaveVoteShare.do",data:XN.array.toQueryString({shareId:$("shareSourceId").value,shareUserId:$("shareSourceOwner").value,tsc:$("shareTsc").value}),onSuccess:function(r){
var _11b=XN.json.parse(r.responseText);
if(_11b.code!=0){
XN.DO.showMessage(_11b.msg,"\u5206\u4eab\u63d0\u793a");
}else{
XN.DO.showMessage("\u5206\u4eab\u6210\u529f\uff01");
}
},onError:function(){
XN.DO.alert("\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u5019\u91cd\u8bd5");
}});
}
}});
}});
function checkMaxLength(el){
var s=this;
this.max=30;
this.checkFun=function(){
var _11e=XN.DOM.getElementsByClassName("share-check-msg",el.parentNode,"span");
if(el.value.length>=20){
el.value=el.value.substr(0,20);
if(_11e.length==0){
var _11f=document.createElement("span");
_11f.className="share-check-msg";
_11f.style.cssText="position:relative;right:0px;text-align:right;display:block;top:-7px;";
_11f.innerHTML="\u6700\u591a\u53ea\u80fd\u8f93\u516520\u4e2a\u5b57";
el.parentNode.appendChild(_11f);
XN.event.addEvent(el,"keydown",function(e){
XN.event.element(e||window.event).value=XN.event.element(e||window.event).value.substr(0,20);
});
}else{
_11e[0].style.display="block";
}
}else{
if(_11e.length!=0){
_11e[0].style.display="none";
}
}
};
this.startCheck=function(){
this._timer=setInterval(this.checkFun,200);
};
this.stopCheck=function(){
clearInterval(this._timer);
this._timer=null;
};
}
XN.app.share.hotShareRoll=function(){
var _121,_122=4000;
var _123=1;
var _124=$("previewImg");
var _125=$("previewLink");
var _126=$("share_hot_video_list").getElementsByTagName("a");
var _127=$("share_hot_video_from");
var _128=$("share_hot_video_count");
var _129=$("share_hot_video_quote");
var _12a=$("share_hot_video_btn");
var _12b=null;
var show=function(el){
if(!$(el)){
clearTimeout(_121);
return false;
}
_12e(el);
var lidx=_123?_123-1:_126.length-1;
if(/current/.test(_126[lidx].parentNode.className)){
XN.element.delClass(_126[lidx].parentNode,"current");
}
if(_12b){
XN.element.delClass(_12b.parentNode,"current");
}
XN.element.addClass(el.parentNode,"current");
};
var _12e=function(el){
var link=el.href;
var _132=XN.json.parse(el.getAttribute("vinfo").replace(/[\n\r\t]/g,""));
_124.src=_132.img;
_125.href=link;
_125.title=el.title;
_127.setContent("\u6765\u6e90:"+_132.from);
_128.setContent("\u5206\u4eab:"+_132.count+"\u6b21");
if(XN.string.trim(_132.quote).length>0){
_132.quote="<img class=\"quote-l\" src=\""+XN.env.CDNstaticRoot+"a.gif\"/>"+_132.quote+"<img class=\"quote-r\" src=\""+XN.env.CDNstaticRoot+"a.gif\"/>";
}else{
_132.quote="&nbsp;";
}
_129.setContent(_132.quote);
if(_12a){
_12a.onclick=function(){
create_share_div(_132.shareInfo[0],_132.shareInfo[1],_132.shareInfo[2]);
};
}
};
var roll=function(){
_121=setTimeout(function(){
show(_126[_123]);
_121=setTimeout(arguments.callee,_122);
_123==_126.length-1?_123=0:_123+=1;
},_122);
};
XN.array.each(_126,function(i,v){
XN.event.addEvent(v.parentNode,"mouseover",function(e){
var el=XN.event.element(e);
if(el.tagName.toLowerCase()==="li"){
el=el.getElementsByTagName("a")[0];
}
clearTimeout(_121);
var _138=_123?_123-1:_126.length-1;
XN.element.delClass(_126[_138].parentNode,"current");
_12e(el);
if(_12b){
XN.element.delClass(_12b.parentNode,"current");
}
XN.element.addClass(el.parentNode,"current");
_12b=el;
});
XN.event.addEvent(v.parentNode,"mouseout",function(e){
roll();
});
});
$("previewLink").onmouseover=function(e){
clearTimeout(_121);
};
$("previewLink").onmouseout=function(e){
roll();
};
roll();
};
XN.DOM.readyDo(function(){
if($("previewImg")&&$("previewLink")){
XN.app.share.hotShareRoll();
}
});
var edmComments={};
edmComments.urls={reply:"http://status."+XN.env.domain+"/feedcommentreply.do",getList:"http://status."+XN.env.domain+"/feedcommentretrieve.do",del:"http://status."+XN.env.domain+"/feedcommentdelete.do"};
edmComments.tplComment=function(_13c,_13d){
var rt=["        <dd id=\"comment_"+_13d.id+"\">","        <a class=\"avatar\" title=\""+_13d.ubname+"\" href=\"http://www.renren.com/profile.do?id="+_13d.ubid+"\">","            <img height=\"50\" width=\"50\" src=\""+_13d.replyer_tinyurl+"\" alt=\""+_13d.ubname+"\" class=\"avatar\">","        </a>","        <div class=\"info\">"];
if(_13d.ubid==XN.cookie.get("id")||edmComments.curIsAdmin){
rt.push("                <span class=\"float-right\">","                    <a class=\"x-to-hide\" onclick=\"share_del_edm_ct("+_13c+","+_13d.id+");\" href=\"javascript:void(0)\"></a>","                </span>");
}
rt.push("            <a  title=\""+_13d.ubname+"\" href=\"http://www.renren.com/profile.do?id="+_13d.ubid+"\">"+_13d.ubname+"</a>","            <span class=\"time\">",_13d.replyTime,"            </span>","        </div>","        <div class=\"reply\">","            <p class=\"content\">","                <span>"+_13d.replyContent+"</span>","            </p>");
if(_13d.ubid!=XN.cookie.get("id")){
rt.push("<a onclick=\"share_reply_comment("+_13c+","+_13d.ubid+",'"+_13d.ubname+"');return false;\" href=\"#nogo\">\u56de\u590d</a>");
}
rt.push("        </div>","        </dd>");
return rt.join("");
};
edmComments.getComments=function(_13f,_140,_141){
if(XN.string.trim($("boxcont_"+_141).innerHTML)!==""){
var el=$("share_comment_"+_141);
el.getStyle("display")!=="none"?el.hide():el.show();
return;
}
var _143={doingId:_13f,owner:_140,source:_13f,feedId:0,t:5};
var _144=function(r){
edmComments.curIsAdmin=XN.json.parse(r.responseText).isAdmin;
var rt=["<div id=\"commContainer_"+_13f+"\">","    <dl class=\"replies\">"];
var json=XN.json.parse(r.responseText).replyList;
for(var i=0,j=json.length;i<j;i++){
rt.push(edmComments.tplComment(_13f,json[i]));
}
rt.push("    </dl>","</div>","<div class=\"postcomment\">","    <form onkeydown=\"if(event.keyCode == 13 &amp;&amp; event.ctrlKey){share_rp_edm_ct("+_13f+");}\" id=\"comment_form_"+_13f+"\" onsubmit=\"return false;\" method=\"post\">","        <textarea class=\"cmtbody w370\" id=\"comment"+_13f+"\" name=\"comment\"></textarea>","        <p class=\"postbtn\">","            <input type=\"button\" onclick=\"share_rp_edm_ct("+_13f+");\" class=\"input-button\" value=\"\u53d1\u8868\u8bc4\u8bba\" name=\"submit_comment\" id=\"submit_comment\">","            <input type=\"button\" onclick=\"$('share_comment_"+_141+"').hide();\" class=\"input-button gray\" value=\"\u53d6\u6d88\">","        </p>","        <input type=\"hidden\" id=\"repetNo\" name=\"repetNo\" value=\"0\">","        <input type=\"hidden\" id=\"currentShareOwner_"+_13f+"\"  value=\""+_140+"\">","        <input type=\"hidden\" id=\"shareId_"+_13f+"\"  value=\""+_141+"\">","    </form>","</div>");
$("share_comment_"+_141).show();
$("boxcont_"+_141).setContent(rt.join(""));
};
var _14a=function(r){
XN.DO.showMessage("\u56de\u590d\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u91cd\u8bd5");
};
new XN.net.xmlhttp({url:edmComments.urls["getList"],data:XN.array.toQueryString(_143),onSuccess:_144,onError:_14a});
};
edmComments.replyComment=function(_14c){
var _14d=$("comment_form_"+_14c).repetNo.value;
var _14e={doingId:$("shareId_"+_14c).value,owner:$("currentShareOwner_"+_14c).value,rplayerId:_14d,replyTo:_14d,source:_14c,feedId:0,c:$("comment"+_14c).value,t:5};
var _14f=function(r){
var cmt=XN.json.parse(r.responseText);
cmt.ubid=cmt.replyerId;
cmt.ubname=cmt.replyerName;
cmt.replyer_tinyurl=cmt.replyerHead;
var _152=edmComments.tplComment(_14c,cmt);
var el=XN.dom.getElementsByClassName("replies",$("cmtContainer_"+_14c),"dl")[0];
el.innerHTML+=_152;
$("comment"+_14c).value="";
};
var _154=function(r){
XN.DO.showMessage("\u56de\u590d\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u91cd\u8bd5");
};
if(XN.string.isBlank(_14e.c)){
XN.DO.alert("\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");
return false;
}
new XN.net.xmlhttp({url:edmComments.urls["reply"],data:XN.array.toQueryString(_14e),onSuccess:_14f,onError:_154});
};
edmComments.delComment=function(_156,_157){
var _158={doingId:_156,owner:0,replyId:_157,feedId:0,source:_156,t:5};
var _159=function(r){
$("comment_"+_157).remove();
};
var _15b=function(r){
XN.DO.showMessage("\u5220\u9664\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002");
};
var _15d=function(){
new XN.net.xmlhttp({url:edmComments.urls["del"]+"?"+XN.array.toQueryString(_158),method:"GET",onSuccess:_159,onError:_15b});
};
XN.DO.confirm({title:"\u5220\u9664\u8be5\u8bc4\u8bba",msg:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",callBack:function(r){
if(r){
_15d();
}
}});
};
window.share_del_edm_ct=edmComments.delComment;
window.share_show_edm_comments=edmComments.getComments;
window.share_rp_edm_ct=edmComments.replyComment;
if(!window.asyncHTMLManager){
getQueryString=XN.string.getQuery;
}else{
getQueryString=function(key,url){
url=url||window.location.href+"";
if(url.indexOf("#")!==-1){
url=url.substring(url.indexOf("#"));
}
var rts=[],rt;
var _163=new RegExp("(^|\\?|&)"+key+"=([^&]*)(?=&|#|$)","g");
while((rt=_163.exec(url))!=null){
rts.push(decodeURIComponent(rt[2]));
}
if(rts.length==0){
return null;
}
if(rts.length==1){
return rts[0];
}
return rts;
};
}
XN.dom.ready(function(){
if(!!$("isUrl")&&!getQueryString("comment")){
if(!(/share_\d+/).test(location.hash)){
setTimeout(function(){
new XN.form.inputHelper($("isUrl")).focus();
},2000);
}
}
});
XN.dom.ready(function(){
var _164=getQueryString("comment");
if(!_164||!getQueryString("share_id")){
return;
}
$("share_comment_"+getQueryString("share_id")).scrollIntoView();
if(!getQueryString("edmId")){
share_show_comments(getQueryString("share_id"),getQueryString("userid"));
}else{
share_show_edm_comments(getQueryString("edmId"),getQueryString("id"),getQueryString("share_id"));
}
});
copyExtralLink={};
copyExtralLink.init=function(_165,val){
this.btnId=_165;
this.copyVal=val;
this.createClient();
};
copyExtralLink.createClient=function(){
var txt=this._link;
var This=this;
if(XN.BROWSER.IE){
XN.event.addEvent(This.btnId,"click",function(){
if(This.clip){
This.clip.reposition(This.btnId);
return;
}
});
}
if(typeof ZeroClipboard!="undefined"){
this.createClip();
return;
}
XN.loadFile(XN.env.staticRoot+"jspro/album/ZeroClipboard.js",function(){
ZeroClipboard.setMoviePath(XN.env.CDNstaticRoot+"swf/album/ZeroClipboard.swf");
This.createClip();
});
};
copyExtralLink.createClip=function(){
if(this.clip){
this.clip.reposition(this.btnId);
this.clip.show();
this.clip.setText(this.copyVal);
return false;
}
var This=this;
var clip=new ZeroClipboard.Client();
clip.setHandCursor(true);
clip.addEventListener("complete",function(_16b,text){
XN.DO.showMessage("\u5df2\u7ecf\u590d\u5236\u5230\u526a\u8d34\u677f");
_16b.hide();
});
clip.setText(this.copyVal);
clip.glue(this.btnId);
this.clip=clip;
};
XN.app.share.CommentManger={};
(function(ns){
ns.init=function(_16e){
this._options={};
$extend(this._options,_16e);
this.initTabs();
this.initProxy();
try{
var _16f=getActiveILike(),This=this;
_16f.addEvent("startAdd",function(){
This.tabView.setCurrentTab("friendCmts");
});
_16f.addEvent("remove",function(){
This.tabView.setCurrentTab("friendCmts");
});
}
catch(e){
XN.log(e);
}
};
ns.initTabs=function(){
var This=this;
this.tabs=[];
this.tabView=new XN.ui.tabView({selectedClass:"select"});
XN.array.each(this.getOptions("tabs"),function(i,v){
var _174=(v.content==This.getOptions("activeTab"));
This.tabs.push(v.tab);
This.tabView.addTab({label:v.tab,content:v.content,active:_174,onActive:function(){
This.activeTab=v.tab;
This.onTabChange(this);
}});
if(_174){
This.activeTab=v.tab;
}
});
};
ns.onTabChange=function(tab){
$(this.getOptions("cmtForm")).reset();
$(this.getOptions("cmtToInput")).value=0;
};
ns.initProxy=function(){
var This=this;
XN.event.addEvent(this.getOptions("cmtsListCon"),"click",function(e){
var el=XN.event.element(e||window.event),cmd=el.getAttribute("cmd");
if(cmd){
cmd=XN.json.parse(cmd);
switch(cmd.t){
case "reply":
This.replyCmt(cmd);
break;
case "del":
This.delCmt(cmd);
break;
}
}
});
};
ns.delCmt=function(obj){
var This=this,p=obj;
var _17d=function(r){
if(!r){
return false;
}
var post={share_id:p.sid,share_owner:p.oid,comment_id:p.cid};
new XN.NET.xmlhttp({url:"http://share."+XN.env.domain+"/share/deletecomment.do",data:"post="+encodeURIComponent(XN.JSON.build(post)),onSuccess:function(r){
var j=XN.json.parse(r.responseText);
if(j.status!=1){
XN.DO.showError(j.msg);
}else{
if(j.status==1){
XN.array.each(This.tabs,function(i,v){
if($(v+"_comment_"+p.cid)){
$(v+"_comment_"+p.cid).remove();
}
if($(v+"_comment_list").getElementsByTagName("dd").length==0){
$(v+"_comment_list").hide();
}
});
}
}
},onError:function(){
alert("\u5220\u9664\u9519\u8bef");
}});
};
XN.DO.confirm({title:"\u5220\u9664\u8be5\u8bc4\u8bba",msg:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",callBack:_17d});
};
ns.save=function(){
var form=$(this.getOptions("cmtForm")),_185=form.comment.value,This=this,_187=this.getOptions("shareId");
if(XN.STRING.isBlank(_185)){
XN.DO.showError("\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");
return false;
}
if(_185.length>500){
XN.DO.showError("\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u8d85\u8fc7500\u5b57");
return false;
}
var _188=$("ajax_msgerror");
if(_188){
_188.parentNode.removeChild(_188);
}
form.submit_comment.disabled=true;
var _189=XN.form.serialize(form,"hash");
if(This.activeTab=="allCmts"){
_189.all=1;
if(form.repetNo.value!=0){
_189.preComment=This.toCmtId;
}
}
new XN.net.xmlhttp({url:"http://share."+XN.env.domain+"/share/comment/addterm",data:XN.array.toQueryString(_189),onSuccess:function(r){
var text=XN.json.parse(r.responseText);
if(text.code!=0){
if(text.needVerfy==true){
try{
if(!$("shareVerifyPic_"+_187)){
var img=new Image();
img.className="validate-num";
img.id="shareVerifyPic_"+_187;
img.onclick="this.src+=Math.random();return false";
img.src="http://icode."+XN.env.domain+"/getcode.do?t=shareInfoCode"+_187+"&r="+Math.random();
$("shareVerify_"+_187).appendChild(img);
}
$("shareVerify_"+_187).show();
}
catch(e){
XN.log(e.description);
}
XN.DO.alert("\u60a8\u7684\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u9a8c\u8bc1\u7801");
}else{
XN.DO.showError(text.msg);
}
}else{
if(text.code==0){
var msg=XN.json.parse(text.msg);
if(This.activeTab=="allCmts"&&form.repetNo.value!=0){
$("allCmts_comment_list").appendHTML(This.buildOneCmt(msg));
}else{
XN.array.each(This.tabs,function(i,v){
$(v+"_comment_list").show();
$(v+"_comment_list").appendHTML(This.buildOneCmt(msg,v));
});
}
if(msg&&msg.firstComment){
This.quickShare();
}
}
}
try{
if($("shareVerifyPic_"+_187)){
$("shareVerifyPic_"+_187).src+=Math.random();
$("shareInfoCode"+_187).value="";
$("shareInfoCode"+_187).blur();
}
}
catch(e){
XN.log(e.description);
}
form.submit_comment.disabled=false;
form.reset();
form.repetNo.value=0;
},onError:function(){
alert("\u56de\u590d\u5931\u8d25");
form.submit_comment.disabled=false;
}});
};
ns.replyCmt=function(obj){
share_reply_comment(obj.sid,obj.oid,obj.oname);
this.toCmtId=obj.cid;
};
ns.quickShare=function(){
var This=this,form=$(this.getOptions("cmtForm")),fixX=106,fixY=$(form.comment).realTop()-122;
XN.Do.confirm({title:"\u8bc4\u8bba\u6210\u529f",message:"<center><img src=\"http://a.xnimg.cn/imgpro/icons/yes.png\"/> \u8bc4\u8bba\u6210\u529f\u4e86\uff0c\u5c06\u7cbe\u5f69\u5185\u5bb9\u4e5f\u5206\u4eab\u7ed9\u597d\u53cb\u5427</center>",params:{showCloseButton:true},width:300,X:fixX,Y:fixY,callback:function(r){
if(!r){
return false;
}
var xhr=new XN.net.xmlhttp({url:"http://share."+XN.env.domain+"/share/ajaxSaveVoteShare.do?from=shareaftercomment",data:XN.array.toQueryString({shareId:This.getOptions("shareId"),shareUserId:This.getOptions("shareOwner"),tsc:XN.get_check}),onSuccess:function(r){
var _198=XN.json.parse(r.responseText),msg;
if(_198.code!=0){
msg=XN.DO.confirm({title:"\u5206\u4eab\u63d0\u793a",message:_198.msg,X:fixX,Y:fixY});
}else{
msg=XN.DO.confirm({title:"\u63d0\u793a",message:"\u5206\u4eab\u6210\u529f",X:fixX,Y:fixY});
}
msg.footer.hide();
setTimeout(function(){
msg.hide();
},3000);
},onError:function(){
XN.DO.alert("\u670d\u52a1\u5668\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u5019\u91cd\u8bd5");
}});
}});
};
ns.buildOneCmt=function(obj,tab){
var This=this,_19d=This.getOptions("isAdmin")=="true"?true:false,_19e=parseInt(XN.cookie.get("id"),10),_19f=this.getOptions("shareId"),_1a0=this.getOptions("shareOwner"),tObj=obj,tstr="";
var _1a3=tObj.keepUse?" lively-user":"";
var _1a4=tObj.keepUse?"\u8fde\u7eed\u767b\u5f557\u5929, \u5373\u53ef\u83b7\u5f97\u6a59\u540d\u7279\u6743":tObj.name;
var _1a5="";
var _1a6="http://admin.renren.com/admin/newuserreport.do?type=30&owner="+_1a0+"&contentId="+tObj.id+"&userId="+tObj.author+"&origURL="+encodeURIComponent(document.location.href);
if(!tObj.showDelete&&!(This.activeTab=="allCmts")){
_1a5="<span class=\"float-right\"><a target=\"_blank\" href=\""+_1a6+"\" class=\"reply-report\">\u4e3e\u62a5</a></span>";
}
tstr+="<dd id=\""+tab+"_comment_"+tObj.id+"\">"+_1a5+"     <a class=\"avatar\" title=\""+tObj.name+"\" href=\"http://www."+XN.env.domain+"/profile.do?id="+tObj.author+"\">"+"            <img height=\"50\" width=\"50\" src=\""+tObj.headUrl+"\" alt=\""+tObj.name+"\" class=\"avatar\"/>"+"     </a>"+"     <div class=\"info\">";
if(tObj.showDelete){
tstr+="            <span class=\"float-right\">"+"                 <a class=\"x-to-hide\" cmd=\"{t:'del',sid:"+_19f+",oid:"+_1a0+",cid:"+tObj.id+"}\" href=\"javascript:void(0)\"></a>"+"            </span>";
}
tstr+="            <a title=\""+_1a4+"\" href=\"http://www."+XN.env.domain+"/profile.do?id="+tObj.author+"\" class=\""+_1a3+"\">"+tObj.name+"</a> "+"            <span class=\"time\"> "+tObj.time+" </span>"+"      </div>"+"      <div class=\"reply\">"+"            <p class=\"content\">"+tObj.body+"            </p>";
if(_19e!==tObj.author){
tstr+="<a cmd=\"{t:'reply',sid:"+_19f+",oid:"+tObj.author+",oname:'"+tObj.name+"',cid:"+tObj.id+"}\" href=\"javascript:void(0);\">\u56de\u590d</a>";
}
tstr+="      </div>"+"</dd>";
return tstr;
};
ns.getMoreCmt=function(_1a7,_1a8){
var url,This=this;
this.share_owner=_1a8;
this.share_id=_1a7;
var _1ab=function(){
var _1ac=$(This.activeTab+"_commContainer_"+_1a7).getElementsByTagName("dd")[0];
return _1ac.id.match(/\d+/)[0];
};
var _1ad={shareId:_1a7,owner:_1a8,commentId:_1ab()};
if(This.activeTab=="allCmts"){
url="http://share."+XN.env.domain+"/share/comment/moreurlcomment";
$extend(_1ad,{md5:This.getOptions("shareUrlMd5")});
}else{
if(This.activeTab=="friendCmts"){
url="http://share."+XN.env.domain+"/share/getmorecomment.do";
}
}
var _1ae=function(_1af,_1b0){
var dl=$element("dl");
dl.className="replies";
var tstr=[];
for(var i=0;_1af[i];i++){
tstr.push(This.buildOneCmt(_1af[i]));
}
dl.innerHTML=tstr.join("");
return dl;
};
$(This.activeTab+"_tempLoading_"+_1a7).style.visibility="visible";
var xhr=new XN.net.xmlhttp({url:url,data:XN.array.toQueryString(_1ad),onSuccess:function(r){
$(This.activeTab+"_tempLoading_"+_1a7).style.visibility="hidden";
var j=XN.json.parse(r.responseText);
if(j.code!==0){
XN.DO.showError(j.msg);
return false;
}
if(j.code==0){
if(!j.hasMore){
$(This.activeTab+"_showMore_"+_1a7).hide();
}
var _1b7=$(This.activeTab+"_commContainer_"+_1a7);
var _1b8=null;
var els=XN.dom.getElementsByClassName("replies",_1b7);
var i=0;
while(els[i]){
if(!els[i].getElementsByTagName("dt").length){
_1b8=els[i];
break;
}
i++;
}
_1b7.insertBefore(_1ae(j.comments,_1a7),_1b8);
}
},onError:function(r){
XN.DO.showError("\u670d\u52a1\u5668\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
}});
};
ns.getOptions=function(key){
return this._options[key];
};
})(XN.app.share.CommentManger);
XN.dom.ready(function(){
if(Sizzle(".share-home #miniEditorTextarea")[0]){
Mention.init([{obj:Sizzle(".share-home #miniEditorTextarea")[0],ugcId:"",ugcType:"share",ownerId:XN.user.id}]);
}
if(Sizzle(".share-home #cmtbody")[0]&&Sizzle(".share-home #cmtbody").length>0){
Mention.init([{obj:Sizzle(".share-home #cmtbody")[0],ugcId:"",ugcType:"share",ownerId:XN.user.id}]);
}
if($("linkcmt")){
Mention.init([{obj:$("linkcmt"),ugcId:"",ugcType:"share",ownerId:XN.user.id}]);
}
if(Sizzle(".share-newhome #miniEditorTextarea")[0]){
Mention.init([{obj:Sizzle(".share-newhome #miniEditorTextarea")[0],ugcId:"",ugcType:"share",ownerId:XN.user.id}]);
}
},true);
(function(ns){
var _1be="";
function initR(p){
$extend(this,{wrapHtml:"<div class=\"relative-content\">{{content}}</div>"});
$extend(this,p);
this.getHtml();
}
initR.prototype={getHtml:function(){
var This=this;
new XN.net.xmlhttp({url:This.url,data:XN.array.toQueryString(This.data),onSuccess:function(r){
if(XN.string.trim(r.responseText)==""){
return false;
}
This.htmlTxt=r.responseText;
This.buildHtml();
}});
},buildHtml:function(){
this.htmlContent=this.wrapHtml.replace("{{content}}","<h4>"+this.title+"</h4>"+this.prefix+this.htmlTxt+this.suffix);
this.display();
},display:function(){
var This=this;
setTimeout(function(){
This.con.innerHTML=This.htmlContent;
},50);
}};
ns.initRBlog=function(_1c3){
$extend(_1c3,{title:"\u76f8\u5173\u65e5\u5fd7",prefix:"<div class=\"hot-blog-sidebar\"><ul class=\"blog-list clearfix\">",url:"http://friend.renren.com/cwf_blog",suffix:"</ul></div>"});
return new initR(_1c3);
};
ns.initRVideo=function(_1c4){
$extend(_1c4,{title:"\u76f8\u5173\u89c6\u9891",url:"http://friend.renren.com/cwf_video",prefix:"<div class=\"shares-list\">",suffix:"</div>"});
return new initR(_1c4);
};
})(XN.app.share);

