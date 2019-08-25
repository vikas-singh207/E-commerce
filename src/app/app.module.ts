import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from '../components/navbar/navbar.component';

//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from '../components/home/home.component';

/*const adminRoutes: Routes = [
  {path:'', component:HomeComponent}
];
*/
//,RouterModule.forRoot(adminRoutes)],
@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent,NavbarComponent ,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
