package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.dao.UserDao;

public class FreshNewsReadServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FreshNewsReadServlet() {
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
		String fnbID = request.getParameter("fnbID");
		String visitorID = request.getParameter("visitorID");
		FreshNewsBean fnb = new FreshNewsBean();
		UserDao ud = new UserDao();
		System.out.println("userID:"+visitorID);
		fnb = ud.getFreshNewsByID(fnbID);
		//System.out.println(fnb.getPopedom());
		
		if(fnb.getPopedom().equals("2") && !visitorID.equals(fnb.getUserID())){
			response.sendRedirect("XiaoWai_PopedomLimited.jsp");
		}else{
			session.setAttribute("fnb", fnb);
			if(fnb.getType().equals("1")){//状态
				response.sendRedirect("XiaoWai_StatusRead.jsp");
			}
			if(fnb.getType().equals("2")){//日志
				response.sendRedirect("XiaoWai_Passage_Read.jsp");
			}
			if(fnb.getType().equals("3")){//相片
				response.sendRedirect("XiaoWai_StatusRead.jsp");
			}
			if(fnb.getType().equals("4")){//分享
				response.sendRedirect("XiaoWai_Fenxiang_Read.jsp");
			}
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
