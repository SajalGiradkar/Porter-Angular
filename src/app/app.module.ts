import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { TopInfoComponent } from './Components/top-info/top-info.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TrackComponent } from './Components/track/track.component';
import { ContactComponent } from './Components/contact/contact.component';
import { Booking1Component } from './Components/booking1/booking1.component';
import { Booking2Component } from './Components/booking2/booking2.component';
import { LastDivComponent } from './Components/last-div/last-div.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    TopInfoComponent,
    FooterComponent,
    TrackComponent,
    ContactComponent,
    Booking1Component,
    Booking2Component,
    LastDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
