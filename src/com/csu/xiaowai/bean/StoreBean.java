package com.csu.xiaowai.bean;

import java.io.Serializable;

//商店bean
public class StoreBean implements Serializable{
	
	private String storeid;
	private String storename;
	private String storetype;//类型
	private String address;//地址
	private String tel;//联系电话
	private String content;//描述
	private String storeimg;//商店图片地址
	
	public String getStoreid() {
		return storeid;
	}
	public void setStoreid(String storeid) {
		this.storeid = storeid;
	}
	public String getStorename() {
		return storename;
	}
	public void setStorename(String storename) {
		this.storename = storename;
	}
	public String getStoretype() {
		return storetype;
	}
	public void setStoretype(String storetype) {
		this.storetype = storetype;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getStoreimg() {
		return storeimg;
	}
	public void setStoreimg(String storeimg) {
		this.storeimg = storeimg;
	}
	
}
