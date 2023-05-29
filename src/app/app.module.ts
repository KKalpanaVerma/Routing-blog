import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutChannelComponent } from './about-channel/about-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    AboutCompanyComponent,
    AboutChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
