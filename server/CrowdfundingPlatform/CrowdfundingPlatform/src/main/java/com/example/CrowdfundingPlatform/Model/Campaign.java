package com.example.CrowdfundingPlatform.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table
@Getter
@Setter
public class Campaign {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    public String name;

    public String description;

    public long goalAmount;

    public String deadline;

    public long userId;

    public long  donatedAmount;

    public Campaign(String name, String description, long goalAmount, String deadline, long userId, long donatedAmount) {
        this.name = name;
        this.description = description;
        this.goalAmount = goalAmount;
        this.deadline = deadline;
        this.userId = userId;
        this.donatedAmount = donatedAmount;
    }

    public Campaign() {
    }
}
