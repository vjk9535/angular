import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AppRotingModule } from './app-roting.module';
import { Logserve } from './service/logserve';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRotingModule
    
  ],
  providers: [Logserve],
  bootstrap: [AppComponent]
})
export class AppModule { }
