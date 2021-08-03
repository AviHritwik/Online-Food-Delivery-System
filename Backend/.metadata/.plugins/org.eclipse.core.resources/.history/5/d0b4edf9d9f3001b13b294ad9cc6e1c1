package com.cts.ofds.dao;

import org.springframework.jdbc.core.RowMapper;

import com.cts.ofds.model.Cart;
import com.cts.ofds.model.Dish;

public class CartRowMapper {
	public static RowMapper<Cart> rowmapper = (rs,rnum) -> {
		Cart cart = new Cart();
		Dish dish = new Dish();
		cart.setCartId(rs.getInt("cartId"));
		cart.setUserId(rs.getString("userId"));
			dish.setDishId(rs.getInt("dishId"));
			dish.setDishName(rs.getString("dishName"));
			dish.setDescription(rs.getString("description"));
			dish.setPrice(rs.getDouble("price"));
			dish.setType(rs.getString("type"));
		cart.setDish(dish);
		return cart;
	};
}
