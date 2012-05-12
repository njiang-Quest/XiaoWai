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

import com.csu.xiaowai.bean.AppointmentBean;
import com.csu.xiaowai.bean.AppointmentFenzuCountBean;
import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.AppointmentDao;

public class YueHuiSearchServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public YueHuiSearchServlet() {
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
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		if (session != null) {
			
			AppointmentFenzuCountBean afc = new AppointmentFenzuCountBean();
			UserBean user = (UserBean) session.getAttribute("user");
			if(user!=null){
			
			AppointmentDao appDao = new AppointmentDao();
			//获取个分组的约会数量
			try {
				int	allCount = appDao.getAppSize(user.getUniversity(), "0");
				int	kegeCount = appDao.getAppSize(user.getUniversity(), "K歌");
				int	liubingCount = appDao.getAppSize(user.getUniversity(), "溜冰");
				int	kandianyingCount = appDao.getAppSize(user.getUniversity(), "看电影");
				int	shaokaoCount = appDao.getAppSize(user.getUniversity(), "烧烤");
				int	lvyouCount = appDao.getAppSize(user.getUniversity(), "旅游");
				int	jiucanCount = appDao.getAppSize(user.getUniversity(), "就餐");
				int	qitaCount = appDao.getAppSize(user.getUniversity(), "其他");
				afc.setAllCount(allCount);
				afc.setKegeCount(kegeCount);
				afc.setLiubingCount(liubingCount);
				afc.setKandianyingCount(kandianyingCount);
				afc.setShaokaoCount(shaokaoCount);
				afc.setLvyouCount(lvyouCount);
				afc.setJiucanCount(jiucanCount);
				afc.setQitaCount(qitaCount);
				session.setAttribute("fenzu", afc);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			request.setCharacterEncoding("GB2312");
			String page = request.getParameter("page");//查询的页码
			Integer intPage = new Integer(page);
			request.setCharacterEncoding("GB2312");
			String fenleis = request.getParameter("fenlei");//查询的分组
			String fenlei = new String(fenleis.getBytes("ISO-8859-1"),"gb2312");
			String oldFenlei = (String) session.getAttribute("fenlei");//获取上次的分组
			
			if (fenlei.equals(oldFenlei)) {//和上次查询的是同一个组别
				ArrayList<AppointmentBean> appList = (ArrayList) session.getAttribute("appList");//从session获取上次从数据库读取数来的数据
				System.out.println(appList.size());
				Integer index = (Integer) session.getAttribute("index");//获取现在保存保存在session里面的数据是第几批数据（每一批60条）
				System.out.println("intPage-1/6==index" + (intPage - 1 / 6));
				System.out.println("index=" + index);
				if ((intPage - 1) / 6 == index) {//查询的页码数据所在的数据如果是已经保存在session里面
					ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
					for (int i = (intPage - 1) * 10 ; i < appList.size(); i++) {
						if (i <= (intPage) * 10 -1) {

							list.add(appList.get(i));
							System.out.println("进入循环");
						}
					}
					session.setAttribute("list", list);
					session.setAttribute("page", page);
					session.setAttribute("fenlei", fenlei);
					response.sendRedirect("XiaoWai_Yuehui_Shouye.jsp");
				} else {					//如果不在
					index = (intPage - 1) / 6;//计算数据在第几批
					try {
						appList = appDao.SearchAppointment(user.getUniversity(), index,fenlei,user.getUserId());//从数据库获取数据
						session.setAttribute("appList", appList);//把获取到的数据存在session里面
						session.setAttribute("index", index);		//更新批 索引值
						ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
						for (int i = (intPage%6 - 1) * 10 ; i < appList.size(); i++) {
							if (i <= (intPage%6) * 10-1) {

								list.add(appList.get(i));

							}
						}
						session.setAttribute("list", list);
						session.setAttribute("page", page);
						session.setAttribute("fenlei", fenlei);
						response.sendRedirect("XiaoWai_Yuehui_Shouye.jsp");
					} catch (SQLException e) {
						e.printStackTrace();
					}

				}
			}else{//如果不是和上次查询的是同一个分组
				int allPage = 1;
				try {
					Integer size = appDao.getAppSize(user.getUniversity(), fenlei);
					System.out.println("appList1" +size);
					int yushu = size % 10;
					if (yushu == 0&&size!=0) {
						allPage = size / 10;
					} else {
						allPage = size / 10 + 1;
					}

					session.setAttribute("allPage", allPage);
				} catch (SQLException e) {
					e.printStackTrace();
				}

					try {
						System.out.println("fenlei=" +fenlei);
						ArrayList<AppointmentBean> appList = appDao.SearchAppointment(user.getUniversity(), 0, fenlei,user.getUserId());
						session.setAttribute("appList", appList);
						session.setAttribute("index",0);
						ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
						for(int i= (intPage-1)*10;i<appList.size();i++){
							if(i<=(intPage)*10-1){
								
								list.add(appList.get(i));
								
							}
						}
						session.setAttribute("list", list);
						session.setAttribute("page", page);
						session.setAttribute("fenlei", fenlei);
						response.sendRedirect("XiaoWai_Yuehui_Shouye.jsp");
					} catch (SQLException e) {
						e.printStackTrace();
					}
				
			}
			// String school = user.getUniversity();

			 }
		}
	}

	/**
	 * The doPost method of the servlet. <br>
	 * 
	 * This method is called when a form has its tag value method equals to
	 * post.
	 * 
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
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
		out.println(", using the POST method");
		out.println("  </BODY>");
		out.println("</HTML>");
		out.flush();
		out.close();
	}

	/**
	 * Initialization of the servlet. <br>
	 * 
	 * @throws ServletException
	 *             if an error occure
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
