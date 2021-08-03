package com.cts.ofds.dao;

import org.springframework.jdbc.core.RowMapper;

import com.cts.ofds.model.Cart;

public class CartRowMapper {
	public static RowMapper<Cart> rowmapper = (rs,rnum) -> {
		Cart cart = new Cart();
		cart.setCartId(rs.getInt("cartId"));
		cart.setUserId(rs.getString("userId"));
		cart.setDishId(rs.getInt("dishId"));
		cart.setDishName(rs.getString("dishName"));
		cart.setPrice(rs.getDouble("price"));
		cart.setQuantity(rs.getInt("quantity"));
		return cart;
	};
}
