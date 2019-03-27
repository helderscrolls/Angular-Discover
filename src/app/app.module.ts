import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighLightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SignUpComponent,
    UserProfileComponent,
    HighLightDirective,
    DisplayGuestsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
