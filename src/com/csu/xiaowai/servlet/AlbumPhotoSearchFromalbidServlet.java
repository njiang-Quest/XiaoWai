package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Vector;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.csu.xiaowai.bean.AlbumBean;
import com.csu.xiaowai.bean.FreshNewsBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class AlbumPhotoSearchFromalbidServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public AlbumPhotoSearchFromalbidServlet() {
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
         String albid = request.getParameter("albid");
         int mypage = 0;//当前页
	 	 if(request.getParameter("mypage")!=null)
	 	 {
	 		  mypage = Integer.parseInt(request.getParameter("mypage"));
	 	 }
         HttpSession session = request.getSession();
         HashMap map = new HashMap();
         UserDao userdao = new UserDao();
         AlbumBean ab = userdao.SearchAlbumFromAlbid(albid);
         Vector<FreshNewsBean> vec = userdao.SearchPhotoFromAlbid(albid);
        int albumnumber = 3;//每页之显示6个
 		int allnumber = vec.size();//总共的个数
 		int pagenumber = allnumber/albumnumber;//需要几页
 		int yushu = allnumber%albumnumber;//剩下的
 		
 		int allpage = pagenumber;
 		
 		int j = 0;
 		System.out.println(vec.size());
 		for(int i=0;i<pagenumber;i++){
 			Vector vector = new Vector();
 			  int x = j;
 			  for(;j<x + albumnumber;j++){
 				  vector.add(vec.get(j));
 			  }
 			  map.put(i,vector);
 		}
 		 if(yushu!=0){
			allpage++;
			Vector shenxiavector = new Vector();
	        for(int i = 0;i<yushu;i++){
	        	
	        	shenxiavector.add(vec.get(albumnumber*pagenumber+i));
	        }
			map.put(pagenumber+1, shenxiavector);
		}
 		
 		 session.setAttribute("photomap",map);
 		 session.setAttribute("photoallpage", allpage);
 		 session.setAttribute("photomypage",mypage);
 		
	     session.setAttribute("albumbean", ab);
	     
	     response.sendRedirect("XiaoWai_Xiangce_PhotoLiebiao.jsp");
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
