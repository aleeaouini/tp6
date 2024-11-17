import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
//import { FaceSnap } from './models/face-snap.model';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
//import { FaceSnapsService } from './services/snaps.service';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FaceSnapDSI22Component,NgFor,HeaderComponent,FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'tp2';


}

