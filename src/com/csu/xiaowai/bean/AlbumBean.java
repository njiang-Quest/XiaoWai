package com.csu.xiaowai.bean;

import java.io.Serializable;

//���ʵ��
public class AlbumBean implements Serializable{
	private String albid;//���
	private String userid;//�û�id
	private String albtitle;//������
	private String albimg;//ͼƬ
	private String popedom;//Ȩ��
	private String time;//ʱ��
	private String username;//�û���
	
	
	
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
