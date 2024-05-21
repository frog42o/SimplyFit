package com.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RegistrationController {
    @Autowired
    private UserUtil userUtil;

    @PostMapping("/register")
    public ResponseEntity<UserData> registerUser(@RequestBody UserData user) {
        UserData registerUser = userUtil.registerUser(user);
        return ResponseEntity.ok(registerUser);
    }
}

