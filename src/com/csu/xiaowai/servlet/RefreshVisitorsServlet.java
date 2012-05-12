package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class RefreshVisitorsServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public RefreshVisitorsServlet() {
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
		request.setCharacterEncoding("GB2312");
		HttpSession session = request.getSession();
		String userID = request.getParameter("userID");
		System.out.println("userID:"+userID);
		UserBean user = new UserBean();
		UserDao ud = new UserDao();
		
		user = ud.getUserByID(userID);
		ArrayList<UserBean> allVisitors = new ArrayList<UserBean>();
		allVisitors = ud.getVisitorsByUserID(user.getUserId());
		
		for(int i=0;i<allVisitors.size();i++)
	  		System.out.println(allVisitors.get(i).getName());
		
		session.setAttribute("allVisitors2", allVisitors);
		request.getRequestDispatcher("XiaoWai_RefreshVisitors.jsp").forward(request, response);
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
