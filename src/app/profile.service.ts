import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private username: string;
  private clientId = '1e2b690c1df35dde0d5c';
  private clientSecret = '39ac91d43d6bc58c8b6c743603d99dce3ab23d43';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'Bryan4real';
  } 
   
   getProfileInfo(){
     return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '?client_secret=' +this.clientSecret)
     .map(res => res.json());
   }
}

