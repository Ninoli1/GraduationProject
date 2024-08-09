import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { ShowCampaignsComponent } from './campaigns/show-campaigns/show-campaigns.component';
import { CreateCampaignComponent } from './campaigns/create-campaign/create-campaign.component';
import { DonateComponent } from './campaigns/donate/donate.component';
import { DonatePayPalComponent } from './campaigns/donate-pay-pal/donate-pay-pal.component';
import { RewardMessageComponent } from './campaigns/reward-message/reward-message.component';
import { RegisterComponent } from './register/register/register.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path: 'campaigns',component: ShowCampaignsComponent},
    {path: 'create',component : CreateCampaignComponent},
    {path: 'donate',component : DonateComponent},
    {path: 'donatePayPal',component : DonatePayPalComponent},
    {path: 'rewardMessage',component : RewardMessageComponent},
    {path:'register',component:RegisterComponent}
];
