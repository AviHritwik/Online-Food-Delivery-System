package com.cts.ofds.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import com.cts.ofds.dao.UserDaoImpl;
import com.cts.ofds.model.User;

@Service
public class UserService {
	
	@Autowired
	UserDaoImpl userDao;
	
	/**
	 * Get All User Service
	 * Argument : none
	 * Return : List<User> - List of all the user in database
	 */
	public List<User> getAll()
	{
		try{
			return userDao.list();
		}
		catch(DataAccessException ex) {
			return new ArrayList<User>();
		}	
	}
	
	/**
	 * Get User service
	 * Argument : Id
	 * Return : Optional<User> - user (if available in DB) or null
	 */
	public Optional<User> get(String id){
		try{
			return userDao.get(id);
		}
		catch(DataAccessException ex) {
			return null;
		}
	}
	
	/**
	 * Update User Password Service
	 * Argument : id,User Object
	 * Return : Boolean - success or failure response
	 */
	public boolean update(User user,String id)
	{
		int response = 0;
		try {
			response = userDao.update(user,id);
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
	 * Remove User Service 
	 * Argument : Id
	 * Return : Boolean - success or failure response
	 */
	public boolean delete(String id)
	{
		int response = 0;
		try {
			response = userDao.delete(id);
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
	 * Add User Service
	 * Argument : User Object
	 * Return : Boolean - success or failure response
	 */
	public boolean add(User user)
	{
		int response = 0;
		try {
			response = userDao.add(user);
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
