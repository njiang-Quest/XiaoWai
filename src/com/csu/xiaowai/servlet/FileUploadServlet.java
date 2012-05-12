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

import com.csu.xiaowai.dao.UserDao;

public class FileUploadServlet extends HttpServlet {

	public FileUploadServlet() {
		super();
	}

	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		final String appRealPath = this.getServletContext().getRealPath("/"); //��ȡweb app������·��
		System.out.println("appRealPath:"+appRealPath);
		final long MAX_SIZE = 3 * 1024 * 1024; // �����ϴ��ļ����Ϊ 3M
		final String[] allowedExt = new String[] { "jpg", "jpeg", "gif", "txt",
				"doc", "docx", "mp3", "wma", "m4a" }; // �����ϴ����ļ���ʽ���б�
		
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8"); // �����ַ�����ΪUTF-8, ����֧�ֺ�����ʾ

		// ʵ����һ��Ӳ���ļ�����,���������ϴ����ServletFileUpload
		DiskFileItemFactory dfif = new DiskFileItemFactory();
		dfif.setSizeThreshold(4096); // �����ϴ��ļ�ʱ������ʱ����ļ����ڴ��С,������4K.���ڵĲ��ֽ���ʱ����Ӳ��
		dfif.setRepository(new File(appRealPath + "UserImages\\"+"TouXiang\\"));
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
			String u_name = appRealPath + "UserImages\\" + "TouXiang\\" + prefix + "."
					+ t_ext;
			int sd = u_name.indexOf("UserImages\\");
			String imgurl = u_name.substring(sd);
			//System.out.println(u_name);
			UserDao ud = new UserDao();
			try {
				// �����ļ�
				fileItem.write(new File(u_name));
				HttpSession session = request.getSession();
				
				String username = (String)session.getAttribute("username");
				System.out.println(imgurl);
				//System.out.println(username +  " " + u_name);
				boolean isSuccess = ud.touxiangUpload(username,imgurl);
				if(isSuccess){
				out.println("�ļ��ϴ��ɹ�. �ѱ���Ϊ: " + prefix + "." + t_ext
						+ " &nbsp;&nbsp;�ļ���С: " + size + "�ֽ�<p />");
				out.println("<a href='XiaoWai_Login.jsp'>������ҳ</a><p/>");
				}else{
					out.println("�ļ��ϴ�ʧ��. <p />");
					out.println("<a href='XiaoWai_Login.jsp'>������ҳ</a><p/>");
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}

	public void init() throws ServletException {
		// Put your code here
	}

}
