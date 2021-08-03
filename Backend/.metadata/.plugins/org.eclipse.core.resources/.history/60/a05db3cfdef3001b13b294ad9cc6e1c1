package com.cts.ofds.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import com.cts.ofds.dao.CartDaoImpl;
import com.cts.ofds.model.Cart;

@Service
public class CartService {

	@Autowired
	CartDaoImpl cartDao;
	
	/**
	 * Add Item To cart
	 * Argument - Cart Object
	 * Return - Boolean as operation status
	 */
	public boolean add(Cart cart)
	{
		int response = 0;
		try {
			response = cartDao.add(cart);
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
	 * Get Cart Item by User ID
	 * Argument - User ID
	 * Return - List<User>
	 */
	public List<Cart> getAllByUserId(String userId)
	{
		try{
			return cartDao.getByUserId(userId);
		}
		catch(DataAccessException ex) {
			return new ArrayList<Cart>();
		}	
	}
	
	/**
	 * Remove from cart: Removes single item from cart
	 * Argument - cartId
	 * Return - Boolean as operation status
	 */
	public boolean delete(int id)
	{
		int response = 0;
		try {
			response = cartDao.delete(id);
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
	 * Empty User Cart : Remove all item associated to a user
	 * Argument - user Id
	 * Return - Boolean as operation status
	 */
	public boolean deleteAllByUserId(String userId)
	{
		int response = 0;
		try {
			response = cartDao.deleteAllByUserId(userId);
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
