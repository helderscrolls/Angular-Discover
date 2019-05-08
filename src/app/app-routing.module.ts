import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MyFormComponent } from './components/my-form/my-form.component';
const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: 'user',
    component: UserProfileComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path:'movies',
    component: SearchMovieComponent
  },
  {
    path: 'my-form',
    component: MyFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
