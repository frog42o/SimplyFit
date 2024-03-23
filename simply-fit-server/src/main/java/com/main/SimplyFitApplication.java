package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SimplyFitApplication {

	public static void main(String[] args) {
		System.out.println("Server is now running.");
		SpringApplication.run(SimplyFitApplication.class, args);
	}

}
