package com.cts.ofds.dao;

import java.util.List;
import java.util.Optional;
import com.cts.ofds.model.User;

public interface UserDao {

	List<User> list();
	
	Optional<User> get(String id);
	
	int update(User User,String id);
	
	int add(User User);
	
	int delete(String id);
}
