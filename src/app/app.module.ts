import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import{FormsModule} from '@angular/forms'
import{EmployeeModule} from './employee/employee.module'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutChannelComponent } from './about-channel/about-channel.component';
import { SignupComponent } from './employee/signup/signup.component';
import { LoginComponent } from './employee/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AboutCompanyComponent,
    AboutChannelComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
