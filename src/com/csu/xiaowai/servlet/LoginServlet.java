package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dbmanager.ConnManager;
import com.csu.xiaowai.dao.*;

public class LoginServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public LoginServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String username = request.getParameter("username");
		String pwd = request.getParameter("password");
		System.out.println(username);
		HttpSession session = request.getSession();
		ServletContext sv = request.getSession().getServletContext();
		ArrayList userList = new ArrayList();
		ArrayList<UserBean> allVisitors = new ArrayList<UserBean>();
		
		
		UserDao ld = new UserDao();
		UserBean user = ld.login(username,pwd);
		
		System.out.println(user.getName());
		System.out.println(user.getUserimg());
		if(user.getName()!=null){
			userList.add(user);
			sv.setAttribute("userList", userList);
			session.setAttribute("user", user);
			
			UserDao ud = new UserDao();
	  		String status = ud.getStatus(user.getUserId());
	  		session.setAttribute("status", status);
	  		//System.out.println(status);
	  		
	  		boolean flag=false;
	  		ArrayList<FreshNewsBean> allFreshNewsTemp = new ArrayList<FreshNewsBean>();	
	  		ArrayList<FreshNewsBean> allFreshNews = new ArrayList<FreshNewsBean>();	
	  		ArrayList friends = new ArrayList();
	  		friends = ud.getFriendsByUserID(user.getUserId());
	  		friends.add(user.getUserId());
	  		//System.out.println("friends的大小："+friends.size());
	  		
//	  		for(int i=0;i<friends.size();i++){
//	  			System.out.println("friends的第" +i +"个好友："+(String)friends.get(i));
//	  		}
	  		
	  		allFreshNewsTemp = ud.getAllFreshNews();
	  		//System.out.println("allFreshNewsTemp之前的大小：" +allFreshNewsTemp.size() );
	  		for(int i=0;i<allFreshNewsTemp.size();i++){
	  			FreshNewsBean fnb = new FreshNewsBean();
	  			fnb = allFreshNewsTemp.get(i);
	  			for(int j=0;j<friends.size();j++){
	  				if(fnb.getUserID().equals(friends.get(j))){
	  					//System.out.println("是好友！");
	  					flag=true;
	  				}
	  			}
	  			
	  			if(flag==false){
	  				allFreshNewsTemp.remove(i);
	  			}
	  		}
	  		//System.out.println("allFreshNewsTemp之后的大小：" +allFreshNewsTemp.size() );
	  		

	  		
	  		for(int j=0;j<allFreshNewsTemp.size();j++){
	  			FreshNewsBean fnb = new FreshNewsBean();
	  			fnb = allFreshNewsTemp.get(j);
	  			
	  			
	  			UserBean uub = new UserBean();
	  			uub = ud.getUserByID(fnb.getUserID());
	  			fnb.setUserName(uub.getName());
	  			fnb.setUserImg(uub.getUserimg());
	  			fnb.setFatherName(ud.getAlbumByFatherID(fnb.getFatherID()));
	  			allFreshNews.add(fnb);
	  			
	  		}
	  		//System.out.println("allFreshNewsSize:" + allFreshNews.size());
	  		session.setAttribute("allFreshNews", allFreshNews);
	  		
	  		
//	  		for(int h=0;h<allFreshNews.size();h++){
//	  			System.out.println("allFreshNews的第"+h+"个新鲜事"+allFreshNews.get(h).getTitle());
//	  		}

	  		String allVisitorsCount = ud.allVisitors(user.getUserId());
	  		session.setAttribute("allVisitorsCount", allVisitorsCount);
	  		
	  		allVisitors = ud.getVisitorsByUserID(user.getUserId());
//	  		for(int i=0;i<allVisitors.size();i++)
//	  		System.out.println(allVisitors.get(i).getName());
	  		session.setAttribute("allVisitors", allVisitors);
			response.sendRedirect("XiaoWai_Homepage.jsp");
		}else{
			response.sendRedirect("XiaoWai_LoginFailed.jsp");
		}
		
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
