package com.csu.xiaowai.bean;

import java.io.Serializable;

//��Ʒbean
public class CommodityBean implements Serializable{
	
	private String comid;//��Ʒid
	private String comname;//��Ʒ����
	private String storeid;//�̵�id
	private String price;
	private String content;
	private String comimg;//��ƷͼƬ��ַ
	
	public String getComid() {
		return comid;
	}
	public void setComid(String comid) {
		this.comid = comid;
	}
	public String getComname() {
		return comname;
	}
	public void setComname(String comname) {
		this.comname = comname;
	}
	public String getStoreid() {
		return storeid;
	}
	public void setStoreid(String storeid) {
		this.storeid = storeid;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getComimg() {
		return comimg;
	}
	public void setComimg(String comimg) {
		this.comimg = comimg;
	}
	
}
