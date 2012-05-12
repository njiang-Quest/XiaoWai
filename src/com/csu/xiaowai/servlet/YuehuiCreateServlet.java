package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.AppointmentBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.AppointmentDao;

public class YuehuiCreateServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YuehuiCreateServlet() {
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

		doPost(request,response);
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

		HttpSession session = request.getSession(false);
		if(session!=null){
			
			UserBean user = (UserBean)session.getAttribute("user");
			
			if(user!=null){
				Date date = new Date();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd kk:mm");
				String strTime = sdf.format(date);
				request.setCharacterEncoding("GB2312");
				String ytitle = request.getParameter("ytitle");
				System.out.println(ytitle);
				String fenlei = request.getParameter("fenlei");
				String yrenshu = request.getParameter("yrenshu");
				String yyaoqiu = request.getParameter("yyaoqiu");
				String apptime = request.getParameter("ytime");
				String ytele = request.getParameter("ytele");
				String yQQ = request.getParameter("yQQ");
				String remark = request.getParameter("remark");
				AppointmentBean app = new AppointmentBean();
				//app.setUserid(user.getUserId());
				app.setUserid(user.getUserId());
				app.setApptitle(ytitle);
				app.setType(fenlei);
				app.setCount(yrenshu);
				app.setApptime(apptime);
				app.setRequirement(yyaoqiu);
				app.setTel(ytele);
				app.setQQ(yQQ);
				app.setContext(remark);
				app.setTime(strTime);
					app.setSchool(user.getUniversity());
				//app.setSchool(user.getUniversity());
				
				AppointmentDao appDao = new AppointmentDao();
				try {
					int isSuccess = appDao.addAppoinment(app);
					if(isSuccess ==1){
						response.sendRedirect("XiaoWai_Yuehui_AddSuccess.jsp");
					}
				} catch (SQLException e) {
					
					e.printStackTrace();
				}
				
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
