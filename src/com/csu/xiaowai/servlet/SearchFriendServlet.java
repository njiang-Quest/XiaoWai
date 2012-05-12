package com.csu.xiaowai.servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.SearchFriendDAO;

public class SearchFriendServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		req.setCharacterEncoding("GB2312");
		HttpSession session = req.getSession();
		
		SearchFriendDAO s = new SearchFriendDAO();
		List<UserBean> list = new ArrayList<UserBean>();
		List<UserBean> listAll = new ArrayList<UserBean>();
		listAll = (List<UserBean>)session.getAttribute("listAll");
		
			String name = req.getParameter("name");
			if(name!=null){
				name = new String(name.getBytes("ISO-8859-1"),"gb2312");
			}else{
				 name = (String)session.getAttribute("name");
			}
			 
			try {
				listAll = s.selectByName(name);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			session.setAttribute("name", name);
			session.setAttribute("listAll", listAll);
		


		System.out.println(name);
		try
		{
			//
			System.out.println("****************");
			int totalCount = 0;		//总记录数
			int pageSize = 5;		//每页的记录数
			int pageCount = 0;		//总共有几页
			int offset = 0;
			int curPage = 1;		//当前页
//			totalCount = s.selectCount(name);
			totalCount = listAll.size();
			pageCount = (totalCount % pageSize ==0)?(totalCount/pageSize):(totalCount/pageSize+1);
			String cur = req.getParameter("curPage");
			if(cur!=null&&!("".equals(cur)))
			{
				curPage=Integer.parseInt(cur);
			}
			if(curPage<=1)
			{
				curPage=1;
				offset=0;
			}
			else
			{
				if(curPage>=pageCount)
				{
					curPage=pageCount;
					offset=(pageCount-1)*pageSize;
				}
				else
				{
					offset = (curPage-1)*pageSize;
				}
			}

//			list = s.selectByName(name,offset, pageSize);
//			System.out.println(list.size());
			//session.setAttribute("u_name", name);
			System.out.println("i="+offset+"");
			for(int i=offset;i<pageSize*curPage && i<listAll.size();i++)
			{
				System.out.println(i+"  "+pageSize+" " +totalCount);
				list.add(listAll.get(i));
			}
			session.setAttribute("SearchFriendlist", list);
			session.setAttribute("curPage", new Integer(curPage));
			session.setAttribute("pageCount", new Integer(pageCount));
			resp.sendRedirect("XiaoWai_Friend_SearchFriend.jsp");
			//req.getRequestDispatcher("XiaoWai_Friend_SearchFriend.jsp").forward(req, resp);
			//
			
//			if(list.size()!=0)
//			{
//				req.setAttribute("list", list);
//				req.getRequestDispatcher("XiaoWai_Friend_SearchFriend.jsp").forward(req, resp);
//			}
//			else
//			{
//				
//			}
		}catch(Exception e)
		{
			System.out.println(e);
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doGet(req, resp);
	}

}
