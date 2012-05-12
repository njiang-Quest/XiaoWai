package com.csu.xiaowai.bean;

import java.io.Serializable;

//相册实体
public class AlbumBean implements Serializable{
	private String albid;//编号
	private String userid;//用户id
	private String albtitle;//标题名
	private String albimg;//图片
	private String popedom;//权限
	private String time;//时间
	private String username;//用户名
	
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAlbid() {
		return albid;
	}
	public void setAlbid(String albid) {
		this.albid = albid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getAlbtitle() {
		return albtitle;
	}
	public void setAlbtitle(String albtitle) {
		this.albtitle = albtitle;
	}
	public String getAlbimg() {
		return albimg;
	}
	public void setAlbimg(String albimg) {
		this.albimg = albimg;
	}
	public String getPopedom() {
		return popedom;
	}
	public void setPopedom(String popedom) {
		this.popedom = popedom;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	

}
