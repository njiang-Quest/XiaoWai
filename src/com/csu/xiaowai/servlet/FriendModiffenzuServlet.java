package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.dao.FriendDao;

public class FriendModiffenzuServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FriendModiffenzuServlet() {
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
			String friid = request.getParameter("modiffriid");
			
			String ftid	= request.getParameter("friendfenzu");
			
			FriendDao fDao = new FriendDao();
			try {
				int isSuccess = fDao.modifFenzu(friid, ftid);
				if(isSuccess!=-1){
					String oldFriendType = (String)session.getAttribute("oldFriendType");
					String friendPage = (String)session.getAttribute("friendPage");
					session.removeAttribute("friendMesLists");
					if("0".equals(oldFriendType)){
						
						response.sendRedirect("FriendSearchServlet?friendPage="+friendPage+"&friendType="+oldFriendType+"&index=0");
					}else{
						
						response.sendRedirect("FriendSearchServlet?friendPage="+friendPage+"&friendType="+oldFriendType+"&index=1");
					}
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
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
