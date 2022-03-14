package com.assignment.REST;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class question1 {
	
	@RequestMapping("/output")
	public String message() {
		return "Hello World";
		
	}
}
