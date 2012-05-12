package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.FriendDao;

public class FriendAddFenzuServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FriendAddFenzuServlet() {
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

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out
				.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
		out.println("<HTML>");
		out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		out.println("  <BODY>");
		out.print("    This is ");
		out.print(this.getClass());
		out.println(", using the GET method");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
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
				request.setCharacterEncoding("GB2312");
				String newFtname = request.getParameter("newFriendFenzu");
				String[] friids = request.getParameterValues("chfriend");
				FriendDao fDao = new FriendDao();
				String ftid=null;
				try {
					ftid = fDao.addFenzu(newFtname, user.getUserId());
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				if(ftid!=null){
					if(friids!=null){
						for(int i=0;i<friids.length;i++){
							
							try {
								fDao.modifFenzu(friids[i], ftid);
							} catch (SQLException e) {
								// TODO Auto-generated catch block
								e.printStackTrace();
							}
						}
					}
					
					String oldFriendType = (String)session.getAttribute("oldFriendType");
					String friendPage = (String)session.getAttribute("friendPage");
					session.removeAttribute("friendMesLists");
					if("0".equals(oldFriendType)){
					
						response.sendRedirect("FriendSearchServlet?friendPage="+friendPage+"&friendType="+oldFriendType+"&index=0");
					}else{
						
						response.sendRedirect("FriendSearchServlet?friendPage="+friendPage+"&friendType="+oldFriendType+"&index=1");
					}
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
