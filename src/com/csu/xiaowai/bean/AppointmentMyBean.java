package com.csu.xiaowai.bean;

import java.io.Serializable;
import java.util.ArrayList;

public class AppointmentMyBean implements Serializable{

	private AppointmentBean appBean;
	private ArrayList<AppointmentReqPersion> list;
	public AppointmentMyBean() {
		// TODO Auto-generated constructor stub
	}

	public ArrayList<AppointmentReqPersion> getList() {
		return list;
	}
	public void setList(ArrayList<AppointmentReqPersion> list) {
		this.list = list;
	}

	public AppointmentBean getAppBean() {
		return appBean;
	}

	public void setAppBean(AppointmentBean appBean) {
		this.appBean = appBean;
	}


}
