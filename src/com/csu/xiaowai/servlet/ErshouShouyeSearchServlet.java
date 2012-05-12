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

import com.csu.xiaowai.bean.UsedCommodityBean;
import com.csu.xiaowai.dao.UserDao;

public class ErshouShouyeSearchServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ErshouShouyeSearchServlet() {
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
	    String leibie = request.getParameter("cate");
	    System.out.println("leibie:"+leibie);
	    String keyword = request.getParameter("query");
	    System.out.println(keyword);
	    HttpSession session = request.getSession();
	    UserDao userdao = new UserDao();
	    Vector vec = null;
	    HashMap pagemap = new HashMap();
	    Vector chazhaovec = new Vector();
	    if(leibie.equals("0")){
	    	vec = userdao.SearchAllUsedGoods();
	    }else{
	    	vec = userdao.UsedgoodsSearch(leibie);
	    	
	    }
	    for(int i=0;i<vec.size();i++){
    		UsedCommodityBean ucb = (UsedCommodityBean) vec.get(i);
    		String title = ucb.getUctitle();
    		String content = ucb.getContent();
    		if(title.contains(keyword)||content.contains(keyword)){
    			chazhaovec.add(ucb);
    		}
    	}
	    int albumnumber = 3;//每页之显示3个
 		int allnumber = chazhaovec.size();//总共的个数
 		
 		int pagenumber = allnumber/albumnumber;//需要几页
 		System.out.println(pagenumber);
 		int yushu = allnumber%albumnumber;//剩下的
 		
 		int allpage = pagenumber;
 		
 		int j = 0;
 	    
	 	for(int i=0;i<pagenumber;i++){
	 			Vector vector = new Vector();
	 			  int x = j;
	 			  for(;j<x + albumnumber;j++){
	 				  vector.add(chazhaovec.get(j));
	 			  }
	 	   pagemap.put(i,vector);
	 	}
 	    
 		 if(yushu!=0){
			allpage++;
			Vector shenxiavector = new Vector();
	        for(int i = 0;i<yushu;i++){
	        	
	        	shenxiavector.add(chazhaovec.get(albumnumber*pagenumber+i));
	        }
	        pagemap.put(allpage, shenxiavector);
		}
 		 
        session.setAttribute("ershouliebiaomap",pagemap);
        session.setAttribute("ershouliebiaoallpage",allpage);
        session.setAttribute("ershoutypeid",leibie);
	    
	    response.sendRedirect("XiaoWai_ErShou_XinXiLiebiao.jsp");
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
