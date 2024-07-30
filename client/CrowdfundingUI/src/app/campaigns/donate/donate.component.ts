import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Web3Service } from '../../service/Web3Service/web3.service';
import { HttpClient } from '@angular/common/http';

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
  amountUSD:number=0;
  constructor(private dialogRef: MatDialogRef<DonateComponent>,private web3Service: Web3Service , private http: HttpClient) {
  }

  onSubmit(){

    this.donate()
   
  }
  onCancel() {
    this.dialogRef.close();
  }

  async donate() {
    try {
      await this.web3Service.sendTransaction(this.amount);
      console.log('Transaction successful!');

      const amountUsd = await this.web3Service.convertEthToUsd(this.amount);
      console.log(`Amount in USD: ${amountUsd}`);

      this.amountUSD=amountUsd
      this.dialogRef.close(this.amountUSD);
      
    } catch (error) {
      console.error('Error during donation:', error);
    }
  }
}
