package com.cts.ofds.dao;

import org.springframework.jdbc.core.RowMapper;

import com.cts.ofds.model.User;

public class UserRowMapper {

	public static RowMapper<User> rowMapper = (rs,rowNum) -> {
		User user = new User();
		user.setUserId(rs.getString("userId"));
		user.setName(rs.getString("name"));
		user.setPassword(rs.getString("password"));
		user.setRole(rs.getString("role"));
		user.setAge(rs.getInt("age"));
		return user;
	};
}
