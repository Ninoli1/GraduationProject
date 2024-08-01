import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-reward-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reward-message.component.html',
  styleUrl: './reward-message.component.css'
})
export class RewardMessageComponent {
/**
 *
 */
  constructor(private dialogRef: MatDialogRef<RewardMessageComponent>) {
  
}
  close(){
    this.dialogRef.close()
  }
}
