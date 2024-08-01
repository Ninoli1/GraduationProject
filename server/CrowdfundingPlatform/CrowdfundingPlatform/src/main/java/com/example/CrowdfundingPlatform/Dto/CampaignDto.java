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
    public CampaignDto(String name, String description, double goalAmount, String deadline, long userId, double donatedAmount,String imageUrl) {
        this.name = name;
        this.description = description;
        this.goalAmount = goalAmount;
        this.deadline = deadline;
        this.userId = userId;
        this.donatedAmount = donatedAmount;
        this.imageUrl=imageUrl;
    }

    public CampaignDto() {
    }
}
