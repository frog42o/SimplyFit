package com.main.Exceptions;

import org.apache.catalina.User;

public class UsernameNotFoundException extends RuntimeException {
    public UsernameNotFoundException(String msg){
        super(msg);
    }
}
