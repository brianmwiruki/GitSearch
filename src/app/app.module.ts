import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service'
import { FormsModule }from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DatecountPipe } from './datecount.pipe';
import { UserpageComponent } from './userpage/userpage.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    DatecountPipe,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
