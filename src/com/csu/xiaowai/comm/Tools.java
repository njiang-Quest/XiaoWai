package com.csu.xiaowai.comm;

import java.io.UnsupportedEncodingException;

public class Tools {
     
	    public static String Convert(String oldstr){
	    	
	    	byte[] strby;
	    	String newstr="";
			try {
				strby = oldstr.getBytes("ISO-8859-1");
			    newstr=new String(strby,"utf-8");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    	return newstr;
	    }
	    
         public static String Convertint(String oldstr){
	    	
	    	byte[] strby;
	    	String newstr="";
			try {
				strby = oldstr.getBytes("ISO-8859-1");
			    newstr=new String(strby,"GB2312");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    	return newstr;
	    }
}
