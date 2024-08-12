package com.example.CrowdfundingPlatform.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CampaignDto {

    public long id;

    public String name;

    public String description;

    public double goalAmount;

    public String deadline;

    public long userId;

    public double  donatedAmount;

    public String imageUrl;

    public String category;

    public String status;
    public CampaignDto(String name, String description, double goalAmount, String deadline, long userId, double donatedAmount,String imageUrl, String category) {
        this.name = name;
        this.description = description;
        this.goalAmount = goalAmount;
        this.deadline = deadline;
        this.userId = userId;
        this.donatedAmount = donatedAmount;
        this.imageUrl=imageUrl;
        this.category=category;
    }

    public CampaignDto() {
    }
}
