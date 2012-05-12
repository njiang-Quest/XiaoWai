package com.csu.xiaowai.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.comm.SQLTiaomu;
import com.csu.xiaowai.dbmanager.ConnManager;


public class SearchFriendDAO {
	
	private static Connection connection;
	private static PreparedStatement pstmt;
	private static ResultSet rs;
//	public List<UserBean> selectByName(String name,int offset,int count) throws SQLException//查询全部 真分页
//	{
//		connection = ConnManager.getConnection();
//		List<UserBean> list = new ArrayList<UserBean>();
//		pstmt = connection.prepareStatement(SQLTiaomu.searchFriend);
//		pstmt.setString(1, name);
//		pstmt.setInt(2, offset);
//		pstmt.setInt(3, count);
//		rs = pstmt.executeQuery();
//		while(rs.next())
//		{
//			UserBean u = new UserBean();
//			u.setAcademe(rs.getString("academe"));
//			u.setBirthday(rs.getString("birthday"));
//			u.setHometown(rs.getString("hometown"));
//			u.setName(rs.getString("name"));
//			u.setPwd(rs.getString("pwd"));
//			u.setSex(rs.getString("sex"));
//			u.setUniversity(rs.getString("university"));
//			u.setUserId(rs.getString("userid"));
//			u.setUserimg(rs.getString("userimg"));
//			u.setUsername(rs.getString("username"));
//			list.add(u);
//		}
////		Mysql.close();
//		return list;
//	}//end selectBuName
//	public int selectCount(String name) throws SQLException
//	{
//		connection = ConnManager.getConnection();
//		pstmt = connection.prepareStatement(SQLTiaomu.searchFriendCount);
//		pstmt.setString(1, name);
//		rs = pstmt.executeQuery();
//		int i=0;
//		while(rs.next())
//		{
//			i++;
//		}
//		return i;
//	}// end selectCount
	public List<UserBean> selectByName(String name) throws SQLException//查询全部 假分页
	{
		name = "%" + name + "%";
		connection = ConnManager.getConnection();
		List<UserBean> list = new ArrayList<UserBean>();
		pstmt = connection.prepareStatement(SQLTiaomu.searchFriend_all);
		pstmt.setString(1, name);
		rs = pstmt.executeQuery();
		while(rs.next())
		{
			UserBean u = new UserBean();
			u.setAcademe(rs.getString("academe"));
			u.setBirthday(rs.getString("birthday"));
			u.setHometown(rs.getString("hometown"));
			u.setName(rs.getString("name"));
			u.setPwd(rs.getString("password"));
			u.setSex(rs.getString("sex"));
			u.setUniversity(rs.getString("university"));
			u.setUserId(rs.getString("userid"));
			u.setUserimg(rs.getString("userimg"));
			u.setUsername(rs.getString("username"));
			list.add(u);
		}
//		Mysql.close();
		return list;
	}//end selectBuName
	public int addFriend(String userid,String fuserid) throws SQLException{
		int isSuccess = -1;
		connection = ConnManager.getConnection();
		pstmt = connection.prepareStatement(SQLTiaomu.FriendgetNoGroup);	
		pstmt.setString(1, userid);
		rs = pstmt.executeQuery();
		if(rs.next()){
			String ftid = rs.getString(1);
			pstmt = connection.prepareStatement(SQLTiaomu.FriendAddFriend);	
			pstmt.setString(1, fuserid);
			pstmt.setString(2, ftid);
			isSuccess = pstmt.executeUpdate();
		}else{
			pstmt = connection.prepareStatement(SQLTiaomu.FriendAddNoGroup);	
			pstmt.setString(1, userid);
			int isS = pstmt.executeUpdate();
			if(isS ==1 ){
				pstmt = connection.prepareStatement(SQLTiaomu.FriendgetNoGroup);	
				pstmt.setString(1, userid);
				rs = pstmt.executeQuery();
				while(rs.next()){
					String ftid = rs.getString(1);
					pstmt = connection.prepareStatement(SQLTiaomu.FriendAddFriend);	
					pstmt.setString(1, fuserid);
					pstmt.setString(2, ftid);
					isSuccess = pstmt.executeUpdate();
				}
			}
		}
		ConnManager.freeConnection(connection, pstmt, rs);
		return isSuccess;
	}
	
	public int isYourFriend(String userid,String fuserid) throws SQLException{
		int isSuccess = -1;
		connection = ConnManager.getConnection();
		pstmt = connection.prepareStatement(SQLTiaomu.FriendiSUserFriend);	
		pstmt.setString(1, userid);
		pstmt.setString(2, fuserid);
		rs = pstmt.executeQuery();
		while(rs.next()){
			isSuccess = 1;
		}
		return isSuccess;
	}
}
