<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>У���� - ע��</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script language="javascript" src="js/address.js"></script>
  </head>
  
  <body background="regist_img/bg.png">
<script type="text/javascript">
var isIE = (document.all) ? true : false;

var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);

var $ = function (id) {
	return "string" == typeof id ? document.getElementById(id) : id;
};

var Class = {
	create: function() {
		return function() { this.initialize.apply(this, arguments); }
	}
}

var Extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
}

var Bind = function(object, fun) {
	return function() {
		return fun.apply(object, arguments);
	}
}

var BindAsEventListener = function(object, fun) {
	var args = Array.prototype.slice.call(arguments).slice(2);
	return function(event) {
		return fun.apply(object, [event || window.event].concat(args));
	}
}

var CurrentStyle = function(element){
	return element.currentStyle || document.defaultView.getComputedStyle(element, null);
}

function addEventHandler(oTarget, sEventType, fnHandler) {
	if (oTarget.addEventListener) {
		oTarget.addEventListener(sEventType, fnHandler, false);
	} else if (oTarget.attachEvent) {
		oTarget.attachEvent("on" + sEventType, fnHandler);
	} else {
		oTarget["on" + sEventType] = fnHandler;
	}
};

function removeEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.removeEventListener) {
        oTarget.removeEventListener(sEventType, fnHandler, false);
    } else if (oTarget.detachEvent) {
        oTarget.detachEvent("on" + sEventType, fnHandler);
    } else { 
        oTarget["on" + sEventType] = null;
    }
};

