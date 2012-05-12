package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.csu.xiaowai.bean.UsedCommodityBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class ErshouUpdateComservlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ErshouUpdateComservlet() {
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
	  UsedCommodityBean ucb = new UsedCommodityBean();
	  UserBean user = (UserBean) request.getSession().getAttribute("user");
	  request.getParameter("ucid");
	  ucb.setUserid(request.getParameter("userid"));
      ucb.setUctitle(request.getParameter("biaoti"));
      ucb.setPrice(request.getParameter("price"));
      ucb.setTel(request.getParameter("tel"));
      ucb.setAddress(request.getParameter("address"));
      ucb.setQq(request.getParameter("qq"));
      ucb.setContent(request.getParameter("content"));
      ucb.setUctypeid(request.getParameter("uctype"));
      ucb.setUserid(user.getUserId());
      ucb.setUcid(request.getParameter("ucid"));
      System.out.println(request.getParameter("uctype"));
      System.out.println(request.getParameter("imageurl"));
      UserDao userdao = new UserDao();
      boolean flag = userdao.updateUsedComxinxi(ucb);
      if(flag){
    	  response.sendRedirect("XiaoWai_ErShou_OperationSuccess.jsp");
      }else{
    	  response.sendRedirect("XiaoWai_ErShou_OperationFail.jsp");
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
