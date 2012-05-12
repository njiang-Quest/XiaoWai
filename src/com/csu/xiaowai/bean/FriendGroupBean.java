package com.csu.xiaowai.bean;

import java.io.Serializable;

public class FriendGroupBean implements Serializable{

	private String ftid;
	private String ftname;
	private String userid;
	private String count = "0";
	public FriendGroupBean() {
		// TODO Auto-generated constructor stub
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getFtid() {
		return ftid;
	}
	public void setFtid(String ftid) {
		this.ftid = ftid;
	}
	public String getFtname() {
		return ftname;
	}
	public void setFtname(String ftname) {
		this.ftname = ftname;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}

}
