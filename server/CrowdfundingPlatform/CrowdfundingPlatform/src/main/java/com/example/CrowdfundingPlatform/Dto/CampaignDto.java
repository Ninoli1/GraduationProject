package com.example.CrowdfundingPlatform.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CampaignDto {

    public long id;

    public String name;

    public String description;

    public long goalAmount;

    public String deadline;

    public long userId;

    public long  donatedAmount;

    public CampaignDto(String name, String description, long goalAmount, String deadline, long userId, long donatedAmount) {
        this.name = name;
        this.description = description;
        this.goalAmount = goalAmount;
        this.deadline = deadline;
        this.userId = userId;
        this.donatedAmount = donatedAmount;
    }

    public CampaignDto() {
    }
}
