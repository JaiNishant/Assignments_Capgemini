package com.assignment.REST;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {
	@RequestMapping(value = "/user",method= RequestMethod.GET) 
	public String loginuser() { 
		return "login";
		}
}
