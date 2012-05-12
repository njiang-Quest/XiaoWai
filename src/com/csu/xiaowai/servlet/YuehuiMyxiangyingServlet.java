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
import com.csu.xiaowai.bean.AppointmentMyBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.AppointmentDao;

public class YuehuiMyxiangyingServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YuehuiMyxiangyingServlet() {
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
			UserBean user = (UserBean) session.getAttribute("user");
			String myXyPage = request.getParameter("myXyPage");
			Integer intPage = new Integer(myXyPage);
			if(user!=null){
				
				ArrayList<AppointmentBean> myXyAppLists = (ArrayList)session.getAttribute("myXyAppLists");
				//if(myXyAppLists==null){
					
					AppointmentDao appDao = new AppointmentDao();
					try {
						int allXyPage=1;
						myXyAppLists = appDao.getMyRequestApp(user.getUserId());
						session.setAttribute("myXyAppLists", myXyAppLists);
						int  Allsize = myXyAppLists.size();
						int yushu = Allsize % 10;
						if (yushu == 0&&Allsize!=0) {
							allXyPage = Allsize / 10;
						} else {
							allXyPage = Allsize / 10 + 1;
						}
						ArrayList<AppointmentBean> myXyAppList = new ArrayList<AppointmentBean> ();
						for( int i=(intPage-1)*10;i<myXyAppLists.size();i++){
							if(i<=intPage*10-1){
								myXyAppList.add(myXyAppLists.get(i));
								System.out.println(myXyAppLists.get(i).getIsRequested());
							}
						}
						session.setAttribute("myXyPage", myXyPage);
						session.setAttribute("allXyPage", allXyPage);
						session.setAttribute("myXyAppList", myXyAppList);
						response.sendRedirect("XiaoWai_Yuehui_YuehuiXiangying.jsp");
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
//				}else{
//					ArrayList<AppointmentBean> myXyAppList = new ArrayList<AppointmentBean> ();
//					for( int i=(intPage-1)*10;i<myXyAppLists.size();i++){
//						if(i<=intPage*10-1){
//							myXyAppList.add(myXyAppLists.get(i));
//						}
//					}
//					session.setAttribute("myXyPage", myXyPage);
//					session.setAttribute("myXyAppList", myXyAppList);
//					response.sendRedirect("XiaoWai_Yuehui_YuehuiXiangying.jsp");
//				}
				
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
