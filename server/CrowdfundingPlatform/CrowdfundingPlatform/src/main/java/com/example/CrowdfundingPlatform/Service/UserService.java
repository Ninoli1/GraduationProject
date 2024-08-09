package com.example.CrowdfundingPlatform.Service;


import com.example.CrowdfundingPlatform.Model.User;
import com.example.CrowdfundingPlatform.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public BCryptPasswordEncoder passwordEncoder;


    public User save(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User getByUsername(User user){
        return userRepository.getByUsername(user.getUsername());
    }

    public User getByUsernameAndPassword(String username, String password){
        return userRepository.getByUsernameAndPassword(username,password);
    }
}
