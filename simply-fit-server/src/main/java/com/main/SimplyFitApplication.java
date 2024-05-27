package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.main")
public class SimplyFitApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(SimplyFitApplication.class);

		app.addListeners(event -> {
			if (event instanceof ApplicationReadyEvent) {
				ConfigurableApplicationContext context = ((ApplicationReadyEvent) event).getApplicationContext();
				int port = context.getEnvironment().getProperty("local.server.port", Integer.class, 8080);
				System.out.println("Server is now running on port: " + port);
			}
		});

		app.run(args);
	}
}
