import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
//import { HeaderComponent } from './header/header.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
// Defini les routes
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ]
  })
export class AppRoutingModule { }
