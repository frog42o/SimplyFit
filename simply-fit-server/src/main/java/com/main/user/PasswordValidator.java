package com.main.user;

import com.main.Exceptions.InvalidPasswordException;

import java.util.Optional;

public class PasswordValidator {
    public static void validateRegister(String password){
        boolean hasUppercase = false;
        boolean hasNumber = false;
        boolean hasSpecialCharacter = false;
        if(password.length() < 8){
            throw new InvalidPasswordException("invalid length");
        }
        for(char c: password.toCharArray()){
            if(Character.isUpperCase(c)) {
                hasUppercase = true;
            }else if(Character.isDigit(c)){
                hasNumber = true;
            }else if (!Character.isLetterOrDigit(c)){
                hasSpecialCharacter = true;
            }
        }
        if(!hasUppercase){
            throw new InvalidPasswordException("no capital");
        }
        if(!hasNumber){
            throw new InvalidPasswordException("no number");
        }
        if(!hasSpecialCharacter){
            throw new InvalidPasswordException("no special");
        }
    }
}
