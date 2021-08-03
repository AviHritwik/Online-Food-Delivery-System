package com.cts.ofds.dao;

import java.util.List;
import java.util.Optional;

import com.cts.ofds.model.Dish;

public interface DishDao {
	List<Dish> list();
	
	Optional<Dish> get(int id);
	
	int update(Dish t,int id);
	
	int add(Dish t);
	
	int delete(int id);
}
