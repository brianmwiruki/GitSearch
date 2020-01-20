import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  ProfileService: any;

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfileInfo().subscribe(profile => {
      // console.log(profile);
      this.profile = this.profile;
    });
  }

  ngOnInit() {
  }

}
