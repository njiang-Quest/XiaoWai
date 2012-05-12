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

import com.csu.xiaowai.bean.StoreBean;
import com.csu.xiaowai.dao.UserDao;
import com.csu.xiaowai.comm.Tools;

public class StoreSearchStorefromtype extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public StoreSearchStorefromtype() {
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
		String storetype = Tools.Convert(request.getParameter("storetype"));
		System.out.println(storetype);
		UserDao userdao = new UserDao();
		Vector<StoreBean> vec = userdao.searchStorefromType(storetype);
	    HttpSession session = request.getSession();
		 HashMap pagemap = new HashMap();
		    int albumnumber = 3;//每页之显示3个
	 		int allnumber = vec.size();//总共的个数
	 		int pagenumber = allnumber/albumnumber;//需要几页
	 		int yushu = allnumber%albumnumber;//剩下的
	 		System.out.println("pagenumber:"+pagenumber);
	 		System.out.println("yushu:"+yushu);
	 		int allpage = pagenumber;
	 		
	 		int j = 0;
	 	
	 		for(int i=0;i<pagenumber;i++){
	 			  Vector vector = new Vector();
	 			  int x = j;
	 			  for(;j<x + albumnumber;j++){
	 				  vector.add(vec.get(j));
	 			  }
	 			 pagemap.put(i,vector);
	 			 System.out.println(i+":"+vector.size());
	 		}
	 		 if(yushu!=0){
				allpage++;
				Vector shenxiavector = new Vector();
		        for(int i = 0;i<yushu;i++){
		        	shenxiavector.add(vec.get(albumnumber*pagenumber+i));
		        }
		        pagemap.put(pagenumber, shenxiavector);
		}
	    session.setAttribute("qstoremap",pagemap);
	    session.setAttribute("qstoreallpage",allpage);
	    session.setAttribute("storetype", storetype);
	    session.setAttribute("storetypevec", vec);
	    System.out.println(storetype);
	    response.sendRedirect("XiaoWai_Store_ShopLiebiao.jsp");
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
