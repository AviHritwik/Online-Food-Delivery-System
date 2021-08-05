package com.cts.ofds.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.ofds.model.Login;
import com.cts.ofds.model.User;
import com.cts.ofds.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/getAll")
	@ResponseBody
	public List<User> getAll(){
		return userService.getAll();
	}
	
	@GetMapping("/get/{userId}")
	@ResponseBody
	public User get(@PathVariable("id") String userId)
	{
		return userService.get(userId).orElse(null);
	}
	
	@PutMapping("/update/{userId}")
	@ResponseBody
	public boolean update(@PathVariable("id") String userId, @RequestBody User user) {
		return userService.update(user, userId);
	}
	
	@DeleteMapping("/delete/{userId}")
	@ResponseBody
	public boolean delete(@PathVariable("id") String userId) {
		return userService.delete(userId);
	}
	
	@PostMapping("/add")
	@ResponseBody
	public boolean add(@RequestBody User user) {
		return userService.add(user);
	}
	
	@GetMapping("/idAvailable/{userId}")
	@ResponseBody
	public boolean idAvailable(@PathVariable("userId") String userId) {
		User user = userService.get(userId).orElse(null);
		return user == null ? true : false;
	}
	
	@PostMapping("/login")
	@ResponseBody
	public User login(@RequestBody Login login) {
		User user = userService.get(login.getUserId()).orElse(null);
		if(user != null && user.getPassword().equals(login.getPassword()))
		{
			return user;
		}
		return null;
	}
}
