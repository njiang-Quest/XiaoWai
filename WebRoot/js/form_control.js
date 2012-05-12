var ChangeValue=function(_1){
this.form=$(_1);
};
ChangeValue.prototype={setValue:function(_2,_3){
var _4=this.form[_2];
var _5=_4.length;
for(i=0;i<_5;i++){
if(_4[i].value==_3){
_4[i].checked=true;
}
}
var _7=_4.nodeName;
if(_7=="SELECT"){
var _8=_4.options.length;
for(var i=0;i<_8;i++){
_4.options[i].selected=(_4.options[i].value==_3);
}
}
if(_7=="INPUT"){
if(_4.type=="text"||_4.type=="password"){
_4.value=_3;
}else{
if(_4.type=="radio"||_4.type=="checkbox"){
_4.checked=(_4.value===_3);
}else{
_4.value=_3;
}
}
}
}};

