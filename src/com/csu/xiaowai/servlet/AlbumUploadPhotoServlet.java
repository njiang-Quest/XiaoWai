package com.csu.xiaowai.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.csu.xiaowai.bean.AlbumBean;
import com.csu.xiaowai.bean.FreshNewsBean;

import com.csu.xiaowai.bean.UserBean;
import com.csu.xiaowai.dao.UserDao;

public class AlbumUploadPhotoServlet extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public AlbumUploadPhotoServlet() {
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

		HttpSession session = request.getSession();
		UserBean user = (UserBean) session.getAttribute("user");
		String userid = user.getUserId();
		AlbumBean ab = (AlbumBean) session.getAttribute("albumbean");
		final String appRealPath = this.getServletContext().getRealPath("/"); //��ȡweb app������·��
		System.out.println("appRealPath:"+appRealPath);
		final long MAX_SIZE = 3 * 1024 * 1024; // �����ϴ��ļ����Ϊ 3M
		final String[] allowedExt = new String[] { "jpg", "jpeg", "gif", "JPG","GIF","png"
				}; // �����ϴ����ļ���ʽ���б�
		
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8"); // �����ַ�����ΪUTF-8, ����֧�ֺ�����ʾ

		// ʵ����һ��Ӳ���ļ�����,���������ϴ����ServletFileUpload
		DiskFileItemFactory dfif = new DiskFileItemFactory();
		dfif.setSizeThreshold(14096); // �����ϴ��ļ�ʱ������ʱ����ļ����ڴ��С,������4K.���ڵĲ��ֽ���ʱ����Ӳ��
		dfif.setRepository(new File(appRealPath + "UserImages\\"));
		// ���ô����ʱ�ļ���Ŀ¼,web��Ŀ¼�µ�ImagesUploadTempĿ¼

		// �����Ϲ���ʵ�����ϴ����
		ServletFileUpload sfu = new ServletFileUpload(dfif);

		sfu.setSizeMax(MAX_SIZE); // ��������ϴ��ߴ�

		PrintWriter out = response.getWriter();

		// ��request�õ� ���� �ϴ�����б�  
		List fileList = null;
		try {
			fileList = sfu.parseRequest(request);
		} catch (FileUploadException e) {// �����ļ��ߴ�����쳣
			if (e instanceof SizeLimitExceededException) {
				out.println("�ļ��ߴ糬���涨��С:" + MAX_SIZE + "�ֽ�<p />");
				out.println("<a href=\" " + request.getContextPath()
						+ "/fileUpload.jsp" + " \" target=\"_top\">����</a>");
				return;
			}
			e.printStackTrace();
		}
		// û���ļ��ϴ�
		if (fileList == null || fileList.size() == 0) {
			out.println("��ѡ���ϴ��ļ�<p />");
			out.println("<a href=\" " + request.getContextPath()
					+ "/fileUpload.jsp" + " \" target=\"_top\">����</a>");
			return;
		}
		
		// �õ������ϴ����ļ�
		Iterator fileItr = fileList.iterator();
		// ѭ�����������ļ�
		while (fileItr.hasNext()) {
			FileItem fileItem = null;
			String path = null;
			long size = 0;
			// �õ���ǰ�ļ�
			fileItem = (FileItem) fileItr.next();
			// ���Լ�form�ֶζ������ϴ�����ļ���(<input type="text" />��)
			if (fileItem == null || fileItem.isFormField()) {
				continue;
			}
			// �õ��ļ�������·��
			path = fileItem.getName();
			// �õ��ļ��Ĵ�С
			size = fileItem.getSize();
			
			System.out.println("path:"+path);
			System.out.println("size:"+size);
			
			if ("".equals(path) || size == 0) {
				out.println("��ѡ���ϴ��ļ�<p />");
				out.println("<a href=\" " + request.getContextPath()
						+ "/fileUpload.jsp" + " \" target=\"_top\">����</a>");
				return;
			}

			// �õ�ȥ��·�����ļ���
			String t_name = path.substring(path.lastIndexOf("\\") + 1);
			// �õ��ļ�����չ��(����չ��ʱ���õ�ȫ��)
			String t_ext = t_name.substring(t_name.lastIndexOf(".") + 1);
			// �ܾ����ܹ涨�ļ���ʽ֮����ļ�����
			int allowFlag = 0;
			int allowedExtCount = allowedExt.length;
			for (; allowFlag < allowedExtCount; allowFlag++) {
				if (allowedExt[allowFlag].equals(t_ext))
					break;
			}
			
			if (allowFlag == allowedExtCount) {
				out.println("���ϴ��������͵��ļ�<p />");
				for (allowFlag = 0; allowFlag < allowedExtCount; allowFlag++)
					out.println("*." + allowedExt[allowFlag]
							+ "&nbsp;&nbsp;&nbsp;");
				out.println("<a href=\" " + request.getContextPath()
						+ "/fileUpload.jsp" + " \" target=\"_top\">����</a>");
				return;
			}

			long now = System.currentTimeMillis();
			// ����ϵͳʱ�������ϴ��󱣴���ļ���
			String prefix = String.valueOf(now);
			// ����������ļ�����·��,������web��Ŀ¼�µ�ImagesUploadedĿ¼��
			String u_name = appRealPath + "UserImages\\"+"xiangce\\"+ prefix + "."
					+ t_ext;
			int sd = u_name.indexOf("UserImages\\");
			String imgurl = u_name.substring(sd);
			try {
				// �����ļ�
				fileItem.write(new File(u_name));
				UserDao userdao = new UserDao();
				FreshNewsBean fb = new FreshNewsBean();
				fb.setTitle(ab.getAlbtitle());
				fb.setContent(imgurl);
				fb.setFatherID(ab.getAlbid());
				fb.setUserID(userid);
				fb.setType("3");
				boolean flag = userdao.InsertPhotoOfAlbum(fb);
				if(flag){
					response.sendRedirect("XiaoWai_Xiangce_uploadSuccess.jsp");
				}else{
					response.sendRedirect("XiaoWai_Xiangce_uploadfail.jsp");
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
       
	}

}
