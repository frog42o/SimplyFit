package com.main.user.controllers;


import com.main.user.LoginRequest;
import com.main.user.UserData;
import com.main.user.UserUtil;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api")
public class LoginRegistrationController {
    @Autowired
    private UserUtil userUtil;

    @PostMapping("/register")
    public ResponseEntity<UserData> registerUser(@RequestBody UserData user) {
        UserData registerUser = userUtil.registerUser(user);
        return ResponseEntity.ok(registerUser);
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest, HttpSession session) {
        UserData user = userUtil.loginUser(loginRequest);
        if(user != null){
            //session.setAttribute("user", user);
            return ResponseEntity.ok().header("Location", "/dashboard").body("Login successful. Redirecting to dashboard...");
        }
        return ResponseEntity.status(401).body("Invalid username or password");
    }
    public ResponseEntity<String> logoutUser(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logged out successfully");
    }
    @GetMapping("/dashboard")
    public ResponseEntity<String> getDashboard(HttpSession session) {
        UserData userData = (UserData) session.getAttribute("user");
        if (userData != null) {
            return ResponseEntity.ok("Welcome to the dashboard, " + userData.getUsername());
        } else {
            return ResponseEntity.status(401).body("Unauthorized");
        }
    }
}

