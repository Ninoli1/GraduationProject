import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path: 'campaigns',component: CampaignsComponent}
];
