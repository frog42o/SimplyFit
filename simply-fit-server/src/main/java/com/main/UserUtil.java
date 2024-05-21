package com.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserUtil {
    @Autowired
    private UserInterface userRepository;

    public UserData registerUser(UserData user) {
        if(userRepository.existsByUsername(user.getUsername())){
            throw new DuplicateUsernameException("Username already exists!");
        }
        return userRepository.save(user);
    }
    public List<UserData> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserData> getUserById(String id) {
        return userRepository.findById(id);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
