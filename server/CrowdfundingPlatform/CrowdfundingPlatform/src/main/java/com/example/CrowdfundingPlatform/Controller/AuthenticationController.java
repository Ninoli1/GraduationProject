package com.example.CrowdfundingPlatform.Controller;

import com.example.CrowdfundingPlatform.Dto.UserDto;
import com.example.CrowdfundingPlatform.Mapper.UserMapper;
import com.example.CrowdfundingPlatform.Model.User;
import com.example.CrowdfundingPlatform.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {

    @Autowired
    public UserService userService;

    @Autowired
    public UserMapper userMapper;

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody  String username, @RequestBody String password){
        User user = userService.getByUsernameAndPassword(username,password);
        if(user==null){
            return new ResponseEntity<>("User not found",HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>("Successfully logged in",HttpStatus.OK);
        }
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto){
        User user = userMapper.mapToModel(userDto);
        User savedUser= userService.save(user);
        if(savedUser==null){
            return new ResponseEntity<>("Register unsuccessfull",HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>("Successfully  registered",HttpStatus.OK);
        }
    }
}
