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

import com.cts.ofds.model.OrderDetails;
import com.cts.ofds.service.OrderDetailsService;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins="*")
public class OrderDetailsController {

	@Autowired
	OrderDetailsService orderService;
	
	@ResponseBody
	@GetMapping("/getAll")
	public List<OrderDetails> getAll()
	{
		return orderService.getAll();
	}
	
	@ResponseBody
	@GetMapping("/get/{id}")
	public OrderDetails get(@PathVariable("id") int id)
	{
		return orderService.get(id).orElse(null);
	}
	
	@ResponseBody
	@GetMapping("/getByUser/{userId}")
	public List<OrderDetails> getAllByUser(@PathVariable("userId") String userId){
		return orderService.getByUserId(userId);
	}
	
	@ResponseBody
	@PostMapping("/add")
	public boolean add(@RequestBody OrderDetails order) {
		return orderService.add(order);
	}
	
	@ResponseBody
	@DeleteMapping("/dalete/{id}")
	public boolean delete(@PathVariable("id") int id) {
		return orderService.delete(id);
	}
	
	@ResponseBody
	@PutMapping("/update/{id}")
	public boolean update(@PathVariable("id") int id, @RequestBody OrderDetails orderDetails) {
		return orderService.update(orderDetails, id);
	}
}
