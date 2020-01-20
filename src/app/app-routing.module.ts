import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {path: "", component:ProfileComponent},
  {path: "userpage", component:UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
