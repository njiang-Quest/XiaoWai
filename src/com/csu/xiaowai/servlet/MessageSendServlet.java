package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.DateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;



public class MessageSendServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public MessageSendServlet() {
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
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("GB2312");
		HttpSession session =request.getSession(false);
		UserDao ud = new UserDao();
		UserBean user = new UserBean();
		
		System.out.println(request.getParameter("type"));
		
		if(session == null){
			response.sendRedirect("XiaoWai_Login.jsp");
		}else{
			if(request.getParameter("type").equals("1")){
				FreshNewsBean fresh = new FreshNewsBean();
				
				fresh.setContent(request.getParameter("status"));
				
				Date now = new Date();
				DateFormat d2 = DateFormat.getDateTimeInstance();
			    String tm = d2.format(now);
			    System.out.println(tm);
				fresh.setTime(tm);
				
				fresh.setType("1");
				fresh.setPopedom("0");
				
				user = (UserBean)session.getAttribute("user");
				fresh.setUserID(user.getUserId());
				
				int idTemp = ud.getMaxFreshNewsID();
				fresh.setFnID(String.valueOf(idTemp+1));
				
				
				if(!fresh.getContent().equals("")){
					boolean flag = ud.addFreshNews(fresh);
					if(flag==true){
						response.sendRedirect("XiaoWai_Success.jsp");
					}else{
						response.sendRedirect("XiaoWai_Failed.jsp");
					}
				}else{
					response.sendRedirect("XiaoWai_Failed.jsp");
				}
				
				
				
			}
			
			if(request.getParameter("type").equals("2")){
				
			FreshNewsBean fresh = new FreshNewsBean();
			fresh.setTitle(request.getParameter("title"));
			fresh.setContent(request.getParameter("mypassage"));
			System.out.println(request.getParameter("title"));
			System.out.println(request.getParameter("mypassage"));
			//System.out.println(request.getParameter("writePassage"));
			
			Date now = new Date();
			DateFormat d2 = DateFormat.getDateTimeInstance();
		    String tm = d2.format(now);
		    System.out.println(tm);
			fresh.setTime(tm);
			
			
			fresh.setType("2");
			fresh.setPopedom(request.getParameter("blogControl"));
			user = (UserBean)session.getAttribute("user");
			fresh.setUserID(user.getUserId());
			
			int idTemp = ud.getMaxFreshNewsID();
			fresh.setFnID(String.valueOf(idTemp+1));
			
			if(!fresh.getTitle().equals("")){
				boolean flag = ud.addFreshNews(fresh);
				if(flag==true){
					response.sendRedirect("XiaoWai_Success.jsp");
				}else{
					response.sendRedirect("XiaoWai_Failed.jsp");
				}
			}else{
				response.sendRedirect("XiaoWai_Failed.jsp");
			}
			
			}
			if(request.getParameter("type").equals("4")){
				FreshNewsBean fresh = new FreshNewsBean();
				fresh.setTitle(request.getParameter("title"));
				fresh.setContent(request.getParameter("content"));
				
				Date now = new Date();
				DateFormat d2 = DateFormat.getDateTimeInstance();
			    String tm = d2.format(now);
			    System.out.println(tm);
				fresh.setTime(tm);
				
				fresh.setType("4");
				fresh.setPopedom("0");
				
				user = (UserBean)session.getAttribute("user");
				fresh.setUserID(user.getUserId());
				
				int idTemp = ud.getMaxFreshNewsID();
				fresh.setFnID(String.valueOf(idTemp+1));
				
				if(!fresh.getTitle().equals("") && !fresh.getContent().equals("")){
					boolean flag = ud.addFreshNews(fresh);
					if(flag==true){
						response.sendRedirect("XiaoWai_Success.jsp");
					}else{
						response.sendRedirect("XiaoWai_Failed.jsp");
					}
				}else{
					response.sendRedirect("XiaoWai_Failed.jsp");
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
