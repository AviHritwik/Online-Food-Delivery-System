package com.cts.ofds;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.web.client.RestTemplate;

import com.cts.ofds.service.UserService;

public class DishControllerIntegrationTesting {
	@LocalServerPort
    private int port;
	
	
	RestTemplate restTemplate = new RestTemplate();

	@Autowired
	UserService userService;
	
	private String getRootUrl() {
        return "http://localhost:" + port+"/dish/";
    }
	
	
	
}
