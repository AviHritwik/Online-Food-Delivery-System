package com.cts.ofds.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cts.ofds.model.Dish;

@Component
public class DishDaoImpl implements DishDao{

	JdbcTemplate jdbc;
	
	@Autowired
	public DishDaoImpl(JdbcTemplate jdbc) {
		this.jdbc=jdbc;
	}
	
	
	@Override
	public List<Dish> list() throws DataAccessException
	{
		String sql = "select * from dish";
		List<Dish> dishList = jdbc.query(sql,DishRowMapper.rowMapper);
		return dishList;
	}
	
	
	@SuppressWarnings("deprecation")
	@Override
	public Optional<Dish> get(int id) throws DataAccessException
	{
		String sql ="select * from dish where dishId = ?";
		Dish dish = null;
		dish = jdbc.queryForObject(sql, new Object[] {id}, DishRowMapper.rowMapper);
		return Optional.ofNullable(dish);
	}

	@Override
	public int update(Dish t, int id) throws DataAccessException
	{
		String sql = "update dish set dishName = ? , price = ? , description = ? ,type = ? where dishId = ?";
		int response = jdbc.update(sql,t.getDishName(),t.getPrice(),t.getDescription(),t.getType(),id);
		return response;
	}

	@Override
	public int add(Dish t) //throws DataAccessException
	{
		String sql = "insert into dish(dishName,price,description,type) values (?,?,?,?)";
		int response = jdbc.update(sql,t.getDishName(),t.getPrice(),t.getDescription(),t.getType());
		return response;
	}

	@Override
	public int delete(int id) throws DataAccessException
	{
		String sql = "delete from dish where dishId = ?";
		int response = jdbc.update(sql,id);
		return response;
	}
}
