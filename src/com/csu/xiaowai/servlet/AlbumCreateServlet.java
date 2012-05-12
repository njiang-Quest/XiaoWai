package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.AlbumBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;
import com.csu.xiaowai.comm.Tools;

public class AlbumCreateServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public AlbumCreateServlet() {
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
		request.setCharacterEncoding("ISO-8859-1");
		response.setContentType("text/html");
		
		PrintWriter out = response.getWriter();	
		HttpSession session = request.getSession();
		UserBean user = (UserBean) session.getAttribute("user");
		String title = Tools.Convertint(request.getParameter("albtitle"));
		
		
		System.out.println("title:"+title);
		String popedom = request.getParameter("popedom");
		request.setCharacterEncoding("GB2312");
		String userid = user.getUserId();
		System.out.println("创建的用户id："+userid);
		String username = user.getUsername();
		AlbumBean ab = new AlbumBean();
		ab.setUserid(userid);
		ab.setAlbtitle(title);
		ab.setPopedom(popedom);
		ab.setUsername(username);
		UserDao userdao = new UserDao();
		boolean flag = userdao.InsertAlbum(ab);
		session.setAttribute("albumbean",ab);
		if(flag){
			out.write("ok");
			out.flush();
			out.close();
		}else{
			out.write("fail");
			out.flush();
			out.close();
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
        
		
	this.doGet(request, response);
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
