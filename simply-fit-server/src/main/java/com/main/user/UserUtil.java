package com.main.user;

import com.main.Exceptions.*;
import com.main.user.UserData;
import com.main.user.UserInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserUtil {
    @Autowired
    private UserInterface userRepository;


    public UserData registerUser(UserData user) {
        if(userRepository.existsByUsername(user.getUsername())){
            throw new DuplicateUsernameException("duplicate username");
        }else if(userRepository.existsByEmail(user.getEmail())){
            throw new DuplicateEmailException("duplicate email");
        }
        PasswordValidator.validateRegister(user.getPassword());
        return userRepository.save(user);
    }
    public UserData loginUser(LoginRequest loginRequest) {
        Optional<UserData> userData = userRepository.findByUsername(loginRequest.getUsername());
        if (userData.isEmpty()) {
            throw new UsernameNotFoundException("user not found");
        }
        UserData user = userData.get();
        if(loginRequest.getPassword().equals(user.getPassword())){
            System.out.println("successfully logged in [" + userData.get().getUsername()+"]");
            return user;
        }else
            throw new InvalidPasswordException("invalid username or password");
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
