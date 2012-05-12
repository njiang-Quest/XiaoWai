package com.csu.xiaowai.bean;

import java.io.Serializable;

public class AppointmentRequsetBean implements Serializable{

	private String arid;
	private String appid;
	private String userid;
	private String resstatus;
	private String time;
	private String tele;
	private String qq;
	public AppointmentRequsetBean() {
		// TODO Auto-generated constructor stub
	}

	public String getAppid() {
		return appid;
	}

	public void setAppid(String appid) {
		this.appid = appid;
	}

	public String getArid() {
		return arid;
	}

	public void setArid(String arid) {
		this.arid = arid;
	}

	public String getResstatus() {
		return resstatus;
	}

	public void setResstatus(String resstatus) {
		this.resstatus = resstatus;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getQq() {
		return qq;
	}

	public void setQq(String qq) {
		this.qq = qq;
	}

	public String getTele() {
		return tele;
	}

	public void setTele(String tele) {
		this.tele = tele;
	}

}
