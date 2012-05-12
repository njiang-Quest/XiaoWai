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
			//��ȡ�������Լ������
			try {
				int	allCount = appDao.getAppSize(user.getUniversity(), "0");
				int	kegeCount = appDao.getAppSize(user.getUniversity(), "K��");
				int	liubingCount = appDao.getAppSize(user.getUniversity(), "���");
				int	kandianyingCount = appDao.getAppSize(user.getUniversity(), "����Ӱ");
				int	shaokaoCount = appDao.getAppSize(user.getUniversity(), "�տ�");
				int	lvyouCount = appDao.getAppSize(user.getUniversity(), "����");
				int	jiucanCount = appDao.getAppSize(user.getUniversity(), "�Ͳ�");
				int	qitaCount = appDao.getAppSize(user.getUniversity(), "����");
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
			String page = request.getParameter("page");//��ѯ��ҳ��
			Integer intPage = new Integer(page);
			request.setCharacterEncoding("GB2312");
			String fenleis = request.getParameter("fenlei");//��ѯ�ķ���
			String fenlei = new String(fenleis.getBytes("ISO-8859-1"),"gb2312");
			String oldFenlei = (String) session.getAttribute("fenlei");//��ȡ�ϴεķ���
			
			if (fenlei.equals(oldFenlei)) {//���ϴβ�ѯ����ͬһ�����
				ArrayList<AppointmentBean> appList = (ArrayList) session.getAttribute("appList");//��session��ȡ�ϴδ����ݿ��ȡ����������
				System.out.println(appList.size());
				Integer index = (Integer) session.getAttribute("index");//��ȡ���ڱ��汣����session����������ǵڼ������ݣ�ÿһ��60����
				System.out.println("intPage-1/6==index" + (intPage - 1 / 6));
				System.out.println("index=" + index);
				if ((intPage - 1) / 6 == index) {//��ѯ��ҳ���������ڵ�����������Ѿ�������session����
					ArrayList<AppointmentBean> list = new ArrayList<AppointmentBean>();
					for (int i = (intPage - 1) * 10 ; i < appList.size(); i++) {
						if (i <= (intPage) * 10 -1) {

							list.add(appList.get(i));
							System.out.println("����ѭ��");
						}
					}
					session.setAttribute("list", list);
					session.setAttribute("page", page);
					session.setAttribute("fenlei", fenlei);
					response.sendRedirect("XiaoWai_Yuehui_Shouye.jsp");
				} else {					//�������
					index = (intPage - 1) / 6;//���������ڵڼ���
					try {
						appList = appDao.SearchAppointment(user.getUniversity(), index,fenlei,user.getUserId());//�����ݿ��ȡ����
						session.setAttribute("appList", appList);//�ѻ�ȡ�������ݴ���session����
						session.setAttribute("index", index);		//������ ����ֵ
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
			}else{//������Ǻ��ϴβ�ѯ����ͬһ������
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
