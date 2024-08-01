import { Component, NgModule } from '@angular/core';
import { Campaign } from '../../model/campaign.model';
import { FormsModule, NgModel } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-create-campaign',
  standalone: true,
  imports: [ 
    FormsModule
  ],
  templateUrl: './create-campaign.component.html',
  styleUrl: './create-campaign.component.css'
})
export class CreateCampaignComponent {

  /**
   *
   */
  constructor(private dialogRef: MatDialogRef<CreateCampaignComponent>) {
   
  }
  campaign:Campaign={
    name:'',
    description:'',
    goalAmount:0,
    deadline: new Date(),
    userId:0,
    donatedAmount:0,
    id:0,
    imageUrl: ''
  }

  onSubmit(){
    this.dialogRef.close(this.campaign);
  }

  selectedFile?: File;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          this.campaign.imageUrl = reader.result.toString(); 
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
