import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
import { FaceSnapsService } from './services/Face-snaps.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FaceSnapListComponent,
    FaceSnapDSI22Component
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
