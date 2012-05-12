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

public class FriendSearchServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public FriendSearchServlet() {
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
			
			if(user!=null){
				getLoveMes( user.getUserId(), session);
				String friendPage = request.getParameter("friendPage");
				String friendType= request.getParameter("friendType");
				String oldFriendType = (String)session.getAttribute("oldFriendType");
				String index = request.getParameter("index");
				int intPage = new Integer(friendPage);
				ArrayList<FriendBean> friendMesLists =(ArrayList<FriendBean>)session.getAttribute("friendMesLists");
				
				if(friendMesLists==null){
					
					FriendDao friDao = new FriendDao();
					try {
						ArrayList<FriendGroupBean> fgList = friDao.getFriendGroup(user.getUserId());
						session.setAttribute("fgList", fgList);
						
					} catch (SQLException e) {
						e.printStackTrace();
					}
					try {
						friendMesLists = friDao.getFriendMes(user.getUserId(),friendType,index);
						session.setAttribute("friendMesLists", friendMesLists);
						int FriendAllPage = 1;
						int size = friendMesLists.size();
						
						if(size%10==0&&size!=0){
							FriendAllPage = size/10;
						}else{
							FriendAllPage = size/10+1;
						}
						ArrayList<FriendBean> friendMesList = new ArrayList<FriendBean> ();
						for(int i=(intPage-1)*10;i<friendMesLists.size();i++){
							
							if(i< intPage *10){
								friendMesList.add(friendMesLists.get(i));	
								
							}
						}
						session.setAttribute("oldFriendType", friendType);
						session.setAttribute("friendPage", friendPage);
						session.setAttribute("friendType", friendType);
						session.setAttribute("FriendAllPage", FriendAllPage);
						session.setAttribute("friendMesList", friendMesList);
						response.sendRedirect("XiaoWai_Friend_Shouye.jsp");
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}else if(friendMesLists!=null){
					if(friendType.equals(oldFriendType)){
						
						ArrayList<FriendBean> friendMesList = new ArrayList<FriendBean> ();
						for(int i=(intPage-1)*10;i<friendMesLists.size();i++){
							
							if(i<=intPage *10-1){
								friendMesList.add(friendMesLists.get(i));	
								
							}
						}
						
						session.setAttribute("friendPage", friendPage);
						
						session.setAttribute("friendMesList", friendMesList);
						response.sendRedirect("XiaoWai_Friend_Shouye.jsp");
					}else{
						FriendDao friDao = new FriendDao();
						
						try {
							ArrayList<FriendGroupBean> fgList = friDao.getFriendGroup(user.getUserId());
							session.setAttribute("fgList", fgList);
							
							friendMesLists = friDao.getFriendMes(user.getUserId(),friendType,index);
							session.setAttribute("friendMesLists", friendMesLists);
							int FriendAllPage = 1;
							int size = friendMesLists.size();
							
							if(size%10==0&&size!=0){
								FriendAllPage = size/10;
							}else{
								FriendAllPage = size/10+1;
							}
							ArrayList<FriendBean> friendMesList = new ArrayList<FriendBean> ();
							for(int i=(intPage-1)*10;i<friendMesLists.size();i++){
								
								if(i<=intPage *10-1){
									friendMesList.add(friendMesLists.get(i));	
									
								}
							}
							
							session.setAttribute("oldFriendType", friendType);
							session.setAttribute("friendType", friendType);
							session.setAttribute("friendPage", friendPage);
							session.setAttribute("FriendAllPage", FriendAllPage);
							session.setAttribute("friendMesList", friendMesList);
							response.sendRedirect("XiaoWai_Friend_Shouye.jsp");
							
						} catch (SQLException e) {
							e.printStackTrace();
						}
					}
					
				}
				
				
			}
			
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

		
	}

	public void getLoveMes(String userid,HttpSession session){
		
		FriendDao fDao = new FriendDao();
		try {
			ArrayList loveList = fDao.getLoveMes(userid);
			int loveSize = loveList.size();
			session.setAttribute("loveSize", loveSize);
			session.setAttribute("loveList", loveList);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void init() throws ServletException {
		// Put your code here
	}

}
