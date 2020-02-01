import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import {Routes,RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path :'',
    component : AuthenticateComponent,
  },
  {
    path :'login',
    component : AuthenticateComponent,
  }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
 
})
export class AppRotingModule { }
