package com.csu.xiaowai.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.csu.xiaowai.bean.FriendBean;
import com.csu.xiaowai.bean.FriendGroupBean;
import com.csu.xiaowai.bean.FriendLoveBean;
import com.csu.xiaowai.comm.SQLTiaomu;
import com.csu.xiaowai.dbmanager.ConnManager;

public class FriendDao {

	private static Connection conn;
	private static Statement state;
	private static PreparedStatement pro;
	private static ResultSet rs;
	public FriendDao() {
		// TODO Auto-generated constructor stub
	}
	//��ȡ���ѷ�����Ϣ
	public ArrayList<FriendGroupBean> getFriendGroup(String userid) throws SQLException{
		ArrayList<FriendGroupBean> list = new ArrayList<FriendGroupBean>();
		
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendGetGroupByUserid);	
		pro.setString(1, userid);
		rs = pro.executeQuery();
		while(rs.next()){
			FriendGroupBean fgb = new FriendGroupBean();
			fgb.setFtid(rs.getString(1));
			fgb.setFtname(rs.getString(2));
			fgb.setUserid(rs.getString(3));
			list.add(fgb);
		}
		for(int i=0;i< list.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.FriendGetGroupCount);	
			pro.setString(1, list.get(i).getFtid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setCount(rs.getString(1));
			}
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
	}
	//��ȡ������Ϣ
	public ArrayList<FriendBean> getFriendMes(String userid,String ftid,String index) throws SQLException{
		ArrayList<FriendBean> list = new ArrayList<FriendBean>();
		conn = ConnManager.getConnection();
		if("0".equals(index)){
		
			pro = conn.prepareStatement(SQLTiaomu.SreachFriendByUserid);
			pro.setString(1, userid);
		}else{
			pro = conn.prepareStatement(SQLTiaomu.SreachFriendByFtid);	
			pro.setString(1, ftid);
		}
		
		rs = pro.executeQuery();
		while(rs.next()){
			FriendBean fb = new FriendBean();
			fb.setUserid(rs.getString(1));
			fb.setName(rs.getString(2));
			fb.setSex(rs.getString(3));
			fb.setUserimg(rs.getString(4));
			fb.setFtname(rs.getString(5));
			fb.setFriid(rs.getString(6));
			list.add(fb);
		}
		for(int i=0;i<list.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.FriendIsLove);
			pro.setString(1, userid);
			pro.setString(2, list.get(i).getUserid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setIsLove("1");
			}
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
	}
	//�޸ĺ��ѷ���
	public int modifFenzu(String friid,String ftid) throws SQLException{
		int isSuccess = -1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendModifFenzu);	
		pro.setString(1, ftid);
		pro.setString(2, friid);
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return isSuccess;
	}
	//�������ѷ���
	public String  addFenzu(String ftname,String userid) throws SQLException{
		int isSuccess = -1;
		String ftid = null;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendAddType);	
		pro.setString(1, ftname);
		pro.setString(2, userid);
		isSuccess = pro.executeUpdate();
		if(isSuccess!=-1){
			pro = conn.prepareStatement(SQLTiaomu.FriendgetFtid);	
			pro.setString(1, ftname);
			pro.setString(2, userid);
			rs = pro.executeQuery();
			while(rs.next()){
				ftid = rs.getString(1);
			}
		}
		ConnManager.freeConnection(conn, state, rs);
		return ftid;
	}
	//ɾ�����ѷ���
	public int deleFenzu(String ftid) throws SQLException{
		int isSuccess = -1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendDeleFtype);	
		pro.setString(1, ftid);
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return  isSuccess ;
	}
	//ɾ������
	public int deleFriend(String friid) throws SQLException{
		int isSuccess = -1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendDele);	
		pro.setString(1, friid);
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return  isSuccess ;
	} 
	//��������
	public ArrayList<FriendBean> sousuoFriendMes(String userid,String fname) throws SQLException{
		ArrayList<FriendBean> list = new ArrayList<FriendBean>();
		fname = "%" + fname + "%";
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendSousuo);
		pro.setString(1, fname);
		pro.setString(2, userid);
		rs = pro.executeQuery();
		while(rs.next()){
			FriendBean fb = new FriendBean();
			fb.setUserid(rs.getString(1));
			fb.setName(rs.getString(2));
			fb.setSex(rs.getString(3));
			fb.setUserimg(rs.getString(4));
			fb.setFtname(rs.getString(7));
			fb.setFriid(rs.getString(5));
			list.add(fb);
		}
		for(int i=0;i<list.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.FriendIsLove);
			pro.setString(1, userid);
			pro.setString(2, list.get(i).getUserid());
			rs = pro.executeQuery();
			while(rs.next()){
				list.get(i).setIsLove("1");
			}
		}
		ConnManager.freeConnection(conn, state, rs);
		return list;
	}
	//��������
	public int loveFriend(String userid,String fuserid) throws SQLException{
		int isSuccess = -1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendLove);	
		pro.setString(1, userid);
		pro.setString(2, fuserid);
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return  isSuccess ;
		
	}
	//ȡ������
	public int moveLoveFriend(String userid,String fuserid) throws SQLException{
		
		int isSuccess = -1;
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendMoveLove);	
		pro.setString(1, userid);
		pro.setString(2, fuserid);
		isSuccess = pro.executeUpdate();
		ConnManager.freeConnection(conn, state, rs);
		return  isSuccess ;
	}
	//��ȡ˫����ѵ���Ϣ
	public ArrayList getLoveMes(String userid) throws SQLException{
		ArrayList<FriendLoveBean> list = new ArrayList<FriendLoveBean>();
		ArrayList<String> loveIdList = new ArrayList<String>();
		conn = ConnManager.getConnection();
		pro = conn.prepareStatement(SQLTiaomu.FriendGetLoveID);	
		pro.setString(1, userid);
		rs = pro.executeQuery();
		while(rs.next()){
			loveIdList.add(rs.getString(1));
		}
		for(int i=0;i<loveIdList.size();i++){
			pro = conn.prepareStatement(SQLTiaomu.FriendGetLoveMes);
			pro.setString(1, loveIdList.get(i));
			pro.setString(2, userid);
			rs = pro.executeQuery();
			while(rs.next()){
				FriendLoveBean flb = new FriendLoveBean();
				flb.setUserid(rs.getString(1));
				flb.setName(rs.getString(2));
				flb.setSex(rs.getString(3));
				flb.setUniversity(rs.getString(4));
				flb.setUserimg(rs.getString(5));
				list.add(flb);
			}
		}
		return list;
	}
}
