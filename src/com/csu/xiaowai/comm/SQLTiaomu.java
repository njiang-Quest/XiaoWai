package com.csu.xiaowai.comm;
//���Ｏ��д�Լ�Ҫ�õ���sql���
public interface SQLTiaomu {
	
	public static String LOGINCHECK = "select * from XWUSER where username= ? and password= ? ";
	public static String TOUXIANGUPLOAD ="update XWUSER set userimg =? where username=?";
	public static String REGIST = "insert into XWUSER values(?,?,?,?,?,?,?,?,?,?)";
	public static String MAXUSERID = "select max(to_number(userid)) from XWUSER";
	public static String GETSTATUS = "select content from FRESHNEWS where userid = ? and type=? ORDER BY time desc";
	public static String ALLSTATUS = "select count(content) from FRESHNEWS where userid = ? and type=? ORDER BY time desc";
	public static String GETSTATUSTIME = "select time from FRESHNEWS where content = ? and type=?";
	public static String GETALLFRESHNEWSBYUSERID = "select * from FRESHNEWS where userid = ? order by time desc";
	public static String GETALBUMBYFATHERID = "select albtitle from ALBUM where albid = ?";
	public static String GETALLPASSAGESNUMBER = "select count(*) from FRESHNEWS where userid=? and type=?";
	public static String GETPASSAGEBYID = "select * from FRESHNEWS where fnid = ?";
	public static String GETUSERBYID = "select * from XWUSER where userid = ?";
	public static String GETFRIENDSBYUSERID = "select x.userid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
	public static String GETALLFRESHNEWS = "select * from FRESHNEWS order by time desc";
	public static String GETMAXFRESHNEWSID ="select max(to_number(fnid)) from FRESHNEWS";
	public static String ADDFRESHNEWS = "insert into FRESHNEWS values(?,?,?,?,?,?,?,?)";
	public static String GETMAXVISITID ="select max(to_number(visitid)) from VISIT";
	public static String ADDVISITORS = "insert into VISIT values(?,?,?,?)";
	public static String ALLVISITORS = "select count(*) from VISIT where userid = ?";
	public static String GETVISITORSBYUSERID = "select * from VISIT where userid = ? order by time desc";
	public static String GETALLUSERS = "select * from XWUSER ";
	
	
	
//	�������Ҷ�����Ϣ
	public static String SQL_SEARCH_USEDCOMfromType = "select * from usedcommodity where uctype = ?";
    //�������ж�����Ϣ
	public static String SQL_SEARCH_USEDCOMALL ="select * from usedcommodity";
	//ͨ��������Ϣ��Ų��Ҷ�����Ϣ
	public static String SQL_SEARCH_USEDCOMFROMUCID = "select * from usedcommodity where ucid = ?";
	//���۸�������еĶ�����Ϣ
	public static String SQL_SEARCH_USEDCOMFROMPRICEALL = "select * from usedcommodity where (to_number(price) between to_number(?) and to_number(?))";
	//ͨ���۸�Χ�����ض����͵Ķ�����Ϣ
	public static String SQL_SEARCH_USEDCOMFROMPRICE = "select * from usedcommodity where (to_number(price) between to_number(?) and to_number(?)) and uctype = ?";
	//ͨ���û�id���Ҷ�����Ϣ
	public static String SQL_SEARCH_USEDCOMFROMUSERID ="select * from usedcommodity where userid = ?";
	//���ҵ�ǰ���Ķ�����Ϣ���
	public static String SQL_SEARCH_USEDCOMMAXUCID = "select max(to_number(ucid)) from usedcommodity";
	//����һ��������Ϣ
    public static String SQL_INSERT_USEDCOM = "insert into usedcommodity values(?,?,?,?,?,?,?,?,?,?,?)";
	//�޸�һ��������Ϣ
    public static String SQL_UPDATE_USEDCOM = "update usedcommodity set uctitle=?,uctype=?,price=?,tel=?,address=?,qq=?,content=?,time=? where ucid = ?";
	//ͨ����Ϣ���ɾ��һ��������Ϣ
    public static String SQL_DELETE_USEDCOM = "delete from usedcommodity where ucid = ?";
    //ͨ����Ϣ����޸���ϢͼƬ��ַ
    public static String SQL_UPDATE_USEDIMGURL = "update usedcommodity set ucimg = ? where ucid = ?";
    
    //ͨ���̵�di�����̵�
    public static String SQL_SEARCH_STOREFROMID = "select * from store where storeid = ?";
    //ͨ���̵����Ͳ����̵�
    public static String SQL_SEARCH_STOREFROMTYPE = "select * from store where storetype = ?";
    //�������е��̵�
    public static String SQL_SEARCH_STOREALL = "select * from store";
    //ͨ����Ʒid������Ʒ
    public static String SQL_SEARCH_COMFROMID = "select * from commodity where comid = ?";
    //ͨ���̵�id������Ʒ
    public static String SQL_SEARCH_COMFROMSTOREID = "select * from commodity where storeid = ?";
    //������Ʒ����
    public static String SQL_INSERT_COMORDER = "insert into comorder values(?,?,?,?,?,?,?,?,?,?)";
    //���Ҷ����������
    public static String SQL_SEARCH_COMORDERIDMAX ="select max(to_number(orderid)) from comorder";
    
