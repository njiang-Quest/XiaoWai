package com.csu.xiaowai.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.csu.xiaowai.bean.UsedCommodityBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class ErshouInsertComServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ErshouInsertComServlet() {
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
	    UserBean user = (UserBean) request.getSession().getAttribute("user");
	    UsedCommodityBean ucb = new UsedCommodityBean();
	    ucb.setUctitle(request.getParameter("biaoti"));
		System.out.println("新建的标题:"+request.getParameter("biaoti"));
		ucb.setPrice(request.getParameter("price"));
		ucb.setTel(request.getParameter("tel"));
		ucb.setAddress(request.getParameter("address"));
		ucb.setQq(request.getParameter("qq"));
		ucb.setContent(request.getParameter("content"));
		ucb.setUctypeid(request.getParameter("uctype"));
		ucb.setUserid(user.getUserId());
		
        UserDao userdao = new UserDao();
        ucb = userdao.InsertUsedComxinxi(ucb);
        session.setAttribute("usedcombean",ucb);
        if(ucb.getUcid()!=null){
    	   response.sendRedirect("XiaoWai_ErShou_upLoadPhoto.jsp");
        }else{
    	   response.sendRedirect("XiaoWai_ErShou_OperationFail.jsp");
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
