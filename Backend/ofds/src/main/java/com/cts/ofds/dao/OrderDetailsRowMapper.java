package com.cts.ofds.dao;

import org.springframework.jdbc.core.RowMapper;

import com.cts.ofds.model.OrderDetails;

public class OrderDetailsRowMapper {
	public static RowMapper<OrderDetails> rowMapper = (rs,rowNum) -> {
		OrderDetails order = new OrderDetails();
		order.setOrderId(rs.getInt("orderId"));
		order.setUserId(rs.getString("userId"));
		order.setDishes(rs.getString("dishes"));
		order.setPrice(rs.getDouble("price"));
		order.setOrderDate(rs.getString("orderDate"));
		return order;
	};
}
