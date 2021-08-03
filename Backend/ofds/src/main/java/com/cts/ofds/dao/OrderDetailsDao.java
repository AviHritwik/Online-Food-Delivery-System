package com.cts.ofds.dao;

import java.util.List;
import java.util.Optional;

import com.cts.ofds.model.OrderDetails;

public interface OrderDetailsDao {

	List<OrderDetails> list();
	
	Optional<OrderDetails> get(int id);
	
	int update(OrderDetails t,int id);
	
	int add(OrderDetails t);
	
	int delete(int id);
	
	List<OrderDetails> getByUserId(String id);
}
