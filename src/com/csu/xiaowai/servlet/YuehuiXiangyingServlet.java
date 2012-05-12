package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.AppointmentBean;
import com.csu.xiaowai.bean.AppointmentRequsetBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.AppointmentDao;

public class YuehuiXiangyingServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YuehuiXiangyingServlet() {
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
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		HttpSession session = request.getSession(false);
		if (session != null) {
			UserBean user = (UserBean) session.getAttribute("user");
			 if(user!=null){
			PrintWriter out = response.getWriter();
			request.setCharacterEncoding("gb2312");
			String appid = request.getParameter("appid");
			String tele = request.getParameter("tele");
			String qq = request.getParameter("qq");
			AppointmentDao appDao = new AppointmentDao();
			try {

				AppointmentRequsetBean appReq = new AppointmentRequsetBean();
				appReq.setAppid(appid);
				appReq.setUserid(user.getUserId());
				appReq.setResstatus("0");
				appReq.setTele(tele);
				appReq.setQq(qq);
				Date date = new Date();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm");
				String strTime = sdf.format(date);
				appReq.setTime(strTime);
				int isSuccess = appDao.appRequest(appReq);
				if (isSuccess != -1) {
					ArrayList<AppointmentBean> appList = (ArrayList) session.getAttribute("appList");
					for(int i=0;i<appList.size();i++){
						if(appList.get(i).getAppid().equals(appid)){
							appList.get(i).setIsRequested("1");
							String count = appList.get(i).getRequestCount();
							Integer newCount = new Integer(count)+1;
							appList.get(i).setRequestCount(newCount.toString());
						}
					}
					out.print("isSuccess");
				} else {
					out.print("false");
				}

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
	 * This method is called when a form has its tag value method equals to
	 * post.
	 * 
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
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
	 * @throws ServletException
	 *             if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