//ͼƬ�и�
var ImgCropper = Class.create();
ImgCropper.prototype = {
  //��������,���Ʋ�,ͼƬ��ַ
  initialize: function(container, handle, url, options) {
	this._Container = $(container);//��������
	this._layHandle = $(handle);//���Ʋ�
	this.Url = url;//ͼƬ��ַ
	
	this._layBase = this._Container.appendChild(document.createElement("img"));//�ײ�
	this._layCropper = this._Container.appendChild(document.createElement("img"));//�и��
	this._layCropper.onload = Bind(this, this.SetPos);
	//�������ô�С
	this._tempImg = document.createElement("img");
	this._tempImg.onload = Bind(this, this.SetSize);
	
	this.SetOptions(options);
	
	this.Opacity = Math.round(this.options.Opacity);
	this.Color = this.options.Color;
	this.Scale = !!this.options.Scale;
	this.Ratio = Math.max(this.options.Ratio, 0);
	this.Width = Math.round(this.options.Width);
	this.Height = Math.round(this.options.Height);
	
	//����Ԥ������
	var oPreview = $(this.options.Preview);//Ԥ������
	if(oPreview){
		oPreview.style.position = "relative";
		oPreview.style.overflow = "hidden";
		this.viewWidth = Math.round(this.options.viewWidth);
		this.viewHeight = Math.round(this.options.viewHeight);
		//Ԥ��ͼƬ����
		this._view = oPreview.appendChild(document.createElement("img"));
		this._view.style.position = "absolute";
		this._view.onload = Bind(this, this.SetPreview);
	}
	//�����Ϸ�
	this._drag = new Drag(this._layHandle, { Limit: true, onMove: Bind(this, this.SetPos), Transparent: true });
	//��������
	this.Resize = !!this.options.Resize;
	if(this.Resize){
		var op = this.options, _resize = new Resize(this._layHandle, { Max: true, onResize: Bind(this, this.SetPos) });
		//�������Ŵ�������
		op.RightDown && (_resize.Set(op.RightDown, "right-down"));
		op.LeftDown && (_resize.Set(op.LeftDown, "left-down"));
		op.RightUp && (_resize.Set(op.RightUp, "right-up"));
		op.LeftUp && (_resize.Set(op.LeftUp, "left-up"));
		op.Right && (_resize.Set(op.Right, "right"));
		op.Left && (_resize.Set(op.Left, "left"));
		op.Down && (_resize.Set(op.Down, "down"));
		op.Up && (_resize.Set(op.Up, "up"));
		//��С��Χ����
		this.Min = !!this.options.Min;
		this.minWidth = Math.round(this.options.minWidth);
		this.minHeight = Math.round(this.options.minHeight);
		//�������Ŷ���
		this._resize = _resize;
	}
	//������ʽ
	this._Container.style.position = "relative";
	this._Container.style.overflow = "hidden";
	this._layHandle.style.zIndex = 200;
	this._layCropper.style.zIndex = 100;
	this._layBase.style.position = this._layCropper.style.position = "absolute";
	this._layBase.style.top = this._layBase.style.left = this._layCropper.style.top = this._layCropper.style.left = 0;//����
	//��ʼ������
	this.Init();
  },
  //����Ĭ������
  SetOptions: function(options) {
    this.options = {//Ĭ��ֵ
		Opacity:	50,//͸����(0��100)
		Color:		"",//����ɫ
		Width:		0,//ͼƬ�߶�
		Height:		0,//ͼƬ�߶�
		//���Ŵ�������
		Resize:		false,//�Ƿ���������
		Right:		"",//�ұ����Ŷ���
		Left:		"",//������Ŷ���
		Up:			"",//�ϱ����Ŷ���
		Down:		"",//�±����Ŷ���
		RightDown:	"",//�������Ŷ���
		LeftDown:	"",//�������Ŷ���
		RightUp:	"",//�������Ŷ���
		LeftUp:		"",//�������Ŷ���
		Min:		false,//�Ƿ���С�������(Ϊtrueʱ����min��������)
		minWidth:	50,//��С���
		minHeight:	50,//��С�߶�
		Scale:		false,//�Ƿ񰴱�������
		Ratio:		0,//���ű���(��/��)
		//Ԥ����������
		Preview:	"",//Ԥ������
		viewWidth:	0,//Ԥ�����
		viewHeight:	0//Ԥ���߶�
    };
    Extend(this.options, options || {});
  },
  //��ʼ������
  Init: function() {
	//���ñ���ɫ
	this.Color && (this._Container.style.backgroundColor = this.Color);
	//����ͼƬ
	this._tempImg.src = this._layBase.src = this._layCropper.src = this.Url;
	//����͸��
	if(isIE){
		this._layBase.style.filter = "alpha(opacity:" + this.Opacity + ")";
	} else {
		this._layBase.style.opacity = this.Opacity / 100;
	}
	//����Ԥ������
	this._view && (this._view.src = this.Url);
	//��������
	if(this.Resize){
		with(this._resize){
			Scale = this.Scale; Ratio = this.Ratio; Min = this.Min; minWidth = this.minWidth; minHeight = this.minHeight;
		}
	}
  },
  //�����и���ʽ
  SetPos: function() {
	//ie6��Ⱦbug
	if(isIE6){ with(this._layHandle.style){ zoom = .9; zoom = 1; }; };
	//��ȡλ�ò���
	var p = this.GetPos();
	//���ϷŶ���Ĳ��������и�
	this._layCropper.style.clip = "rect(" + p.Top + "px " + (p.Left + p.Width) + "px " + (p.Top + p.Height) + "px " + p.Left + "px)";
	//����Ԥ��
	this.SetPreview();
  },
  //����Ԥ��Ч��
  SetPreview: function() {
	if(this._view){
		//Ԥ����ʾ�Ŀ�͸�
		var p = this.GetPos(), s = this.GetSize(p.Width, p.Height, this.viewWidth, this.viewHeight), scale = s.Height / p.Height;
		//���������ò���
		var pHeight = this._layBase.height * scale, pWidth = this._layBase.width * scale, pTop = p.Top * scale, pLeft = p.Left * scale;
		//����Ԥ������
		with(this._view.style){
			//������ʽ
			width = pWidth + "px"; height = pHeight + "px"; top = - pTop + "px "; left = - pLeft + "px";
			//�и�Ԥ��ͼ
			clip = "rect(" + pTop + "px " + (pLeft + s.Width) + "px " + (pTop + s.Height) + "px " + pLeft + "px)";
		}
	}
  },
  //����ͼƬ��С
  SetSize: function() {
	var s = this.GetSize(this._tempImg.width, this._tempImg.height, this.Width, this.Height);
	//���õ�ͼ���и�ͼ
	this._layBase.style.width = this._layCropper.style.width = s.Width + "px";
	this._layBase.style.height = this._layCropper.style.height = s.Height + "px";
	//�����Ϸŷ�Χ
	this._drag.mxRight = s.Width; this._drag.mxBottom = s.Height;
	//�������ŷ�Χ
	if(this.Resize){ this._resize.mxRight = s.Width; this._resize.mxBottom = s.Height; }
  },
  //��ȡ��ǰ��ʽ
  GetPos: function() {
	with(this._layHandle){
		return { Top: offsetTop, Left: offsetLeft, Width: offsetWidth, Height: offsetHeight }
	}
  },
  //��ȡ�ߴ�
  GetSize: function(nowWidth, nowHeight, fixWidth, fixHeight) {
	var iWidth = nowWidth, iHeight = nowHeight, scale = iWidth / iHeight;
	//����������
	if(fixHeight){ iWidth = (iHeight = fixHeight) * scale; }
	if(fixWidth && (!fixHeight || iWidth > fixWidth)){ iHeight = (iWidth = fixWidth) / scale; }
	//���سߴ����
	return { Width: iWidth, Height: iHeight }
  }
}
</script>
<script type="text/javascript" src="js/Drag.js"></script>
<script type="text/javascript" src="js/Resize.js"></script>
<style type="text/css">
#rRightDown,#rLeftDown,#rLeftUp,#rRightUp,#rRight,#rLeft,#rUp,#rDown{
	position:absolute;
	background:#FFF;
	border: 1px solid #333;
	width: 6px;
	height: 6px;
	z-index:500;
	font-size:0;
	opacity: 0.5;
	filter:alpha(opacity=50);
}

#rLeftDown,#rRightUp{cursor:ne-resize;}
#rRightDown,#rLeftUp{cursor:nw-resize;}
#rRight,#rLeft{cursor:e-resize;}
#rUp,#rDown{cursor:n-resize;}

#rLeftDown{left:-4px;bottom:-4px;}
#rRightUp{right:-4px;top:-4px;}
#rRightDown{right:-4px;bottom:-4px;background-color:#00F;}
#rLeftUp{left:-4px;top:-4px;}
#rRight{right:-4px;top:50%;margin-top:-4px;}
#rLeft{left:-4px;top:50%;margin-top:-4px;}
#rUp{top:-4px;left:50%;margin-left:-4px;}
#rDown{bottom:-4px;left:50%;margin-left:-4px;}

#bgDiv{width:300px; height:400px; border:1px solid #666666; position:relative;}
#dragDiv{border:1px dashed #fff; width:100px; height:60px; top:50px; left:50px; cursor:move; }
</style>
<form action="/XiaoWai/FileUploadServlet" method="post"  enctype="multipart/form-data">
<table width="700" border="0" cellspacing="20" cellpadding="0" align="center">
  <tr>
  <td colspan="2"><img src="index_img/logo_regist.png" align="bottom" /><font color="#00CC00" size="+3"><b>10���ҵ�����������</b></font></td>
  </tr>
  <tr>
    <td width="300"><div id="bgDiv">
        <div id="dragDiv">
          <div id="rRightDown"> </div>
          <div id="rLeftDown"> </div>
          <div id="rRightUp"> </div>
          <div id="rLeftUp"> </div>
          <div id="rRight"> </div>
          <div id="rLeft"> </div>
          <div id="rUp"> </div>
          <div id="rDown"></div>
        </div>
      </div></td>
    <td align="center"><div id="viewDiv" style="width:300px; height:300px;"> </div></td>
  </tr>
  <tr>
  	<td colspan="2">
	�ϴ�ͷ��
		<input id="idPicUrl" type="file" name="fileUpload"/>
		<input id="idPic" type="button" value="ȷ��" />
	</td>
  </tr>
   

  <tr>
  	<td colspan="2">
		
		<input type="image" src="regist_img/reg-btn.png">
		
		
		
		
	</td>
  </tr>
</table>
</form>
<br />

<script>

var ic = new ImgCropper("bgDiv", "dragDiv", "./regist_img/mm01.jpg", {
	Width: 300, Height: 400, Color: "#000",
	Resize: true,
	Right: "rRight", Left: "rLeft", Up:	"rUp", Down: "rDown",
	RightDown: "rRightDown", LeftDown: "rLeftDown", RightUp: "rRightUp", LeftUp: "rLeftUp",
	Preview: "viewDiv", viewWidth: 300, viewHeight: 300
})


$("idPic").onclick = function(){
	if($("idPicUrl").value){
		ic.Url = $("idPicUrl").value;
	}
	ic.Init();
}
</script>
  </body>
</html>
