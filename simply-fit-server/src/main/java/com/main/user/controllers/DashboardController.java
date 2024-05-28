package com.main.user.controllers;

import com.main.user.UserData;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api")
public class DashboardController {
    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboard(HttpSession session) {
        UserData userData = (UserData) session.getAttribute("user");
        if (userData != null) {
            return ResponseEntity.ok(userData);
        } else {
            return ResponseEntity.status(401).body("Unauthorized");
        }
    }
}
