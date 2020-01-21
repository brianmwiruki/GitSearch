import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private client_id = 'c50bc645307b51920c15';
  private client_secret = '7cb623899d68d30a996749cec14ad4d7b45ea195';

  constructor(private http:HttpClient) {

    console.log("Service Initiated Successfully");
    this.username = "Bryan4real";
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
    .pipe(map(res => res));
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
    .pipe(map(res => res));
  }
  updateProfile(username:string){
    this.username = username;
  }
}
