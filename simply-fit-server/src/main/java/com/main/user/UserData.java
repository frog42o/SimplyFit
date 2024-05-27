package com.main.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserData {

    @Id
    private String id;  // This will map to MongoDB's _id field
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String dateOfBirth;
    private String password;
    private String phoneNumber;

    public String getId() {
        return id;
    }
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
