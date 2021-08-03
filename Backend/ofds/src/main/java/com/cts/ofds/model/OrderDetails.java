package com.cts.ofds.model;

public class OrderDetails {
	private int orderId;
	private String userId;
	private String dishes;
	private String orderDate;
	private double price;
	
	
	public OrderDetails() {
	}
	
	public OrderDetails(String userId, String dishes, String orderDate, double price) {
		this.userId = userId;
		this.dishes = dishes;
		this.orderDate = orderDate;
		this.price = price;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getDishes() {
		return dishes;
	}
	public void setDishes(String dishes) {
		this.dishes = dishes;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "OrderDetails [orderId=" + orderId + ", userId=" + userId + ", dishes=" + dishes + ", orderDate="
				+ orderDate + ", price=" + price + "]";
	}
	
	
}
