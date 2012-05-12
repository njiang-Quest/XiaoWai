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
import com.csu.xiaowai.bean.AppointmentReqPersion;
import com.csu.xiaowai.dao.AppointmentDao;

public class YuehuiAgreeServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YuehuiAgreeServlet() {
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
			PrintWriter out = response.getWriter();
			String arid = request.getParameter("arid");
			String indexs = request.getParameter("indexs");
			System.out.println("arid="+arid);
			System.out.println("indexs="+indexs);
			AppointmentDao appDao = new AppointmentDao();
			try {
				int isSuccess = appDao.agreeAppointment(arid,indexs);
				if(isSuccess != -1&&"1".equals(indexs)){
					ArrayList<AppointmentMyBean> myAppLists = (ArrayList)session.getAttribute("myAppLists");
					for(int i=0;i<myAppLists.size();i++){
						ArrayList<AppointmentReqPersion> list = myAppLists.get(i).getList();
						for(int j=0;j<list.size();j++){
							if(list.get(j).getArid().equals(arid)){
								list.get(j).setResstutus("1");
							}
						}
					}
					
					out.print("isSuccess");
				}else if(isSuccess != -1&&"-1".equals(indexs)){
					ArrayList<AppointmentMyBean> myAppLists = (ArrayList)session.getAttribute("myAppLists");
					for(int i=0;i<myAppLists.size();i++){
						ArrayList<AppointmentReqPersion> list = myAppLists.get(i).getList();
						for(int j=0;j<list.size();j++){
							if(list.get(j).getArid().equals(arid)){
								list.get(j).setResstutus("-1");
							}
						}
					}
					
					out.print("refuse");
				}else{
					out.print("false");
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
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
