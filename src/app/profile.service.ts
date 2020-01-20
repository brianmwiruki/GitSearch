import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  private username: string;
  private clientId = '1e2b690c1df35dde0d5c';
  private clientSecret = 'c7cc0883a79961a9feac5f2352336637b40344d9';

  constructor(private _http: HttpClient) {
    // console.log('service is now ready');
    this.username = 'Bryan4real';
  } 
   
   getProfileInfo(){
     return this._http
     .get('https://api.github.com/users/' + 
     this.username + '/repos?client_id=' + 
     this.clientId + '&client_secret=' +
      this.clientSecret);
   }
   getRepos() {
    return this._http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "/repos?client_id=" +
          this.clientId +
          "&client_secret=" +
          this.clientSecret
      )
  }
  updateUsername(username: string) {
    this.username = username;
  }
}

