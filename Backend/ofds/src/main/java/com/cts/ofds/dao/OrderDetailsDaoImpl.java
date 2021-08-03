package com.cts.ofds.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.cts.ofds.model.OrderDetails;

@Component
public class OrderDetailsDaoImpl implements OrderDetailsDao{
	
	JdbcTemplate jdbc;
	
	@Autowired
	public OrderDetailsDaoImpl(JdbcTemplate jdbc) {
		this.jdbc=jdbc;
	}
	
	
	@Override
	public List<OrderDetails> list() throws DataAccessException
	{
		String sql = "select * from orderdetails";
		List<OrderDetails> orderList = jdbc.query(sql, OrderDetailsRowMapper.rowMapper);
		return orderList;
	}

	@Override
	public int add(OrderDetails t) throws DataAccessException
	{
		String sql = "insert into orderdetails(userId,dishes,price,orderDate) values (?,?,?,?)";
		int response = jdbc.update(sql, t.getUserId(),t.getDishes(),t.getPrice(),t.getOrderDate());
		return response;
	}

	@SuppressWarnings("deprecation")
	@Override
	public Optional<OrderDetails> get(int id) throws DataAccessException
	{
		String sql = "select * from  orderdetails where orderId=?";
		OrderDetails order = null;
		try {
			order = jdbc.queryForObject(sql, new Object[] {id}, OrderDetailsRowMapper.rowMapper);
		}
		catch(DataAccessException ex) {
			System.out.println("User Not Found");
		}
		return Optional.ofNullable(order);
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<OrderDetails> getByUserId(String id)
	{
		String sql = "select * from orderdetails where userId = ?";
		List<OrderDetails> orderList = jdbc.query(sql,new Object[] {id}, OrderDetailsRowMapper.rowMapper);
		return orderList;
	}
	
	@Override
	public int update(OrderDetails t, int id) throws DataAccessException
	{
		String sql = "update orderdetails set dishes = ? , price = ? where orderId = ?";
		int response = jdbc.update(sql,t.getDishes(),t.getPrice(),id);
		return response;
	}

	@Override
	public int delete(int id) throws DataAccessException
	{
		String sql = "delete from orderdetails where orderId = ?";
		int response = jdbc.update(sql,id);
		return response;
	}

}
