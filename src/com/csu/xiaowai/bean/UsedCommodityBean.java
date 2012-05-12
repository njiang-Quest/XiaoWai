package com.csu.xiaowai.bean;

import java.io.Serializable;
import java.util.Date;

//二手市场信息bean
public class UsedCommodityBean implements Serializable{

	private String ucid;//信息编号
	private String userid;//用户编号
	private String uctitle;//信息标题
	private String uctype;//信息类型
	private String price;//价格
	private String tel;//电话号码
	private String address;//地址
	private String qq;//QQ
	private String content;//备注
	private String ucimg;//图片地址
	private String time;//信息发布时间
	
	
	
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
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
	public String getUcid() {
		return ucid;
	}
	public void setUcid(String ucid) {
		this.ucid = ucid;
	}
	public String getUcimg() {
		return ucimg;
	}
	public void setUcimg(String ucimg) {
		this.ucimg = ucimg;
	}
	public String getUctitle() {
		return uctitle;
	}
	public void setUctitle(String uctitle) {
		this.uctitle = uctitle;
	}
	public String getUctypeid() {
		return uctype;
	}
	public void setUctypeid(String uctypeid) {
		this.uctype = uctypeid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	
	
}
