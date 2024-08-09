package com.example.CrowdfundingPlatform.Dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    public long id;

    private String username;

    private String email;

    private String password;

    private String role;

    public UserDto(String username, String email, String password,String role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role=role;
    }

    public UserDto() {
    }
}
