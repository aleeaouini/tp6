import { Component,Input, OnInit } from '@angular/core'; 
import { FaceSnap } from '../models/face-snap.model';
import { NgFor } from '@angular/common';
import { FaceSnapsService } from '../services/Face-snaps.service';
import { FaceSnapDSI22Component } from '../face-snap-dsi22/face-snap-dsi22.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [NgFor,FaceSnapDSI22Component,HeaderComponent,CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService) { 
  }
  faceSnaps: FaceSnap[] = [];
  ngOnInit():void{
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
