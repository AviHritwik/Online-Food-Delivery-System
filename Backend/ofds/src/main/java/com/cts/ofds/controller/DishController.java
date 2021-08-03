package com.cts.ofds.controller;

import java.util.List;
import java.util.Optional;

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

import com.cts.ofds.model.Dish;
import com.cts.ofds.service.DishService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/dish")
public class DishController {
	
	@Autowired
	DishService dishService;
	
	/*
	 * Get All the Dish in Database
	 */
	@ResponseBody
	@GetMapping("/getAll")
	
	public List<Dish> getAll(){
		return dishService.getAll();
	}
	
	@ResponseBody
	@GetMapping("/get/{id}")
	public Optional<Dish> get(@PathVariable("id") int id) {
		return dishService.get(id);
	}
	
	@ResponseBody
	@DeleteMapping("/delete/{id}")
	public boolean delete (@PathVariable("id") int id) {
		return dishService.delete(id);
	}
	
	@ResponseBody
	@PutMapping("/update/{id}")
	public boolean update (@PathVariable("id") int id , @RequestBody Dish dish) {
		return dishService.update(dish, id);
	}
	
	@ResponseBody
	@PostMapping("/add")
	public boolean add(@RequestBody Dish dish) {
		return dishService.add(dish);
	}
}
