package com.csu.xiaowai.comm;
//这里集中写自己要用到的sql语句
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
	
	
	
//	按类别查找二手信息
	public static String SQL_SEARCH_USEDCOMfromType = "select * from usedcommodity where uctype = ?";
    //查找所有二手信息
	public static String SQL_SEARCH_USEDCOMALL ="select * from usedcommodity";
	//通过二手信息编号查找二手信息
	public static String SQL_SEARCH_USEDCOMFROMUCID = "select * from usedcommodity where ucid = ?";
	//按价格查找所有的二手信息
	public static String SQL_SEARCH_USEDCOMFROMPRICEALL = "select * from usedcommodity where (to_number(price) between to_number(?) and to_number(?))";
	//通过价格范围查找特定类型的二手信息
	public static String SQL_SEARCH_USEDCOMFROMPRICE = "select * from usedcommodity where (to_number(price) between to_number(?) and to_number(?)) and uctype = ?";
	//通过用户id查找二手信息
	public static String SQL_SEARCH_USEDCOMFROMUSERID ="select * from usedcommodity where userid = ?";
	//查找当前最大的二手信息编号
	public static String SQL_SEARCH_USEDCOMMAXUCID = "select max(to_number(ucid)) from usedcommodity";
	//插入一条二手信息
    public static String SQL_INSERT_USEDCOM = "insert into usedcommodity values(?,?,?,?,?,?,?,?,?,?,?)";
	//修改一条二手信息
    public static String SQL_UPDATE_USEDCOM = "update usedcommodity set uctitle=?,uctype=?,price=?,tel=?,address=?,qq=?,content=?,time=? where ucid = ?";
	//通过信息编号删除一条二手信息
    public static String SQL_DELETE_USEDCOM = "delete from usedcommodity where ucid = ?";
    //通过信息编号修改信息图片地址
    public static String SQL_UPDATE_USEDIMGURL = "update usedcommodity set ucimg = ? where ucid = ?";
    
    //通过商店di查找商店
    public static String SQL_SEARCH_STOREFROMID = "select * from store where storeid = ?";
    //通过商店类型查找商店
    public static String SQL_SEARCH_STOREFROMTYPE = "select * from store where storetype = ?";
    //查找所有的商店
    public static String SQL_SEARCH_STOREALL = "select * from store";
    //通过商品id查找商品
    public static String SQL_SEARCH_COMFROMID = "select * from commodity where comid = ?";
    //通过商店id查找商品
    public static String SQL_SEARCH_COMFROMSTOREID = "select * from commodity where storeid = ?";
    //插入商品订单
    public static String SQL_INSERT_COMORDER = "insert into comorder values(?,?,?,?,?,?,?,?,?,?)";
    //查找订单编号最大的
    public static String SQL_SEARCH_COMORDERIDMAX ="select max(to_number(orderid)) from comorder";
    
    //查询相册编号的最大值
    public static String SQL_SEARCH_ALBUMMAXID ="select max(to_number(albid)) from album";
    //修改相册图片
    public static String SQL_UPDATE_ALBUMIMGURL = "update album set albimg = ? where albid = ?";
    //通过userid查找相册
    public static String SQL_SEARCH_ALBUMFROMUSERID = "select * from album where userid = ? order by time desc";
    //插入一个相册
    public static String SQL_INSERT_ALBUM = "insert into album values(?,?,?,?,?,?,?)";
    //查询属于某一相册下的照片
    public static String SQL_Search_PhotofromAlbid = "select * from freshnews  where fatherid = ?";
    //通过albid查询相册
    public static String SQL_Search_AlbumFromalbid = "select * from album where albid = ?";
    //插入一个照片
    public static String SQL_Insert_PhotoofAlbum = "insert into freshnews values(?,?,?,?,?,?,?,?)";
    //查询新鲜事的最大编号
    public static String SQL_Search_maxFreshid = "select max(to_number(fnid)) from freshnews";
    
    //通过userid查找用户
    public static String SQL_Search_UserBean = "select * from xwuser where userid = ?";
    
    //通过userid查找自己的好友
    public static String SQL_SEARCH_FRIENDIDFROMUSERID = "select x.userid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
    
//  发表约会
	public static String addAppointment="insert into appointment values((select max(TO_NUMBER(appid)+1) from appointment),?,?,?,?,?,?,?,?,?,?,?)";
	//查看学校约会信息
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
    
	
//	根据用户ID获取友好信息列表
	public static String SreachFriendByUserid="select x.userid, x.name,x.sex ,x.userimg,a.ftname ,a.friid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
	//根据好友分组ID获取好友信息列表
	public static String SreachFriendByFtid="select x.userid, x.name,x.sex ,x.userimg,a.ftname,a.friid from xwuser x,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where ftid=?)ft where f.ftid=ft.ftid) a where x.userid=a.fuserid";
	//获取好友分组
	public static String FriendGetGroupByUserid="select * from friendtype where userid=?";
	//获取分组数量
	public static String FriendGetGroupCount="select count(*)as count   from friend  where ftid=?";
	//判断好友是否是自己的暗恋对象
	public static String FriendIsLove="select * from love where userid=? and luserid=?";
	//修改好友分组
	public static String FriendModifFenzu="update friend set ftid=? where friid=?";
	//创建好友分组
	public static String FriendAddType="insert into friendtype values((select max(to_number(ftid)+1) from friendtype),?,?)";
	//获取创建分组的ID
	public static String FriendgetFtid="select ftid  from friendtype where ftname = ?and userid=?";
	//删除好友分组
	public static String FriendDeleFtype="delete from friendtype where ftid=?";
	//删除好友
	public static String FriendDele="delete from friend where friid=?";
	//暗恋好友
	public static String FriendLove="insert into love values((select max(to_number(loveid)+1) from love),?,?)";
	//取消暗恋
	public static String FriendMoveLove="delete from love where userid=? and luserid=?";
	//搜索好友
	public static String FriendSousuo="select a.*,b.* from (select userid ,name,sex,userimg from xwuser where name like ?)a ,(select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid) b where a.userid =b.fuserid";
	//获取暗恋好友的ID
	public static String FriendGetLoveID= "select luserid from love where userid = ?";
	//获取双向暗恋的好友信息
	public static String FriendGetLoveMes= "select x.userid,x.name,x.sex,x.university,x.userimg from xwuser x ,(select * from love where userid = ? and luserid = ?)b where x.userid = b.userid";

	public static String searchFriend_all = "select * from xwuser where name like ?";
	
	public static String FriendgetNoGroup="select ftid from friendtype where userid = ? and ftname ='未分组'";
	public static String FriendAddNoGroup="insert into friendtype values((select max(to_number(ftid)+1) from friendtype),'未分组',?)";
	public static String FriendAddFriend="insert into friend values((select max(to_number(friid)+1) from friend), ?,?)";
	public static String FriendiSUserFriend="select f.friid, f.fuserid,ft.ftname from friend f , (select * from friendtype where userid=?)ft where f.ftid=ft.ftid and fuserid =?";

	
	
	
	
	
	
	
	
	
	
	
	
    
    
    
}
