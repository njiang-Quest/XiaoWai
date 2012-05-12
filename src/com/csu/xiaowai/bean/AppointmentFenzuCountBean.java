package com.csu.xiaowai.bean;

import java.io.Serializable;

public class AppointmentFenzuCountBean implements Serializable{
	
	private int allCount;
	private int kegeCount;
	private int liubingCount;
	private int kandianyingCount;
	private int shaokaoCount;
	private int lvyouCount;
	private int jiucanCount;
	private int qitaCount;
	public AppointmentFenzuCountBean() {
		// TODO Auto-generated constructor stub
	}
	public int getAllCount() {
		return allCount;
	}
	public void setAllCount(int allCount) {
		this.allCount = allCount;
	}
	public int getJiucanCount() {
		return jiucanCount;
	}
	public void setJiucanCount(int jiucanCount) {
		this.jiucanCount = jiucanCount;
	}
	public int getKandianyingCount() {
		return kandianyingCount;
	}
	public void setKandianyingCount(int kandianyingCount) {
		this.kandianyingCount = kandianyingCount;
	}
	public int getKegeCount() {
		return kegeCount;
	}
	public void setKegeCount(int kegeCount) {
		this.kegeCount = kegeCount;
	}
	public int getLiubingCount() {
		return liubingCount;
	}
	public void setLiubingCount(int liubingCount) {
		this.liubingCount = liubingCount;
	}
	public int getLvyouCount() {
		return lvyouCount;
	}
	public void setLvyouCount(int lvyouCount) {
		this.lvyouCount = lvyouCount;
	}
	public int getQitaCount() {
		return qitaCount;
	}
	public void setQitaCount(int qitaCount) {
		this.qitaCount = qitaCount;
	}
	public int getShaokaoCount() {
		return shaokaoCount;
	}
	public void setShaokaoCount(int shaokaoCount) {
		this.shaokaoCount = shaokaoCount;
	}
	
}
