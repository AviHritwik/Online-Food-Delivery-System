package com.cts.ofds.dao;

import org.springframework.jdbc.core.RowMapper;

import com.cts.ofds.model.Dish;

public class DishRowMapper {
	
	public static RowMapper<Dish> rowMapper = (rs,rowNum) -> {
		Dish dish = new Dish();
		dish.setDishId(rs.getInt("dishId"));
		dish.setDishName(rs.getString("dishName"));
		dish.setDescription(rs.getString("description"));
		dish.setType(rs.getString("type"));
		dish.setPrice(rs.getDouble("price"));
		return dish;
	};
}
