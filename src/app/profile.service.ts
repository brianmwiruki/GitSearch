import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private client_id = '1e2b690c1df35dde0d5c';
  private client_secret = 'c7cc0883a79961a9feac5f2352336637b40344d9';

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
