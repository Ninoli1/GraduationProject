package com.example.CrowdfundingPlatform.Mapper;

import com.example.CrowdfundingPlatform.Dto.UserDto;
import com.example.CrowdfundingPlatform.Model.Role;
import com.example.CrowdfundingPlatform.Model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserDto mapToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setPassword(user.getPassword());
        userDto.setEmail(user.getEmail());
        userDto.setUsername(user.getUsername());
        userDto.setRole(user.getRole().toString());
        return userDto;
    }

    public User mapToModel(UserDto userDto){
        User user = new User();

        user.setId(userDto.getId());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setUsername(userDto.getUsername());
        Role role = Role.valueOf(userDto.getRole().toUpperCase());
        user.setRole(role);

        return user;
    }

}
