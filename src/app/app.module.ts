
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './services/user-service.service';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HighlightDirective,
    DisplayMoviesDirective,
    MenuComponent,
    SearchMovieComponent,
    UsersPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    MoviesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }