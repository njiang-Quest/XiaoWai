<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>У���� - ���ڱ�վ</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link href="css/layout.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/base.css" rel="stylesheet" type="text/css" media="all" />
<link href="index_img/logo.png" rel="shortcut icon" type="image/x-icon" />


<script type="text/javascript" src="js/prototype.js"></script>
<script type="text/javascript" src="js/compact.js"></script>
<script type="text/javascript" src="http://s.xnimg.cn/a19591/jspro/base.js"></script>
<link href="css/dialogpro.css" rel="stylesheet" type="text/css" />
<style type="text/css">
.textinfo strong{margin-top:1em;}
.compatible #content {width:auto;padding:10px;}
.textinfo p{margin-top:20px;}
</style>
  </head>
  
  <body>
    <div id="container">

	<input type="hidden" id="userGuideType" value="" />
<div id="showNewNav" style="display:none"></div>
<div id="dropmenuHolder" class="dropmenu-holder dropmenu-holder-new rr"><div id="moredownWeb" class="dropdown" style="position:absolute; top:-9999px; left:-9999px;">
<div class="menu-dropdown-border">
<div class="weblist">
<ul class="clearfix">

</ul>
</div>
</div>
</div>
</div><div id="navBar" class="menu-bar rr">
<div class="navigation-wrapper"><div class="navigation navigation-new clearfix">
<div id="logo2"><h1><a href="http://www." title="У����  - У������һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ"><img alt="У���� - У������һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ" title="У���� - У������һ����ʵ���罻���磬��ϵ���ѣ�һ������Ϸ" height="35" width="120" src="index_img/logo.png" /></a></h1></div>										<div class="nav-body clearfix">
<div class="nav-other"><div class="menu"><div class="menu-title">
<strong>
<a id="reg_link" title="ע��" stats="homenav_reg" href="regist.html">ע��</a>
</strong>
</div>
</div>
<div class="menu">
<div class="menu-title">
<strong>
<a title="��¼" stats="homenav_login" href="index.html">��¼</a>
</strong>
</div>
</div>
<div class="menu"><div class="menu-title">
<strong>
<a title="����" stats="homenav_help" href="http://support./visitor/helpcenter">����</a>
</strong>
</div>
</div>
<div class="menu">
<div class="menu-title">
<strong>
<a title="�������Ὠ��" stats="homenav_suggest" href="http://support./GetGuestbookList.do?action=suggest&amp;stage=-1">�������Ὠ��</a>
</strong>
</div>
</div>
<div class="menu last">
<div class="menu-title" stats="homenav_more" id="moreWeb"><a href="#" onclick="this.blur();">����</a></div>
</div>
</div></div>
</div>
</div>
</div>
<div id="opi" class="page-wrapper clearfix"><div class="full-page-holder">
<div class="full-page clearfix">
<div class="compatible">
<div id="content"><div class="white" id="oak">
<div id="single-column">
<div class="terms-container" style="padding:0 10px">
<div class="textinfo" style="line-height:1.5em">
<center><h3 style="font-size: 1.2em;">У������������</h3></center>
<p><strong>һ�����������ȷ�Ϻͽ���</strong></p>
У���������漰���Ĳ�Ʒ���������������Ȩ������Ȩ����ϳ�ɳУ���������Ƽ���չ ���޹�˾�����¼��У�⹫˾�����У� У�⹫˾���ж�У������һ�л�ļල����ʾ����顢������������Ȩ�����û�ͨ��ע������Ķ�������������"ͬ��"��ť���ע�ᣬ����ʾ�û���У�⹫˾�Ѵ��Э�飬��Ը���ܱ�����������������ݡ�����û���ͬ�������������������ܻ��ʹ�÷����Լ�ע���ΪУ�����û���Ȩ����
<p><strong>�������񱣻�����</strong></p>
1�� У�⹫˾�����Լ��Ĳ���ϵͳͨ�����ʻ�������Ϊ�û��ṩ��������û�����:<br />
��1���ṩ�豸���������˵���һ̨�����ƽ����һ�����䱸����װ�á�<br />
��2������������֧����˷����йصĵ绰���á�<br />
2�����ǵ�У�⹫˾��Ʒ�������Ҫ�ԣ��û�ͬ��:<br />
��1���ṩ��ʱ���꾡��׼ȷ�ĸ������ϡ�<br />
��2�����ϸ���ע�����ϣ����ϼ�ʱ���꾡׼ȷ��Ҫ������ԭʼ��������Ͻ�����Ϊע�����ϡ�<br />
3���û�����ȨУ�⹫˾�������͸¶��ע�����ϣ�����У�⹫˾���ܹ����û���������סַ��������ַ���������䡢�ʺš�����:<br />
��1�����Ȼ���û���ȷ��Ȩ���û�Ҫ��У�⹫˾����Ȩĳ��ͨ�������ʼ������������ʽ͸¶��Щ��Ϣ��<br />
��2����Ӧ�ķ��ɡ�����Ҫ���Լ������й��������ܲ��ŵ�Ҫ����ҪУ�⹫˾�ṩ�û��ĸ������ϡ�<br />
��3��Ϊ��ά�������Լ�У�����Ϸ����档<br />
��4��У�������ܻ���������������û��ṩ��ص���������ڴ�����£���õ�����ͬ��е���У����ͬ�ȵı����û���˽�����Σ���У������Ȩ���û���ע�����ϵ��ṩ���õ�������<br />
��5���ڲ�͸¶�����û���˽���ϵ�ǰ���£�У������Ȩ�������û����ݿ���з��������û����ݿ������ҵ�ϵ����á�<br />
4������û��ṩ�����ϲ�׼ȷ������ʵ�����Ϸ���Ч��У�⹫˾���������û�ʹ��У�⹫˾��������Ȩ����<br />
�û�������У�⹫˾��������ͬʱ��ͬ�����У�⹫˾�ṩ�ĸ�����Ϣ����<br />
5��У�⹫˾�������Ϣ���ݰ���:���֡���������������Ƭ��¼��ͼ�����ڹ����ȫ�����ݣ�У�⹫˾Ϊ�û��ṩ����ҵ��Ϣ�ȣ�������Щ�����ܰ�Ȩ���̱�Ȩ��������֪ʶ��Ȩ������Ȩ���ɵı��������ԣ��û�ֻ����У�⹫˾��Ȩ�²���ʹ����Щ���ݣ����������Ը��ơ��޸ġ���׫��Щ���ݡ������������йص�������Ʒ��<br />
6������û�δ���ر�����������κ�һ�У�⹫˾��Ȩ������ֹ�ṩһ�з��񣬲�����ͨ�������ֶ�׷�����ε�Ȩ����<br />
7��ʹ��У�����ṩ�ķ������û��Լ��е����գ������÷������������Χ�ڣ�У�⹫˾���κ�����²�����ʹ�û���ʹ��У�����ṩ�ķ���������������ġ�����ġ�ֱ�ӻ��ӵ���ʧ�е��⳥���Ρ���ʹ�����ȱ���֪���𺦷����Ŀ����ԡ�<br />
8���û������ף�ʹ��У�����ṩ�ķ����漰��Internet����͵�����ֵ���񣬿��ܻ��ܵ��������ڲ��ȶ����ص�Ӱ�졣��˷�������򲻿ɿ����������������ڿ͹��������������ҵ���ܲ��ż�������Ӫ�̵ĵ�����ϵͳ���ȶ����û�����λ�á��û��ػ��Լ������κμ������������硢ͨ����·ԭ�����ɵķ����жϻ��������û�Ҫ��ķ��ա��û���е����Ϸ��գ�У�⹫˾��������������˵����û����ܷ��͡��ϴ��ͽ����Ķ���Ϣ����ӷ�����Ϣ�����޷�ʵ������ͨѶ������У�⹫˾���е��κ����Ρ�<br />
9���û������ף���ʹ��У�����ṩ�ķ�������������κ����˵İ�����в�Եġ��̰��Եġ����˷��еĻ�Ƿ������ݻ���Ϊ�������Ȩ�����ַ�������֪ʶ��Ȩ����������ð������Ϣ�ķ��գ��û���е����Ϸ��գ�У�⹫˾�ͺ�����˾�Է������κ����͵ĵ�������������ȷ�Ļ������ģ����������й���Ϣ��ʵ�ԡ������ԡ�����Ȩ�ͷ���Ȩ�Ե�Ĭʾ����������������˵����κ����û���������Ƿ�ʹ�÷��������ֱ�ӡ���ӡ�żȻ�����⼰�������𺦣����е��κ����Ρ�<br />
<p><strong>�����û�ʹ�ù���</strong></p>
�ر���ʾ�û���ʹ�û������������ع����йص����ߺͷ��ɣ������̷������Ұ�ȫ�������ܷ����������Ϣϵͳ��ȫ���������ȣ������������棬�������Ұ�ȫ������Υ��ʹ�û�������������һ�����Σ����û���ȫ�����Ρ�
1���û�������ʹ��У�����ṩ���������ʱ��������У�⹫˾�ṩ׼ȷ�ĸ������ϣ�������������κα䶯�����뼰ʱ���¡�<br />
2���û�ע��ɹ���У�⹫˾������ÿ���û�һ���û��ʺż���Ӧ�����룬���û��ʺź��������û����𱣹ܣ��û�Ӧ���������û��ʺŽ��е����л���¼����������Ρ�<br />
3���û�����ʹ��У���������ͻ򴫲�������Ϣ��Υ�����ҷ����ƶȵ���Ϣ��������������������Ϣ:<br />
(a) �����ܷ���ȷ���Ļ���ԭ��ģ�<br />
(b) Σ�����Ұ�ȫ��й¶�������ܣ��߸�������Ȩ���ƻ�����ͳһ�ģ�<br />
(c) �𺦹�������������ģ�<br />
(d) ɿ�������ޡ��������ӣ��ƻ������Ž�ģ�<br />
(e) �ƻ������ڽ����ߣ�����а�̺ͷ⽨���ŵģ�<br />
(f) ɢ��ҥ�ԣ�������������ƻ�����ȶ��ģ�<br />
(g) ɢ�����ࡢɫ�顢�Ĳ�����������ɱ���ֲ����߽�������ģ�<br />
(h) ������߷̰����ˣ��ֺ����˺Ϸ�Ȩ��ģ�<br />
(i) ���з��ɡ����������ֹ���������ݵġ�<br />
4���û���ʹ��У�������������У�������ѭ����ԭ��:<br />
(a) �����й��йصķ��ɺͷ��棻<br />
(b) ����Ϊ�κηǷ�Ŀ�Ķ�ʹ���������ϵͳ��<br />
(c) ������������������йص�����Э�顢�涨�ͳ���<br />
(d) ��������У�����������ϵͳ�����κο��ܶԻ�������������ת��ɲ���Ӱ�����Ϊ��<br />
(e) ��������У�����������ϵͳ�����κ�ɧ���Եġ��������˵ġ������Եġ������Եġ�ӹ������Ļ������κηǷ�����Ϣ���ϣ�<br />
(f) ��������У�����������ϵͳ�����κβ����� У�� ��˾����Ϊ��<br />
5��ʹ��У����վ�����û�Ӧ��ǿ�������ϵı�����ʶ����ע�������������뱣����<br />
6����ȡ�����û��ʺŻ���������ͨѶɧ�����ˣ������ڷǷ���Ϊ���û����ò��ò��ԡ���ƭ���κηǷ��ֶΣ���ȡ�����û����ʺźͶ����˽���ɧ�š�<br />
<p><strong>�ġ�����������޸�</strong></p>
У�⹫˾���ڱ�Ҫʱ�޸ķ��������������һ�������䶯����˾�������û�������һ��ʹ��ǰ��ҳ����ʾ�޸����ݡ������ͬ��Ķ�������һ�μ���"��ͬ��"��ť������������ܣ���ʱȡ�������û�ʹ�÷����ʸ�<br />
�û�Ҫ����ʹ��У�������������Ҫ�������ȷ��:<br />
��1������ȷ��У�������������䶯��<br />
��2��ͬ��������еķ����������ơ�<br />
<p><strong>�塢�����޶�</strong></p>
У�⹫˾�ر���ʾ�û���У�⹫˾Ϊ�˱��Ϲ�˾ҵ��չ�͵���������Ȩ�� У�� ��˾ӵ����ʱ�޸Ļ��жϷ��������֪ͨ�û���Ȩ����У�⹫˾��ʹ�޸Ļ��жϷ����Ȩ��������û����κε����������û�������ͬ�Ȿ�����ǰ���£�У�⹫˾�ſ�ʼ���û��ṩ����
<p><strong>�����û���˽�ƶ�</strong></p>
�����û�������˽��У�⹫˾��һ��������ߡ����ԣ���Ϊ�����ϵڶ������ע�����Ϸ����Ĳ��䣬У�⹫˾һ�����ṫ�����༭��͸¶�û���ע�����ϼ�������У�⹫˾��������еķǹ������ݣ�����У�⹫˾�ڳ��ŵĻ�������Ϊ͸¶��Щ��Ϣ�����¼�������Ǳ�Ҫ��:<br />
��1�������йط��ɹ涨�������ڹ����йػ��ز�ѯʱ���ṩ�û���У��������ҳ�Ϸ�������Ϣ���ݼ��䷢��ʱ�䡢��������ַ���������Լ������û��ϴ���У��������Ϣ��<br />
��2�����У������Ʒ�������<br />
��3������ά��У�⹫˾���̱�����Ȩ��<br />
��4���ڽ��������ά���û����˺������ڵ���˽��ȫ��<br />
��5��У�⹫˾��Ϊ��Ҫ����������¡�<br />
�û��ڴ���ȨУ�⹫˾��������������䷢����ҵ��Ϣ��<br />
<p><strong>�ߡ��û����ʺš�����Ͱ�ȫ��</strong></p>
�û�һ���ɹ�ע�ᣬ���õ�һ��������ʺš�����û�δ���ܺ��Լ����ʺź����������������У�⹫˾���������ɵ��𺦣��û�����ȫ�����Ρ����⣬ÿ���û���Ҫ�����ʻ��е����л���¼���ȫ���û�����ʱ�ı��Լ��������ͼ�꣬Ҳ���Խ����ɵ��ʻ��ؿ�һ�����ʻ����û�ͬ���������κηǷ�ʹ���û��ʺŻ�ȫ©�������������ͨ��У�⹫˾��
<p><strong>�ˡ��ܾ��ṩ����</strong></p>
�û���ȷͬ���ʼ������ʹ�����û����˳е����ա��ʼ������ṩ�ǽ�������ѵĻ����ϡ�У�⹫˾��ȷ��ʾ���ṩ�κ����͵ĵ�������������ȷ�Ļ������ġ�
У�⹫˾����������һ���������û���Ҫ��Ҳ���������񲻻����жϣ��Է���ļ�ʱ�ԡ���ȫ�ԡ���������������������У�⹫˾�ܾ��ṩ�κε�����������Ϣ�ܷ�׼ȷ����ʱ��˳���ش��͡�
�û����Ⲣ�������ػ�ͨ��У�⹫˾��Ʒ����ȡ�õ��κ���Ϣ����ȡ�����û��Լ���������е�ϵͳ��������϶�ʧ�����з��պ����Ρ�У�⹫˾���ڷ������ϵõ����κ���Ʒ���������׽��̣��������������û������У�⹫˾�յ���ͷ��������������Ϣ��У�⹫˾Ҳ��������������ȷ������
<p><strong>�š���������</strong></p>
У�⹫˾��ֱ�ӡ���ӡ�żȻ�����⼰������𺦲������Σ���Щ������:������ʹ�ò�Ʒ���������Ϲ�����Ʒ�����Ʒ��������Ͻ��н��ף��Ƿ�ʹ�÷�����û����͵���Ϣ�����䶯���û���������Ϊ�����У�⹫˾����������𺦣�Ӧ�������е����β���У�⹫˾�����⳥��У�⹫˾�������л�Э��������ʹ���û��ṩ���κ���Ϣ����άȨ��
<p><strong>ʮ��δ��У�⹫˾ͬ���ֹ������ҵ����Ϊ</strong></p>
�û���ŵ����У�⹫˾����ͬ�⣬��������У�⹫˾���������У�����������վ�Ͻ������ۻ�������ҵ����Ϊ���û�Υ����Լ����У�⹫˾������׷����ΥԼ���Σ��ɴ˸�У�⹫˾�����ʧ�ģ�У�⹫˾��Ȩ����׷����
<p><strong>ʮһ��У�����û���Ϣ�Ĵ��漰����</strong></p>
У�⹫˾�����û���������Ϣ��ɾ���򴢴�ʧ�ܸ���У�⹫˾�����ж��û�����Ϊ�Ƿ����У�������������Ҫ��;����Ȩ��������û�Υ���˷�������Ĺ涨�����жϻ�ɾ������������������ʺš�
<p><strong>ʮ��������</strong></p>
�û�ͬ�Ᵽ�Ϻ�ά��У�⹫˾ȫ���Ա�����棬����֧�����û�Υ�������������Ϊ�����û���Υ����Ϊ���������ʦ���á����Ϸ��á��������á��������á�ִ�з��õȣ��Լ���Υ������������������⳥���ã�������ʹ���û��ĵ��ԡ��ʺź�����֪ʶ��Ȩ��׷���ѡ�
���û������롢�ʻ������ã����Ǹ��¼�����У�⹫˾�Ĺ�ʧ���£������û�Ӧ�е��������ڼ������һ�����κͺ����
<p><strong>ʮ������������</strong></p>
�û���У�⹫˾����ʱ����ʵ������жϷ���У�⹫˾������κθ��˻�������������ʱ�жϷ����û��������κη�������Ľ����Ժ����������޸������飬���У�⹫˾���������û��������µ�׷��Ȩ:<br />
��1������ʹ��У�⹫˾������У�����ķ���<br />
��2�������û�ʹ��У�⹫˾������У����������ʸ�<br />
��3������ͨ��У�⹫˾ֹͣ���û��ķ���<br />
�����û�������û�ʹ��У�⹫˾�����Ȩ��������ֹ������ʱ��У�⹫˾���ٶ��û��е��κ�����<br />
<p><strong>ʮ�ġ�ͨ��</strong></p>
���з����û���ͨ�涼��ͨ�������ʼ��򳣹���ż����͡�У�⹫˾��ͨ���ʼ����񷢱���Ϣ���û����������Ƿ���������޸ġ�����������������Ҫ���顣ͬʱ�� У�⹫˾������У�����û�Ͷ����ҵ�Թ���Ȩ����
<p><strong>ʮ�塢������߻�</strong></p>
��У�⹫˾�����������û��������Ƿ�������Ϣ�м����������ϻ������߻�����У����������ѷ�����չʾ���ǵĲ�Ʒ���κ���������������������������������ҵ�����������������йص�������ֻ������Ӧ���û��͹��������֮�䷢���� У�⹫˾���е��κ����Σ�У�⹫˾û������Ϊ���������۸��κ�һ���ֵ����Ρ�
<p><strong id="agreement_16">ʮ��������У������ֵ����ҵ��</strong></p>
(1) ֻ��ͬ��У�����ƶ���ʹ��������������û�����ʹ��У������ֵ����У������ֵ�������������������϶���Ա����У����è�μǡ�У�����������Ƶȡ�У������ֵ������������������ڱ��������<a href="http://i./common.do?d=license">У�����϶��û���������</a>��<br/>
(2) ֧��ȷ����ָ�û���ѡ���֧��������������, У�������е�ȷ�ϡ� У�����ڽ���ʱ�����û���д������Ĭ��Ϊȫ������ʵ, ��д������ݵ��û����ܵ����ɱ����Լ�������У�����������ı��ϡ������Υ��������û�У������Ȩ��ֹ��ʹ��У�����ṩ�ķ���ȡ�����û��ʸ�, �����������¼����û���<br/>
(3) У�ⶹ������У����ָ���Ķ���֧���ֶν��г�ֵ, У������Ȩͨ���޶��³�ֵ��ȷ�������У�ⶹ��ֵ�Ķ�ȡ�����, ��Ϊ�������������ϻ�©�������ض����ַ��������ȳ�ֵ�����, У������Ȩ���û��ջط����������ֵ��У�ⶹ������������ٹ��ٳ�ֵ, �û���Ȩ�õ�У�ⶹ�����ٳ�ֵ��<br/>
(4) У����������������ע���û�������֧�����û���Ȩ������ʹ��У�ⶹ��������ʹ����ص�У��������<br />
(5) �����ڿɹ�����У����������ԭ����ʹ�û���������ݳ������𡢱��޹�ɾ���������У������Ϊ�û��ṩУ�ⶹ�ٳ�ֵ��ԭ��Ӧ���ݡ�<br />
(6) �û������������, ����ͨ���Ϸ������У�������Ȿ��ֱ�����ֽ��ֵУ�ⶹ�����ѡ� ����У����Ҫ�ڿ۳������Ѽ�У�����Ѿ������ĳɱ����˻����������Ѽ��ɱ������ͳ�ֵ��صĽ������У�����Ľ��������ѡ���������ѵȽ���������������������ӵ���С����<br />
�� �Ѿ�������У�ⶹ��ֵ, ������������������޷�ʹ��У�ⶹ���񣬲��Ҹ�����ȫ��Ӧ��У�����е���(����ϵͳ���ڼ��Ȳ��ɱ�����������)��<br />
�� ʹ�ó�ֵ�����Ѿ�֧������, ��У�ⶹ��3����û�еõ���ֵ, �û�����Ҫ���˻����ģ� <br />
�� ����Ϊ����������, У�������й涨�������<br />
�� У����֪ͨ��Ӧ�û�����û��ʸ������� <br />
(7) �˻��������¡�<br />
�� ���ϱ����ڣ�6�����, ��, �۵����, ϣ���˻������û�, Ӧ��У�ⶹ��ֵ��20����ͨ��"1��1��ѯ"�����������˻������ж��������˻��û�����Ҫ�û��ṩУ�����ĳ�ֵ��¼������ǩ�ֵ������˿��������ϡ��û��������п��ʺ������Ϣ������֤��ӡ���������Ϣ���������ѯУ������ֵ�ͷ����˿�ʱ�����յ��û�ȫ�����ϵ�����20�������ա�����ֵ����20��,У������Ȩ���ݾ�������Լ��ɱ����������ؾ����Ƿ��˻��Լ��˻��ľ������<br />
�� ���ڱ����ڣ�6����ܺŵ����, У��������û��ʸ�ʱ�����з�����<br />
(8) �û������Բ������˻�, �û�֪ͨУ������Ҫ����������˻��ģ�У��������Ϊ�û���Ը���׳��˻����þ��У������Ȩ���ڴ������塢�ڽ����塢����ѧУ�ȹ�����ҵ��<br />
(9) ʹ�ñ�У��������ʱ, Υ��ʹ������涨������ͣ�ж�ʹ�õ������, ����û���ֵ��У�ⶹ��У������ʱ���ܡ� ʹ���ж��ڽ�����, У�����������ͷ�У�ⶹ���û����Լ���ʹ�á�  <br />
(10) �û����н��δ���ɶ�����˳��û�����ʱ���ڽ��δ����֮ǰ��׼���˳���У������ȨҪ�������˳����û�֧��δ�ɵĽ�<br />
(11) ���û�����ý����ֶζ�Υ����Υ����У�ⶹ���û��ʸ�ʱ, ʣ���У�ⶹȫ��������<br />
(12) ���ɹ涨��δ�������û�����У�ⶹ��ֵ��ʱ��, ��Ҫ�õ����������˵�ͬ��, ��δ���ͬ���δ����У��������Ȩ���������У�ⶹ��ֵ������У������ʱ�����䷨��������ȷ�е�ͬ����Ϣ����������ƽ�������δ������������ȫ������Ϊ����ʱֹ��<br />
(13)Ϊ�˷�ӳ�û�������������صĽ��������������д�����У���������ò���Ӫ��ʧ�������������ȴ����������û��û��Ĳ����ͽ��顣����û�����ѯ��Ͷ���������̴�������У��������ʱ��֪�û��û�ԭ���Լ�����ʱ�䡣<br />
<p><strong>ʮ�ߡ�֪ʶ��Ȩ</strong></p>
�û���֤�������������ṩ����Ʒӵ�������ĺϷ�������Ȩ�������ĺϷ�����Ȩ������������У�����ϴ��µĻ����֤У�⹫˾ʹ�ø���Ʒ��Υ�����ҵķ��ɷ��棬Ҳ���ַ��������ĺϷ�Ȩ���е��κ������û�Ӧ�������ṩ��Ʒ����ʽ�����ݼ���Ȩ�Ĳ����ơ����Ϸ�����ɵ�һ�к���е���ȫ���Ρ����ھ��û����˴������ϴ���У�������ı���ͼƬ��ͼ�Ρ���Ƶ��/ ����Ƶ�ȣ�У��У������˾����������վ�������ݽ���ʵʱ��ص�Ȩ��������Ȩ��������ж϶��κ�Υ����Э��Լ������Ʒʵʩɾ����У�⹫˾����ɾ���û���Ʒ������κκ�������û����κ���ʧ�����κ����Ρ����û���Ʒ��Υ�����ֺ������˵ĺϷ�Ȩ�������У�⹫˾���������˾�Ե������е��κ����ʵ��⳥�������򷣿��������ʧ��ֱ�ӵġ���ӵġ�żȻ�ġ��ͷ��Եĺͼ̷�����ʧ�����û�����У�⹫˾���������˾���ܵ�������ʧ�е�ȫ����⳥���Ρ�
<p><strong>ʮ�ˡ�����</strong></p>
�û���ŵ��������Ҫ:�������ط������ɡ���ʵ���������������κηǷ��ġ�ɧ���Եġ��������˵ġ������Եġ������Եġ��˺��Եġ�ӹ�׵ģ�����ġ�Σ�����Ұ�ȫ�ġ�й¶���һ��ܵġ��ƻ������ڽ����ߺ������Ž���Լ�����Υ�����ɷ��漰���ߵ����ݡ�
���û�����Ϊ�����������ᵽ�ķ������ У�� ��˾�����������ж�����ȡ���û������ʺš��û�����Լ������ϵ���Ϊ�е��������Ρ�
<p><strong>ʮ�š����ݵ�����Ȩ</strong></p>
���ݵĶ������:���֡���������������Ƭ��¼��ͼ�����ڹ���е�ȫ�����ݣ������ʼ���ȫ�����ݣ�У����������������Ϊ�û��ṩ����ҵ��Ϣ��������Щ���ݾ��ܰ�Ȩ���̱ꡢ��ǩ�������Ʋ�����Ȩ���ɵı��������ԣ��û�ֻ����У�⹫˾�͹������Ȩ�²���ʹ����Щ���ݣ����������Ը��ơ�������Щ���ݡ������������йص�������Ʒ��
<p><strong>��ʮ���������⳥����</strong></p>
1����У�⹫˾�Ѿ���ʾ����������ṩ��ʽ��������������û�Ӧ��ע������û�δ��Ҫ�������������һ�к�����û����ге���<br />
2���û���ȷͬ����ʹ��У�⹫˾������������ڵķ��ս���ȫ�����Լ��е�������ʹ��У�⹫˾�����������һ�к��Ҳ�����Լ��е���У�⹫˾���û����е��κ����Ρ�<br />
3��У�⹫˾�������������һ���������û���Ҫ��Ҳ������������񲻻��жϣ����������ļ�ʱ�ԡ���ȫ�ԡ�׼ȷ��Ҳ������������<br />
4���û�ͬ�Ᵽ�Ϻ�ά��У�⹫˾�������û������棬�����û���¼��վ����Υ��������ʵ�����������ַ��������Ϸ�Ȩ�棬���û�Υ����Э�����µ��κ��������У�⹫˾���κ����������������ʧ���û�ͬ��е��ɴ���ɵ����⳥���Ρ�<br />
<p><strong>��ʮһ������</strong></p>
�û���У�⹫˾һ��ͬ���йر�Э���Լ�ʹ��У�⹫˾�ķ�����������齻���ٲý��������У�⹫˾��Ȩѡ���ȡ���Ϸ�ʽ������Ȩѡ�����������ϵ��й�ϽȨ�ķ�Ժ�������κη��������뷨����ִ�������Щ����������ܽӽ��ķ������½����������������򱣳ֶ��û���������Ч����Ӱ�졣
<p><strong>��ʮ�����������û��ر���ʾ</strong></p>
1�������꼰ʹ��У��������Ӧ���ڸ�ĸ����ʦ��ָ���£���ȷѧϰʹ�����硣��������������������������Ӱ���ճ���ѧϰ���<br />
2���������û���������ȫ������������������Լ:<br />
Ҫ��������ѧϰ�������������Ϣ��<br />
Ҫ��ʵ�Ѻý�������������թ���ˣ�<br />
Ҫ��ǿ�Ի���ʶ��������Լ�����ѣ�<br />
Ҫά�����簲ȫ�����ƻ���������<br />
Ҫ�������Ľ���������������ʱ�ա�<br />
<p><strong>��ʮ�����ʺŵĶ���</strong></p>
У�����ʺŵ�ʧЧ��Ϊ3���¡����һ��У�����ʺ�����3���²���ʹ�ã���û����Web��ʽ��¼У��������ʱ��ԭ����Ϣ��ȫ����ʧ���û��Ѿ���Ϥ��Ϊ�˱�֤��¼��˳������Ч��3����������Ҫʹ��һ��У������
<p><strong>��ʮ�ġ�����</strong></p>
1�� У�⹫˾�������û����ṩ��������֮���ԣ�Ҫ���û���ע��У�⹫˾�ṩ���йط���ʱ�������ض����������������ض����������������Ϸ����������κβ�һ��֮���������ض�����������Ϊ׼��<br />
2�������������е��κ��������������ԭ����ȫ�򲿷���Ч�򲻾���ִ����������������Ӧ��Ч������Լ������<br />
3������������ִ�й��������������κ����Ȿ��վ���û������Ѻ�Э�̽����<br />
4����������Ľ���Ȩ��У�⹫˾�������С�<br />
</div>
</div>
</div>
</div>
</div>
</div><div id="ad1000000063"></div>
<div id="ad1000000064"></div>
</div></div>
</div>
<div id="footer">
<div class="blank-holder">
</div><div class="copyright"><span class="float-right">
<a href="http://www./siteinfo/about">����</a><span class="pipe">|</span><a href="http://dev.">����ƽ̨</a><span class="pipe">|</span><a href="http://mobile./mobilelink.do?psf=40002">�ֻ�У��</a><span class="pipe">|</span><a href="http://ads.">���</a><span class="pipe">|</span><a href="http://job./">��Ƹ</a><span class="pipe">|</span><a href="http://support./helpcenter">�ͷ�����</a><span class="pipe">|</span><a href="http://www./siteinfo/privacy">��˽</a>
</span>
<span>���ϳ�ɳУ��Ƽ���չ���޹�˾��������[2009]169�� �Ļ����ල�������䣺wlwh@vip.sina.com</span>
<p style="clear:both;margin-top:5px">
<span>У����<span title="">&copy;</span>2011&nbsp;&nbsp;<a style="color:#808080" href="http://www.miibeian.gov.cn/" target="_blank">��ICP֤09017506��</a>&nbsp;<span style="color:#808080">�湫������110000000009��</span>&nbsp;<span style="color:#808080">�ײ�����11002066</span></span>
</p>
</div>
</div>
<div class="hidden-area"></div>
<script type="text/javascript" src="js/beacon.js"></script><script type="text/javascript">
COMSCORE.beacon({ c1:2, c2:6934070, c3:"", c4:"", c5:"", c6:"", c15:"" });
</script>

</div>
  </body>
</html>