    //��ѯ����ŵ����ֵ
    public static String SQL_SEARCH_ALBUMMAXID ="select max(to_number(albid)) from album";
    //�޸����ͼƬ
    public static String SQL_UPDATE_ALBUMIMGURL = "update album set albimg = ? where albid = ?";
    //ͨ��userid�������
    public static String SQL_SEARCH_ALBUMFROMUSERID = "select * from album where userid = ? order by time desc";
    //����һ�����
    public static String SQL_INSERT_ALBUM = "insert into album values(?,?,?,?,?,?,?)";
    //��ѯ����ĳһ����µ���Ƭ
    public static String SQL_Search_PhotofromAlbid = "select * from freshnews  where fatherid = ?";
    //ͨ��albid��ѯ���
    public static String SQL_Search_AlbumFromalbid = "select * from album where albid = ?";
    //����һ����Ƭ
    public static String SQL_Insert_PhotoofAlbum = "insert into freshnews values(?,?,?,?,?,?,?,?)";
    //��ѯ�����µ������
    public static String SQL_Search_maxFreshid = "select max(to_number(fnid)) from freshnews";
    
    //ͨ��userid�����û�
    public static String SQL_Search_UserBean = "select * from xwuser where userid = ?";
    
    //ͨ��userid�����Լ��ĺ���
    public static String SQL_SEARCH_FRIENDIDFROMUSERID = "select x.userid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
    
//  ����Լ��
	public static String addAppointment="insert into appointment values((select max(TO_NUMBER(appid)+1) from appointment),?,?,?,?,?,?,?,?,?,?,?)";
	//�鿴ѧУԼ����Ϣ
	public static String SearchAppByFenzu="select * from(select a.*,rownum as r from appointment a where school=? and type=? order by time desc ) where r<=60+?*60 and r>=1+?*60";
	public static String SearchAppByAll="select * from(select a.*,rownum as r from appointment a where school=?  order by time desc ) where r<=60+?*60 and r>=1+?*60";
	public static String getAppUserMes="select userimg,academe,name,sex from xwuser where userid=?";
	public static String getAppointmentSize="select count(*) from appointment where school=? and type=?";
	public static String getAppointmentSizeAll="select count(*) from appointment where school=?";
	public static String AppRequest="insert into appointmentrequest values((select max(to_number(arid)+1)from appointmentrequest),?,?,?,?,?,?)";
	public static String AppRequestCount="select count(*)from appointmentrequest where appid=?";
	public static String AppIsRequested="select * from appointmentrequest where appid=? and userid=?";
	public static String SearchAppByUserid="select * from appointment where userid=?  order by time desc ";
	public static String getMyAppReqMes="select  u.userid, u.name,u.sex,u.academe,u.userimg,a.tele,a.qq, a.resstatus,a.arid from xwuser u ,(select * from appointmentrequest where appid=?) a where u.userid=a.userid";
	public static String AppAgree="update appointmentrequest set resstatus=? where arid = ?";
	public static String AppMyRequest="select a.*,ar.resstatus  from appointment a ,(select appid,resstatus from appointmentrequest where userid=?)ar where a.appid = ar.appid order by a.time desc";
	public static String AppSousuo="select * from appointment where school=? and apptitle like ? order by time desc";
    
	
//	�����û�ID��ȡ�Ѻ���Ϣ�б�
	public static String SreachFriendByUserid="select x.userid, x.name,x.sex ,x.userimg,a.ftname ,a.friid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
	//���ݺ��ѷ���ID��ȡ������Ϣ�б�
	public static String SreachFriendByFtid="select x.userid, x.name,x.sex ,x.userimg,a.ftname,a.friid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where ftid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
	//��ȡ���ѷ���
	public static String FriendGetGroupByUserid="select * from friendtype where userid=?";
	//��ȡ��������
	public static String FriendGetGroupCount="select count(*)as count   from friend  where ftid=?";
	//�жϺ����Ƿ����Լ��İ�������
	public static String FriendIsLove="select * from love where userid=? and luserid=?";
	//�޸ĺ��ѷ���
	public static String FriendModifFenzu="update friend set ftid=? where friid=?";
	//�������ѷ���
	public static String FriendAddType="insert into friendtype values((select max(to_number(ftid)+1) from friendtype),?,?)";
	//��ȡ���������ID
	public static String FriendgetFtid="select ftid  from friendtype where ftname = ?and userid=?";
	//ɾ�����ѷ���
	public static String FriendDeleFtype="delete from friendtype where ftid=?";
	//ɾ������
	public static String FriendDele="delete from friend where friid=?";
	//��������
	public static String FriendLove="insert into love values((select max(to_number(loveid)+1) from love),?,?)";
	//ȡ������
	public static String FriendMoveLove="delete from love where userid=? and luserid=?";
	//��������
	public static String FriendSousuo="select a.*,b.* from (select userid ,name,sex,userimg from xwuser where name like ?)a ,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) b where a.userid =b.fuserid";
	//��ȡ�������ѵ�ID
	public static String FriendGetLoveID= "select luserid from love where userid = ?";
	//��ȡ˫�����ĺ�����Ϣ
	public static String FriendGetLoveMes= "select x.userid,x.name,x.sex,x.university,x.userimg from xwuser x ,(select * from love where userid = ? and luserid = ?)b where x.userid = b.userid";

	public static String searchFriend_all = "select * from xwuser where name like ?";
	
	public static String FriendgetNoGroup="select ftid from friendtype where userid = ? and ftname ='δ����'";
	public static String FriendAddNoGroup="insert into friendtype values((select max(to_number(ftid)+1) from friendtype),'δ����',?)";
	public static String FriendAddFriend="insert into friend values((select max(to_number(friid)+1) from friend), ?,?)";
	public static String FriendiSUserFriend="select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid and fuserid =?";

	
	
	
	
	
	
	
	
	
	
	
	
    
    
    
}
