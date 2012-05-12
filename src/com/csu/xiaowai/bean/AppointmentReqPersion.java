package com.csu.xiaowai.bean;

import java.io.Serializable;

public class AppointmentReqPersion implements Serializable{

	private String userid;
	private String name;
	private String sex;
	private String academe;
	private String userimg;
	private String tele;
	private String QQ;
	private String resstutus;
	private String arid;
	public String getArid() {
		return arid;
	}
	public void setArid(String arid) {
		this.arid = arid;
	}
	public String getResstutus() {
		return resstutus;
	}
	public void setResstutus(String resstutus) {
		this.resstutus = resstutus;
	}
	public String getAcademe() {
		return academe;
	}
	public void setAcademe(String academe) {
		this.academe = academe;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getQQ() {
		return QQ;
	}
	public void setQQ(String qq) {
		QQ = qq;
	}
	public String getTele() {
		return tele;
	}
	public void setTele(String tele) {
		this.tele = tele;
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
	public AppointmentReqPersion() {
		// TODO Auto-generated constructor stub
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}

}
