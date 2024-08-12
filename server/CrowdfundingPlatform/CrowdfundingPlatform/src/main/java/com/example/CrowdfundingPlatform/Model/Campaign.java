package com.example.CrowdfundingPlatform.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.w3c.dom.Text;

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

    public double goalAmount;

    public String deadline;

    public long userId;

    public double  donatedAmount;

    public String category;

    @Column(columnDefinition = "TEXT")
    public String imageUrl;

    public Status status;

    public Campaign(String name, String description, double goalAmount, String deadline, long userId, double donatedAmount,String imageUrl,String category) {
        this.name = name;
        this.description = description;
        this.goalAmount = goalAmount;
        this.deadline = deadline;
        this.userId = userId;
        this.donatedAmount = donatedAmount;
        this.imageUrl=imageUrl;
        this.category=category;
    }

    public Campaign() {
    }
}
