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

import com.csu.xiaowai.bean.FriendBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.FriendDao;

public class FriendLoveServelet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FriendLoveServelet() {
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
		PrintWriter out = response.getWriter();
		if(session!=null){
			UserBean user = (UserBean)session.getAttribute("user");
			if(user!=null){
				String friid=request.getParameter("friid");
				String fuserid = request.getParameter("fuserid");
				String index = request.getParameter("index");
				
				FriendDao fDao = new FriendDao();
				if("1".equals(index)){
					try {
						int isSuccess = fDao.loveFriend(user.getUserId(), fuserid);
						if(isSuccess!=-1){
							ArrayList<FriendBean> friendMesLists =(ArrayList<FriendBean>)session.getAttribute("friendMesLists");
							for(int i=0;i<friendMesLists.size();i++){
								if(friendMesLists.get(i).getFriid().equals(friid)){
									System.out.println("zhixing");
									friendMesLists.get(i).setIsLove("1");
								}
							}
							out.print("loveSuccess");
						}
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}else if("-1".equals(index)){
					try {
						int isSuccess = fDao.moveLoveFriend(user.getUserId(), fuserid);
						if(isSuccess!=-1){
							ArrayList<FriendBean> friendMesLists =(ArrayList<FriendBean>)session.getAttribute("friendMesLists");
							for(int i=0;i<friendMesLists.size();i++){
								if(friendMesLists.get(i).getFriid().equals(friid)){
									System.out.println("zhixing");
									friendMesLists.get(i).setIsLove(null);
								}
							}
							out.print("deleLoveSuccess");
						}
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
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
