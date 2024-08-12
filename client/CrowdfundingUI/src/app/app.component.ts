import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule ,MatInput} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShowCampaignsComponent } from './campaigns/show-campaigns/show-campaigns.component';
import { CreateCampaignComponent } from './campaigns/create-campaign/create-campaign.component';
import { HttpClientModule } from '@angular/common/http';
import { DonateComponent } from './campaigns/donate/donate.component';
import { DonatePayPalComponent } from './campaigns/donate-pay-pal/donate-pay-pal.component';
import { RewardMessageComponent } from './campaigns/reward-message/reward-message.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './TokenInterceptor';
import { JwtConfigModule } from './jwt-config.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register/register.component';
import { DescriptionComponent } from './campaigns/description/description.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
    MatInput,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatTabsModule,
    HttpClientModule,

    JwtConfigModule,
    



    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ShowCampaignsComponent,
    CreateCampaignComponent,
    DonateComponent,
    DonatePayPalComponent,
    RewardMessageComponent,
    RegisterComponent,
    DescriptionComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrowdfundingUI';
}
