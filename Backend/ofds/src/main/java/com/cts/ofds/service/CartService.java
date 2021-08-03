package com.cts.ofds.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import com.cts.ofds.dao.CartDaoImpl;
import com.cts.ofds.model.Cart;
import com.cts.ofds.model.Dish;
import com.cts.ofds.model.OrderDetails;

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
	
	public Cart get(int id){
		try{
			return cartDao.get(id).orElse(null);
		}
		catch(DataAccessException ex) {
			return null;
		}
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
	
	public boolean addItem(int id) {
		Cart fetchedCart =null;
		try {
			fetchedCart = cartDao.get(id).orElse(null);
		}
		catch(DataAccessException ex) {
		}
		if(fetchedCart!=null) {
			fetchedCart.setQuantity(fetchedCart.getQuantity()+1);
			int response = 0;
			try {
				response = cartDao.update(id,fetchedCart);
			}
			catch(DataAccessException ex){
				response = 0;
			}
			if(response == 0 )
				return false;
			else
				return true;
		}
		return false;
	}
	
	public boolean removeItem(int id) {
		Cart fetchedCart =null;
		try {
			fetchedCart = cartDao.get(id).orElse(null);
		}
		catch(DataAccessException ex) {
		}
		if(fetchedCart!=null) {
			if(fetchedCart.getQuantity()==1) {
				return this.delete(id);
			}
			else {
				fetchedCart.setQuantity(fetchedCart.getQuantity()-1);
				int response = 0;
				try {
					response = cartDao.update(id,fetchedCart);
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
		return false;
	}
	
	public boolean addToCart(String userId,Dish dish)
	{
		Cart fetchedCart =null;
		try {
			fetchedCart = cartDao.getByDishId(userId,dish.getDishId()).orElse(null);
		}
		catch(DataAccessException ex) {
		}
		if(fetchedCart!=null) {
			System.out.println(fetchedCart);
			fetchedCart.setQuantity(fetchedCart.getQuantity()+1);
			int response = 0;
			try {
				response = cartDao.addByDishId(dish.getDishId(), userId, fetchedCart.getQuantity());
			}
			catch(DataAccessException ex){
				response = 0;
				System.out.println(ex);
			}
			if(response == 0 )
				return false;
			else
				return true;
		}
		Cart cart = new Cart(userId,dish.getDishId(),dish.getDishName(),dish.getPrice(),1);
		return this.add(cart);
	}
	
	public boolean removeFromCart(String userId,Dish dish)
	{
		Cart fetchedCart =null;
		try {
			fetchedCart= cartDao.getByDishId(userId,dish.getDishId()).orElse(null);
		}
		catch(DataAccessException ex) {
		}
		if(fetchedCart!=null) {
			if(fetchedCart.getQuantity() == 1)
			{
				return this.delete(fetchedCart.getCartId());
			}
			fetchedCart.setQuantity(fetchedCart.getQuantity()-1);
			int response = 0;
			try {
				response = cartDao.addByDishId(dish.getDishId(), userId, fetchedCart.getQuantity());
			}
			catch(DataAccessException ex){
				response = 0;
				System.out.println(ex);
			}
			if(response == 0 )
				return false;
			else
				return true;
		}
		return true;
	}
}
