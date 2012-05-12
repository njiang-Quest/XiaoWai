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
import com.csu.xiaowai.bean.FriendGroupBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.FriendDao;

public class FriendSousuoServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FriendSousuoServlet() {
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
			
		//	if(user!=null){
				String friendPage = request.getParameter("friendPage");
				String fname = request.getParameter("fname");
				fname = new String(fname.getBytes("ISO-8859-1"),"gb2312");
				System.out.println(fname);
				session.setAttribute("fname",fname);
				int intPage = new Integer(friendPage);
				ArrayList<FriendBean> friendSousuoLists =(ArrayList<FriendBean>)session.getAttribute("friendSousuoLists");
				System.out.println(friendSousuoLists);
				if(friendSousuoLists==null){
					//String userid = user.getUserId();
					FriendDao friDao = new FriendDao();
					
					try {
						friendSousuoLists = friDao.sousuoFriendMes(user.getUserId(),fname);
						session.setAttribute("friendMesLists", friendSousuoLists);
						int FriendAllPage = 1;
						int size = friendSousuoLists.size();
						System.out.println("size="+size);
						if(size%10==0&&size!=0){
							FriendAllPage = size/10;
						}else{
							FriendAllPage = size/10+1;
						}
						ArrayList<FriendBean> friendMesList = new ArrayList<FriendBean> ();
						for(int i=(intPage-1)*10;i<friendSousuoLists.size();i++){
							
							if(i< intPage *10){
								friendMesList.add(friendSousuoLists.get(i));	
								
							}
						}
						session.setAttribute("friendPage", friendPage);	
						
						session.setAttribute("FriendAllPage", FriendAllPage);
						session.setAttribute("friendMesList", friendMesList);
						response.sendRedirect("XiaoWai_Friend_Sousuo.jsp");
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}else{
					
						
						ArrayList<FriendBean> friendMesList = new ArrayList<FriendBean> ();
						for(int i=(intPage-1)*10;i<friendSousuoLists.size();i++){
							
							if(i<=intPage *10-1){
								friendMesList.add(friendSousuoLists.get(i));	
								
							}
						}
						
						session.setAttribute("friendPage", friendPage);
						session.setAttribute("friendMesList", friendMesList);
						response.sendRedirect("XiaoWai_Friend_Sousuo.jsp");
				}
				
				
		//	}
			
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
