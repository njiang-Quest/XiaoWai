package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.AppointmentBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.AppointmentDao;

public class YuehuiSousuoServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YuehuiSousuoServlet() {
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

		HttpSession session = request.getSession(false);
		if (session != null) {
			UserBean user = (UserBean)session.getAttribute("user");
			if(user!=null){
			request.setCharacterEncoding("GB2312");
			String saPage = request.getParameter("saPage");
			int intSaPage = new Integer(saPage);
			
			String appTitle = request.getParameter("appTitle");
			if(appTitle!=null){
				appTitle = new String(appTitle.getBytes("ISO-8859-1"),"gb2312");
			}
			
			
				AppointmentDao appDao = new AppointmentDao();
				try {
					
					ArrayList<AppointmentBean> appSaLists = appDao.sousuoApp(user.getUniversity(), appTitle, user.getUserId());
					session.setAttribute("appList", appSaLists);
					int size = appSaLists.size();
					int saAllPage = 1;
					int yushu = size % 10;
					if (yushu == 0&&size!=0) {
						saAllPage = size / 10;
					} else {
						saAllPage = size / 10 + 1;
					}
					ArrayList<AppointmentBean>saList = new ArrayList<AppointmentBean>();
					for (int i = (intSaPage - 1) * 10 ; i < appSaLists.size(); i++) {
						if (i <= intSaPage * 10-1) {

							saList.add(appSaLists.get(i));

						}
					}
					System.out.println("saAllPage="+saAllPage);
					session.setAttribute("saPage", saPage);
					session.setAttribute("saAllPage", saAllPage);
					session.setAttribute("appSaLists", appSaLists);
					session.setAttribute("list", saList);
					response.sendRedirect("XiaoWai_Yuehui_Sousuo.jsp");
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
			}
			
		}
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

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out
				.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
		out.println("<HTML>");
		out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		out.println("  <BODY>");
		out.print("    This is ");
		out.print(this.getClass());
		out.println(", using the POST method");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
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
