package com.main.Exceptions;

public class DuplicateUsernameException extends RuntimeException{
    public DuplicateUsernameException(String message){
        super(message);
    }
}
