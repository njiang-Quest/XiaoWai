package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.CommodityBean;
import com.csu.xiaowai.bean.ComorderBean;
import com.csu.xiaowai.dao.UserDao;

public class StoreInsertComorderServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public StoreInsertComorderServlet() {
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

		request.setCharacterEncoding("GB2312");
		HttpSession session = request.getSession();
		CommodityBean combean = (CommodityBean) session.getAttribute("combean");
		ComorderBean corderbean = new ComorderBean();
		String comid = combean.getComid();
		String name = request.getParameter("name");
		String count = request.getParameter("count");
		String price = request.getParameter("price");
		String tel = request.getParameter("tel");
		String address = request.getParameter("address");
		String content = request.getParameter("content");
		corderbean.setAddress(address);
		corderbean.setComid(comid);
		corderbean.setContent(content);
		corderbean.setCount(count);
		corderbean.setName(name);
		corderbean.setPrice(price);
		corderbean.setTel(tel);
		UserDao userdao = new UserDao();
		boolean flag = userdao.insertComOrder(corderbean);
		if(flag){
			response.sendRedirect("XiaoWai_Store_OperationSuccess.jsp");
		}else{
			response.sendRedirect("XiaoWai_Store_OperationFail.jsp");
		}
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
