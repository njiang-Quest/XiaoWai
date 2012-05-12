package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class HomepageRefreshServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public HomepageRefreshServlet() {
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

		this.doPost(request,response);
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
		HttpSession session = request.getSession();
		String userID = request.getParameter("userID");
		UserBean user = new UserBean();
		UserDao ud = new UserDao();
		
		user = ud.getUserByID(userID);
		
		boolean flag=false;
  		ArrayList<FreshNewsBean> allFreshNewsTemp = new ArrayList<FreshNewsBean>();	
  		ArrayList<FreshNewsBean> allFreshNews = new ArrayList<FreshNewsBean>();	
  		ArrayList friends = new ArrayList();
  		friends = ud.getFriendsByUserID(user.getUserId());
  		friends.add(user.getUserId());
  		//System.out.println("friends的大小："+friends.size());
  		
//  		for(int i=0;i<friends.size();i++){
//  			System.out.println("friends的第" +i +"个好友："+(String)friends.get(i));
//  		}
//  		
  		allFreshNewsTemp = ud.getAllFreshNews();
  		//System.out.println("allFreshNewsTemp之前的大小：" +allFreshNewsTemp.size() );
  		for(int i=0;i<allFreshNewsTemp.size();i++){
  			FreshNewsBean fnb = new FreshNewsBean();
  			fnb = allFreshNewsTemp.get(i);
  			for(int j=0;j<friends.size();j++){
  				if(fnb.getUserID().equals(friends.get(j))){
  					//System.out.println("是好友！");
  					flag=true;
  				}
  			}
  			
  			if(flag==false){
  				allFreshNewsTemp.remove(i);
  			}
  		}
  		//System.out.println("allFreshNewsTemp之后的大小：" +allFreshNewsTemp.size() );
  		

  		
  		for(int j=0;j<allFreshNewsTemp.size();j++){
  			FreshNewsBean fnb = new FreshNewsBean();
  			fnb = allFreshNewsTemp.get(j);
  			
  			
  			UserBean uub = new UserBean();
  			uub = ud.getUserByID(fnb.getUserID());
  			fnb.setUserName(uub.getName());
  			fnb.setUserImg(uub.getUserimg());
  			fnb.setFatherName(ud.getAlbumByFatherID(fnb.getFatherID()));
  			allFreshNews.add(fnb);
  			
  		}
  		//System.out.println("allFreshNewsSizeFresh:" + allFreshNews.size());
  		session.setAttribute("allFreshNews2", allFreshNews);
  		
  		
  		for(int h=0;h<allFreshNews.size();h++){
  			System.out.println("allFreshNewsSizeFresh的第"+h+"个新鲜事"+allFreshNews.get(h).getTitle());
  		}
  		//response.sendRedirect("XiaoWai_RefreshFreshNews.jsp");
  		request.getRequestDispatcher("XiaoWai_RefreshFreshNews.jsp").forward(request, response);
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
