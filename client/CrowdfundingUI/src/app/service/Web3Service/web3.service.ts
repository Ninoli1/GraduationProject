import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Web3 from 'web3';
import { TokenAbi } from '../../model/tokenAbi';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3!: Web3;
  private account: string | undefined;
  private contract: any;
  private contractAddress = '0x9D1bF228Ed1e3D2DFE01bbC3D762aeF2ff1ED1c6'; // Zamijenite sa stvarnom adresom vašeg ugovora
  private tokenABI = TokenAbi;
  private accountRecieving: string | undefined;

  constructor(private http: HttpClient) {
    if (typeof window.ethereum !== 'undefined') {
      this.web3 = new Web3(window.ethereum);
      window.ethereum.enable().then((accounts: string[]) => {
        this.account = accounts[0];
        this.accountRecieving=accounts[1]
        console.log(this.account)
        this.initializeContract();
      }).catch((error: any) => {
        console.error('User denied account access');
      });
    } else if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn('No web3 provider detected');
    }
  }

  public async getEthPrice(): Promise<number> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const data = await response.json();
    return data.ethereum.usd;
  }

  public async convertEthToUsd(amountEth: number): Promise<number> {
    const ethPrice = await this.getEthPrice();
    return amountEth * ethPrice;
  }

  public async sendTransaction(amountEth: number): Promise<void> {
    if (!this.account) {
      throw new Error('Account not connected');
    }
    const toAddress = this.accountRecieving;
    const value = this.web3.utils.toWei(amountEth.toString(), 'ether');
    await this.web3.eth.sendTransaction({ from: this.account, to: toAddress, value });
  }

  private initializeContract() {


     
      this.contract = new this.web3.eth.Contract(this.tokenABI, this.contractAddress);
   
      if (this.contract) {
        console.log('Contract successfully created');
        this.checkContractInstance()
      } else {
        console.error('Failed to create contract');
      }
    
  }

  // Funkcija za proveru instanciranja kontrakta
  public async checkContractInstance(): Promise<void> {
    try {
      const name = await this.contract.methods.name().call();
      console.log('Contract Name:', name);
    } catch (error) {
      console.error('Error accessing contract:', error);
    }
  }

  // sa 1 racuna na 0
  public async rewardUserr(userAddress: string, amount: string): Promise<void> {
    const accounts = await this.web3.eth.getAccounts();
    const senderAddress = accounts[0];

    console.log('posiljalac, primalac',accounts[0],accounts[0])
    return this.contract.methods.transfer(accounts[0], this.web3.utils.toWei(amount, 'ether'))
      .send({ from: senderAddress , gas: 3000})
      .on('receipt', (receipt: any) => {
        console.log('Transaction successful', receipt);
      })
      .on('error', (error: any) => {
        console.error('Transaction failed', error);
      });
  }
   public async rewardUser(userAddress: string, amount: string): Promise<void> {
    const accounts = await this.web3.eth.getAccounts();
    const senderAddress = accounts[1];
    userAddress=accounts[0]

    try {
      const gasEstimate = await this.contract.methods.rewardUser(userAddress, this.web3.utils.toWei(amount, 'ether')).estimateGas({ from: senderAddress });
      console.log('Estimated gas:', gasEstimate);

      await this.contract.methods.rewardUser(userAddress, this.web3.utils.toWei(amount, 'ether'))
        .send({ from: senderAddress, gas: gasEstimate })
        .on('receipt', (receipt: any) => {
          console.log('Transaction successful', receipt);
        })
        .on('error', (error: any) => {
          console.error('Transaction failed', error);
        });
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  }

}
