import { Injectable } from '@angular/core';
import { Environment } from '../env/environment';
import { Campaign } from '../model/campaign.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor( private http:HttpClient) { }

  apiUrl: string=Environment.apiUrl;

  getAll():Observable<Campaign[]>{
    return this.http.get<Campaign[]>(this.apiUrl + 'campaign/getAll');
  }

  create(campaign:Campaign):Observable<Campaign>{
    return this.http.post<Campaign>(this.apiUrl + 'campaign/createCampaign',campaign);
  }

  updateAmount(amount:number,id:number){
    return this.http.put(this.apiUrl + 'campaign/updateAmount' + '/'+amount,id);
  }
}
