package com.csu.xiaowai.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.csu.xiaowai.bean.AppointmentBean;
import com.csu.xiaowai.bean.AppointmentMyBean;
import com.csu.xiaowai.bean.AppointmentReqPersion;
import com.csu.xiaowai.bean.AppointmentRequsetBean;
import com.csu.xiaowai.comm.SQLTiaomu;
import com.csu.xiaowai.dbmanager.ConnManager;

public class AppointmentDao {

	private static Connection conn;
	private static Statement state;
	private static PreparedStatement pro;
	private static ResultSet rs;
	public AppointmentDao() {
		// TODO Auto-generated constructor stub
	}
	//发表约会
	public int  addAppoinment(AppointmentBean app) throws SQLException{
		int isSuccess = -1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.addAppointment);	
		pro.setString(1, app.getUserid());
		pro.setString(2, app.getApptitle());
		pro.setString(3, app.getType());
		pro.setString(4, app.getRequirement());
		pro.setString(5, app.getCount());
		pro.setString(6, app.getApptime());
		pro.setString(7, app.getTel());
		pro.setString(8, app.getQQ());
		pro.setString(9, app.getContext());
		pro.setString(10, app.getTime());
		pro.setString(11, app.getSchool());
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return isSuccess;
	}
	//查询约会
	public ArrayList SearchAppointment(String school,int index,String fenzu,String userid) throws SQLException{
		ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
		conn = ConnManager.getConnection();
		if("0".equals(fenzu)){
			System.out.println("jinru");
			pro = conn.prepareStatement(SQLTiaomu.SearchAppByAll);
			pro.setString(1, school);
			pro.setInt(2, index);
			pro.setInt(3, index);
		}else{
			pro = conn.prepareStatement(SQLTiaomu.SearchAppByFenzu);	
			pro.setString(1, school);
			pro.setString(2, fenzu);
			pro.setInt(3,index);
			pro.setInt(4,index);
		}
		rs = pro.executeQuery();
		while(rs.next()){
			AppointmentBean app = new AppointmentBean();
			app.setAppid(rs.getString(1));
			app.setUserid(rs.getString(2));
			app.setApptitle(rs.getString(3));
			app.setType(rs.getString(4));
			app.setRequirement(rs.getString(5));
			app.setContext(rs.getString(6));
			app.setApptime(rs.getString(7));
			app.setTel(rs.getString(8));
			app.setQQ(rs.getString(9));
			app.setContext(rs.getString(10));
			app.setTime(rs.getString(11));
			app.setSchool(rs.getString(12));
			list.add(app);
		}
		System.out.println("listsize=" + list.size());
		for(int i=0;i<list.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.getAppUserMes);
			pro.setString(1, list.get(i).getUserid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setUserimg(rs.getString(1));
				list.get(i).setAcademe(rs.getString(2));
				list.get(i).setName(rs.getString(3));
				list.get(i).setSex(rs.getString(4));
			}
			pro = conn.prepareStatement(SQLTiaomu.AppRequestCount);
			pro.setString(1, list.get(i).getAppid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setRequestCount(rs.getString(1));
			}
		}
		for(int i=0;i<list.size();i++){
			String isRequested = appIsRequested(list.get(i).getAppid(),userid);
			System.out.println("requested="+isRequested);
			list.get(i).setIsRequested(isRequested);
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
		
	}
	//查询每个分组做约会的个数
	public int getAppSize(String school,String fenlei) throws SQLException{
		int size = 0;
		conn = ConnManager.getConnection();
		if("0".equals(fenlei)){
			pro = conn.prepareStatement(SQLTiaomu.getAppointmentSizeAll);
			pro.setString(1, school);
		}else{
			pro = conn.prepareStatement(SQLTiaomu.getAppointmentSize);
			pro.setString(1, school);
			pro.setString(2, fenlei);
		}
		
		rs = pro.executeQuery();
		while(rs.next()){
			size = rs.getInt(1);
		}
		ConnManager.freeConnection(conn, state, rs);
		return size;
	}
	
	//响应约会
	public int appRequest(AppointmentRequsetBean appReq) throws SQLException{
		int isSuccess = -1;
		
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.AppRequest);
		pro.setString(1, appReq.getAppid());
		pro.setString(2, appReq.getUserid());
		pro.setString(3, appReq.getResstatus());
		pro.setString(4, appReq.getTime());
		pro.setString(5,appReq.getTele());
		pro.setString(6, appReq.getQq());
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return isSuccess;
	}
	//响应前验证用户是否已经响应过该约会
	public String appIsRequested(String appid,String userid) throws SQLException{
		String  isRequested="-1";
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.AppIsRequested);
		pro.setString(1, appid);
		pro.setString(2, userid);
		rs = pro.executeQuery();
		while(rs.next()){
			isRequested="1";
		}
		ConnManager.freeConnection(conn, state, rs);
		return isRequested;
	}
	
	public ArrayList gerMyAppointment(String userID) throws SQLException{
		ArrayList<AppointmentMyBean> list = new ArrayList<AppointmentMyBean>();
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.SearchAppByUserid);
		pro.setString(1, userID);
		rs = pro.executeQuery();
		while(rs.next()){
			AppointmentMyBean amb = new AppointmentMyBean();
			ArrayList<AppointmentReqPersion>  appList  = new ArrayList<AppointmentReqPersion>();
			AppointmentBean app = new AppointmentBean();
			app.setAppid(rs.getString(1));
			app.setUserid(rs.getString(2));
			app.setApptitle(rs.getString(3));
			app.setType(rs.getString(4));
			app.setRequirement(rs.getString(5));
			app.setContext(rs.getString(6));
			app.setApptime(rs.getString(7));
			app.setTel(rs.getString(8));
			app.setQQ(rs.getString(9));
			app.setContext(rs.getString(10));
			app.setTime(rs.getString(11));
			app.setSchool(rs.getString(12));
			amb.setAppBean(app);
			amb.setList(appList);
			list.add(amb);
			
		}
		for(int i= 0;i<list.size();i++){
			String appid = list.get(i).getAppBean().getAppid();
			conn = ConnManager.getConnection();
			pro = conn.prepareStatement(SQLTiaomu.getMyAppReqMes);
			pro.setString(1,appid);
			rs = pro.executeQuery();
			while(rs.next()){
				AppointmentReqPersion arp = new AppointmentReqPersion();
				arp.setUserid(rs.getString(1));
				arp.setName(rs.getString(2));
				arp.setSex(rs.getString(3));
				arp.setAcademe(rs.getString(4));
				arp.setUserimg(rs.getString(5));
				arp.setTele(rs.getString(6));
				arp.setQQ(rs.getString(7));
				arp.setResstutus(rs.getString(8));
				arp.setArid(rs.getString(9));
				list.get(i).getList().add(arp);
			}
			Integer reqCount = list.get(i).getList().size();
			
			list.get(i).getAppBean().setRequestCount(reqCount.toString());
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
	}
	
	//处理我的约会响应信息
	public int agreeAppointment(String arid,String index) throws SQLException{
		int isSuccess=-1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.AppAgree);
		pro.setString(1, index);
		pro.setString(2, arid);
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return isSuccess;
	}
	
	//查询我响应的约会
	public ArrayList getMyRequestApp(String userID) throws SQLException{
		ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.AppMyRequest);
		pro.setString(1, userID);
		rs=pro.executeQuery();
		while(rs.next()){
			AppointmentBean app = new AppointmentBean();
			app.setAppid(rs.getString(1));
			app.setUserid(rs.getString(2));
			app.setApptitle(rs.getString(3));
			app.setType(rs.getString(4));
			app.setRequirement(rs.getString(5));
			app.setContext(rs.getString(6));
			app.setApptime(rs.getString(7));
			app.setTel(rs.getString(8));
			app.setQQ(rs.getString(9));
			app.setContext(rs.getString(10));
			app.setTime(rs.getString(11));
			app.setSchool(rs.getString(12));
			app.setIsRequested(rs.getString(13));
			list.add(app);
		}
		for(int i=0;i<list.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.getAppUserMes);
			pro.setString(1, list.get(i).getUserid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setUserimg(rs.getString(1));
				list.get(i).setAcademe(rs.getString(2));
				list.get(i).setName(rs.getString(3));
				list.get(i).setSex(rs.getString(4));
			}
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
		
	}
	//搜索约会
	public ArrayList sousuoApp(String school,String index,String userid) throws SQLException{
		String indexName = "%" + index + "%";
		ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
		conn = ConnManager.getConnection();
	
			pro = conn.prepareStatement(SQLTiaomu.AppSousuo);
			pro.setString(1, school);
			pro.setString(2, indexName);

		rs = pro.executeQuery();
		while(rs.next()){
			AppointmentBean app = new AppointmentBean();
			app.setAppid(rs.getString(1));
			app.setUserid(rs.getString(2));
			app.setApptitle(rs.getString(3));
			app.setType(rs.getString(4));
			app.setRequirement(rs.getString(5));
			app.setContext(rs.getString(6));
			app.setApptime(rs.getString(7));
			app.setTel(rs.getString(8));
			app.setQQ(rs.getString(9));
			app.setContext(rs.getString(10));
			app.setTime(rs.getString(11));
			app.setSchool(rs.getString(12));
			list.add(app);
		}
		System.out.println("listsize=" + list.size());
		for(int i=0;i<list.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.getAppUserMes);
			pro.setString(1, list.get(i).getUserid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setUserimg(rs.getString(1));
				list.get(i).setAcademe(rs.getString(2));
				list.get(i).setName(rs.getString(3));
				list.get(i).setSex(rs.getString(4));
			}
			pro = conn.prepareStatement(SQLTiaomu.AppRequestCount);
			pro.setString(1, list.get(i).getAppid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setRequestCount(rs.getString(1));
			}
		}
		for(int i=0;i<list.size();i++){
			String isRequested = appIsRequested(list.get(i).getAppid(),userid);
			System.out.println("requested="+isRequested);
			list.get(i).setIsRequested(isRequested);
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
	}
	public static void main(String[] args){
		
		AppointmentDao appDao = new AppointmentDao();
//		AppointmentBean app = new AppointmentBean();
//		//app.setUserid(user.getUserId());
//		app.setUserid("U0001");
//		app.setApptitle("主题");
//		app.setType("2");
//		app.setCount("1");
//		app.setApptime("3");
//		app.setRequirement("星期六晚上");
//		app.setTel("15116436016");
//		app.setQQ("284489719");
//		app.setContext("斯蒂芬");
//		app.setTime("2011-05-09 19:25");
//		app.setSchool("长沙理工");
		try {
//			int ss = appDao.addAppoinment(app);
			int ss = appDao.getAppSize("","");
			System.out.println(ss);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
}
