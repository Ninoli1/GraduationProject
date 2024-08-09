package com.example.CrowdfundingPlatform.Repository;

import com.example.CrowdfundingPlatform.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    User getByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.email = ?1")
    User getByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.username = ?1 and u.password=?2")
    User getByUsernameAndPassword(String username,String password);

    @Query("SELECT u FROM User u WHERE u.username = ?1")
    User findByUsername(String username);
}
