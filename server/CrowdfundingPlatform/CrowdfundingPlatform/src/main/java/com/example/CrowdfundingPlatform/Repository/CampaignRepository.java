package com.example.CrowdfundingPlatform.Repository;

import com.example.CrowdfundingPlatform.Model.Campaign;
import com.example.CrowdfundingPlatform.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CampaignRepository  extends JpaRepository<Campaign,Long> {
}
