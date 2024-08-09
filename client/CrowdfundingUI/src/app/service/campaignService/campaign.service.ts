import { Injectable } from '@angular/core';
import { Environment } from '../../env/environment';
import { Campaign } from '../../model/campaign.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  jwtHelper = new JwtHelperService ();

  constructor( private http:HttpClient) { }

  apiUrl: string=Environment.apiUrl;

  getAll():Observable<Campaign[]>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    });
    console.log('headers',headers)
    return this.http.get<Campaign[]>(this.apiUrl + 'campaign/getAll',{headers});
  }

  create(campaign:Campaign):Observable<Campaign>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    });
    return this.http.post<Campaign>(this.apiUrl + 'campaign/createCampaign',campaign,{headers});
  }

  updateAmount(amount:number,id:number){
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    });
    return this.http.put(this.apiUrl + 'campaign/updateAmount' + '/'+amount,id,{headers});
  }
}
