package com.main;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserInterface extends MongoRepository<UserData, String> {
    boolean existsByUsername(String username);
}