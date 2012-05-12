package com.csu.xiaowai.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Vector;

import com.csu.xiaowai.bean.AlbumBean;
import com.csu.xiaowai.bean.CommodityBean;
import com.csu.xiaowai.bean.ComorderBean;
import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.bean.StoreBean;
import com.csu.xiaowai.bean.UsedCommodityBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.comm.SQLTiaomu;
import com.csu.xiaowai.dbmanager.ConnManager;

public class UserDao {

	Connection con =ConnManager.getConnection();
	ResultSet rs =null;
	Statement st = null;
	PreparedStatement ps = null;
    Date now = new Date();
	DateFormat d2 = DateFormat.getDateTimeInstance();
    String nowtime = d2.format(now);
    
    
	public UserBean login(String username,String pwd){
		UserBean user = new UserBean();
	
		boolean flag=false;
		try {

			String sql = SQLTiaomu.LOGINCHECK;
			
			ps = con.prepareStatement(sql);
		
			ps.setString(1,username);
			ps.setString(2,pwd);
			rs = ps.executeQuery();
			if(rs.next()){
				user.setUserId(rs.getString(1));
				user.setUsername(rs.getString(2));
				user.setPwd(rs.getString(3));
				user.setName(rs.getString(4));
				user.setSex(rs.getString(5));
				user.setBirthday(rs.getString(6));
				user.setHometown(rs.getString(7));
				user.setUniversity(rs.getString(8));
				user.setAcademe(rs.getString(9));
				user.setUserimg(rs.getString(10));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
	
	public boolean regist(String username,String pwd,String name,String gender,String birth,String address,String university,String academe,String url){
		UserBean user = new UserBean();
		int maxid = 0; 
		boolean flag=false;
		try {
			con = ConnManager.getConnection();
		
			
			String sql2 = SQLTiaomu.REGIST;
			String sql = SQLTiaomu.MAXUSERID;
			st = con.createStatement();
			
			rs = st.executeQuery(sql);
			
			if(rs.next()){
				String max = rs.getString(1);
				System.out.println(rs.getString(1));
				maxid = Integer.parseInt(max)+1;
			}
			
			
			ps = con.prepareStatement(sql2);
			ps.setString(1,String.valueOf(maxid));
			ps.setString(2, username);
			ps.setString(3, pwd);
			ps.setString(4, name);
			ps.setString(5, gender);
			ps.setString(6, birth);
			ps.setString(7, address);
			ps.setString(8, university);
			ps.setString(9, academe);
			ps.setString(10, url);
			
			int i = ps.executeUpdate();
			
			if(i>0){
				flag=true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean touxiangUpload(String username,String url){
		
		int i = 0;
		
		boolean flag=false;
		try {
			con = ConnManager.getConnection();
		
			
			String sql = SQLTiaomu.TOUXIANGUPLOAD;
			
			ps = con.prepareStatement(sql);
		
			ps.setString(1,url);
			ps.setString(2, username);
			i = ps.executeUpdate();
			if(i>0){
				flag = true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return flag;
	}
	
public String getStatus(String userid){
		
		String status = null;
		
		try {
			con = ConnManager.getConnection();
		
			
			String sql = SQLTiaomu.GETSTATUS;
			
			ps = con.prepareStatement(sql);
		
			ps.setString(1,userid);
			ps.setString(2, "1");
			rs = ps.executeQuery();
			if(rs.next()){
				status = rs.getString(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return status;
	}

public ArrayList<String> getAllStatus(String userid){
	
	ArrayList<String> status = new ArrayList<String>();
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETSTATUS;
		
		ps = con.prepareStatement(sql);
	
		ps.setString(1,userid);
		ps.setString(2, "1");
		rs = ps.executeQuery();
		while(rs.next()){
			//System.out.println("content:"+rs.getString(1));
			status.add(rs.getString("content"));

		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return status;
	
}


public String getStatusTime(String status){
	
	String time = null;
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETSTATUSTIME;
		
		ps = con.prepareStatement(sql);
	
		ps.setString(1,status);
		ps.setString(2, "状态");
		rs = ps.executeQuery();
		while(rs.next()){
			time = rs.getString(1);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return time;
}
public ArrayList<FreshNewsBean> getAllFreshNews(){
	
	ArrayList<FreshNewsBean> fnbarr = new ArrayList<FreshNewsBean>();
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETALLFRESHNEWS;
		
		ps = con.prepareStatement(sql);
		
		rs = ps.executeQuery();
		while(rs.next()){
			FreshNewsBean fnb = new FreshNewsBean();
			fnb.setFnID(rs.getString("fnid"));
			fnb.setUserID(rs.getString("userid"));
			fnb.setTitle(rs.getString("title"));
			fnb.setContent(rs.getString("content"));
			fnb.setType(rs.getString("type"));
			fnb.setFatherID(rs.getString("fatherID"));
			fnb.setTime(rs.getString("time"));
			fnb.setPopedom(rs.getString("popedom"));
			fnbarr.add(fnb);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return fnbarr;
}

public ArrayList<FreshNewsBean> getAllFreshNewsByUserID(String userid){
	
	ArrayList<FreshNewsBean> fnbarr = new ArrayList<FreshNewsBean>();
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETALLFRESHNEWSBYUSERID;
		
		ps = con.prepareStatement(sql);
	
		ps.setString(1,userid);
		
		rs = ps.executeQuery();
		while(rs.next()){
			FreshNewsBean fnb = new FreshNewsBean();
			fnb.setFnID(rs.getString("fnid"));
			fnb.setUserID(rs.getString("userid"));
			fnb.setTitle(rs.getString("title"));
			fnb.setContent(rs.getString("content"));
			fnb.setType(rs.getString("type"));
			fnb.setFatherID(rs.getString("fatherID"));
			fnb.setTime(rs.getString("time"));
			fnb.setPopedom(rs.getString("popedom"));
			fnbarr.add(fnb);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return fnbarr;
}

//得到用户所有日志数
public int getAllPassagesNumber(String userid){
	

	int i=-1;
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETALLPASSAGESNUMBER;
		
		ps = con.prepareStatement(sql);
		ps.setString(1,userid);
		ps.setString(2,"2");
		
		rs = ps.executeQuery();
		while(rs.next()){
			i = rs.getInt(1);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return i;
}

public String getAlbumByFatherID(String fatherID){
	
	String albumName = null;
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETALBUMBYFATHERID;
		ps = con.prepareStatement(sql);
		ps.setString(1,fatherID);
		rs = ps.executeQuery();
		if(rs.next()){
			albumName = rs.getString(1);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return albumName;
}

public FreshNewsBean getPassageByID(String id){
	
	FreshNewsBean fnb = new FreshNewsBean();
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETPASSAGEBYID;
		
		ps = con.prepareStatement(sql);
	
		ps.setString(1,id);
		
		rs = ps.executeQuery();
		if(rs.next()){
			fnb.setFnID(rs.getString("fnid"));
			fnb.setUserID(rs.getString("userid"));
			fnb.setTitle(rs.getString("title"));
			fnb.setContent(rs.getString("content"));
			fnb.setType(rs.getString("type"));
			fnb.setFatherID(rs.getString("fatherid"));
			fnb.setTime(rs.getString("time"));
			fnb.setPopedom(rs.getString("popedom"));
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return fnb;
}

public UserBean getUserByID(String id){
	
	UserBean user = new UserBean();
	try {
		con = ConnManager.getConnection();
		String sql = SQLTiaomu.GETUSERBYID;
		ps = con.prepareStatement(sql);
		ps.setString(1,id);
		rs = ps.executeQuery();
		if(rs.next()){
			user.setUserId(rs.getString("userid"));
			user.setUsername(rs.getString("username"));
			user.setPwd(rs.getString("password"));
			user.setName(rs.getString("name"));
			user.setSex(rs.getString("sex"));
			user.setBirthday(rs.getString("birthday"));
			user.setHometown(rs.getString("hometown"));
			user.setUniversity(rs.getString("university"));
			user.setAcademe(rs.getString("academe"));
			user.setUserimg(rs.getString("userimg"));
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return user;
}

public ArrayList getFriendsByUserID(String userID){
	
	ArrayList friends = new ArrayList();
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETFRIENDSBYUSERID;
		
		ps = con.prepareStatement(sql);
	
		ps.setString(1,userID);
		
		rs = ps.executeQuery();
		while(rs.next()){
			friends.add(rs.getString(1));
		
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return friends;
}

public int getMaxFreshNewsID(){
	
	int i=-1;
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETMAXFRESHNEWSID;
		
		ps = con.prepareStatement(sql);

		rs = ps.executeQuery();
		if(rs.next()){
			i = Integer.parseInt(rs.getString(1));
		
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return i;
}

public boolean  addFreshNews(FreshNewsBean fnb){
	
	int i=-1;
	boolean flag = false;
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.ADDFRESHNEWS;
		
		ps = con.prepareStatement(sql);
		
		ps.setString(1, fnb.getFnID());
		ps.setString(2, fnb.getUserID());
		ps.setString(3, fnb.getTitle());
		ps.setString(4, fnb.getContent());
		ps.setString(5, fnb.getType());
		ps.setString(6, fnb.getFatherID());
		ps.setString(7, fnb.getTime());
		ps.setString(8, fnb.getPopedom());
		i=ps.executeUpdate();
		
		if(i>0){
			flag=true;
		
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return flag;
}

public int getMaxVisitID(){
	
	int i=-1;
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETMAXVISITID;
		
		ps = con.prepareStatement(sql);

		rs = ps.executeQuery();
		if(rs.next()){
			i = Integer.parseInt(rs.getString(1));
		
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return i;
}
public boolean  addVisitors(String userID,String visitorID, String time){
	
	int i=-1;
	boolean flag = false;
	UserDao ud = new UserDao();
	try {
		con = ConnManager.getConnection();
		String sql = SQLTiaomu.ADDVISITORS;
		ps = con.prepareStatement(sql);
		int visitID = ud.getMaxVisitID();
		System.out.println(visitID);
		ps.setString(1, String.valueOf(visitID+1));
		ps.setString(2, userID);
		ps.setString(3, visitorID);
		ps.setString(4, time);
	
		i=ps.executeUpdate();
		if(i>0){
			flag=true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return flag;
}

public String  allVisitors(String userID){
	
	String count = null;
	try {
		con = ConnManager.getConnection();
		String sql = SQLTiaomu.ALLVISITORS;
		ps = con.prepareStatement(sql);
		ps.setString(1, userID);
		rs = ps.executeQuery();
		if(rs.next()){
			count = rs.getString(1);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return count;
}


public ArrayList<UserBean>  getVisitorsByUserID(String userID){
	
	String visitorID = null;
	ArrayList<UserBean> visitors = new ArrayList<UserBean>();
	UserBean user = new UserBean();
	UserDao ud = new UserDao();
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETVISITORSBYUSERID;
		
		ps = con.prepareStatement(sql);
		ps.setString(1, userID);
	
		rs = ps.executeQuery();
		while(rs.next()){
			visitorID = rs.getString("visitorid");
			user = ud.getUserByID(visitorID);
			
			visitors.add(user);
		}

		
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return visitors;
}

public FreshNewsBean getFreshNewsByID(String id){
	
	FreshNewsBean fnb = new FreshNewsBean();
	
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETPASSAGEBYID;
		
		ps = con.prepareStatement(sql);
	
		ps.setString(1,id);
		
		rs = ps.executeQuery();
		if(rs.next()){
			fnb.setFnID(rs.getString("fnid"));
			fnb.setUserID(rs.getString("userid"));
			fnb.setTitle(rs.getString("title"));
			fnb.setContent(rs.getString("content"));
			fnb.setType(rs.getString("type"));
			fnb.setFatherID(rs.getString("fatherid"));
			fnb.setTime(rs.getString("time"));
			fnb.setPopedom(rs.getString("popedom"));
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return fnb;
}


public ArrayList getAllUsers(){
	
	ArrayList<UserBean> allUser = new ArrayList<UserBean>();
	UserBean user = new UserBean();
	try {
		con = ConnManager.getConnection();
	
		
		String sql = SQLTiaomu.GETALLUSERS;
		
		ps = con.prepareStatement(sql);
	
		
		
		rs = ps.executeQuery();
		if(rs.next()){
			user.setUserId(rs.getString("userid"));
			user.setUsername(rs.getString("username"));
			user.setPwd(rs.getString("password"));
			user.setName(rs.getString("name"));
			user.setSex(rs.getString("sex"));
			user.setBirthday(rs.getString("birthday"));
			user.setHometown(rs.getString("hometown"));
			user.setUniversity(rs.getString("university"));
			user.setAcademe(rs.getString("academe"));
			user.setUserimg(rs.getString("userimg"));
			allUser.add(user);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return allUser;
}






public Vector UsedgoodsSearch(String uctype){//按类别查找二手信息
	Vector vec = new Vector();
	if(uctype.equals("0")){
		vec = SearchAllUsedGoods();
	}
	else{
		try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_USEDCOMfromType);
		ps.setString(1,uctype);
		rs = ps.executeQuery();
		while(rs.next()){
			UsedCommodityBean ucb = new UsedCommodityBean();
			ucb.setUcid(rs.getString("ucid"));//信息id
			ucb.setAddress(rs.getString("address"));//地址
			ucb.setUctitle(rs.getString("uctitle"));//标题
			ucb.setUctypeid(rs.getString("uctype"));//类型
			ucb.setTel(rs.getString("tel"));//电话
			ucb.setContent(rs.getString("content"));//备注
			ucb.setPrice(rs.getString("price"));//价格
			ucb.setTime(rs.getString("time"));//时间
			ucb.setUserid(rs.getString("userid"));//用户id
			ucb.setQq(rs.getString("qq"));//qq
			ucb.setUcimg(rs.getString("ucimg"));//图片地址
			vec.add(ucb);
			
		}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			ConnManager.freeConnection(con, st, rs);
		}
	}
	
	return vec;
}

//通过价格范围查找二手信息
public Vector SearchUsedGoodsFromPrice(String uctype,String startprice,String 

endprice){
	
	Vector vec = new Vector();
	if(uctype.equalsIgnoreCase("0")){
		try {
			ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_USEDCOMFROMPRICEALL);
			ps.setString(1,startprice);
			ps.setString(2,endprice);
			rs = ps.executeQuery();
			while(rs.next()){
				UsedCommodityBean ucb = new UsedCommodityBean();
				ucb.setUcid(rs.getString("ucid"));//信息id
				ucb.setAddress(rs.getString("address"));//地址
				ucb.setUctitle(rs.getString("uctitle"));//标题
				ucb.setUctypeid(rs.getString("uctype"));//类型
				ucb.setTel(rs.getString("tel"));//电话
				ucb.setContent(rs.getString("content"));//备注
				ucb.setPrice(rs.getString("price"));//价格
				ucb.setTime(rs.getString("time"));//时间	
				ucb.setUserid(rs.getString("userid"));//用户id
				ucb.setQq(rs.getString("qq"));//qq
				ucb.setUcimg(rs.getString("ucimg"));//图片地址
				vec.add(ucb);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			ConnManager.freeConnection(con, st, rs);
		}
	}else{
		try {
			ps = con.prepareStatement

(SQLTiaomu.SQL_SEARCH_USEDCOMFROMPRICE);
			ps.setString(1,startprice);
			ps.setString(2,endprice);
			ps.setString(3,uctype);
			rs = ps.executeQuery();
			while(rs.next()){
				UsedCommodityBean ucb = new UsedCommodityBean();
				ucb.setUcid(rs.getString("ucid"));//信息id
				ucb.setAddress(rs.getString("address"));//地址
				ucb.setUctitle(rs.getString("uctitle"));//标题
				ucb.setUctypeid(rs.getString("uctype"));//类型
				ucb.setTel(rs.getString("tel"));//电话
				ucb.setContent(rs.getString("content"));//备注
				ucb.setPrice(rs.getString("price"));//价格
				ucb.setTime(rs.getString("time"));//时间	
				ucb.setUserid(rs.getString("userid"));//用户id
				ucb.setQq(rs.getString("qq"));//qq
				ucb.setUcimg(rs.getString("ucimg"));//图片地址
				vec.add(ucb);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			ConnManager.freeConnection(con, st, rs);
		}
	}
	;
	return vec;
}

public boolean UpdateUsedComImgurlFromUcid(String ucid,String imgurl){
	boolean flag = false;
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_UPDATE_USEDIMGURL);
		ps.setString(1,imgurl);
		ps.setString(2,ucid);
		int result = ps.executeUpdate();
		if(result>0){
			flag = true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return flag;
}

public UsedCommodityBean SearchUsedGoodsfromUcid(String ucid){//通过二手信息编号查找二手信息
	UsedCommodityBean ucb = null;
	
	try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_USEDCOMFROMUCID);
		ps.setString(1,ucid);
		rs = ps.executeQuery();
		while(rs.next()){
			ucb = new UsedCommodityBean();
			ucb.setUcid(rs.getString("ucid"));//信息id
			ucb.setAddress(rs.getString("address"));//地址
			ucb.setUctitle(rs.getString("uctitle"));//标题
			ucb.setUctypeid(rs.getString("uctype"));//类型
			ucb.setTel(rs.getString("tel"));//电话
			ucb.setContent(rs.getString("content"));//备注
			ucb.setPrice(rs.getString("price"));//价格
			ucb.setTime(rs.getString("time"));//时间	
			ucb.setUserid(rs.getString("userid"));//用户id
			ucb.setQq(rs.getString("qq"));//qq
			ucb.setUcimg(rs.getString("ucimg"));//图片地址
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return ucb;
}

public Vector SearchAllUsedGoods(){//查找所有的二手信息
	Vector vec = new Vector();
	try {
		st = con.createStatement();
		rs = st.executeQuery(SQLTiaomu.SQL_SEARCH_USEDCOMALL);
		while(rs.next()){
			UsedCommodityBean ucb = new UsedCommodityBean();
			ucb.setUcid(rs.getString("ucid"));//信息id
			ucb.setAddress(rs.getString("address"));//地址
			ucb.setUctitle(rs.getString("uctitle"));//标题
			ucb.setUctypeid(rs.getString("uctype"));//类型
			ucb.setTel(rs.getString("tel"));//电话
			ucb.setContent(rs.getString("content"));//备注
			ucb.setPrice(rs.getString("price"));//价格
			ucb.setTime(rs.getString("time"));//时间	
			ucb.setUserid(rs.getString("userid"));//用户id
			ucb.setQq(rs.getString("qq"));//qq
			ucb.setUcimg(rs.getString("ucimg"));//图片地址
			vec.add(ucb);
			
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}finally{
		ConnManager.freeConnection(con, st, rs);
	}
	return vec;
}

//通过用户id查找二手信息
public Vector SearchErshouFromUserid(String userid){
	Vector vec = new Vector();

	try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_USEDCOMFROMUSERID);
		ps.setString(1,userid);
		rs = ps.executeQuery();
		while(rs.next()){
			UsedCommodityBean ucb = new UsedCommodityBean();
			ucb.setUcid(rs.getString("ucid"));//信息id
			ucb.setAddress(rs.getString("address"));//地址
			ucb.setUctitle(rs.getString("uctitle"));//标题
			ucb.setUctypeid(rs.getString("uctype"));//类型
			ucb.setTel(rs.getString("tel"));//电话
			ucb.setContent(rs.getString("content"));//备注
			ucb.setPrice(rs.getString("price"));//价格
			ucb.setTime(rs.getString("time"));//时间	
			ucb.setUserid(rs.getString("userid"));//用户id
			ucb.setQq(rs.getString("qq"));//qq
			ucb.setUcimg(rs.getString("ucimg"));//图片地址
			vec.add(ucb);
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}finally{
		ConnManager.freeConnection(con, st, rs);
	}
	return vec;
}

//插入二手信息
public UsedCommodityBean InsertUsedComxinxi(UsedCommodityBean ucb){
	
	try {
		st = con.createStatement();
		rs = st.executeQuery(SQLTiaomu.SQL_SEARCH_USEDCOMMAXUCID);
		rs.next();
		String ucid = rs.getString(1);
		int max = Integer.parseInt(ucid);
		
	    String maxucid = String.valueOf(++max);//最大的编号
	    
		ps = con.prepareStatement(SQLTiaomu.SQL_INSERT_USEDCOM);
		ps.setString(1,maxucid);
		ps.setString(2,ucb.getUserid());
		ps.setString(3,ucb.getUctitle());
		ps.setString(4,ucb.getUctypeid());
		ps.setString(5,ucb.getPrice());
		ps.setString(6,ucb.getTel());
		ps.setString(7,ucb.getAddress());
		ps.setString(8,ucb.getQq());
		ps.setString(9,ucb.getContent());
		ps.setString(10,ucb.getUcimg());
		ps.setString(11,nowtime);
	    int result = ps.executeUpdate();
		if(result>0){
			ucb.setUcid(maxucid);
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		ConnManager.freeConnection(con, st, rs);
	}
	
	return ucb;
}
//通过二手信息id删除信息                                                             

                                                                                         

                
public boolean deleteUsedComxinxi(String ucid){
	boolean flag = false;
	con = ConnManager.getConnection();
	try {
		ps = con.prepareStatement(SQLTiaomu.SQL_DELETE_USEDCOM);
		ps.setString(1,ucid);
		int result = ps.executeUpdate();
		if(result>0){
			flag = true;
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		ConnManager.freeConnection(con, st, rs);
	}
	return flag;
}

//修改二手信息
public boolean updateUsedComxinxi(UsedCommodityBean ucb){
	boolean flag = false;
	try {
		
		ps = con.prepareStatement(SQLTiaomu.SQL_UPDATE_USEDCOM);
		ps.setString(1,ucb.getUctitle());
		ps.setString(2,ucb.getUctypeid());
		ps.setString(3,ucb.getPrice());
		ps.setString(4,ucb.getTel());
		ps.setString(5,ucb.getAddress());
		ps.setString(6,ucb.getQq());
		ps.setString(7,ucb.getContent());
		ps.setString(8,nowtime);
		ps.setString(9,ucb.getUcid());
		int result = ps.executeUpdate();
		System.out.println(result);
		if(result>0){
			flag = true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return flag;
}

//通过商店id查找商店
public StoreBean searchStorefromId(String storeid){
	StoreBean sb = new StoreBean();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_STOREFROMID);
		ps.setString(1,storeid);
		rs = ps.executeQuery();
		rs.next();
		sb.setStoreid(rs.getString("storeid"));
		sb.setAddress(rs.getString("address"));
		sb.setStorename(rs.getString("storename"));
		sb.setStoretype(rs.getString("storetype"));
		sb.setTel(rs.getString("tel"));
		sb.setContent(rs.getString("content"));
		sb.setStoreimg(rs.getString("storeimg"));
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return sb;
}

//通过商店类型查找商店集
public Vector<StoreBean> searchStorefromType(String storetype){
	Vector<StoreBean> vec = new Vector<StoreBean>();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_STOREFROMTYPE);
		ps.setString(1,storetype);
		rs = ps.executeQuery();
		while(rs.next()){
			StoreBean sb = new StoreBean();
			sb.setStoreid(rs.getString("storeid"));
			sb.setAddress(rs.getString("address"));
			sb.setStorename(rs.getString("storename"));
			sb.setStoretype(rs.getString("storetype"));
			sb.setTel(rs.getString("tel"));
			sb.setContent(rs.getString("content"));
			sb.setStoreimg(rs.getString("storeimg"));
			vec.add(sb);
		}
	} catch (SQLException e) {	
		e.printStackTrace();
	}
	
	return vec;
}

//查找所有商店
public Vector<StoreBean> searchStoreAll(){
	Vector<StoreBean> vec = new Vector<StoreBean>();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_STOREALL);
		rs = ps.executeQuery();
		while(rs.next()){
			StoreBean sb = new StoreBean();
			sb.setStoreid(rs.getString("storeid"));
			sb.setAddress(rs.getString("address"));
			sb.setStorename(rs.getString("storename"));
			sb.setStoretype(rs.getString("storetype"));
			sb.setTel(rs.getString("tel"));
			sb.setContent(rs.getString("content"));
			sb.setStoreimg(rs.getString("storeimg"));
			vec.add(sb);
		}
	} catch (SQLException e) {	
		e.printStackTrace();
	}
	return vec;
}

//通过商店id查找商品
public Vector<CommodityBean> searchComfromStoreid(String storeid){
	Vector<CommodityBean> vec = new Vector<CommodityBean>();
	   try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_COMFROMSTOREID);
		ps.setString(1,storeid);
		rs = ps.executeQuery();
		while(rs.next()){
			CommodityBean cb = new CommodityBean();
			cb.setComid(rs.getString("comid"));
			cb.setComimg(rs.getString("comimg"));
			cb.setComname(rs.getString("comname"));
			cb.setContent(rs.getString("content"));
			cb.setPrice(rs.getString("price"));
			cb.setStoreid(rs.getString("storeid"));
			vec.add(cb);
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return vec;
}

//通过商品id查找商品
public CommodityBean searchComfromid(String comid){
	CommodityBean cb = new CommodityBean();
	
	try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_COMFROMID);
		ps.setString(1,comid);
		rs = ps.executeQuery();
		rs.next();
		cb.setComid(rs.getString("comid"));
		cb.setComimg(rs.getString("comimg"));
		cb.setComname(rs.getString("comname"));
		cb.setContent(rs.getString("content"));
		cb.setPrice(rs.getString("price"));
		cb.setStoreid(rs.getString("storeid"));
		
	} catch (SQLException e) {
		e.printStackTrace();
	}
	
	return cb;
}

//插入com订单
public boolean insertComOrder(ComorderBean cb){
   boolean flag = false;
     try {
    	st = con.createStatement();
    	rs = st.executeQuery(SQLTiaomu.SQL_SEARCH_COMORDERIDMAX);
    	rs.next();
    	String orderid = rs.getString(1);
    	int maxid = Integer.parseInt(orderid);
		ps = con.prepareStatement(SQLTiaomu.SQL_INSERT_COMORDER);
		
		ps.setString(1,String.valueOf(++maxid));
		ps.setString(2,cb.getName());
		ps.setString(3,cb.getComid());
		ps.setString(4,cb.getCount());
		ps.setString(5,cb.getPrice());
		ps.setString(6,cb.getTel());
		ps.setString(7,cb.getAddress());
		ps.setString(8,cb.getContent());
		ps.setString(9,"1");
		ps.setString(10,nowtime);
		int result = ps.executeUpdate();
		if(result>0){
			flag = true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
   return flag;
}

//插入一个相册
public boolean InsertAlbum(AlbumBean ab){
	boolean flag = false;
	
	try {
		st = con.createStatement();
		rs = st.executeQuery(SQLTiaomu.SQL_SEARCH_ALBUMMAXID);//查询最大albumid
		rs.next();
		String maxid = null;
		if(rs.getString(1)!=null)
		{
			String albumid = rs.getString(1);
			int max = Integer.parseInt(albumid);
			maxid = String.valueOf(++max);
		}else{
			maxid="1";
		}
 		ps = con.prepareStatement(SQLTiaomu.SQL_INSERT_ALBUM);
		ps.setString(1,maxid);
		ps.setString(2,ab.getUserid());
		ps.setString(3,ab.getAlbtitle());
		ps.setString(4,"images/logo-rr-159.png");
		ps.setString(5,ab.getPopedom());
		ps.setString(6,nowtime);
		ps.setString(7,ab.getUsername());
		int result = ps.executeUpdate();
		if(result>0){
			flag = true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return flag;
}

//查看自己的 相册
public Vector<AlbumBean> SearchMyselfAlbum(String userid){
	Vector<AlbumBean> vec = new Vector<AlbumBean>();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_ALBUMFROMUSERID);
		ps.setString(1,userid);
		rs = ps.executeQuery();
		while(rs.next()){
			AlbumBean ab = new AlbumBean();
			ab.setAlbid(rs.getString("albid"));
			ab.setUserid(rs.getString("userid"));
			ab.setAlbtitle(rs.getString("albtitle"));
			ab.setAlbimg(rs.getString("albimg"));
			ab.setPopedom(rs.getString("popedom"));
			ab.setTime(rs.getString("time"));
			ab.setUsername(rs.getString("username"));
			vec.add(ab);
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return vec;
}

//查看朋友的相册
public Vector<AlbumBean> SearchFriendAlbum(String userid){
	Vector<AlbumBean> vec = new Vector<AlbumBean>();
	   try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_FRIENDIDFROMUSERID);
		ps.setString(1,userid);
		rs = ps.executeQuery();
		while(rs.next()){
			String frienduserid = rs.getString(1);
			PreparedStatement pfriends = con.prepareStatement(SQLTiaomu.SQL_SEARCH_ALBUMFROMUSERID);
			pfriends.setString(1,frienduserid);
			ResultSet rss = pfriends.executeQuery();
		    if(rss.next())
		    {
			    AlbumBean ab = new AlbumBean();
				ab.setAlbid(rss.getString("albid"));
				ab.setUserid(rss.getString("userid"));
				ab.setAlbtitle(rss.getString("albtitle"));
				ab.setAlbimg(rss.getString("albimg"));
				ab.setPopedom(rss.getString("popedom"));
				ab.setTime(rss.getString("time"));
				ab.setUsername(rss.getString("username"));
				vec.add(ab);
		    }
		    
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return vec;
}

//查找朋友id
public Vector<String> SearchFriendid(String userid){
	Vector<String> vec = new Vector<String>();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_SEARCH_FRIENDIDFROMUSERID);
		ps.setString(1,userid);
		rs = ps.executeQuery();
		while(rs.next()){
			vec.add(rs.getString("fuserid"));
		}
		
	} catch (SQLException e){
		e.printStackTrace();
	}
	
	return vec;
}

//查找朋友的bean
public Vector<UserBean> SearchFriendBean(String userid){
	Vector<UserBean> vec = new Vector<UserBean>();
	Vector friendidvec = SearchFriendid(userid);//查出朋友的id
	for(int i = 0;i<friendidvec.size();i++){
		String friendid = (String) friendidvec.get(i);
		try {
			ps = con.prepareStatement(SQLTiaomu.SQL_Search_UserBean);
			ps.setString(1,friendid);
			rs = ps.executeQuery();
			rs.next();
			UserBean user = new UserBean();
			user.setUserId(rs.getString("userid"));
			user.setUsername(rs.getString("username"));
			vec.add(user);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	return vec;
}

//查找userbean通过userid
public UserBean SearchUserBean(String userid){
	UserBean user = new UserBean();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_Search_UserBean);
		ps.setString(1,userid);
		rs = ps.executeQuery();
		rs.next();
		user.setUserId(rs.getString("userid"));
		user.setUsername(rs.getString("username"));
	} catch (SQLException e) {
		e.printStackTrace();
	}
	
	return user;
}

//查找属于某一相册下的照片
public Vector<FreshNewsBean> SearchPhotoFromAlbid(String albid){
	Vector<FreshNewsBean> vec = new Vector<FreshNewsBean>();
	
	try {
		ps = con.prepareStatement(SQLTiaomu.SQL_Search_PhotofromAlbid);
		ps.setString(1,albid);
		rs = ps.executeQuery();
		while(rs.next()){
			FreshNewsBean fb = new FreshNewsBean();
			fb.setFnID(rs.getString("fnid"));
			fb.setUserID(rs.getString("userid"));
			fb.setFatherID(rs.getString("fatherid"));
			fb.setTime(rs.getString("time"));
			fb.setTitle(rs.getString("title"));
			fb.setType(rs.getString("type"));
			fb.setContent(rs.getString("content"));
			fb.setPopedom(rs.getString("popedom"));
			vec.add(fb);
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return vec;
}


public boolean InsertPhotoOfAlbum(FreshNewsBean fb){
	boolean flag = false;
	  try {
		st = con.createStatement();
		rs = st.executeQuery(SQLTiaomu.SQL_Search_maxFreshid);
		rs.next();
		String fnid = rs.getString(1);
		int max=-1;
		if(fnid!=null){
			 max = Integer.parseInt(fnid);
		}else{
			max=0;
		}
		
		ps = con.prepareStatement(SQLTiaomu.SQL_Insert_PhotoofAlbum);
		ps.setString(1,String.valueOf(++max));
		ps.setString(2,fb.getUserID());
		ps.setString(3,fb.getTitle());
		ps.setString(4,fb.getContent());
		ps.setString(5,fb.getType());
		ps.setString(6,fb.getFatherID());
		ps.setString(7,nowtime);
		ps.setString(8,"0");
		int result = ps.executeUpdate();
		if(result>0){
			flag=true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return flag;
}

//通过albid查找相册bean
public AlbumBean SearchAlbumFromAlbid(String albid){
	AlbumBean ab = new AlbumBean();
	  try {
		ps = con.prepareStatement(SQLTiaomu.SQL_Search_AlbumFromalbid);
		ps.setString(1,albid);
		rs = ps.executeQuery();
		rs.next();
		ab.setAlbid(rs.getString("albid"));
		ab.setUserid(rs.getString("userid"));
		ab.setAlbtitle(rs.getString("albtitle"));
		ab.setAlbimg(rs.getString("albimg"));
		ab.setPopedom(rs.getString("popedom"));
		ab.setTime(rs.getString("time"));
		ab.setUsername(rs.getString("username"));
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return ab;
}

//修改相册封面
public boolean UpdateAlbumFengmian(String url,String albid){
	boolean flag = false;
	
	 try {
		ps = con.prepareStatement(SQLTiaomu.SQL_UPDATE_ALBUMIMGURL);
		ps.setString(1,url);
		ps.setString(2,albid);
		
		int result = ps.executeUpdate();
		if(result>0){
			flag= true;
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	return flag;
}
}
