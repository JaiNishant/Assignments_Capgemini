package com.assignment.REST6;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@ComponentScan({ "com.beta.replyservice", "com.beta.ruleService" })
@SpringBootApplication
public class RestQuestion6Application {

	public static void main(String[] args) {
		SpringApplication.run(RestQuestion6Application.class, args);
	}
	
	/*
	 * @Bean public RestTemplate getRestTemplate() { return new RestTemplate(); }
	 */
}
