package com.example.CrowdfundingPlatform.Mapper;

import com.example.CrowdfundingPlatform.Dto.CampaignDto;
import com.example.CrowdfundingPlatform.Model.Campaign;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CampaignMapper {

    public CampaignDto mapToDto(Campaign campaign){
        CampaignDto dto = new CampaignDto();
        dto.setId(campaign.getId());
        dto.setName(campaign.getName());
        dto.setDeadline(campaign.getDeadline());
        dto.setDescription(campaign.getDescription());
        dto.setUserId(campaign.getUserId());
        dto.setDonatedAmount(campaign.getDonatedAmount());
        dto.setGoalAmount(campaign.getGoalAmount());

        return dto;
    }

    public Campaign mapToModel(CampaignDto dto){
        Campaign campaign = new Campaign();
        campaign.setId(dto.getId());
        campaign.setName(dto.getName());
        campaign.setDeadline(dto.getDeadline());
        campaign.setDescription(dto.getDescription());
        campaign.setUserId(dto.getUserId());
        campaign.setDonatedAmount(dto.getDonatedAmount());
        campaign.setGoalAmount(dto.getGoalAmount());

        return campaign;
    }

    public List<CampaignDto> mapToDtoList(List<Campaign> campaigns){
        List<CampaignDto> dtoList= new ArrayList<>();
        for (Campaign campaign:
             campaigns) {
            CampaignDto dto = mapToDto(campaign);
            dtoList.add(dto);
        }

        return dtoList;
    }
}
