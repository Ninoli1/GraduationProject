import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  amount:number=0;
  constructor(private dialogRef: MatDialogRef<DonateComponent>) {
  }

  onSubmit(){
    this.dialogRef.close(this.amount);
  }
  onCancel() {
    this.dialogRef.close();
  }
}
