package com.cts.ofds.dao;

import java.util.List;
import java.util.Optional;

import com.cts.ofds.model.Cart;

public interface CartDao {
	
	List<Cart> getByUserId(String id);
	
	int delete(int id);
	
	int add(Cart cart);
	
	int deleteAllByUserId(String id);

	Optional<Cart> get(int id);

	int update(int id, Cart cart);

	int addByDishId(int dishId, String userId, int quantity);

	Optional<Cart> getByDishId(String userId, int dishId);
}
