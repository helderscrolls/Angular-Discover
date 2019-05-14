import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { DeveloperComponentComponent } from './components/developer-component/developer-component.component';

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
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'cv',
    component: DeveloperComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
