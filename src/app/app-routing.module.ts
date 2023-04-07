import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { Booking1Component } from './Components/booking1/booking1.component';
import { Booking2Component } from './Components/booking2/booking2.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { TrackComponent } from './Components/track/track.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'track',
    component: TrackComponent
  },
  {
    path: 'booking1',
    component: Booking1Component
  },
  {
    path: 'booking2',
    component: Booking2Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
