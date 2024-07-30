import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Campaign } from '../../model/campaign.model';
import { CampaignService } from '../../service/campaignService/campaign.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';
import { HttpClientModule } from '@angular/common/http';
import { DonateComponent } from '../donate/donate.component';
import confetti from 'canvas-confetti';
import { Web3Service } from '../../service/Web3Service/web3.service';



@Component({
  selector: 'app-show-campaigns',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    HttpClientModule,
    
  ],
  templateUrl: './show-campaigns.component.html',
  styleUrl: './show-campaigns.component.css'
})
export class ShowCampaignsComponent {
  campaigns : Campaign[]=[]

  constructor(private campaignService: CampaignService,private dialog: MatDialog,private web3Service : Web3Service) {
    this.getAllCampaigns()
  }

  getAllCampaigns(){
    this.campaignService.getAll().subscribe({
      next:(response)=>{
        this.campaigns=response
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  createCampaign(){
    const dialogRef = this.dialog.open(CreateCampaignComponent);

    dialogRef.afterClosed().subscribe(campaign => {
      if (campaign) {
        this.campaignService.create(campaign).subscribe({
          next: (res) => {
           this.getAllCampaigns();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
    
  }
  
  calculateProgress(donatedAmount: number, goalAmount: number): number {
    if (goalAmount === 0) return 0;
    return (donatedAmount / goalAmount) * 100;
  }

  donate(campaignId:number){

    const dialogRef2 = this.dialog.open(DonateComponent);

    dialogRef2.afterClosed().subscribe(amount => {
      if (amount) {
        this.campaignService.updateAmount(amount,campaignId).subscribe({
          next: (res) => {
           this.getAllCampaigns();
           this.rewardUser();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });

  // this.showConfettiMultipleTimes()
  }

  rewardUser() {
    this.web3Service.rewardUser('address', '1')
      .then(() => {
        console.log('User rewarded successfully');
      })
      .catch((err: any) => {
        console.error('Failed to reward user', err);
      });
  }

    // Funkcija koja generiše konfete
    generateConfetti() {
      confetti({
        angle: this.randomInRange(55, 125),
        spread: this.randomInRange(50, 100),
        particleCount: this.randomInRange(200, 450),
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff','#ffd700'] ,
        gravity: 0.001
        
      });
    }
  
    randomInRange(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }
  
    showConfettiMultipleTimes() {
      let count = 0;
      const maxCount = 8; // Broj ponavljanja
      const interval = 500; // Interval između prikazivanja u milisekundama
  
      const intervalId = setInterval(() => {
        if (count >= maxCount) {
          clearInterval(intervalId);
          return;
        }
        this.generateConfetti();
        count++;
      }, interval);
    }
}
