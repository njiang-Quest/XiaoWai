package com.csu.xiaowai.bean;

import java.io.Serializable;

public class FriendBean implements Serializable{

	private String userid;
	private String name;
	private String sex;
	private String userimg;
	private String ftname;
	private String isLove;
	private String friid;
	public String getFriid() {
		return friid;
	}
	public void setFriid(String friid) {
		this.friid = friid;
	}
	public String getIsLove() {
		return isLove;
	}
	public void setIsLove(String isLove) {
		this.isLove = isLove;
	}
	public FriendBean() {
		// TODO Auto-generated constructor stub
	}
	public String getFtname() {
		return ftname;
	}
	public void setFtname(String ftname) {
		this.ftname = ftname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUserimg() {
		return userimg;
	}
	public void setUserimg(String userimg) {
		this.userimg = userimg;
	}

}
