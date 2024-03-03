package com.example.demo.domain;
/*import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
*/
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserRequest {

    //creating a validator
    //regex checks over strings to see if it contains the patten
    /* 
    @NotNull(message = "first name cannot be null")
    @NotBlank(message = "first name cannot be empty")
    
    @Pattern(regexp ="[a-zA-Z]*", message = "first name can only be alphabetic")
    */
    private String firstName;
    /* 
    @NotNull(message = "last name cannot be null")
    @NotBlank(message = "last name cannot be empty")
    @Pattern(regexp ="[a-zA-Z]*")
    */
    private String lastName;
    private String phone;
    private String email;
    /* 
    @Min(value = 16, message= "age less than 16")
    @Max(value = 120, message = "age cannot be more than 120")
    */
    private int age;
}
