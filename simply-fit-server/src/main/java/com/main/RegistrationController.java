package com.main;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RegistrationController {

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationData user) {
        //TODO SAVE TO DATABASE

        // Validate here later TODO
        boolean isRegistered = validateUser(user);
        if (isRegistered) {
            return ResponseEntity.ok(user.toString());
        } else {
            return ResponseEntity.status(400).body("Registration failed");
        }
    }
}

class UserRegistrationData {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String dateOfBirth;
    private String password;
    private String phoneNumber;


    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String toString(){
        return "User [" + getFirstName() +" " + getLastName()+"] has created an account with username [" + getUsername()+"].\n" +
                "Email: " + getEmail()+"\n"+
                "Password: " + getPassword()+"\n" +
                "DOB: " + getDateOfBirth()+"\n"+
                "Phone #: " + getPhoneNumber()+"\n";
    }
}
