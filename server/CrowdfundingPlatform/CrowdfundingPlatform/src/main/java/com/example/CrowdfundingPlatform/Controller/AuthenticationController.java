package com.example.CrowdfundingPlatform.Controller;

import com.example.CrowdfundingPlatform.Dto.UserDto;
import com.example.CrowdfundingPlatform.Mapper.UserMapper;
import com.example.CrowdfundingPlatform.Model.Role;
import com.example.CrowdfundingPlatform.Model.User;
import com.example.CrowdfundingPlatform.Model.UserTokenState;
import com.example.CrowdfundingPlatform.Service.UserService;
import com.example.CrowdfundingPlatform.Utilities.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {

    @Autowired
    public UserService userService;

    @Autowired
    public UserMapper userMapper;

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;




    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<UserTokenState> createAuthenticationToken(
            @RequestBody UserDto authenticationRequest) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getUsername(), authenticationRequest.getPassword()));

        //ubacuje se korisnik u trenutni security context
        SecurityContextHolder.getContext().setAuthentication(authentication);


        User user = (User) authentication.getPrincipal();
        Role role = user.getRole();
        List<String> rolesString = new ArrayList<>();


        rolesString.add(role.toString());


        String jwt = tokenUtils.generateToken(user.getUsername(), rolesString, user.getId());
        int expiresIn = tokenUtils.getExpiredIn();


        return ResponseEntity.ok(new UserTokenState(jwt, expiresIn));
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
