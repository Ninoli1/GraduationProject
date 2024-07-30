package com.example.CrowdfundingPlatform.Controller;

import com.example.CrowdfundingPlatform.Dto.CampaignDto;
import com.example.CrowdfundingPlatform.Model.User;
import com.example.CrowdfundingPlatform.Service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/campaign")
public class CampaignController {


    @Autowired
    public CampaignService campaignService;

    @CrossOrigin(origins = "*")
    @PostMapping("/createCampaign")
    public ResponseEntity<CampaignDto> createCampaign(@RequestBody CampaignDto campaignDto){
       CampaignDto dto =  campaignService.save(campaignDto);

       return new ResponseEntity<>(dto,HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping ("/getAll")
    public ResponseEntity<List<CampaignDto>> getAll(){
        List<CampaignDto> dtos =  campaignService.getAll();

        return new ResponseEntity<>(dtos,HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PutMapping ("/updateAmount/{amount}")
    public void updateAmount(@PathVariable double amount, @RequestBody long id){
      campaignService.updateDonatedAmount(amount,id);


    }
}
