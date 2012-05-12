package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.dao.UserDao;

public class RegistServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public RegistServlet() {
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
		
		request.setCharacterEncoding("GB2312");
		
		HttpSession session = request.getSession();
		
		String username = null;
		String pwd = null;
		String name = null;
		String gender = null;
		String birth = null;
		String university = null;
		String academe = null;
		String address = null;
		
		
		username = request.getParameter("username");
		pwd = request.getParameter("password");
		name = request.getParameter("name");
		gender = request.getParameter("gender");
		String ageYear = request.getParameter("birth_year");
		String ageMonth = request.getParameter("birth_month");
		String ageDay = request.getParameter("birth_day");
		birth = ageYear+ "-"+ageMonth+ "-"+ageDay;
		university = request.getParameter("university");
		academe = request.getParameter("academe");
		String province = request.getParameter("z05_1");
		String city = request.getParameter("z05_2");
		String town = request.getParameter("z05_3");
			
		address = province + " "+ city + " "+ town;
		session.setAttribute("username", username);
		
		
		UserDao ud = new UserDao();
		boolean isSuccess = ud.regist(username, pwd, name, gender, birth, address, university, academe, "");
		if(isSuccess){
			//request.getRequestDispatcher("XiaoWai_Regist2.jsp").forward(request, response);
			response.sendRedirect("XiaoWai_Regist2.jsp");
		}
		else{
			System.out.println("regist Failed!");
		}
//		System.out.println("username:" + username);
//		System.out.println("pwd:" + pwd);
//		System.out.println("name:" + name);
//		System.out.println("gender:" + gender);
//		System.out.println("birth:" + birth);
//		System.out.println("university:" + university);
//		System.out.println("academe:" + academe);
//		System.out.println("address:" + address);
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
