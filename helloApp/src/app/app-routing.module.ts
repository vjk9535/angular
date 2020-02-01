import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path :'',
    component : LoginComponent,
  },
  {
    path :'login',
    component : LoginComponent,
  },
  {
    path :'home',
    component : HomeComponent,
  },
  {
    path :'sign-up',
    component : SignUpComponent,
  }
    
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
 
})
export class AppRoutingModule { 
  
}
