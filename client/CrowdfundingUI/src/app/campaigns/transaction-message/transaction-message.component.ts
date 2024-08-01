import { Component,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-message',
  standalone: true,
  imports: [],
  templateUrl: './transaction-message.component.html',
  styleUrl: './transaction-message.component.css'
})
export class TransactionMessageComponent {
  /**
   *
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<TransactionMessageComponent>) {
    
  }

  close(){

    this.dialogRef.close()
  }
}
