package com.assignment.REST;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	
	  
	/*
	 * @RequestMapping(value = "/user",method= RequestMethod.POST) public String
	 * login(@RequestParam String UserName,@RequestParam String Password,ModelMap
	 * model) { if(service.validateUser(UserName, Password)) {
	 * model.put("UserName",UserName); model.put("Password",Password);
	 * 
	 * return "welcome"; } return "login"; }
	 */
	 
	
	@RequestMapping(value = "/validate",method = RequestMethod.POST)
    public String validateUser(@RequestParam String  username,@RequestParam String password){
        if(username.equals("jai") && password.equals("Nishant"))
             return "Valid User";
        else
            return "Invalid User";

    }
}
