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

import com.csu.xiaowai.bean.AppointmentMyBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.AppointmentDao;

public class YuehuiMyAppintmentServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YuehuiMyAppintmentServlet() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		if(session!=null){
			UserBean user = (UserBean) session.getAttribute("user");
			
			if(user!= null){
				String userID = user.getUserId();
				String page = request.getParameter("myAppPage");
				Integer intPage = new Integer(page);
				ArrayList<AppointmentMyBean> myAppLists = (ArrayList)session.getAttribute("myAppLists");
				
				//if(myAppLists==null){
					AppointmentDao appDao = new AppointmentDao();
					try {
						int allPage=1;
						myAppLists = appDao.gerMyAppointment(userID);
						session.setAttribute("myAppLists", myAppLists);
						int  Allsize = myAppLists.size();
						int yushu = Allsize % 10;
						if (yushu == 0&&Allsize!=0) {
							allPage = Allsize / 10;
						} else {
							allPage = Allsize / 10 + 1;
						}
						ArrayList<AppointmentMyBean> myAppList = new ArrayList<AppointmentMyBean> ();
						for( int i=(intPage-1)*10;i<myAppLists.size();i++){
							if(i<=intPage*10-1){
								myAppList.add(myAppLists.get(i));
							}
						}
						session.setAttribute("myAppPage", page);
						session.setAttribute("allMyAppPage", allPage);
						session.setAttribute("myAppList", myAppList);
						response.sendRedirect("XiaoWai_Yuehui_MyYuehui.jsp");
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
//				}else{
//					ArrayList<AppointmentMyBean> myAppList = new ArrayList<AppointmentMyBean> ();
//					for( int i=(intPage-1)*10;i<myAppLists.size();i++){
//						if(i<=intPage*10-1){
//							myAppList.add(myAppLists.get(i));
//						}
//					}
//					session.setAttribute("myAppPage", page);
//					session.setAttribute("myAppList", myAppList);
//					response.sendRedirect("XiaoWai_Yuehui_MyYuehui.jsp");
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
