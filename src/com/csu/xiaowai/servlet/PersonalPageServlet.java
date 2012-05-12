package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class PersonalPageServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public PersonalPageServlet() {
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

		this.doPost(request, response);
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
		HttpSession session = request.getSession();
		boolean flag = false;
		UserDao ud = new UserDao();
		UserBean user = new UserBean();
		FreshNewsBean fnb = new FreshNewsBean();
		
		ArrayList<UserBean> allVisitors = new ArrayList<UserBean>();
		
		ArrayList<FreshNewsBean> MyFreshNewsTemp = new ArrayList<FreshNewsBean>();	
		ArrayList<FreshNewsBean> MyFreshNews = new ArrayList<FreshNewsBean>();
		String userID = request.getParameter("userID");
		String visitorID = request.getParameter("visitorID");
		
		Date now = new Date();
		DateFormat d2 = DateFormat.getDateTimeInstance();
	    String time = d2.format(now);
		
		ud.addVisitors(userID, visitorID, time);
		
		
		
		user = ud.getUserByID(userID);
		session.setAttribute("user", user);
		MyFreshNewsTemp = ud.getAllFreshNewsByUserID(user.getUserId());
  		for(int i=0;i<MyFreshNewsTemp.size();i++){
  			fnb = MyFreshNewsTemp.get(i);
  			
  			fnb.setFatherName(ud.getAlbumByFatherID(fnb.getFatherID()));
  			//System.out.println("FID:" + fnb.getFatherID());
  			//System.out.println("AName:"+ud.getAlbumByFatherID(fnb.getFatherID()));
  			MyFreshNews.add(fnb);
  		}
  		session.setAttribute("MyFreshNews", MyFreshNews);
  		ArrayList allStatus = ud.getAllStatus(user.getUserId());
  		session.setAttribute("allStatus", allStatus);
  		
  		int passagesCount = ud.getAllPassagesNumber(user.getUserId());
  		session.setAttribute("passagesCount", passagesCount);
  		
  		String allVisitorsCount = ud.allVisitors(user.getUserId());
  		session.setAttribute("allVisitorsCount", allVisitorsCount);
  		
  		allVisitors = ud.getVisitorsByUserID(user.getUserId());
//  		for(int i=0;i<allVisitors.size();i++)
//  		System.out.println(allVisitors.get(i).getName());
  		session.setAttribute("allVisitors", allVisitors);
  		
  		response.sendRedirect("XiaoWai_PersonalPage.jsp");
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
