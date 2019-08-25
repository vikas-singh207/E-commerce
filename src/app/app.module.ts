import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from '../components/navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {HomeComponent} from '../components/home/home.component';
import {ShoppingcartComponent} from '../components/shoppingcart/shoppingcart.component';
import {LoginComponent} from '../components/login/login.component';
import {SignupComponent} from '../components/signup/signup.component';

const adminRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component: ShoppingcartComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

//,RouterModule.forRoot(adminRoutes)],
@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbModule,RouterModule.forRoot(adminRoutes),FontAwesomeModule],
  declarations: [ AppComponent,NavbarComponent ,HomeComponent,ShoppingcartComponent,LoginComponent,SignupComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
