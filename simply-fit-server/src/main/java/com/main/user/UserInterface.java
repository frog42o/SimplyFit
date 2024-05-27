package com.main.user;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserInterface extends MongoRepository<UserData, String> {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    Optional<UserData> findByUsername(String username);
}