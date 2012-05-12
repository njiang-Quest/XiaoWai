package com.csu.xiaowai.dbmanager;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnManager {
	
	private static final String DIRVER = "oracle.jdbc.driver.OracleDriver";
	private static final String URL = "jdbc:oracle:thin:@localhost:1521:XIAOWAI";
	private static final String USERNAME = "scott";
	private static final String PWD = "tiger";
	
	static{
		try {
			Class.forName(DIRVER);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static Connection getConnection(){
		Connection conn = null;
		
		try {
			conn = DriverManager.getConnection(URL, USERNAME, PWD);
			//System.out.println("连接数据库成功！");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return conn;
	}

	public static void freeConnection(Connection conn,Statement state ,ResultSet rs)
	{
		try{
			if(rs != null)
				rs.close();
		}catch(SQLException e){}
		finally{
			try{
				if(state != null)
					state.close();
			}catch(Exception e){}
			finally{
				try{
					if (conn != null)
						conn.close();
				}catch(Exception e){}
			}
		}
	}
	
	public static void main(String[] args){
		ConnManager.getConnection();
	}
	
}
