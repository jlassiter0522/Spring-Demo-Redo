package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class UserRequest {

    //creating a validator
    
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
}
