import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Web3Service } from '../../service/Web3Service/web3.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-donate-pay-pal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donate-pay-pal.component.html',
  styleUrl: './donate-pay-pal.component.css'
})
export class DonatePayPalComponent implements OnInit {
  amount:number=0;
  amountUSD:number=0;
  @ViewChild('paymentRef', {static:true}) paymentRef!:ElementRef;
  constructor(private dialogRef: MatDialogRef<DonatePayPalComponent>) {
  }
  ngOnInit(): void {
    window.paypal.Buttons({
        createOrder:(data:any,actions:any)=>{
          return actions.order.create({
            purchase_units:[
              {
                amount:{
                  value:this.amount.toString(),
                  currency_code:'USD'
                }
              }
            ]
          }

          )
        },

        onApprove:(data:any,actions:any)=>{
          return actions.order.capture().then((details:any)=>{
              if(details.status==='COMPLETED'){
                console.log('USPJESNO', details.id)
              }
          })
        },
        onError:(error:any)=>{

        }



      }).render(this.paymentRef.nativeElement);
  }

  
  onSubmit(){

    this.dialogRef.close(this.amount);
   
  }
  onCancel() {
    this.dialogRef.close();
  }

 
}
