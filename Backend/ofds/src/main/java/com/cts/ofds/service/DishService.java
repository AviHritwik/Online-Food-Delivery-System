package com.cts.ofds.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import com.cts.ofds.dao.DishDaoImpl;
import com.cts.ofds.model.Dish;

@Service
public class DishService {
	
	@Autowired
	DishDaoImpl dishDao;

	/**
	 * Get all Dishes
	 * Arguments : None
	 * Return : List<Dish> - All the Dish in the DB
	 */
	public List<Dish> getAll()
	{
		try{
			return dishDao.list();
		}
		catch(DataAccessException ex) {
			return new ArrayList<Dish>();
		}	
	}
	
	/**
	 * Add Dish
	 * Arguments : Dish Object 
	 * Return : Boolean as success or failure response
	 */
	public boolean add(Dish dish)
	{
		int response = 0;
		try {
			response = dishDao.add(dish);
		}
		catch(DataAccessException ex){
			response = 0;
		}
		if(response == 0 )
			return false;
		else
			return true;
	}
	
	
	/**
	 * Update Dish
	 * Arguments : Dish object, dish Id 
	 * Return : Boolean as success or failure response
	 */
	public boolean update(Dish dish,int id)
	{
		int response = 0;
		try {
			response = dishDao.update(dish,id);
		}
		catch(DataAccessException ex){
			response = 0;
		}
		if(response == 0 )
			return false;
		else
			return true;
	}
	
	/**
	 * Get Dish By Dish Id
	 * Arguments : Dish Id
	 * Return : Optional<Dish> - Dish(if Available) or Null
	 */
	public Optional<Dish> get(int id){
		try{
			return dishDao.get(id);
		}
		catch(DataAccessException ex) {
			return null;
		}
	}
	
	/**
	 * Remove Dish
	 * Arguments : Dish Id 
	 * Return : Boolean as success or failure response
	 */
	public boolean delete(int id)
	{
		int response = 0;
		try {
			response = dishDao.delete(id);
		}
		catch(DataAccessException ex){
			response = 0;
		}
		if(response == 0 )
			return false;
		else
			return true;
	}
}
