package com.csu.xiaowai.bean;

import java.io.Serializable;

public class AppointmentBean implements Serializable{
	private String appid;//约会ID
	private String userid;//用户ID
	private String apptitle;//用户标题
	private String type;//用户分组
	private String requirement;//应约要求
	private String count;//应约人数
	private String apptime;//约会时间
	private String tel;
	private String QQ;
	private String context;//活动流程说明
	private String time;//约会发表时间
	private String school;//所在学校
	private String userimg;//用户头像
	private String academe;//用户学院
	private String name;//发约人姓名
	private String sex;//发约人性别
	private String requestCount;//响应人数
	private String isRequested;//查询的用户是否已经响应
	public String getApptime() {
		return apptime;
	}
	public void setApptime(String apptime) {
		this.apptime = apptime;
	}
	public String getApptitle() {
		return apptitle;
	}
	public void setApptitle(String apptitle) {
		this.apptitle = apptitle;
	}
	public String getContext() {
		return context;
	}
	public void setContext(String context) {
		this.context = context;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getQQ() {
		return QQ;
	}
	public void setQQ(String qq) {
		QQ = qq;
	}
	public String getRequirement() {
		return requirement;
	}
	public void setRequirement(String requirement) {
		this.requirement = requirement;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public AppointmentBean() {
		// TODO Auto-generated constructor stub
	}
	public String getAcademe() {
		return academe;
	}
	public void setAcademe(String academe) {
		this.academe = academe;
	}
	public String getUserimg() {
		return userimg;
	}
	public void setUserimg(String userimg) {
		this.userimg = userimg;
	}
	public String getAppid() {
		return appid;
	}
	public void setAppid(String appid) {
		this.appid = appid;
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
	public String getRequestCount() {
		return requestCount;
	}
	public void setRequestCount(String requestCount) {
		this.requestCount = requestCount;
	}
	public String getIsRequested() {
		return isRequested;
	}
	public void setIsRequested(String isRequested) {
		this.isRequested = isRequested;
	}

}
