import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'home-page'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-edit/:id', component: UpdateUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
