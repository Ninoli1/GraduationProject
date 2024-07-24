package com.example.CrowdfundingPlatform.Service;

import com.example.CrowdfundingPlatform.Dto.CampaignDto;
import com.example.CrowdfundingPlatform.Mapper.CampaignMapper;
import com.example.CrowdfundingPlatform.Model.Campaign;
import com.example.CrowdfundingPlatform.Repository.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignService {

    @Autowired
    public CampaignMapper mapper;

    @Autowired
    public CampaignRepository repo;

    public CampaignDto save(CampaignDto campaignDto){
        Campaign newCampaign = mapper.mapToModel(campaignDto);
        Campaign saved=repo.save(newCampaign);
        CampaignDto newDto = mapper.mapToDto(saved);
        return newDto;

    }

    public List<CampaignDto> getAll(){
        List<Campaign> campaigns= repo.findAll();
        List<CampaignDto> dtos= mapper.mapToDtoList(campaigns);

        return dtos;
    }

    public void updateDonatedAmount(long amount,long id){
        Campaign old= repo.findById(id).get();
        long updatedAmount= old.getDonatedAmount()+ amount;
        old.setDonatedAmount(updatedAmount);
        repo.save(old);
    }
}
