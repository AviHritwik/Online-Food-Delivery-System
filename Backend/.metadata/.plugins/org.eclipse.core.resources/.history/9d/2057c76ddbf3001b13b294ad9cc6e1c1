package com.cts.ofds.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cts.ofds.model.Cart;
import com.cts.ofds.model.Dish;

@Component
public class CartDaoImpl implements CartDao{

JdbcTemplate jdbc;
	
	@Autowired
	public CartDaoImpl(JdbcTemplate jdbc) {
		this.jdbc=jdbc;
	}
	
	@SuppressWarnings("deprecation")
	@Override
	public List<Cart> getByUserId(String id) //throws DataAccessException 
	{
		String sql = "select * from cart where userId = ?";
		return jdbc.query(sql, new Object[] {id}, CartRowMapper.rowmapper);
	}

	@Override
	public int delete(int id) throws DataAccessException
	{
		String sql = "delete from cart where cartId = ?";
		int response = jdbc.update(sql,id);
		return response;
	}

	@Override
	public int add(Cart cart) throws DataAccessException
	{
		String sql = "insert into cart(userId,dishId,dishName,description,type,price) values (?,?,?,?,?,?)";
		Dish dish= cart.getDish();
		int response = jdbc.update(sql,cart.getUserId(),dish.getDishId(),dish.getDishName(),dish.getDescription(),dish.getType(),dish.getPrice() );
		return response;
	}

	@Override
	public int deleteAllByUserId(String id) throws DataAccessException
	{
		String sql = "delete from cart where userId = ?";
		int response = jdbc.update(sql,id);
		return response;
	}
}
