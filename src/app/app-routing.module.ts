import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { YodaComponent } from './components/yoda/yoda.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

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
    component: DeveloperComponent
  },
  {
    path: 'yoda',
    component: YodaComponent
  },
  {
    path: 'CocktailList',
    component: CocktailListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
