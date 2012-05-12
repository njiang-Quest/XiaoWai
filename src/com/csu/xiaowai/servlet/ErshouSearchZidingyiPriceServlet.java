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

import com.csu.xiaowai.dao.UserDao;

public class ErshouSearchZidingyiPriceServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public ErshouSearchZidingyiPriceServlet() {
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

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out
				.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
		out.println("<HTML>");
		out.println("  <HEAD><TITLE>A Servlet</TITLE></HEAD>");
		out.println("  <BODY>");
		out.print("    This is ");
		out.print(this.getClass());
		out.println(", using the GET method");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
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
	   String startprice = request.getParameter("min");
	   String endprice = request.getParameter("max");
	   String uctypeid = request.getParameter("uctypeid");
	   UserDao userdao = new UserDao(); 
	   Vector vec = userdao.SearchUsedGoodsFromPrice(uctypeid, startprice, endprice);
       
       HashMap pagemap = new HashMap();
		 int albumnumber = 3;//每页之显示3个
	 		int allnumber = vec.size();//总共的个数
	 		int pagenumber = allnumber/albumnumber;//需要几页
	 		int yushu = allnumber%albumnumber;//剩下的
	 		
	 		int allpage = pagenumber;
	 		
	 		int j = 0;
	 	
	 		for(int i=0;i<pagenumber;i++){
	 			Vector vector = new Vector();
	 			  int x = j;
	 			  for(;j<x + albumnumber;j++){
	 				  vector.add(vec.get(j));
	 			  }
	 			 pagemap.put(i,vector);
	 		}
	 		 if(yushu!=0){
				allpage++;
				Vector shenxiavector = new Vector();
		        for(int i = 0;i<yushu;i++){
		        	
		        	shenxiavector.add(vec.get(albumnumber*pagenumber+i));
		        }
		        pagemap.put(allpage, shenxiavector);
			}
	 		 
	        session.setAttribute("ershouliebiaomap",pagemap);
	        session.setAttribute("ershouliebiaoallpage",allpage);
	        session.setAttribute("ershoutypeid",uctypeid);
	        request.getRequestDispatcher("XiaoWai_ErShou_XinXiLiebiao.jsp").forward(request, response);
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
